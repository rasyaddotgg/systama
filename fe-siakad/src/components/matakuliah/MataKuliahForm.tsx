import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMataKuliah, updateMataKuliah } from "@/services/api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { MatakuliahType } from "@/types/matakuliah";

const initialForm: MatakuliahType = {
  kode: "",
  nama: "",
  sks: 1,
  semester: 1,
  jurusan: "",
};

interface MataKuliahFormProps {
  initialData?: MatakuliahType | null;
  isEdit?: boolean;
}

export default function MataKuliahForm({
  isEdit,
  initialData,
}: MataKuliahFormProps) {
  const [form, setForm] = useState<MatakuliahType>(initialForm);
  const [error, setError] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "sks" || name === "semester" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isEdit) {
        await updateMataKuliah(form.kode, form);
        toast.success("Data mata kuliah berhasil diperbarui");
      } else {
        await createMataKuliah(form);
        toast.success("Data mata kuliah berhasil ditambahkan");
      }
      navigate("/matakuliah");
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
      {error != null && !Array.isArray(error) ? (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <ul>
            <li className="text-sm">{error}</li>
          </ul>
        </div>
      ) : error != null && Array.isArray(error) ? (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <ul>
            {error.map((err) => (
              <li key={err} className="text-sm">
                {err}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">KODE</label>
          <input
            name="kode"
            type="text"
            value={form.kode}
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
          <label className="block text-sm font-medium mb-1">SKS</label>
          <input
            name="sks"
            type="number"
            min={1}
            max={8}
            value={form.sks}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Semester</label>
          <input
            name="semester"
            type="number"
            value={form.semester}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Jurusan</label>
          <input
            name="jurusan"
            type="text"
            value={form.jurusan}
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
            onClick={() => navigate("/matakuliah")}
            className="text-sm text-gray-500 hover:underline"
          >
            Batal / Kembali
          </button>
        </div>
      </form>
    </div>
  );
}
