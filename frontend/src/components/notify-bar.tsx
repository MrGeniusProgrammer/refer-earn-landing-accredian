import { Button } from "./ui/button";

export function NotifyBar() {
	return (
		<div className="bg-primary-100/70 flex w-full items-center justify-center py-4">
			<span>
				Navigate your ideal career path with tailored expert advice
			</span>
			<Button variant="link" size="lg" className="text-lg tracking-wider">
				Contact Expert
			</Button>
		</div>
	);
}
