import React from 'react';
const Layout: React.FC<{ setOpen: Function; children: any }> = ({
	children,
	setOpen,
}) => {
	return (
		<div className="fixed inset-0  z-50 flex items-center justify-center">
			<div
				className="absolute bg-black bg-opacity-50 z-40 inset-0 "
				onClick={() => setOpen(false)}
			/>
			<div className="bg-white max-w-7xl relative rounded p-5 m-5 z-50 ">
				<div
					onClick={() => setOpen(false)}
					className="absolute right-5 top-5 flex justify-end"
				>
					<img src="/svg/cross.svg" alt="" />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
