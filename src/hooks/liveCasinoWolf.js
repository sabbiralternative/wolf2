import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import axios from "axios";

export const useLiveCasinoWolfQuery = (payload) => {
  return useQuery({
    queryKey: ["live-casino-wolf", payload],
    queryFn: async () => {
      const { data } = await axios.post(`${API.liveCasinoWolf}`, payload);
      return data;
    },
  });
};
