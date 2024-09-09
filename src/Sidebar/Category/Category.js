import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            name="category"
            value=""
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="running"
          title="Running"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="casual"
          title="Casual"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="skate"
          title="Skate"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="high-top"
          title="High-top"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="lifestyle"
          title="Lifestyle"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="boots"
          title="Boots"
          name="category"
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
export default Category;
