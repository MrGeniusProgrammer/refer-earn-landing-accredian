import logoSvg from "@/assets/logo.svg";
import { Button } from "./ui/button";

export function NavBar() {
	return (
		<>
			<div className="w-full px-[280px] py-2.5">
				<div className="flex min-h-[60px] max-w-[1360px] items-center justify-between py-2.5">
					<div className="flex items-center gap-8">
						<a href="https://home.accredian.com/">
							<img
								src={logoSvg}
								className="logo"
								alt="Accredian logo"
							/>
						</a>
						<Button>Contact</Button>
					</div>
					<div className="flex items-center gap-8">
						<span className="text-sm font-medium tracking-normal">
							Refer & Earn
						</span>
						<span className="text-sm font-medium tracking-normal">
							Resources
						</span>
						<span className="text-sm font-medium tracking-normal">
							About Us
						</span>
						<div className="flex items-center gap-4">
							<Button variant="secondary">Login</Button>
							<Button>Try For Free</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
