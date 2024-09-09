import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="test" value="" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="running"
          title="Running"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="casual"
          title="Casual"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="skate"
          title="Skate"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="high-top"
          title="High-top"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="lifestyle"
          title="Lifestyle"
          name="test"
        />
         <Input
          handleChange={handleChange}
          value="boots"
          title="Boots"
          name="test"
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
export default Category;
