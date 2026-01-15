import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import axios from "axios";

export const useSlotWolfQuery = (payload) => {
  return useQuery({
    queryKey: ["slot-wolf", payload],
    queryFn: async () => {
      const { data } = await axios.post(`${API.slotsWolf}`, payload);
      return data;
    },
  });
};
