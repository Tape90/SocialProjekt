import { useState, useEffect } from "react";
import axios from "axios";

function useOffer () {

    const [offer, setOffer] = useState([]);

    const getOffer = async () => {
        try{
        const config = {
            url: "http://localhost:3001/api/getoffer",
            method: "get",
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const req = await axios(config);
        const offers = req.data;
        setOffer(offers);
        console.log(offers)
    }catch (error){
        console.log(error);
    }

    }

    useEffect(() => {
        getOffer();
    },[])


    return [offer, setOffer, getOffer];
}


export default useOffer;