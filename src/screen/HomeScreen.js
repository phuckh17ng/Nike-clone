import React, { useState } from "react";
import Slider from "react-slick";
import "../screen/HomeScreen.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			onClick={onClick}
		>
			<img
				src={require("../image/icons8-left-arrow-64.png")}
				alt="1"
				className="w-[17px] rotate-180"
			></img>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			onClick={onClick}
		>
			<img
				src={require("../image/icons8-left-arrow-64.png")}
				alt="1"
				className="w-[17px]"
			></img>
		</div>
	);
}

const HomeScreen = ({ show, onMouse, navbar }) => {
	console.log(show);

	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					className: "center",
					centerMode: true,
					centerPadding: "60px",
					arrow: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					accessibility: false,
				},
			},
		],
	};

	var settings_1 = {
		accessibility: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					className: "center",
					centerMode: true,
					centerPadding: "60px",
					arrow: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	};
	return (
		<div
			className={show ? `blur-sm bg-blend-darken overflow-hidden` : ``}
			onMouseEnter={onMouse}
		>
			<iframe
				loop
				playsInline="playinline"
				className="m-auto w-[93%] h-[770px] max-lg:h-[525px] max-[960px]:h-[530px] max-[960px]:w-[95%] max-sm:h-[350px]"
				muted="muted"
				src="https://www.youtube.com/embed/Sp3Xkbnvz50?autoplay=1&mute=1&loop=true&playlist=Sp3Xkbnvz50"
				title="Welcome To .SWOOSH | The Future of Sport | Nike"
				frameborder="0"
				allow="autoplay"
				allowfullscreen
			></iframe>

			<div className="m-auto mb-5 max-[960px]:mx-6 ">
				<p className="text-6xl font-[1000] text-left mt-10 max-[960px]:text-5xl min-[960px]:text-center">
					WITNESSES
				</p>
				<p className="text-left mt-7 min-[960px]:text-center">
					20 years later, we are who we've always been- Witnesses to LeBron
					James' never-ending greatness
				</p>
				<div className="flex items-start mt-7 ">
					<button className="bg-black text-white w-[80px] h-[38px] rounded-full hover:bg-zinc-700 min-[960px]:m-auto hover:transition-all transition-all">
						Shop
					</button>
				</div>
			</div>

			<section
				className="mx-10 mt-12 max-[960px]:mx-5 max-[960px]:mt-[90px]"
				id="shoes"
			>
				<span className="text-2xl absolute max-[960px]:hidden mx-2">
					Popular Right Now
				</span>
				<div className=" hidden text-2xl max-[960px]:flex mx-2 mb-5">
					Popular Right Now
				</div>
				<Slider {...settings}>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/air-max-90-mens-shoes-6n3vKB.png")}
							alt="shoes"
							className="w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/air-max-90-futura-womens-shoes-kvRZ4h.png")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/Men's Shoes.jpg")}
							alt="shoes"
							className=" w-full object-fit"
						></img>

						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/Men's Shoes (1).jpg")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/Little Kids' Shoes.jpg")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>

					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/Women's Shoes.png")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000">
						<img
							src={require("../nike/Women's Shoes.jpg")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
					<div className=" cursor-pointer hover:opacity-70 transition-all duration-1000 duration-1000">
						<img
							src={require("../nike/Women's Shoes (1).jpg")}
							alt="shoes"
							className=" w-full object-fit"
						></img>
						<span className="flex justify-between mt-5">
							<span>Nike Air Max 90</span>
							<span className="mr-4 max-[960px]:hidden">$130</span>
						</span>
						<span className="text-zinc-500 block">Men's Shoes</span>
						<span className="hidden max-[960px]:block mr-4">$130</span>
					</div>
				</Slider>
			</section>

			<div className="mx-12 mt-10 max-[960px]:mx-7 max-[960px]:mt-[100px] max-sm:hidden cursor-pointer transition-all duration-1000 hover:opacity-70">
				<span className="text-2xl">The Best of Air Max</span>
				<img
					src={require("../nike/Nike. Just Do It.jpg")}
					alt="banner"
					className="m-auto mt-5"
				></img>
			</div>

			<div className="m-auto mb-5 max-[960px]:mx-6">
				<p className="text-6xl font-[1000] min-[960px]:text-center text-left mt-10 max-[960px]:mt-[100px] max-[960px]:text-5xl">
					FRESH AIR
				</p>
				<p className="text-left mt-7 min-[960px]:text-center">
					20 years later, we are who we've always been- Witnesses to LeBron
					James' never-ending greatness
				</p>
				<div className="flex mt-7 justify-start min-[960px]:justify-center">
					<button className="bg-black text-white w-[120px] h-[38px] rounded-full hover:bg-zinc-700 hover:transition-all transition-all">
						Shop Men's
					</button>
					<button className="bg-black text-white w-[150px] h-[38px] rounded-full hover:bg-zinc-700 ml-2 hover:transition-all transition-all">
						Shop Women's
					</button>
				</div>
			</div>

			<div className="mx-12 mt-10 max-[960px]:mx-6 max-[960px]:mt-[90px]">
				<span className="text-2xl">The Best of Air Max</span>
				<Slider {...settings_1}>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (1).jpg")}
							alt="banner"
							className="w-full "
						></img>
						<p className="text-xl pt-5">Men's Nike Fleece</p>
					</div>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70 ">
						<img
							src={require("../nike/Nike. Just Do It (2).jpg")}
							alt="banner"
							className="w-full object-fit"
						></img>
						<p className="text-xl pt-5">Women's Nike Fleece</p>
					</div>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70 ">
						<img
							src={require("../nike/Nike. Just Do It (3).jpg")}
							alt="banner"
							className="w-full object-fit"
						></img>
						<p className="text-xl pt-5">Kids' Nike Fleece</p>
					</div>
				</Slider>
			</div>

			<div className="mx-12 mt-[100px] max-[960px]:mx-6 max-[960px]:mt-[90px] cursor-pointer">
				<p className="text-2xl mb-5">Men's Versatile Fitness Apparel</p>
				<div className="relative text-white">
					<img
						src={require("../nike/Nike. Just Do It (4).jpg")}
						alt="banner"
					></img>
					<div className="w-full h-full bottom-0 min-[700px]:absolute min-[700px]:ml-12">
						<div className="w-full h-3/5 flex items-end max-[700px]:mt-6 ">
							<span
								className="text-white text-6xl w-1/2 font-extrabold max-lg:w-3/5
							 max-[960px]:text-5xl max-[700px]:text-black max-[700px]:w-full"
							>
								MADE FOR YOUR EVERY MOVE
							</span>
						</div>

						<div className="flex items-end w-full h-1/5 max-[700px]:mt-6">
							<p
								className="text-white w-2/5 max-[960px]:w-3/5 max-[700px]:text-black
							 max-[700px]:w-full"
							>
								Nike's latest fitness appreal is designed for total comfort and
								with versatility in mind--wherever you go and however move.
							</p>
						</div>

						<div className="flex items-center w-full h-1/5 max-[700px]:mt-6">
							<button
								className="bg-white rounded-full h-[40px] text-black w-[290px] 
							hover:bg-zinc-300
							 max-[700px]:text-white max-[700px]:bg-black max-[700px]:hover:bg-zinc-500 hover:transition-all transition-all "
							>
								Shop Men's Performance Appreal
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-12 mt-10 max-[960px]:mx-6 max-[960px]:mt-[90px]">
				<span className="text-2xl">The Best of Air Max</span>
				<Slider {...settings_1}>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (5).jpg")}
							alt="banner"
							className="w-full"
						></img>
						<p className="text-xl pt-5">Air Jordan 1</p>
					</div>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (6).jpg")}
							alt="banner"
							className="w-full"
						></img>
						<p className="text-xl pt-5">Air Force 1</p>
					</div>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (7).jpg")}
							alt="banner"
							className="w-full"
						></img>
						<p className="text-xl pt-5">Nike Blazer</p>
					</div>
				</Slider>
			</div>

			<div className="mx-12 mt-[100px] max-[600px]:hidden max-[960px]:mx-6">
				<p className="text-2xl mb-5">Nike Membership</p>
				<figure className="relative text-white block cursor-pointer">
					<div
						className="w-full h-auto relative min-h-[300px]"
						height="maintain"
					>
						<div className="w-full h-full relative ">
							<img
								src={require("../nike/Nike. Just Do It.png")}
								className="z-10 min-h-[300px] object-cover w-full h-full"
								alt="banner"
							></img>
						</div>
					</div>

					<figcaption className="z-20 absolute top-0 justify-center h-full w-full">
						<p className=" text-6xl w-2/5 mt-8 mx-10 font-extrabold max-lg:w-1/2 max-[960px]:text-5xl max-[680px]:w-2/3">
							BECOME A MEMBER
						</p>
						<p className=" w-1/2 mt-6 mx-10">
							Sign up for free. Join the community.
						</p>
						<div className="mt-6 mx-10">
							<button className=" bg-white rounded-full h-[40px] text-black w-[100px] mr-2 hover:bg-zinc-300 hover:transition-all transition-all">
								Join us
							</button>
							<button className=" bg-white rounded-full h-[40px] text-black w-[100px] hover:bg-zinc-300 hover:transition-all transition-all">
								Sign In
							</button>
						</div>
					</figcaption>
				</figure>
			</div>

			<div className="mx-6 mt-[100px] hidden max-[600px]:block">
				<p className="text-2xl mb-5">Nike Membership</p>
				<figure className="relative text-white flex cursor-pointer ">
					<div
						className="w-full h-auto relative min-h-[300px] items-end"
						height="maintain"
					>
						<div className="w-full h-full relative ">
							<img
								src={require("../nike/Nike. Just Do It (1).png")}
								className="z-10 min-h-[300px] object-cover w-full h-full"
								alt="banner"
							></img>
						</div>
					</div>

					<figcaption className="z-20 absolute bottom-0 justify-center w-full ml-6 mb-6">
						<p className="w-full font-extrabold text-5xl">BECOME A MEMBER</p>
						<p className=" w-full mt-6">
							Sign up for free. Join the community.
						</p>
						<div className="mt-6">
							<button className=" bg-white rounded-full h-[40px] text-black w-[100px] mr-2 hover:bg-zinc-300 hover:transition-all transition-all">
								Join us
							</button>
							<button className=" bg-white rounded-full h-[40px] text-black w-[100px] hover:bg-zinc-300 hover:transition-all transition-all">
								Sign In
							</button>
						</div>
					</figcaption>
				</figure>
			</div>

			<div className="mx-10 mt-3 max-[960px]:mx-6">
				<Slider {...settings_1}>
					<div className="w-1/3 mt-5 relative px-2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (8).jpg")}
							alt="banner"
							className="w-full object-cover"
						></img>
						<div className="w-full h-full absolute top-0 flex justify-end flex-col pb-12 left-10">
							<p className="text-base bottom-16 w-full">Member Shop</p>
							<p className="text-2xl min-h-max bottom-8 w-4/5">
								Shop Member-exclusive styles.
							</p>
						</div>
					</div>
					<div className="w-1/3 mt-5 px-1 relative max-[960px]:w-1/2 cursor-pointer transition-all duration-1000 hover:opacity-70">
						<img
							src={require("../nike/Nike. Just Do It (9).jpg")}
							alt="banner"
							className="w-full object-fit"
						></img>
						<div className="w-full h-full absolute top-0 flex justify-end flex-col pb-14 left-10">
							<p className="text-base">Shipping as It Should Be</p>
							<p className="text-2xl w-4/5">
								Free standard shipping on all orders.
							</p>
						</div>
					</div>
					<div className="w-1/3 mt-5 px-2 cursor-pointer transition-all duration-1000 hover:opacity-70 relative">
						<img
							src={require("../nike/Nike. Just Do It (10).jpg")}
							alt="banner"
							className="w-full object-fit"
						></img>
						<div className="w-full h-full absolute top-0 flex justify-end flex-col pb-12 left-10">
							<p className="text-base h-auto">Nike By You</p>
							<p className="text-2xl h-auto w-4/5">
								Customize your so-you shoe.
							</p>
						</div>
					</div>
				</Slider>
			</div>

			<div className="w-full">
				<div className="mt-[20vh] w-3/5 max-[960px]:w-4/5 max-[700px]:w-full max-[600px]:hidden mx-auto px-5">
					<div className="grid grid-cols-4 mt-[20vh] w-full ">
						<ul className="px-3">
							<li className="mb-5">Featured</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Air Force 1
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Jordan 1
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									{" "}
									Air Max 2090
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									{" "}
									Air Max 270
								</a>
							</li>
						</ul>
						<ul className="px-3">
							<li className="mb-5">Shoes</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									All Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Jordan Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Running Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Basketball Shoes
								</a>
							</li>
						</ul>
						<ul className="px-3">
							<li className="mb-5">Clothing</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									All Clothing
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Tops & T-Shirts
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Shorts
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Hoodies & Pullovers
								</a>
							</li>
						</ul>
						<ul className="px-3">
							<li className="mb-5">Kids'</li>
							<li className=" text-zinc-500 mb-3 w-full">
								<a href="/" className="truncate inline-block w-full">
									Infant & Toddler Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Kids' Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Kids' Basketball Shoes
								</a>
							</li>
							<li className=" text-zinc-500 mb-3">
								<a href="/" className="truncate inline-block w-full">
									Kids' Running Shoes
								</a>
							</li>
						</ul>
					</div>
				</div>
				<ul className="mx-6 hidden max-[600px]:block">
					<li className="pb-6">
						<a href="/">Product Advice</a>
					</li>
					<li className="pb-6">
						<a href="/">Featured</a>
					</li>
					<li className="pb-6">
						<a href="/">Shoes</a>
					</li>
					<li className="pb-6">
						<a href="/">Clothing</a>
					</li>
					<li className="pb-6">
						<a href="/">Kids'</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeScreen;
