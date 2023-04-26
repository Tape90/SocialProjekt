import { useState, useEffect } from "react";

function useOffer () {

    const [offer, setOffer] = useState([]);

    return [offer, setOffer];
}


export default useOffer;