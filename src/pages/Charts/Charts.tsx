import React from "react";

import { Box, Container, Grid } from "@mui/material";
import {
	BoxTopCharts,
	BoxDisabilityPerCity,
	BoxBottomCharts,
	BoxDisabilitiesPerNeighborhood,
	BoxHiring,
} from "./Charts.styled";

import "./Charts.scss";

import pieChartHearingDisability from "./assets/pie-chart-hearing-disability.png";
import pieChartPhysicalDisability from "./assets/pie-chart-physical-disability.png";
import pieChartIntellectualDisability from "./assets/pie-chart-intellectual-disability.png";
import pieChartPsychosocialDisability from "./assets/pie-chart-psychosocial-disability.png";
import pieChartVisualDisability from "./assets/pie-chart-visual-disability.png";

import barChartHearingDisability from "./assets/bar-chart-hearing-disability.png";
import barChartPhysicalDisability from "./assets/bar-chart-physical-disability.png";
import barChartIntellectualDisability from "./assets/bar-chart-intellectual-disability.png";
import barChartPsychosocialDisability from "./assets/bar-chart-psychosocial-disability.png";
import barChartVisualDisability from "./assets/bar-chart-visual-disability.png";

import barChartMenHiring from "./assets/bar-chart-men-hiring.png";
import barChartWomenHiring from "./assets/bar-chart-women-hiring.png";

import mapChart from "./assets/map-chart.png";

const Charts = () => {
	const disabilitiesPerCity = [
		{
			name: "Auditiva",
			image: pieChartHearingDisability,
		},
		{
			name: "Física",
			image: pieChartPhysicalDisability,
		},
		{
			name: "Intelectual",
			image: pieChartIntellectualDisability,
		},
		{
			name: "Psicossocial",
			image: pieChartPsychosocialDisability,
		},
		{
			name: "Visual",
			image: pieChartVisualDisability,
		},
	];

	const disabilitiesPerNeighborhood = [
		barChartHearingDisability,
		barChartIntellectualDisability,
		barChartPhysicalDisability,
		barChartPsychosocialDisability,
		barChartVisualDisability,
	];

	return (
		<Box>
			<Container>
				<p className="title">Gráficos</p>

				<BoxTopCharts sx={{ flexGrow: 1 }}>
					<p className="big-text">Deficiências em Jaraguá do Sul</p>

					<Grid
						container
						direction="row"
						justifyContent="center"
						alignItems="center"
						spacing={4}
					>
						{disabilitiesPerCity.map((disability, index) => (
							<Grid key={index} item xs>
								<BoxDisabilityPerCity>
									<p className="text">{disability.name}</p>

									<img
										src={disability.image}
										alt="Gráfico de Pizza"
									/>
								</BoxDisabilityPerCity>
							</Grid>
						))}
					</Grid>
				</BoxTopCharts>

				<BoxBottomCharts>
					<BoxDisabilitiesPerNeighborhood>
						<p className="text">Centro</p>

						<Box>
							<Grid></Grid>
						</Box>
					</BoxDisabilitiesPerNeighborhood>

					<Box>
						<BoxHiring sx={{ marginBottom: "1rem" }}>
							<p className="text">Homens</p>

							<img
								src={barChartMenHiring}
								alt="Gráfico de Barras"
							/>
						</BoxHiring>

						<BoxHiring>
							<p className="text">Mulheres</p>

							<img
								src={barChartWomenHiring}
								alt="Gráfico de Barras"
							/>
						</BoxHiring>
					</Box>
				</BoxBottomCharts>
			</Container>
		</Box>
	);
};

export default Charts;
