import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("Could not fetch the requested resource.");
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(false);
            });
    }, [url]);

    return {data, isPending, error};
};

export default useFetch;