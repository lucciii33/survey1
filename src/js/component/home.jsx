import React from "react";
import { SurveyOne } from "../component/surveyDisplay/surveyone";

//create your first component
const Home = () => {
	return (
		<div>
			<main>
				<h1>Anxiety test</h1>
				<SurveyOne />
			</main>
		</div>
	);
};

export default Home;
