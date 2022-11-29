import React from "react";
import { Outlet } from "react-router-dom";

const Public = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Outlet />
    </div>
  );
};

export default Public;
