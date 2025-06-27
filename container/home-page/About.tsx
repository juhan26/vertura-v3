"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-black padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-white">
				VERTURA is a streetwear brand that bridges the gap between 
					<br className="sm:hidden xm:hidden" /> urban culture and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
					high-quality fashion,
					</span>
					&nbsp; creating pieces, <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
					that speak to the modern generation's desire 
					</span>
					&nbsp;for&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
					authenticity and style.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-white my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-white font-NeueMontreal">
							What We're about?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-white tracking-wide">
								We craft streetwear that connects urban culture with premium fashion, designing pieces that resonate with your authentic self. Whether you're hitting the streets or making a statement, our collections speak for you.
								</p>
								{/* <p className="sub-paragraph font-medium font-NeueMontreal text-white pt-[30px] tracking-wide">
								We believe the fusion of raw urban energy and refined design (with a dose of street smarts) is what makes our brand bold, distinctive, and undeniably fresh.
								</p> */}
							</div>
							<div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-white pb-[20px]">
									Sosmed:
								</h1>
								<div className="flex flex-col">
									{footerItems.map((item) => (
										<LinkHover
											key={item.id}
											className="w-fit text-white sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href={item.href}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/ochi-team"
							title="read more"
							bgcolor="gray"
							className="bg-white text-black"
							style={{ color: "white" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
						hovered && "scale-[0.96]"
					}`}>
					<Image
						src={aboutImg}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
					/>
				</div>
			</div> */}
		</section>
	);
}
