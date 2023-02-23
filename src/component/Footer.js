import React, { useState } from "react";

const Footer = () => {
	const [accordionHelpState, setAccordionHelpState] = useState(false);
	const [accordionAboutState, setAccordionAboutState] = useState(false);
	return (
		<div className=" bg-black opacity-95 h-full mt-[80px] mb-8 max-[600px]:mb-0 pb-6 max-[600px]:mt-[30px]">
			<div className="flex justify-between pt-12 px-14 max-[600px]:flex-col max-[600px]:px-1">
				<div className="flex w-2/5 h-full justify-between max-[600px]:flex-col max-[600px]:w-full max-[960px]:w-2/3">
					<ul className=" text-white text-xs font-bold max-[600px]:border-zinc-700 max-[600px]:border-b-[1px] max-[600px]:mx-6">
						<li className="mb-4">
							<a href="/">GIFT CARDS</a>
						</li>
						<li className="mb-4">
							<a href="/">PROMOTIONS</a>
						</li>
						<li className="mb-4">
							<a href="/">FIND A STORE</a>
						</li>
						<li className="mb-4">
							<a href="/">SIGN UP FOR EMAIL</a>
						</li>
						<li className="mb-4">
							<a href="/">BECOME A MEMBER</a>
						</li>
						<li className="mb-4">
							<a href="/">NIKE JOURNAL</a>
						</li>
						<li className="mb-4">
							<a href="/">SEND US FEEDBACK</a>
						</li>
					</ul>
					<ul className=" text-zinc-500 text-xs max-[600px]:w-full max-[600px]:px-6 max-[600px]:pt-6">
						<li
							className="mb-4 font-bold text-white"
							onClick={() => setAccordionHelpState(!accordionHelpState)}
						>
							<a href="/">GET HELP</a>
						</li>
						<ul className="max-[600px]:hidden w-full">
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Order Status</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Shipping and Delivery</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Returns</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Payment Options</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Gift Card Balance</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Contact Us</a>
							</li>
						</ul>
						<ul
							className={
								accordionHelpState
									? "hidden max-[600px]:block max-[600px]:border-zinc-700 max-[600px]:border-b-[1px] max-[600px]:w-full"
									: "hidden"
							}
						>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Order Status</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Shipping and Delivery</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Returns</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Payment Options</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Gift Card Balance</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Contact Us</a>
							</li>
						</ul>
					</ul>
					<ul className="text-zinc-500 text-xs max-[600px]:w-full max-[600px]:px-6 max-[600px]:pt-6">
						<li
							className="mb-4 font-bold text-white"
							onClick={() => setAccordionAboutState(!accordionAboutState)}
						>
							<a href="/">ABOUT NIKE</a>
						</li>
						<ul className="max-[600px]:hidden">
							<li className="mb-4 hover:text-slate-100">
								<a href="/">News</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Careers</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Investors</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Purpose</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Sustainability</a>
							</li>
						</ul>
						<ul
							className={
								accordionAboutState
									? "hidden max-[600px]:block max-[600px]:border-zinc-700 max-[600px]:border-b-[1px] max-[600px]:w-full"
									: "hidden"
							}
						>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">News</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Careers</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Investors</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Purpose</a>
							</li>
							<li className="mb-4 hover:text-slate-100">
								<a href="/">Sustainability</a>
							</li>
						</ul>
					</ul>
				</div>
				<div className="flex justify-between max-[600px]:justify-start max-[600px]:mx-2 max-[600px]:mt-8">
					<div className="bg-zinc-500 w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer hover:bg-slate-100">
						<img
							src={require("../image/icons8-twitter-30.png")}
							alt="twitter"
							className=" object-contain h-5 w-5"
						></img>
					</div>
					<div className="bg-zinc-500 w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer hover:bg-slate-100">
						<img
							src={require("../image/icons8-facebook-30.png")}
							alt="twitter"
							className=" object-contain h-5 w-5"
						></img>
					</div>
					<div className="bg-zinc-500 w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer hover:bg-slate-100">
						<img
							src={require("../image/icons8-youtube-logo-30.png")}
							alt="twitter"
							className=" object-contain h-5 w-5"
						></img>
					</div>
					<div className="bg-zinc-500 w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer hover:bg-slate-100">
						<img
							src={require("../image/icons8-instagram-old-30.png")}
							alt="twitter"
							className=" object-contain h-5 w-5"
						></img>
					</div>
				</div>
			</div>
			<div className="flex justify-between pt-14 px-14 w-full max-[600px]:px-6 max-[600px]:flex-col max-[600px]:pt-8">
				<div className="flex text-white items-end w-1/2 max-[600px]:flex-col max-[600px]:w-full">
					<div className="flex items-end w-full">
						<img
							src={require("../image/icons8-location-24.png")}
							alt="location"
							className="object-contain h-4 w-4"
						/>
						<p className="text-xs ml-2 ">United States</p>
					</div>
					<p className="text-xs text-zinc-500 ml-6 w-full max-[600px]:mt-3">
						© 2023 Nike, Inc. All Rights Reserved
					</p>
				</div>
				<ul className=" justify-between w-1/2 text-right h-1/2 items-end max-[600px]:flex-col max-[600px]:items-start max-[600px]:flex max-[600px]:text-left">
					<li className="text-xs inline-block pl-4  text-zinc-500 hover:text-slate-100 max-[600px]:pt-10 max-[600px]:pl-0">
						<a href="/">Guides</a>
					</li>
					<li className="text-xs inline-block pl-4 text-zinc-500 hover:text-slate-100 max-[600px]:pt-6 max-[600px]:pl-0">
						<a href="/">Terms of Sale</a>
					</li>
					<li className="text-xs inline-block pl-4 text-zinc-500 hover:text-slate-100 max-[600px]:pt-6 max-[600px]:pl-0">
						<a href="/">Terms of Use</a>
					</li>
					<li className="text-xs inline-block pl-4 text-zinc-500 hover:text-slate-100 max-[600px]:pt-6 max-[600px]:pl-0">
						<a href="/">Nike Privacy Policy</a>
					</li>
					<li className="text-xs inline-block pl-4 text-zinc-500 hover:text-slate-100 max-[600px]:pt-6 max-[600px]:pl-0">
						<a href="/">CA Supply Chains Act</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
