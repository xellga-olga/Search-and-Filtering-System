import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price title">Price</h2>
      <Input />
        <div className="line"></div>
    </div>
  );
}

export default Price;
