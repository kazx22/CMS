"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Components/dragble";
import { Droppable } from "./Components/dropaable";
import Card from "./Components/card";

export default function Home() {
  const initialItems = [
    {
      id: "card-1",
      type: "Card",
      props: { label: "Click Me-1" },
    },
    { id: "card-2", type: "Card", props: { label: "Click Me-2" } },
  ];

  const [availItems, setAvailItems] = useState(initialItems);
  const [dropItems, setDropItems] = useState([]);

  function handleDragEnd({ active, over }) {
    if (!over) return;

    const itemId = active.id;
    const destination = over.id;

    const item =
      availItems.find((i) => i.id === itemId) ||
      dropItems.find((i) => i.id === itemId);

    if (!item) return;

    const isAvailable = availItems.some((i) => i.id === itemId);
    const isDropped = dropItems.some((i) => i.id === itemId);

    if (destination === "droppable" && isAvailable) {
      setAvailItems((prev) => prev.filter((i) => i.id !== itemId));
      setDropItems((prev) => [...prev, item]);
    } else if (destination === "available" && isDropped) {
      setDropItems((prev) => prev.filter((i) => i.id !== itemId));
      setAvailItems((prev) => [...prev, item]);
    }
  }

  function renderComponent(item) {
    switch (item.type) {
      case "Card":
        return <Card {...item.props} />;

      default:
        return null;
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-10 p-8">
        <Droppable id="available">
          <h2 className="text-xl font-semibold mb-4">Available Items</h2>
          <div className="flex flex-col items-star gap-2 max-w-sm">
            {availItems.map((item) => (
              <Draggable key={item.id} id={item.id}>
                {renderComponent(item)}
              </Draggable>
            ))}
          </div>
        </Droppable>

        <Droppable id="droppable">
          <h2 className="text-xl font-semibold mb-4">Dropped Items</h2>
          <div className="flex flex-col items-star gap-2 max-w-sm">
            {dropItems.map((item) => (
              <Draggable key={item.id} id={item.id}>
                {renderComponent(item)}
              </Draggable>
            ))}
          </div>
        </Droppable>
      </div>
    </DndContext>
  );
}
