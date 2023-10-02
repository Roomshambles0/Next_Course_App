"use client";

import { useSetRecoilState } from "recoil";
import { adminState } from "@/lib/store/atoms/admin";
import axios from "axios";
import { useEffect } from "react";


export default function InitAdmin() {
    const setAdmin = useSetRecoilState(adminState);
    const init = async() => {
        try {
            const response = await axios.get(`http://localhost:3001/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if (response.data.username) {
                setAdmin({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setAdmin({
                    isLoading: false,
                    userEmail: ""
                })
            }
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