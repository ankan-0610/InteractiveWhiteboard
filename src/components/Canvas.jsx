import { useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

// Canvas component
const Canvas = ({ currTool, thickness }) => {
    // State to store the lines drawn on the canvas
    const [lines, setLines] = useState([]);

    // Ref to track whether the user is currently drawing
    const isDrawing = useRef(false);

    const [thickMap, setThickMap] = useState({});

    // Event handler for mouse down
    const handleMouseDown = (e) => {
        // Set isDrawing to true when the mouse button is pressed
        isDrawing.current = true;

        // Get the current mouse position
        const pos = e.target.getStage().getPointerPosition();

        // Add the starting point to the lines state
        setLines((prevLines) => [
        ...prevLines,
        { tool: currTool, points: [pos.x, pos.y] },
        ]);
    };

    // Event handler for mouse move
    const handleMouseMove = (e) => {
        // Base Case, if not drawing, do nothing
        if (!isDrawing.current) return;

        // Check if the left mouse button is pressed (event.buttons === 1)
        if (e.evt.buttons !== 1) {
        isDrawing.current = false;
        return;
        }

        // Get the current mouse position
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();

        // Update the last line in the lines state
        setLines((prevLines) => {
        const lastLine = prevLines[prevLines.length - 1];
        if (lastLine.tool === currTool) {
            const newPoints = lastLine.points.concat([point.x, point.y]);
            return [...prevLines.slice(0, prevLines.length - 1), { ...lastLine, points: newPoints }];
        }
        return prevLines;
        });
    };

    // Event handler for mouse up
    const handleMouseUp = () => {
        isDrawing.current = false;
        // Reset the thickness map
        setThickMap((prevThickMap) => ({ ...prevThickMap, [lines.length - 1]: currTool === 'pen' ? 5 : thickness }));
    };

    return (
        // React-Konva Stage component to create a drawing Stage
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            >
            {/*React-Konva Layer component to contain the drawing */}
            <Layer>
                {/*Mapping through lines and creating Line Components for each */}
                {lines.map((line, i) => (
                <Line
                    key={i}
                    points={line.points}
                    stroke="black"
                    strokeWidth={thickMap[i]||(line.tool === 'pen' ? 5 : thickness)} // Adjust thickness for eraser
                    tension={0.5}
                    cache
                    globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
                />
                ))}
            </Layer>
        </Stage>
    );
};

export default Canvas;
