import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { BarGraph } from "react-d3-bar-graph";
import data from "../data";

const ShreddedWheat = () => {
  const style = useBreakpointValue({ base: true, md: false });
  let newData = data.sort((a, b) => (a.rating < b.rating ? 1 : -1))[0] as any

  newData = [
    {
      name: "Protein",
      amount: newData.protein,
    },
    {
      name: "Fat",
      amount: newData.fat,
    },
    {
      name: "Fiber",
      amount: newData.fiber,
    },
    {
      name: "Carbs",
      amount: newData.carbo,
    },
    {
      name: "Sugars",
      amount: newData.sugars,
    },
  ]
  // let newData = data
  //   .sort((a, b) => a.rating - b.rating)
  //   .reverse()
  //   .filter((_, index) => index < 5);
  return (
    <BarGraph
      width={"100%"}
      height={"100%"}
      yRange={20}
      xValue="name"
      yValue="amount"
      data={newData}
      ticks={5}
      axisStyles={{
        color: "black",
        "font-size": "14px",
        "font-family": "Courier New",
      }}
      title="Shredded Wheat Facts"
      titleStyles={{
        color: "black",
        fontSize: "40px",
        fontFamily: "Courier New",
      }}
      xAxisSlanted={style}
      colors={["#9F7AEA", "#0BC5EA", "#FFC107", "#00C853", "#FF9800"]}
    />
  );
};

export default ShreddedWheat;
