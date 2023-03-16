import { useSearchParams } from "react-router-dom";

export const useQuery = (query) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(query);
};
