import React from 'react';

const ThirdListItem: React.FC<{ contentText: string }> = ({ contentText }) => {
	return (
		<div className="flex space-x-5">
			<div>
				<img src="/svg/checkmark.svg" alt="" />
			</div>
			<div>{contentText}</div>
		</div>
	);
};

export default ThirdListItem;
