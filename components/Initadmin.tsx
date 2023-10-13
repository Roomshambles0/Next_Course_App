"use client";

import { useSetRecoilState } from "recoil";
import { adminState } from "@/lib/store/atoms/admin";
import axios from "axios";
import { useEffect } from "react";


export default function InitAdmin() {
    const setAdmin = useSetRecoilState(adminState);
    const init = () => {
        try {
            axios.get(`/api/Session/admin`).then((response)=>{
                return setAdmin({
                    isLoading: false,
                    userEmail: response.data.email
                })
            })
        } catch (e) {
  
            setAdmin({
                isLoading: false,
                userEmail: ""
            })
        }
    };
  
    useEffect(() => {
        init();
    }, []);
  
    return <></>
  }