//Aşağıdaki useAxios hook'unda gerekli 3 state'i tanımla ve bir obje içinde return et. - import'u unutma.

import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {


    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    useEffect((axios
        .get(url)
        .then(response => {
            setData(response.data);
            setError(null)
        })
        .catch(error => {
            console.log(error);
            setError(error);
            setData(null);
        }
        ).finally(() => { setLoading(false) })),
        [url])

};



useEffect(() => { }, [])