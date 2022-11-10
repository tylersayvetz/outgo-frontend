// Since there is no auth, no need to override axios.
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { API_URL } from "./config";
import { HomeData } from "./types";

export const fetchHomeData = async (responseKey: number): Promise<AxiosResponse<HomeData>> => {
    return axios.get(`${API_URL}/${responseKey}`);
};

// React Query pattern to make custom hook for handling data fetching and caching.
export const useHomeData = (responseKey: number) => {
    return useQuery<HomeData>(["home", responseKey], async () => {
        const data = await fetchHomeData(responseKey);
        return data.data;
    });
};
