import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Plans from './Modals/Plans';
import Warning from './Modals/Warning';
import SliderItem from './SliderItem';
const FirstSection = () => {
	const IMG_DELAY = 5000;
	const IMG_URLS = ['main-bg1', 'main-bg2', 'main-bg3', 'main-bg4', 'main-bg5'];
	const [imageNumber, setImageNumber] = useState(0);
	const [imageClass, setImageClass] = useState('');
	const [warningVisibility, setWarningVisibility] = useState(false);

	const [plansOpen, setPlansOpen] = useState(false);

	useEffect(() => {
		setWarningVisibility(true);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setTimeout(() => {
				setTimeout(() => {
					setImageClass('fade-in');
				}, 100);
				if (imageNumber >= IMG_URLS.length - 1) {
					setImageNumber(0);
				} else {
					setImageNumber(imageNumber => imageNumber + 1);
				}
			}, IMG_DELAY);
			setTimeout(() => {
				setImageClass('fade-out');
			}, IMG_DELAY - 700);
		}, 500);
	}, [imageNumber]);

	const closeWarning = () => setWarningVisibility(false);

	return (
		<>
			{plansOpen && <Plans setOpen={setPlansOpen} />}
			{warningVisibility && <Warning setOpen={setWarningVisibility} />}
			<div className=" relative " id="first-section">
				<div className="absolute h-[82%] lg:h-[78%] w-full top-0 bg-[#FFB71B]"></div>
				{imageNumber !== undefined && (
					<img
						src={`/png/${IMG_URLS[imageNumber]}.png`}
						className={`absolute bottom-[200px] right-0 sm:right-[15%]   xs:w-[80%] sm:w-auto xl:w-[32%]  ${imageClass}`}
						alt=""
					/>
				)}
				<img
					src="/svg/cloud-left.svg"
					className="hidden md:block absolute z-10 top-0 left-20"
				/>
				<img
					src="/svg/cloud-mid.svg"
					className="hidden md:block absolute top-0 left-[700px]"
				/>
				<img src="/svg/cloud-right.svg" className="absolute top-10 right-0" />
				<div className="ml-5 md:ml-10 pt-10 md:mb-0 mb-[250px] xs:mb-[370px] xl:mb-[100px]">
					{/* TOP PART */}
					<div className="flex items-center justify-between">
						{/* TEXTS */}
						<div className="mb-20 z-20 mt-20">
							<div className="text-[#724100] mb-8 text-[40px] md:text-[55px] font-bold leading-[50px]">
								Somos la prepaga <span className="md:block ">digital</span>
							</div>
							<div className="text-[#191B1E] text-[25px] md:text-[30px] leading-[30px] md:leading-[40px] font-semibold w-full md:w-1/2">
								Vos ahorrás y nosotros te brindamos un servicio con
								<span className=" font-black"> mayor calidad</span> y a
								<span className="font-black"> menor precio</span>
							</div>
						</div>

						{/* SOCIALS */}
						<div className="bg-[#191B1E] bg-opacity-50 rounded-l-lg py-5 px-4 flex flex-col space-y-4">
							<div className="cursor-pointer">
								<img src="/svg/whatsapp.svg" alt="" />
							</div>
							<div className="cursor-pointer">
								<img src="/svg/facebook.svg" alt="" />
							</div>
							<div className="cursor-pointer">
								<img src="/svg/instagram.svg" alt="" />
							</div>
							<div className="cursor-pointer">
								<img src="/svg/youtube.svg" alt="" />
							</div>
						</div>
					</div>
				</div>

				{/* SLIDER PART */}
				<div className="mx-10 md:mx-20">
					<Swiper
						modules={[Navigation, Pagination]}
						navigation
						pagination={{ clickable: true }}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 10,
								navigation: false,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							1440: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
						}}
					>
						<SwiperSlide>
							<SliderItem contentId={0} />
						</SwiperSlide>
						<SwiperSlide>
							<SliderItem setOpen={setPlansOpen} contentId={1} />
						</SwiperSlide>
						<SwiperSlide>
							<SliderItem contentId={2} />
						</SwiperSlide>
						<SwiperSlide>
							<SliderItem contentId={3} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default FirstSection;
