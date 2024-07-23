import React, { useEffect } from "react";

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

	// useEffect(() => {
	// 	console.log(
	// 		id,
	// 		question,
	// 		option1,
	// 		option2,
	// 		option3,
	// 		option4,
	// 		selectedOption,
	// 		onChange
	// 	);
	// });

	return (
		<div className="mb-4 overflow-hidden bg-white rounded-lg shadow-lg">
			<div className="p-4">
				{/* <h1>{id}</h1> */}
				<h3 className="mb-2 text-xl font-bold text-gray-800">
					{question}
				</h3>

				<div className="space-y-2">
					<div className="">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option1}
							name={`${namePrefix}`}
							checked={selectedOption === option1}
							onChange={() => handleOptionChange(option1)}
						/>
						<span className="ml-2 text-gray-700">{option1}</span>
					</div>
					<div className="">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option2}
							name={`${namePrefix}`}
							checked={selectedOption === option2}
							onChange={() => handleOptionChange(option2)}
						/>
						<span className="ml-2 text-gray-700">{option2}</span>
					</div>
					<div className="">
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option3}
							name={`${namePrefix}`}
							checked={selectedOption === option3}
							onChange={() => handleOptionChange(option3)}
						/>
						<span className="ml-2 text-gray-700">{option3}</span>
					</div>
					<div className="">
						{" "}
						<input
							type="radio"
							className="w-5 h-5 text-indigo-600 form-radio"
							value={option4}
							name={`${namePrefix}`}
							checked={selectedOption === option4}
							onChange={() => handleOptionChange(option4)}
						/>
						<span className="ml-2 text-gray-700">{option4}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
