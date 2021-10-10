import React from "react";
import Chart from "react-google-charts";
import { CircularProgress } from "@mui/material";

export default function LineChart({ lineData }) {
	return (
		<Chart
			width={"400px"}
			height={"200px"}
			style={{ marginLeft: "20px" }}
			chartType="Line"
			loader={
				<div
					style={{
						width: "400px",
						height: "200px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CircularProgress />
				</div>
			}
			data={lineData}
			options={{
				legend: { position: "none" },
				colors: ["green", "#f23534"],
				axes: {
					y: {
						0: { side: "right" },
					},
				},
				series: {
					0: { curveType: "function" },
					1: { curveType: "function" },
				},
				animation: {
					startup: true,
					easing: "linear",
					duration: 1500,
				},
			}}
			chartEvents={[
				{
					eventName: "animationfinish",
					callback: () => {
						console.log("Animation Finished");
					},
				},
			]}
			rootProps={{ "data-testid": "3" }}
		/>
	);
}
