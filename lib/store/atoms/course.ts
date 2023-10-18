"use client";
import {atom} from "recoil";


export const courseState = atom({
  key: 'courseState',
  default: {
    isLoading: true,
    course: {id:0,title:"",description:"",Price:"",imageLink:"",published:true, teacherId:0}
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