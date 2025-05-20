import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Mahasiswa from "@/pages/Mahasiswa/Mahasiswa";
import MahasiswaList from "@/components/mahasiswa/MahasiswaList";
import MahasiswaEdit from "@/pages/Mahasiswa/MahasiswaEdit";
import MahasiswaCreate from "@/pages/Mahasiswa/MahasiswaCreate";
import MataKuliah from "@/pages/MataKuliah/MataKuliah";
import MataKuliahList from "@/components/matakuliah/MataKuliahList";
import MataKuliahCreate from "@/pages/MataKuliah/MataKuliahCreate";
import MataKuliahEdit from "@/pages/MataKuliah/MataKuliahEdit";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mahasiswa" element={<Mahasiswa />}>
            <Route index element={<MahasiswaList />} />
            <Route path="new" element={<MahasiswaCreate />} />
            <Route path=":nim/edit" element={<MahasiswaEdit />} />
          </Route>
          <Route path="/matakuliah" element={<MataKuliah />}>
            <Route index element={<MataKuliahList />} />
            <Route path="new" element={<MataKuliahCreate />} />
            <Route path=":kode/edit" element={<MataKuliahEdit />} />
          </Route>
        </Routes>
      </MainLayout>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </Router>
  );
}

export default App;
