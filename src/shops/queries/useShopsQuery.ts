import { useQuery } from "@tanstack/react-query";
import { Shop } from "../types";

export const useShopsQuery = () => {
  return useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/shops");
      const shopsResponse = (await response.json()) as { shops: Shop[] };

      return shopsResponse;
    },
  });
};
