'use client'

import React, { useEffect } from "react";

import pages from "@/constants/pages";

const Root: React.FC = () => {
  useEffect(() => {
    window.location.href = pages.login;
  }, [])

  return (
    <></>
  );
}


export default Root