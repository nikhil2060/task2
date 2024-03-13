/* eslint-disable react/prop-types */
import React from "react";

function ListItem({ heading, content }) {
  return (
    <li className="lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem]">
      <span className="font-bold lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem]">
        {heading}:{" "}
      </span>
      {content}
    </li>
  );
}

export default ListItem;
