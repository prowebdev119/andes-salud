import React, { useState } from 'react';
import Layout from './Layout';

const Plans: React.FC<{ setOpen: Function }> = ({ setOpen }) => {
	return (
		<Layout setOpen={setOpen}>
			<div className=" px-5">
				{/* TOP MENU */}
				<div className="flex items-center justify-between mb-3 md:mb-7">
					<div className="text-[#724100] md:text-3xl text-lg font-semibold">
						Queremos sumar salud a tu vida,{' '}
						<span className="md:block font-bold">es momento de decidir tu plan.</span>
					</div>
					<img className="hidden md:block md:h-[70px]" src="/svg/plans-logo.svg" alt="" />
				</div>
				{/* PLANS */}
				<div className="plans">
					{/* 1 */}
					<div className="plan-wrapper">
						<div className="plan-inner">
							{/* IMG */}
							<div>
								<img src={`/png/plan1.png`} alt="" />
							</div>
							{/* MENU */}
							<div className="plan-menu">
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura del 60% en farmacia.</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura del 100% en internaciones clínicas y quirúrgicas. (*2)
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Habitación individual / compartida en internación</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Sin coseguros ni carencias. (*)</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura en Anticonceptivos sin presentar receta.{' '}
										<span>(mayores de 18 años)</span>
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura en anteojos sin límite de edad.</div>
								</div>
							</div>

							<button className=" bg-[#FFB71B] mt-2 text-[#191B1E] py-2 mb-3 md:mb-5 font-semibold w-[90%] md:w-full  rounded-lg">
								Crear cuenta
							</button>
						</div>
					</div>

					{/* 2 */}
					<div className="plan-wrapper">
						<div className="plan-inner">
							{/* IMG */}
							<div>
								<img src={`/png/plan2.png`} alt="" />
							</div>
							{/* MENU */}
							<div className="plan-menu">
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura del 60% en farmacia.</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura del 100% en internaciones clínicas y quirúrgicas. (*2)
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Habitación individual / compartida en internación</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Sin coseguros ni carencias. (*)</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura en Anticonceptivos sin presentar receta.{' '}
										<span>(mayores de 18 años)</span>
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura en anteojos sin límite de edad.</div>
								</div>
							</div>
							<button className=" bg-[#FFB71B] mt-2 text-[#191B1E] py-2 mb-3 md:mb-5 font-semibold w-[90%] md:w-full  rounded-lg">
								Crear cuenta
							</button>
						</div>
					</div>

					{/* 3 */}
					<div className="plan-wrapper">
						<div className="plan-inner">
							{/* IMG */}
							<div>
								<img src={`/png/plan3.png`} alt="" />
							</div>
							{/* MENU */}
							<div className="plan-menu">
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura del 60% en farmacia.</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura del 100% en internaciones clínicas y quirúrgicas. (*2)
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Habitación individual / compartida en internación</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Sin coseguros ni carencias. (*)</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>
										Cobertura en Anticonceptivos sin presentar receta.{' '}
										<span>(mayores de 18 años)</span>
									</div>
								</div>
								<div className="plan-item">
									<img src="/svg/checkmark2.svg" alt="checkmark" />
									<div>Cobertura en anteojos sin límite de edad.</div>
								</div>
							</div>
							<button className=" bg-[#FFB71B] mt-2 text-[#191B1E] py-2 mb-3 md:mb-5 font-semibold w-[90%] md:w-full  rounded-lg">
								Crear cuenta
							</button>
						</div>
					</div>
				</div>
				<div className="text-xs text-gray-600 text-center">
					(*) Abono de coseguro sólo en salud mental. // (*1) Carencia. // (*2) Según
					Cartilla.
				</div>
			</div>
		</Layout>
	);
};

export default Plans;
