import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import type { ColumnDef, SortingState } from "@tanstack/react-table";
import type { Person } from "../types/person";
import { useState } from "react";

interface Props {
  data: Person[];
}

export default function PersonsTable({ data }: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Person>[] = [
    {
      header: "Name",
      accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    },
    { header: "Email", accessorKey: "email" },
    { header: "Gender", accessorKey: "gender" },
    {
      header: "Image",
      accessorFn: (row) => (
        <img
          src={row.image}
          alt={"sorry"}
          className="w-12 h-12 rounded-full mx-auto"
        />
      ),
      enableSorting: false, // sorting disable for image
    },
    { header: "Building No.", accessorFn: (row) => row.address.buildingNumber },
    { header: "Street", accessorFn: (row) => row.address.street },
    { header: "Street Name", accessorFn: (row) => row.address.streetName },
    { header: "City", accessorFn: (row) => row.address.city },
    { header: "Country", accessorFn: (row) => row.address.country },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // toggle sort by Name column only
  const toggleNameSort = () => {
    setSorting((prev) => {
      if (prev.length === 0) {
        return [{ id: table.getAllLeafColumns()[0].id, desc: false }];
      }
      if (prev[0].desc === false) {
        return [{ id: table.getAllLeafColumns()[0].id, desc: true }]; // sort DESC
      }
      return []; // remove sorting
    });
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleNameSort}
        className="mb-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Sorting
      </button>

      <table className=" border border-gray-300 rounded-lg shadow-md w-full">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left border font-semibold"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-white even:bg-gray-50 text-center"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
