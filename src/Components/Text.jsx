import react from "react";
import Draggable from "react-draggable"
import { useRef, useState } from "react";

const Text = () => {
    const nodeRef = useRef(null);
    const [editMode, setEditMode] = useState(false)
    const [val,setVal] = useState("Double Click to Edit")
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="text-center">
                {editMode? (
                    <input onDoubleClick={(e) => setEditMode(false)}
                    value={val} 
                    onChange={(e) => setVal(e.target.value)}/>
                ):(
                <h1 onDoubleClick={(e) => setEditMode(true)} style={{fontFamily:"'Bangers', cursive", fontSize: "25px", color:"black"}}>{val}</h1>
                )}
            </div>
        </Draggable>
    )
}

export default Text