"use client";


import { coursesstate } from "../atoms/course";
import {selector} from "recoil";

export const isCourseLoading = selector({
  key: 'isCourseLoaingState',
  get: ({get}) => {
    const state = get(coursesstate);

    return state.isLoading;
  },
});

export const coursesDetails = selector({
  key: 'courseDetailsState',
  get: ({get}) => {
    const state = get(coursesstate);

    return state.courses;
  },
});