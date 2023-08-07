// src/EngagementMessagesOverTime.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import DarkUnica from "highcharts/themes/dark-unica";

const EngagementMessagesOverTime = ({ messageCountList, channels }) => {
  DarkUnica(Highcharts);

  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
