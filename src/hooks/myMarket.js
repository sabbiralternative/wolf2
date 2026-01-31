import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useMyMarketQuery = () => {
  return useQuery({
    queryKey: ["myMarket"],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.myMarket);
      return data;
    },
  });
};
