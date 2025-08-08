import React, { useState } from "react"

import data from "./data/coffees";

import Coffee from "./Coffee";
import ListTitle from "./ListTitle";

export default function ListCoffee() {
  const [coffees, setCoffees] = useState(data);

  return (
    <div>
      <ListTitle sid="coffee" data={data} setItems={setCoffees} />
      <div className="list">
        {coffees.map((coffee) => <Coffee key={coffee.pid} coffee={coffee} />)}
      </div>
    </div>
  )
}