import dollarImage from "@/assets/dollar-image-celeberatory.png";
import landingPageImage from "@/assets/landing-image.png";
import { Button } from "./ui/button";

export function HeroSection() {
	return (
		<section className="max-w-screen w-full overflow-hidden px-8 xl:px-[280px]">
			<div className="flex flex-col items-center justify-center gap-8 py-8 xl:py-10">
				<div className="bg-primary-100/70 flex w-full max-w-[800px] items-center justify-evenly rounded-full py-2">
					<div
						data-active
						className="data-active:text-primary-700 after:bg-primary-700 data-active:opacity-100 relative py-1.5 text-2xl after:absolute after:bottom-0 after:left-2/4 after:size-1.5 after:-translate-x-2/4 after:rounded-full after:opacity-0"
					>
						Refer
					</div>
					<div className="data-active:text-primary-700 after:bg-primary-700 data-active:opacity-100 relative py-1.5 text-2xl after:absolute after:bottom-0 after:left-2/4 after:size-1.5 after:-translate-x-2/4 after:rounded-full after:opacity-0">
						Benefits
					</div>
					<div className="data-active:text-primary-700 after:bg-primary-700 data-active:opacity-100 relative py-1.5 text-2xl after:absolute after:bottom-0 after:left-2/4 after:size-1.5 after:-translate-x-2/4 after:rounded-full after:opacity-0">
						FAQs
					</div>
					<div className="data-active:text-primary-700 after:bg-primary-700 data-active:opacity-100 relative py-1.5 text-2xl after:absolute after:bottom-0 after:left-2/4 after:size-1.5 after:-translate-x-2/4 after:rounded-full after:opacity-0">
						Support
					</div>
				</div>

				<div className="bg-primary-50 rounded-4xl relative flex w-full max-w-[1360px] items-center overflow-hidden px-12 shadow-lg">
					<img
						src={dollarImage}
						className="absolute left-[55%] top-12 -translate-x-2/4 -translate-y-1/4 -rotate-90"
						alt=""
					></img>
					<img
						src={dollarImage}
						className="rotate-z-180 absolute right-0 top-2/4 -translate-y-1/4"
						alt=""
					></img>
					<img
						src={dollarImage}
						className="rotate-250 absolute right-0 top-0 -translate-y-1/4"
						alt=""
					></img>
					<img
						src={dollarImage}
						className="absolute left-0 top-0 -translate-y-1/4 rotate-180"
						alt=""
					></img>
					<div className="max-w-lg">
						<h1 className="leading-24 mb-10 text-[80px] font-extrabold">
							Let’s Learn & Earn
						</h1>
						<p className="leading-16 mb-16 max-w-[28rem] text-5xl tracking-tight">
							Get a chance to win up-to{" "}
							<span className="text-primary font-bold">
								Rs. 15,000
							</span>
						</p>
						<Button size="xl">Refer Now</Button>
					</div>
					<img
						src={landingPageImage}
						className="translate-y-10"
						alt=""
					></img>

					<img
						src={dollarImage}
						className="absolute bottom-[5%] left-2/4 -translate-x-2/4"
						alt=""
					></img>
				</div>
			</div>
		</section>
	);
}
