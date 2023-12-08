import React from "react";
import { Card, Chart, RightBar, Transactions } from "../ui/dashboard";

const Dashboard = () => {
  return (
    <div className="wrapper flex gap-5 mt-5">
      <div className="main flex flex-[3] flex-col gap-5">
        <div className="cards flex gap-3 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="rightBar flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
