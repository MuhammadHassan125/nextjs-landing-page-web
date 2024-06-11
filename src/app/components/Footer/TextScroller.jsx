import React from 'react';
import "../../globals.css";


const TextScroller = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll ">
        <span className="inline-block">{text}</span>
      </div>
    </div>
  );
};

export default TextScroller;