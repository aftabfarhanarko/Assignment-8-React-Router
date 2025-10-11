
import axios from "axios";

import { useEffect, useState } from "react";

const useProducts = () => {
    const [producat, setProducat] =useState([]);
    const [loding, setLoding] =useState(true);
    const [error, setError] = useState(null)

    useEffect (() => {
        setLoding(true);
        axios("./allapp.json")
         .then(data => setProducat(data.data))
         .catch(err => setError(err))
         .finally(() => setLoding(false))
    }, []);
    return {producat, loding, error}
};
export default useProducts;