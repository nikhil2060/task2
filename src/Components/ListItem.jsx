/* eslint-disable react/prop-types */
import React from "react";

function ListItem({ heading, content }) {
  return (
    <li>
      <span className="font-bold">{heading}: </span>
      {content}
    </li>
  );
}

export default ListItem;
