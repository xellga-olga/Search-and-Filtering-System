import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Price</h2>
      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>All
        </label>
        <Input
          value={50}
          handleChange={handleChange}
          title="$0 - 50"
          name="price"
        />
        <Input
          value={100}
          handleChange={handleChange}
          title="$50 - 100"
          name="price"
        />
        <Input
          value={150}
          handleChange={handleChange}
          title="$100 - 150"
          name="price"
        />
        <Input
          value={200}
          handleChange={handleChange}
          title="Over $150"
          name="price"
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
export default Price;
