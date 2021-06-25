import React from "react";
import Completerender from "./Completerender";
export default function Complete({ com, setCom }) {
  const Deleting = (e) => {
    // console.log(e);
    setCom(
      com.filter((x) => {
        return x !== e;
      })
    );
    localStorage.setItem("com", JSON.stringify(com));
  };
  return (
    <div>
      <h1 className="text-center my-2">
        Your Completed Tasks
      </h1>
      {com.map((e) => {
        return <Completerender e={e} key={e.id} Deleting={Deleting} />;
      })}
    </div>
  );
}
