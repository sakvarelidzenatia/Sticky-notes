import React from "react";
import "./ColorPicker.css";

function ColorPicker({ onChangeColor, activeColor }) {
    const colors = [
        "yellow", "lightblue", "lightgreen", "lightpink", "lightcoral",
        "mistyrose", "orange", "orangered", "aqua", "darkcyan",
        "darksalmon", "skyblue", "gold"
    ];

    return (
        <div className="color-picker">
            {colors.map((color) => (
                <div
                    key={color}
                    className="color-swatch"
                    style={{ backgroundColor: color, position: 'relative' }}
                    onClick={() => onChangeColor(color)}
                >
                    {color === activeColor && (
                        <span className="check-mark">✓</span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ColorPicker;
