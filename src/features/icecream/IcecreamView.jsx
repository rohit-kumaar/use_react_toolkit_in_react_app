import React from "react";
import { useSelector } from "react-redux";

function IcecreamView() {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of Ice creams - {numOfIcecreams}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice creams</button>
    </div>
  );
}

export default IcecreamView;
