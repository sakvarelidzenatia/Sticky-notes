import React, { useState } from "react";
import { Rnd } from "react-rnd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Note.css";
import Menu from "../Menu/Menu";
import close from "../Icons/close.png"
import menu from "../Icons/menu.png"
import plus from "../Icons/plus.png"

function Note({ note, defaultText = "", defaultColor = "yellow", onAddNote, active, setActive, onRemoveNote, onAddArchivedNote }) {
    const [text, setText] = useState(defaultText);
    const [editorColor, setEditorColor] = useState(defaultColor);
    const [showColors, setShowColors] = useState(false);



    const TextChange = (value) => {
        setText(value);
    };

    const ColorChange = (color) => {
        setEditorColor(color);
        setShowColors(false);
    };

    const toggleColors = () => {
        setShowColors(!showColors);
    };

    const MouseDown = () => {
        setActive();
    };

    const DragStart = () => {
        setActive();
    };

    const Remove = () => {
        onRemoveNote();
    };

    const AddArchivedNote = () => {
        onAddArchivedNote();
    };

    return (
        <Rnd
            default={{
                x: note.x,
                y: note.y,
                width: 500,
                height: 500,
            }}
            minWidth={500}
            minHeight={500}
            bounds="parent"
            style={{
                backgroundColor: editorColor,
                display: 'flex',
                flexDirection: 'column',
                zIndex: active ? 100 : 'auto',
            }}
            dragHandleClassName="Header"
            onMouseDown={MouseDown}
            onDragStart={DragStart}
        >
            <div className="Header" style={{ backgroundColor: editorColor }}>
                <div className="plus" onClick={() => { onAddNote(); AddArchivedNote(); }}>
                    <abbr title="New Note"><img src={plus} alt="plus"/> </abbr>
                </div>
                <div className="options" onClick={toggleColors}>
                    <img src={menu} alt="menu" />
                </div>
                <div className="close" onClick={Remove}><img src={close} alt="close"/>
                </div>
            </div>

            <ReactQuill
                placeholder="Your Note Here..."
                value={text}
                onChange={TextChange}
                className={`editor ${editorColor}`}
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            />
            {showColors && (
                <div className="colors-picker">
                    <Menu onChangeColor={ColorChange} activeColor={editorColor} />
                </div>
            )}
        </Rnd>
    );
}

export default Note;
