import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import type { Person } from "../types/person";

interface Props {
  data: Person[];
}

export default function PersonsTable({ data }: Props) {
  const columns: ColumnDef<Person>[] = [
    { header: "First Name", accessorKey: "firstname"},
    {header:"Last Name",accessorKey:"lastname"},
    { header: "Email", accessorKey: "email" },
    { header: "Gender", accessorKey: "gender" },
    { header: "Image", accessorFn: row => <img src={row.image} className="w-12 h-12 rounded-full" /> },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className=" border border-gray-300 rounded-lg shadow-md  ">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className="px-4 py-2 text-left border">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className="odd:bg-white even:bg-gray-50 text-center">
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="px-4 py-2 border">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
