import React, { useState } from 'react';
import Layout from './Layout';

const Register: React.FC<{ setOpen: Function; setLoginOpen: Function }> = ({
	setOpen,
	setLoginOpen,
}) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<Layout setOpen={setOpen}>
			<div className="lg:w-[400px] px-5">
				<div className="text-[#FFB71B]  text-lg  md:text-2xl font-bold">Registrate</div>
				<div className="text-sm text-[#191B1E] mb-3 mt-2">N* de documento (*)</div>
				<form action="" className="text-[#191B1E]">
					<div className="login-form register-form">
						<input type="text" id="username" placeholder="32.198.765" />
					</div>
					{/* MIDDLE */}
					<div className="flex items-center space-x-3">
						<div className="login-form register-form w-1/4">
							<label htmlFor="username">Celular</label>
							<input type="text" id="username" placeholder="261" />
							<div className="text-xs ml-1 text-[#2A2F37] mt-[1px]">Sin el 0</div>
						</div>
						<div className="login-form register-form flex-grow">
							<label htmlFor="username">
								{' '}
								‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎
								‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎ ‏‏‎‏‏‎{' '}
							</label>
							<input type="text" id="username" placeholder="6543210" />
							<div className="text-xs ml-1 text-[#2A2F37] mt-[1px]">Sin el 15</div>
						</div>
					</div>
					{/* BOTTOM */}
					<div className="login-form register-form">
						<label htmlFor="username">Contraseña</label>
						<div className="relative">
							<input
								type={passwordVisible ? 'text' : 'password'}
								id="username"
								className="!pr-[45px]"
								placeholder="Ingresá tu contraseña"
							/>
							<img
								onClick={() => setPasswordVisible(passwordVisible => !passwordVisible)}
								src="/svg/password-eye.svg"
								className="absolute z-20 right-5 top-[25%]"
								alt=""
							/>
						</div>
					</div>

					<button className=" bg-[#FFB71B] mt-2 text-[#191B1E] w-full py-2 font-semibold rounded-lg">
						Crear cuenta
					</button>
				</form>
				<div className="mt-5 flex whitespace-nowrap flex-col xs:flex-row items-center justify-center text-sm font-[500]">
					¿Ya tenés tu cuenta?
					<span
						className="text-[#0F4F87] underline ml-1 cursor-pointer"
						onClick={() => {
							setLoginOpen(true);
							setOpen(false);
						}}
					>
						Ingresá ahora
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
