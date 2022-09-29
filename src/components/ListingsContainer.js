import React from "react";
import ListingCard from "./ListingCard";
import { useEffect, useState } from "react";

function ListingsContainer({items, onDeleteItem}) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return (
            <ListingCard 
              key = {item.id}
              item = {item}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
