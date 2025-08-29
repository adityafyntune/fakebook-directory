import { useQuery } from "@tanstack/react-query";
import httpClient from "../api/httpClient";
import type { Person } from "../types/person";
import { URLS } from "../URLS";

const fetchPersons = async (): Promise<Person[]> => {
  const { data } = await httpClient.get(URLS.PERSONS_QUANTITY);
  return data.data;
};

export const usePersons = () => {
  return useQuery({
    queryKey: ["persons"],
    queryFn: fetchPersons,
  });
};
