import { usePersons } from "../hooks/usePersons";
import PersonsTable from "../components/PersonsTable";

export default function PersonsPage() {
  const { data, isLoading, isError } = usePersons();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching data</p>;

  return (
 <div className="max-m-full  p-4 border border-black rounded-lg shadow-sm bg-white mx-70">
  <h1 className="text-2xl font-bold mb-5 text-center border-b pb-3">
    Persons Dump
  </h1>
  {data && <PersonsTable data={data} />}
</div>
  )
}









