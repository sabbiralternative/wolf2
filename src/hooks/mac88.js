import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useMac88Query = (payload) => {
  return useQuery({
    queryKey: ["mac88", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(`${API.mac88}`, payload);
      return data;
    },
  });
};
