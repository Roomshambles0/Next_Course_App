"use client";

import {atom} from "recoil";

export const adminState = atom({
  key: 'adminState',
  default: {
    isLoading: true,
    userEmail: ""
  },
});