import React from "react";

export default function Components() {
  const returnText = React.createElement(
    "div",
    { className: "card bg-neutral text-neutral-content shadow-xl" },
    React.createElement(
      "div",
      { className: "card-body" },
      React.createElement("h2", { className: "card-title" }, "Components")
    )
  );

  console.log(returnText);

  return returnText;
}
