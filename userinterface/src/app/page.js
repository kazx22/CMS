"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Components/dragble";
import { Droppable } from "./Components/dropaable";

export default function Home() {
  const allItems = Array.from({ length: 10 }, (_, i) => `dropitems-${i}`);

  const [availItems, setAvailItems] = useState(allItems);
  const [dropItems, setDropItems] = useState([]);

  function handleDragEnd({ active, over }) {
    if (!over) return;

    const itemId = active.id;
    const dest = over.id;

    if (dest === "droppable") {
      if (availItems.includes(itemId)) {
        setAvailItems((prev) => prev.filter((id) => id !== itemId));
        setDropItems((prev) => [...prev, itemId]);
      }
    } else if (dest === "available") {
      if (dropItems.includes(itemId)) {
        setDropItems((prev) => prev.filter((id) => id !== itemId));
        setAvailItems((prev) => [...prev, itemId]);
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Droppable id="available">
        <h2 className="text-xl font-semibold mb-4">Available Items</h2>
        <div className="flex gap-2 max-w-sm">
          {availItems.map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}
        </div>
      </Droppable>

      <Droppable id="droppable">
        <h2 className="text-xl font-semibold mb-4">Dropped Items</h2>
        <div className="flex flex-col gap-2 max-w-sm">
          {dropItems.map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}
        </div>
      </Droppable>
    </DndContext>
  );
}
