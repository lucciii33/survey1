import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../survey/questionsone";

export const Mysurvey = () => {
	return <Survey.Survey json={json} />;
};
