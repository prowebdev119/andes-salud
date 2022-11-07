import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineX } from 'react-icons/hi';
const BurgerMenu: React.FC<{ setEmergencyOpen: Function; setLoginOpen: Function }> = ({
	setEmergencyOpen,
	setLoginOpen,
}) => {
	return (
		<Menu
			width={'75%'}
			customBurgerIcon={<GiHamburgerMenu className="fill-[#191B1E] !w-5 !h-5" />}
			customCrossIcon={<HiOutlineX />}
			className="w-9 h-9"
		>
			<img src="/gif/logo.gif" className="w-[67%] xl:w-auto logo" alt="" />

			<a id="home" className="menu-selected" href="#first-section">
				Cotizá online
			</a>
			<a id="about" href="#second-section">
				Gestiones
			</a>
			<a id="Our Solutions" href="#third-section">
				Doctor online
			</a>
			<a id="services" href="#fourth-section">
				Zona Bienestar
			</a>
			<a id="Our Clients" href="#fifth-section">
				Contacto
			</a>
			<div
				onClick={() => setEmergencyOpen(true)}
				className="bg-red-600 cursor-pointer !flex space-x-3 !text-white hover:bg-red-600"
			>
				<img src="/svg/ambulance.svg" className="w-6" alt="" />
				<a className="!flex !flex-row">Emergencias</a>
			</div>
			<div onClick={() => setLoginOpen(true)} className="!flex space-x-3 cursor-pointer">
				<img src="/svg/login-icon.svg" className="w-6" alt="" />
				<div className="!flex !flex-row">Ingresar</div>
			</div>
		</Menu>
	);
};

export default BurgerMenu;
