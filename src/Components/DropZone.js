import React from "react";
import Box from "@mui/material/Box";
import { useDrag } from "react-dnd";

// Drag(isDragging) {
//     useDrag(() => ({
//         type: "dragImage",
//         collect: monitor => ({
//             isDragging: !!monitor.isDragging(),
//         }),
//     }))
// };

class DropZone extends React.Component {
  render() {
    return <Box className="App-dropZone" sx={{ width: 300, height: 70 }}></Box>;
  }
}

export default DropZone;
