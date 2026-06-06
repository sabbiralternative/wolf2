import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useDepositBreakdownQuery = (payload) => {
  return useQuery({
    queryKey: ["deposit-breakdown"],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(
        `${API.depositBreakdown}`,
        payload,
      );

      if (data.success) {
        return data.result;
      }
    },
  });
};
