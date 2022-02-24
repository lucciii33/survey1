export const json = {
	title: "Anxiety Test",
	description:
		"Uncontrollable and persistent anxiety that interferes with your daily life may indicate generalized anxiety disorder (GAD). Take this assessment to see if you have symptoms common in people with an anxiety disorder",
	pages: [
		{
			name: "page1",
			elements: [
				{
					type: "text",
					name: "question2",
					title: "Write your Name",
					isRequired: true,
				},
				{
					type: "radiogroup",
					name: "question3",
					title: " Do you worry about lots of different things?",
					isRequired: true,
					choices: [
						{
							value: "item1",
							text: " Never ",
						},
						{
							value: "item2",
							text: " Rarely  ",
						},
						{
							value: "item3",
							text: " Sometimes ",
						},
						{
							value: "item4",
							text: "Often ",
						},
						{
							value: "item5",
							text: "  Very often",
						},
					],
				},
				{
					type: "radiogroup",
					name: "question4",
					title: "Do you have trouble controlling your worries?",
					isRequired: true,
					choices: [
						{
							value: "item1",
							text: "Never  ",
						},
						{
							value: "item2",
							text: " Rarely",
						},
						{
							value: "item3",
							text: "  Sometimes ",
						},
						{
							value: "item4",
							text: "Often  ",
						},
						{
							value: "item5",
							text: "  Very often",
						},
					],
				},
				{
					type: "radiogroup",
					name: "question1",
					title: "Do you get irritable and/or easily annoyed when anxious?",
					isRequired: true,
					choices: [
						{
							value: "item1",
							text: "Never ",
						},
						{
							value: "item2",
							text: " Rarely  ",
						},
						{
							value: "item3",
							text: " Sometimes ",
						},
						{
							value: "item4",
							text: "  Often  ",
						},
						{
							value: "item5",
							text: " Very often",
						},
					],
				},
				{
					type: "radiogroup",
					name: "question5",
					title: "Does worry or anxiety make you feel fatigued or worn out?",
					isRequired: true,
					choices: [
						{
							value: "item1",
							text: "Never",
						},
						{
							value: "item2",
							text: "Rarely",
						},
						{
							value: "item3",
							text: "Sometimes",
						},
						{
							value: "item4",
							text: "Often",
						},
						{
							value: "item5",
							text: "Very often",
						},
					],
				},
				{
					type: "text",
					name: "question6",
					title: "Write 3 worse thoughts ",
					isRequired: true,
				},
				{
					type: "rating",
					name: "question7",
					title: "No matter what I do, I can't get my mind off my problems.",
					isRequired: true,
				},
				{
					type: "radiogroup",
					name: "question8",
					title: "Does worry or anxiety interfere with falling and/or staying asleep?",
					isRequired: true,
					choices: [
						{
							value: "item1",
							text: "Never",
						},
						{
							value: "item2",
							text: "Rarely",
						},
						{
							value: "item3",
							text: "Sometimes",
						},
						{
							value: "item4",
							text: "Often",
						},
						{
							value: "item5",
							text: "Very often",
						},
					],
				},
				{
					type: "paneldynamic",
					name: "question9",
					title: "Tell us about yourself",
				},
			],
		},
	],
};
