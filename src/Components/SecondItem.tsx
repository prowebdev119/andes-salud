import React from 'react';

const SecondItem: React.FC<{ contentImage: string; title: string }> = ({
	contentImage,
	title,
}) => {
	return (
		<div className="flex items-center space-x-4 w-full lg:w-1/2">
			<div className="font-semibold">{title}</div>
		</div>
	);
};

export default SecondItem;
