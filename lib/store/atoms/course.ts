"use client";
import {atom} from "recoil";

export const courseState = atom({
  key: 'courseState',
  default: {
    isLoading: true,
    course: {title:"",description:"",price:"",imageLink:"",published:""}
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