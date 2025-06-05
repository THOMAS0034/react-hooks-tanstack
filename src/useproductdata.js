import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchdata = async () =>{
    const res= await axios.get('https://api.sampleapis.com/beers/ale')
    return res.data;
};

export const useProductData = () =>{
    return useQuery({
        queryKey:['products'],
        queryFn:fetchdata
});
};