import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Colors</h2>
      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
          color="white"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="gray"
          title="Gray"
          name="color"
          color="gray"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="wheat"
          title="Wheat"
          name="color"
          color="wheat"
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
export default Colors;
