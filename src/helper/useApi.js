import { useState, useEffect } from "react";
import axios from "axios";

function useApi(urls='') {
    const token =''

    const [requests, setRequest] = useState({
        baseURL: process.env.REACT_APP_BASEURL || urls,
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
    

    useEffect(()=>{
        setRequest({
            ...requests,
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }, [])

    return axios.create(requests)
}

export default useApi

