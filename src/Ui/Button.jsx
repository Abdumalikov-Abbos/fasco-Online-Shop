import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, onClick, disabled }) {
  return (
    <div className="flex items-center">
      <Link
        disabled={disabled}
        className="flex items-center text-white bg-black hover:bg-opacity-85 pr-16 pl-16 rounded-xl pt-4 pb-4"
        onClick={onClick}
        to={"/"}
      >
        {title}
      </Link>
    </div>
  );
}
