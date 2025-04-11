import React from "react";
import "./CalToAction.css";
function CallToAction({ text, url, target }) {
  return (
    <>
      <a className="btn" href={url} target={target} rel="noopener noreferrer">
        {text}
      </a>
    </>
  );
}

export default CallToAction;
