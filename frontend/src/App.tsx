import { NavBar } from "./components/nav-bar";
import { NotifyBar } from "./components/notify-bar";

function App() {
	return (
		<>
			<div className="min-h-screen w-screen">
				<NotifyBar />
				<NavBar />
			</div>
		</>
	);
}

export default App;
