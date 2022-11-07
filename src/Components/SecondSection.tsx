import React from 'react';
import SecondItem from './SecondItem';

const SecondSection = () => {
	return (
		<div className="relative">
			<div id="second-section" className="absolute -top-[170px]" />

			<div className="mt-10 flex flex-row-reverse lg:flex-row pl-5 lg:pl-0  lg:space-x-[200px] justify-center">
				{/* LEFT */}
				<div>
					<img
						src="/gif/second-phone.gif"
						className=" lg:w-auto w-[700px] -scale-x-100 mt-5"
						alt=""
					/>
				</div>
				{/* RIGHT */}
				<div className="flex-grow lg:w-1/3 mt-5">
					<div className="text-[#724100] text-2xl lg:text-4xl font-bold">
						Gestioná simple
					</div>
					<div className="text-[#2A2F37] my-7   text-xl lg:text-3xl">
						Con Andes Salud podés realizar todos tus trámites{' '}
						<span className="font-semibold"> 100% ONLINE </span>
						desde tu celu.
					</div>
					{/* MENU */}
					<div>
						<div className="flex items-center flex-wrap space-y-5 ">
							<SecondItem contentImage="second1" title="Sacá turnos" />
							<SecondItem contentImage="second2" title="Obtené autorizaciones" />
							<SecondItem contentImage="second3" title="Descargá tu credencial" />
							<SecondItem contentImage="second4" title="Agregá un familiar" />
							<SecondItem contentImage="second5" title="Pagá tu factura" />
							<SecondItem contentImage="second6" title="Consultá la cartilla" />
						</div>
					</div>
					{/* BUTTON */}
					<button className="mt-10 mb-5  lg:mt-[60px] button-hover bg-[#FFB71B] py-2 px-6 rounded-lg font-semibold text-[#191B1E]">
						INICIAR GESTIÓN
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
