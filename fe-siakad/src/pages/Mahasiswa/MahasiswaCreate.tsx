import MahasiswaForm from "@/components/mahasiswa/MahasiswaForm";

export default function MahasiswaCreate() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">Create Mahasiswa</h1>
      <MahasiswaForm />
    </div>
  );
}
