/* eslint-disable react/prop-types */
import React from "react";

function ListItem({ heading, content }) {
  return (
    <li className="text-[1rem]">
      <span className="font-bold text-[1rem]">{heading}: </span>
      {content}
    </li>
  );
}

export default ListItem;
