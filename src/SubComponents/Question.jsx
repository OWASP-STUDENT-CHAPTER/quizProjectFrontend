import React from "react";

const Question = ({ question, options, selectedOption, onChange }) => {
	return (
		<div className="mb-4 overflow-hidden bg-white rounded-lg shadow-lg">
			<div className="p-4">
				<h3 className="mb-2 text-xl font-bold text-gray-800">
					{question}
				</h3>
				<div className="space-y-2">
					{options.map((option) => (
						<label
							key={option.id}
							className="inline-flex items-center"
						>
							<input
								type="radio"
								className="w-5 h-5 text-indigo-600 form-radio"
								value={option.id}
								checked={selectedOption === option.id}
								onChange={() => onChange(option.id)}
							/>
							<span className="ml-2 text-gray-700">
								{option.text}
							</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default Question;