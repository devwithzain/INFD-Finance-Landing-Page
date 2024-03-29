import { footerIcons } from "@constants";
import Link from "next/link";
import Image from "next/image";
import { call, car, hero, house } from "@public";
import { Magnetic, TextMask } from "@animation";
import Button from "./Button";

export default function Hero() {
	const phrases = ["Chase Your Dream with us"];
	const phrases1 = ["Chase", "Your Dream", " with us"];
	return (
		<div className="w-full">
			<div className="w-full min-h-[90svh] flex justify-center flex-col sm:gap-y-[40rem]">
				<h1 className="text-[#202020] uppercase tracking-wider text-[60rem] mb-[40rem] font-bold sm:text-[80rem] lg:block hidden">
					<TextMask>{phrases}</TextMask>
				</h1>
				<h1 className="text-[#202020] uppercase tracking-wider text-[60rem] mb-[40rem] font-bold block lg:hidden">
					<TextMask>{phrases1}</TextMask>
				</h1>
				<div className="w-full flex justify-between gap-[50rem] flex-col lg:flex-row">
					<div className="lg:w-[70%] w-full bg-[#ffeaf5] relative rounded-[30rem] h-full">
						<div className="w-full h-full flex items-center justify-center">
							<Image
								src={hero}
								alt="img"
								width={800}
								height={400}
								className="w-[70%] h-full object-cover"
							/>
						</div>
						<div className="bg-white px-[20rem] py-[20rem] h-[71rem] flex items-center gap-x-[20rem] absolute top-[50rem] left-[-35rem] shadow-lg rounded-[55rem]">
							<Image
								src={car}
								alt="img"
								width={30}
								height={30}
								className="w-[30rem] h-[30rem]"
							/>
							<p className="text-[18rem] text-[#343434] font-bold leading-[22rem]">
								Car Loans
							</p>
						</div>
						<div className="bg-white px-[20rem] py-[20rem] h-[71rem] flex items-center gap-x-[20rem] absolute bottom-[100rem] right-[-35rem] shadow-lg rounded-[55rem]">
							<Image
								src={house}
								alt="img"
								width={30}
								height={30}
								className="w-[30rem] h-[30rem]"
							/>
							<p className="text-[18rem] text-[#343434] font-bold leading-[22rem]">
								House Loans
							</p>
						</div>
					</div>
					<div className="w-full lg:w-[30%] h-full sm:gap-y-[40rem]">
						<div>
							<p className="text-[18rem] tracking-wider leading-[137%] text-[#676767] mb-[20rem]">
								The path to achieving a goal is often laden with challenges and
								obstacles that test our determination and resilience. Each
								hurdle we overcome, each setback we navigate through, adds
								layers of satisfaction and fulfillment to our eventual success.
								<br />
								<br />
								The path to achieving a goal is often laden with challenges and
								obstacles that test our determination and resilience.
							</p>
							<div className="flex items-center gap-x-[15rem]">
								<Button
									className="bg-[#ED017F] text-white"
									title="Apply Online"
								/>
								<Button
									className="text-black border border-black"
									title="Loan Caclulator"
								/>
							</div>
						</div>
						<div className="flex items-center gap-x-[30rem] mt-[30rem]">
							<div className="flex items-center gap-x-[10rem]">
								<Image
									src={call}
									alt="img"
									width={25}
									height={25}
									className="w-[25rem] h-[25rem]"
								/>
								<p className="text-[#363940] text-[18rem] font-semibold leading-[22rem]">
									16519
								</p>
							</div>
							<div className="flex items-center gap-x-[10rem]">
								{footerIcons.map((item) => (
									<Magnetic key={item.id}>
										<Link href={item.link}>
											<Image
												src={item.img}
												alt="img"
												width={25}
												height={25}
												className="w-[25rem] h-[25rem] object-cover"
											/>
										</Link>
									</Magnetic>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
