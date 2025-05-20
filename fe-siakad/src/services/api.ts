import type { MahasiswaType } from "@/types/mahasiswa"; // sesuaikan path
import type { MatakuliahType } from "@/types/matakuliah";
import axios from "axios";

// Ganti URL base sesuai dengan lokasi backend kamu
export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// === MAHASISWA ENDPOINT ===

export const getMahasiswa = () => api.get<MahasiswaType[]>("/mahasiswa");

export const getMahasiswaByNim = (nim: string) =>
  api.get<MahasiswaType>(`/mahasiswa/${nim}`);

export const createMahasiswa = (data: MahasiswaType) =>
  api.post("/mahasiswa", data);

export const updateMahasiswa = (nim: string, data: MahasiswaType) =>
  api.put(`/mahasiswa/${nim}`, data);

export const deleteMahasiswa = (nim: string) => api.delete(`/mahasiswa/${nim}`);

// === MATA KULIAH ENDPOINT ===
export const getMataKuliah = () => api.get("/matakuliah");

export const getMataKuliahByKode = (kode: string) =>
  api.get(`/matakuliah/${kode}`);

export const createMataKuliah = (data: MatakuliahType) =>
  api.post("/matakuliah", data);

export const updateMataKuliah = (kode: string, data: MatakuliahType) =>
  api.patch(`/matakuliah/${kode}`, data);

export const deleteMataKuliah = (kode: string) =>
  api.delete(`/matakuliah/${kode}`);
