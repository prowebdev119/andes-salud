import FirstSection from './Components/FirstSection';
import FourthSection from './Components/FourthSection';
import Header from './Components/Header';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FifthSection from './Components/FifthSection';
import SixthSection from './Components/SixthSection';
import Footer from './Components/Footer';

import 'swiper/css';
import 'swiper/css/navigation';

function App() {
	return (
		<div className="App scroll-smooth">
			<Header />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<Footer />
		</div>
	);
}

export default App;
