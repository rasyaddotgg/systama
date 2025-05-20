import type { MatakuliahType } from "@/types/matakuliah";
import { Pencil, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface MataKuliahRowProps {
  row: MatakuliahType;
  onDelete: (kode: string) => void;
}

export default function MataKuliahRow({ row, onDelete }: MataKuliahRowProps) {
  return (
    <tr key={row.kode} className="hover:bg-gray-50">
      <td className="px-4 py-2 border">{row.kode}</td>
      <td className="px-4 py-2 border">{row.nama}</td>
      <td className="px-4 py-2 border">{row.sks}</td>
      <td className="px-4 py-2 border">{row.semester}</td>
      <td className="px-4 py-2 border text-center">{row.jurusan}</td>
      <td className="px-4 py-2 border flex justify-center items-center gap-2">
        <Link
          to={`${row.kode}/edit`}
          className="bg-green-500 text-white rounded p-1"
        >
          <Pencil />
        </Link>
        <button
          className="bg-red-500 text-white rounded p-1"
          onClick={() => onDelete(row.kode)}
        >
          <Trash />
        </button>
      </td>
    </tr>
  );
}
