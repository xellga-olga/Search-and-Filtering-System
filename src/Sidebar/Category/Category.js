import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category() {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <Input />
        <div className="line"></div>
      </div>
    </div>
  );
}
export default Category;
