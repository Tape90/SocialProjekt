import { useState, useEffect } from "react";

function useRequest () {

    const [request, setRequest] = useState([]);

    return [request, setRequest];
}


export default useRequest;