import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { BarGraph } from "react-d3-bar-graph";
import data from "../data";

const Carbs = () => {
  const style = useBreakpointValue({ base: true, md: false });
  let newData = data
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .filter((_, index) => index < 5);
  return (
    <BarGraph
      width={"100%"}
      height={"100%"}
      yRange={30}
      xValue="name"
      yValue="carbo"
      data={newData}
      ticks={3}
      axisStyles={{
        color: "black",
        "font-size": "14px",
        "font-family": 'Courier New'
      }}
      title="Carbs Facts"
      titleStyles={{ color: "black", fontSize: "40px", fontFamily: 'Courier New' }}
      xAxisSlanted={style}
      colors={["#9F7AEA", "#0BC5EA", "#FFC107", "#00C853", "#FF9800"]}
    />
  );
};

export default Carbs;
