import { useState } from "react";
import type { JSX } from "react";

interface DataTableProps {
  data: any[];
  headers: string[];
  renderItem: (item: any) => JSX.Element;
  entity: string;
}

export default function DataTable({
  data,
  headers,
  renderItem,
  entity,
}: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              {headers.map((header) => (
                <th className="px-4 py-3 border" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {pageData.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center py-4 text-gray-500"
                >
                  Tidak ada data {entity}.
                </td>
              </tr>
            ) : (
              pageData.map((data) => renderItem(data))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
