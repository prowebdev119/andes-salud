import React from 'react';

const CONTENTS = [
	{
		itemImg: '/svg/slider1.svg',
		title: 'COTIZÁ TU PLAN',
		description:
			'Obtené un plan a la medida de tus necesidades con nuestro cotizador online.',
	},
	{
		itemImg: '/svg/slider2.svg',
		title: 'CONOCÉ NUESTROS PLANES',
		description: 'Podés consultar las cartillas y todas las prestaciones de cada plan.',
	},
	{
		itemImg: '/svg/slider3.svg',
		title: 'MANUAL DE USO',
		description: 'Accedé de forma fácil y sencilla a cada uno de nuestros servicios.',
	},
	{
		itemImg: '/svg/slider4.svg',
		title: 'OBTENÉ TU ALTA',
		description: '¿Contrataste tu plan? Consultá acá cuando vas a obtener tu alta.',
	},
];

const SliderItem: React.FC<{ contentId: number; setOpen?: Function }> = ({
	contentId,
	setOpen,
}) => {
	const item = CONTENTS[contentId];

	return (
		<div
			onClick={() => setOpen && setOpen(true)}
			className=" bg-white h-[250px] lg:mb-2 shadow-lg  z-40 rounded-lg px-3 py-8 text-[#2A2F37]"
		>
			<div className="max-h-full flex flex-col items-center justify-center text-center space-y-2 md:space-y-4">
				<div>
					<img src={item.itemImg} alt="" />
				</div>
				<div className="text-lg md:text-xl font-bold">{item.title}</div>
				<div className="pb-2">{item.description}</div>
			</div>
		</div>
	);
};

export default SliderItem;
