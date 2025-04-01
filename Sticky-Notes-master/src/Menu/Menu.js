import React from "react";
import "./Menu.css";
import ColorPicker from "../ColorPicker/ColorPicker";

function Menu({ onChangeColor, activeColor }) {
    return (
        <div className="menu">
            <ColorPicker onChangeColor={onChangeColor} activeColor={activeColor} />
        </div>
    );
}

export default Menu;
