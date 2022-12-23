import React from 'react';

const FourthItem: React.FC<{
	backgroundImage: string;
	contentImage: string;
	contentTitle: string;
}> = ({ backgroundImage, contentImage, contentTitle }) => {
	return (
		<div className="relative shadow-lg  h-[210px]">
			<img
				src={`/png/${backgroundImage}.png`}
				className="absolute -z-10 w-full  h-full rounded-xl"
				alt=""
			/>
			<div className="w-full h-full flex flex-col items-center justify-center space-y-6 text-white font-semibold text-xl absolute z-10 top-0">
				<div>
					<img src={`/svg/${contentImage}.svg`} alt="" />
				</div>
				<div>{contentTitle}</div>
			</div>
		</div>
	);
};

export default FourthItem;
