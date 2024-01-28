import { useState } from "react";
import Canvas from "./Canvas";

const Whiteboard = () => {
    const [tool, setTool] = useState('pen');
    const [erThickness, setErThickness] = useState(10);

    const toggleTool = () => {
        setTool((prevTool) => {
            if (prevTool === 'pen') {
                prevTool = 'eraser'
            }
            else {
                prevTool = 'pen'
            }
            return prevTool
        })
    }

    const handleThicknessChange = (e) => {
        setErThickness(parseInt(e.target.value, 10));
    }

    return (
    <div>
        <h1>Interactive Whiteboard</h1>
        <button onClick={toggleTool}>
            {tool === 'pen' ? 'Switch to Eraser':'Switch to Pen'}
        </button>
        {tool === 'eraser' && (
            <div>
                <label>
                    Eraser Thickness:
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={erThickness}
                        onChange={handleThicknessChange}
                    />
                </label>
            </div>
        )}
        <Canvas currTool={tool} thickness={erThickness}/>
    </div>
    );
};

export default Whiteboard;