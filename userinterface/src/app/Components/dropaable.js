import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    border: "2px dashed gray",
    padding: "20px",
    minHeight: "100px",
    backgroundColor: isOver ? "#d3f9d8" : "#0000",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
