import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMahasiswa, updateMahasiswa } from "@/services/api";
import type { MahasiswaType } from "@/types/mahasiswa";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const initialForm: MahasiswaType = {
  nim: "",
  nama: "",
  prodi: "",
  angkatan: new Date().getFullYear(),
  email: "",
};

interface MahasiswaFormProps {
  initialData?: MahasiswaType | null;
  isEdit?: boolean;
}

export default function MahasiswaForm({
  isEdit,
  initialData,
}: MahasiswaFormProps) {
  const [form, setForm] = useState<MahasiswaType>(initialForm);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm(
      (prev) =>
        ({
          ...prev,
          [name]: name === "angkatan" ? parseInt(value) : value,
        } as MahasiswaType)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError([]);
    try {
      if (isEdit) {
        await updateMahasiswa(form.nim, form);
        toast.success("Data mahasiswa berhasil diperbarui");
      } else {
        await createMahasiswa(form);
        toast.success("Data mahasiswa berhasil ditambahkan");
      }
      navigate("/mahasiswa");
    } catch (err) {
      if (err instanceof AxiosError) {
        const response = err.response?.data;
        setError(response?.message);
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error.length > 0 && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <ul>
            {error.map((err, index) => (
              <li key={index} className="text-sm">
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">NIM</label>
          <input
            name="nim"
            type="text"
            value={form.nim}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Program Studi
          </label>
          <input
            name="prodi"
            type="text"
            value={form.prodi}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Angkatan</label>
          <input
            name="angkatan"
            type="number"
            value={form.angkatan}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="md:col-span-2 flex justify-between mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/mahasiswa")}
            className="text-sm text-gray-500 hover:underline"
          >
            Batal / Kembali
          </button>
        </div>
      </form>
    </div>
  );
}
