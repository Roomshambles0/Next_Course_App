"use client";

import { useSetRecoilState } from "recoil";
import { userState } from "@/lib/store/atoms/user";
import axios from "axios";
import { useEffect } from "react";


export default function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const response = await axios.get(`http://localhost:3001/user/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
  
            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: ""
                })
            }
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
  
  