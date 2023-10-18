"use client";
import {atom} from "recoil";
import { number } from "zod";

export const courseState = atom({
  key: 'courseState',
  default: {
    isLoading: true,
    course: {id:number,title:"",description:"",price:"",imageLink:"",published:true,teacherId:number}
  },
});


export const coursesstate = atom(
  {
    key: 'coursesState',
    default:{
      isLoading:true,
      courses:[]
    }
  }
)