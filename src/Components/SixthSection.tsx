import React from 'react';

const SixthSection = () => {
	return (
		<div id="sixth-section">
			<div className="container px-5 lg:px-20 mx-auto pt-10 lg:pt-20 pb-10 flex flex-col lg:flex-row justify-between">
				{/* LEFT */}
				<div>
					<img src="/svg/sixth-img.svg" className="hidden lg:block" alt="" />
					<img src="/svg/sixth-img-mobile.svg" className="lg:hidden mb-5" alt="" />
				</div>
				{/* MIDDLE */}
				<div className="sixth-menu">
					<div className="sixth-title">Contactanos</div>
					<div className="sixth-item">
						<img src="/svg/whatsapp-yellow.svg" alt="" />
						<div className="sixth-item-title">(261) 3300622</div>
					</div>
					<div className="sixth-item">
						<img src="/svg/facebook-yellow.svg" alt="" />
						<div className="sixth-item-title">@andes.salud</div>
					</div>
					<div className="sixth-item">
						<img src="/svg/instagram-yellow.svg" alt="" />
						<div className="sixth-item-title">@andes.salud</div>
					</div>
				</div>
				{/* RIGHT */}
				<div className="sixth-menu">
					<div className="sixth-title">¿Dónde estamos?</div>
					<div className="sixth-item">
						<img src="/svg/location.svg" alt="" />
						<div className="sixth-item-title">Mendoza: Av. Colón 136, Ciudad</div>
					</div>
					<div className="sixth-item">
						<img src="/svg/location.svg" alt="" />
						<div className="sixth-item-title">San Juan: B. Mitre 325, Capital</div>
					</div>
					<div className="sixth-item">
						<img src="/svg/location.svg" alt="" />
						<div className="sixth-item-title">San Luis: Bolivar 956</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SixthSection;
