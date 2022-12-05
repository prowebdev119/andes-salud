const Footer = () => {
	return (
		<div className="bg-[#191B1E] py-5 text-xs  pl-5 lg:pl-10  text-white">
			<div className="flex relative ">
				<div className=" lg:tracking-wider w-[70%] ">
					<span className="underline"> Formulario de arrepentimiento</span>
				</div>

				<button className="bg-gray-100  p-3 lg:p-5 absolute right-4 lg:right-10 bottom-0 rounded-[50%] shadow-xl">
					<img className="" src="/svg/support.svg" alt="" />
				</button>
			</div>
		</div>
	);
};

export default Footer;
