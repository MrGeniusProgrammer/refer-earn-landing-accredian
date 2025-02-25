import { HeroSection } from "./components/hero-section";
import { NavBar } from "./components/nav-bar";
import { NotifyBar } from "./components/notify-bar";

function App() {
	return (
		<>
			<div className="min-h-screen w-screen overflow-x-hidden">
				<NotifyBar />
				<NavBar />
				<HeroSection />
			</div>
		</>
	);
}

export default App;
