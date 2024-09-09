import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price title">Price</h2>
      <label className="sideba-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>all
      </label>
      <Input
        value={50}
        handleChange={handleChange}
        title="$0 - 50"
        name="test2"
      />
      <Input
        value={100}
        handleChange={handleChange}
        title="$50 - 100"
        name="test2"
      />
      <Input
        value={150}
        handleChange={handleChange}
        title="$100 - 150"
        name="test2"
      />
      <Input
        value={200}
        handleChange={handleChange}
        title="Over $150"
        name="test2"
      />
      <div className="line"></div>
    </div>
  );
}

export default Price;
