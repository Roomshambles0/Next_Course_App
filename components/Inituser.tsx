"use client";

import { useSetRecoilState } from "recoil";
import { userState } from "@/lib/store/atoms/user";
import axios from "axios";
import { useEffect } from "react";


export default function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = () => {
        try {
            axios.get(`/api/Session/user`).then((response)=>{
                return setUser({
                    isLoading: false,
                    userEmail: response.data.email
                })
            })
        } catch (e) {
  
            setUser({
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
  
  