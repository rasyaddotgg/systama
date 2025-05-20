import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Mahasiswa from "@/pages/Mahasiswa/Mahasiswa";
import MahasiswaList from "@/components/mahasiswa/MahasiswaList";
import MahasiswaEdit from "@/pages/Mahasiswa/MahasiswaEdit";
import MahasiswaCreate from "@/pages/Mahasiswa/MahasiswaCreate";
import { Toaster } from "react-hot-toast";

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
