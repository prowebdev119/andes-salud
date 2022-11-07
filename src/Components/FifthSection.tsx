import React from 'react';

const FifthSection = () => {
	return (
		<div className="relative bg-gradient-to-tr from-[#49A9A9] lg:from-[#61D8C2] lg:to-[#00205C] to-[#00205C]">
			<div id="fifth-section" className="absolute -top-[150px]" />

			<div className=" mx-auto flex  lg:space-x-[100px]  pt-5 lg:pt-20 pb-10">
				{/* LEFT */}
				<div className="hidden lg:block xl:ml-[250px]">
					<img src="/svg/fifth-img.svg" className="h-[600px]" alt="" />
				</div>
				{/* RIGHT */}
				<div className="mt-3 lg:mt-20 w-full lg:w-auto px-2 ">
					<div className="flex w-full items-center justify-center">
						<div className="lg:hidden xl:ml-[250px]">
							<img src="/svg/fifth-img.svg" className="h-[200px]" alt="" />
						</div>
						<div>
							<div className="text-[#61D8C2] xl:text-[70px] text-5xl tracking-wide font-semibold">
								Hola, <span className="hidden lg:inline">¿WhatsAppeamos?</span>
							</div>
							<div className="font-bold lg:font-semibold xl:text-[100px] lg:-mt-7 mt-5  text-[48px] tracking-wide text-white">
								soy Pixi
							</div>
						</div>
					</div>
					<div className="font-semibold mt-10 tracking-wide text-xl text-center lg:text-left lg:text-4xl text-white">
						¡El asistente que soluciona todo!
					</div>
					<div className="text-3xl lg:hidden text-[#61D8C2] text-center font-semibold mt-5">
						¿WhatsAppeamos?
					</div>
					<button className="bg-[#61D8C2] mt-10 w-full lg:w-auto items-center justify-center lg:mt-20 text-[#00205C] font-[500] hover:bg-[#5ccab6] duration-300 transition-all text-xl flex space-x-2 py-2 px-6 rounded-lg">
						<img src="/svg/whatsapp2.svg" alt="" />
						<div>Chatear ahora</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FifthSection;
