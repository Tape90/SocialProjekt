import { useState, useEffect } from "react";
import axios from "axios";

function useRequest () {

    const [request, setRequest] = useState([]);

    const getRequest = async () => {
        const config = {
            url: "http://localhost:3001/api/getrequest",
            method: "get",
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const req = await axios(config);
        const requests = req.data;
        setRequest(requests);
    }

    useEffect(() => {
        getRequest();
    },[])


    return [request, setRequest, getRequest];
}


export default useRequest;