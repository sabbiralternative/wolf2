import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useDepositBreakdownQuery = () => {
  return useQuery({
    queryKey: ["deposit-breakdown"],
    queryFn: async (payload) => {
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
