import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <button onClick={() => dispatch(restocked(2))}>Restock Ice creams</button>
    </div>
  );
}

export default IcecreamView;
