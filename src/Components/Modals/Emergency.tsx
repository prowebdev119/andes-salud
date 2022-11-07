import React from 'react';
import Layout from './Layout';

const Emergency: React.FC<{ setOpen: Function }> = ({ setOpen }) => {
	return (
		<Layout setOpen={setOpen}>
			<div className="max-w-[400px]">
				<div className="text-[#E52E2E] text-lg md:text-4xl font-bold mb-1">
					Urgencias y Emergencias
				</div>
				<div className="text-[#191B1E] text-sm mb-2 mt-1">
					En caso de emergencias, comunicate a los siguientes números:
				</div>
				<div className="emergency-item">
					<div className="emergency-title">Mendoza</div>
					<div className="emergency-number">0810-333-9743</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">San Juan</div>
					<div className="emergency-number">264-631-3531</div>
				</div>
				<div className="emergency-item">
					<div className="emergency-title">San Luis</div>
					<div className="emergency-number">265-742-8786</div>
					<div className="emergency-number">266-443-5700</div>
				</div>
			</div>
		</Layout>
	);
};

export default Emergency;
