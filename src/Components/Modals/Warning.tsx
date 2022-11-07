import React from 'react';
import Layout from './Layout';

const Warning: React.FC<{ setOpen: Function }> = ({ setOpen }) => {
	return (
		<Layout setOpen={setOpen}>
			<div>
				<div className="text-[#FFB71B] text-lg w-[90%] md:text-2xl font-bold lg:mb-5">
					Nuevos valores en tu plan de salud
				</div>
				<div className="text-[#191B1E] text-sm md:text-base flex flex-col space-y-5 warning-inner">
					<div>
						De acuerdo a lo dispuesto por la Superintendencia de Servicios de Salud y el
						Ministerio de Salud de la Nación en la <span>Res. N° 1293/2022</span>, es que
						estaremos realizando un ajuste en los costos de nuestros planes del{' '}
						<span>11,34%</span> a partir de <span>Agosto 2022</span>.
					</div>
					<div>
						Tal medida posibilita el sostenimiento del servicio de Salud manteniendo la
						calidad del servicio, dado que como es de público conocimiento la estructura
						de costos relacionados con la Salud se ha visto impactada por variaciones
						importantes en los precios de medicamentos e insumos y aranceles
						profesionales. En Andes Salud sabemos que esta medida impacta en la economía
						de cada una de las familias que nos eligen, pero entendemos que es el camino
						que nos conduce al cuidado de la salud de nuestros afiliados con la mayor
						excelencia posible.
					</div>
					<div>
						Como siempre, ponemos a tu disposición nuestros canales virtuales de
						comunicación para poder ayudarte con las dudas que puedan surgir.
					</div>
					<span>Gerencia de Atención al Afiliado</span>
				</div>
			</div>
		</Layout>
	);
};

export default Warning;
