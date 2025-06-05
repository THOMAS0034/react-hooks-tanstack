import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePagination = (page) =>{
    return useQuery({
        queryKey:['product',page],
        queryFn: async () =>{
            const res = await axios.get('https://api.sampleapis.com/beers/ale')
            const pagesize=10;
            const start=(page -1) *pagesize;
            const end = start+pagesize;
            return res.data.slice(start,end)
        },
        keepPreviousData: true,
    });
};