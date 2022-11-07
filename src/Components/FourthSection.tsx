import { Swiper, SwiperSlide } from 'swiper/react';
import FourthItem from './FourthItem';

import { Navigation } from 'swiper';
import 'swiper/css/navigation';
const FourthSection = () => {
	return (
		<div className="relative h-full  w-full bg-[#FFEFD2] z-20 sm:bg-[#FFE4B4] items-center justify-center ">
			<div id="fourth-section" className="absolute -top-[150px]" />

			<img
				src="/svg/fourth-bg.svg"
				className="hidden sm:block absolute -z-10   bg-[#FFE4B4] !h-full !w-full"
				alt=""
			/>
			<img
				src="/svg/fourth-bg-mobile.svg"
				className="absolute sm:hidden top-0 -z-10   bg-[#FFEFD2] sm:bg-[#FFE4B4] w-full"
				alt=""
			/>
			{/* CONTENT */}
			<div className="pt-10 md:pt-20 container mx-auto justify-center flex flex-col items-center ">
				{/* TITLE */}
				<img className="w-3/4 md:w-1/3" src="/svg/fourth-title.svg" alt="" />
				{/* DESCRIPTION */}
				<div className="mt-7 font-bold text-xl md:text-2xl text-[#191B1E]">
					¡Prendete a nuestros posts!
				</div>
				{/* SLIDER */}
				<div className="w-3/4 mt-10 z-50">
					<Swiper
						modules={[Navigation]}
						navigation
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							1440: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
						}}
					>
						<SwiperSlide>
							<FourthItem
								backgroundImage="fourth-bg1"
								contentImage="fourth1"
								contentTitle="Prevención"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<FourthItem
								backgroundImage="fourth-bg2"
								contentImage="fourth2"
								contentTitle="Entrenamiento"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<FourthItem
								backgroundImage="fourth-bg3"
								contentImage="fourth3"
								contentTitle="Hábitos saludables"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				{/* BUTTON */}
				<button className="mt-[60px] hover:bg-gray-200 transition-all duration-300 focus:outline-none flex space-x-5 border-2 border-[#724100] rounded-lg bg-white mb-10 text-[#191B1E] py-2 font-semibold px-5">
					<img src="/svg/instagram2.svg" alt="" />
					<div>y Mucho más en instagram</div>
				</button>
			</div>
		</div>
	);
};

export default FourthSection;
