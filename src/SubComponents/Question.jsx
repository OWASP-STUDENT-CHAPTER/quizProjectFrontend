import "./Styles/Question.css";

import React from "react";

const Question = ({
	id,
	question,
	option1,
	option2,
	option3,
	option4,
	selectedOption,
	onChange,
}) => {
	const handleOptionChange = (selectedOption) => {
		onChange(selectedOption);
	};

	const namePrefix = `answer_${id}`;

	return (
		<div className="mb-4 overflow-hidden bg-white rounded-lg shadow-lg">
			<div className="p-6">
				<h3 className="mb-2 text-xl font-bold text-gray-800">
					{question}
				</h3>

				<div className="space-y-2">
					<div className="radio-input">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option1}
							name={`${namePrefix}`}
							id={`${namePrefix}-value-1`}
							checked={selectedOption === option1}
							onChange={() => handleOptionChange(option1)}
						/>
						<label
							className="ml-2 text-gray-700"
							for={`${namePrefix}-value-1`}
						>
							{option1}
						</label>
					</div>
					<div className="radio-input">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option2}
							name={`${namePrefix}`}
							id={`${namePrefix}-value-2`}
							checked={selectedOption === option2}
							onChange={() => handleOptionChange(option2)}
						/>
						<label
							className="ml-2 text-gray-700"
							for={`${namePrefix}-value-2`}
						>
							{option2}
						</label>
					</div>
					<div className="radio-input">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option3}
							name={`${namePrefix}`}
							id={`${namePrefix}-value-3`}
							checked={selectedOption === option3}
							onChange={() => handleOptionChange(option3)}
						/>
						<label
							className="ml-2 text-gray-700"
							for={`${namePrefix}-value-3`}
						>
							{option3}
						</label>
					</div>
					<div className="radio-input">
						{" "}
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option4}
							name={`${namePrefix}`}
							id={`${namePrefix}-value-4`}
							checked={selectedOption === option4}
							onChange={() => handleOptionChange(option4)}
						/>
						<label
							className="ml-2 text-gray-700"
							for={`${namePrefix}-value-4`}
						>
							{option4}
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;