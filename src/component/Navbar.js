import React, { useEffect, useState } from "react";
import "../component/Navbar.css";

const Navbar = ({ onMouse, leaveMouse, show, click }) => {
	const [stickyClass, setStickyClass] = useState("relative");
	const [onMouseEnter, setOnMouseEnter] = useState(false);
	const [navbarState, setNavbarState] = useState(false);
	const [navbarStateNewArrival, setNavbarStateNewArrival] = useState(false);
	const [navbarStateMen, setNavbarStateMen] = useState(false);
	const [navbarStateWomen, setNavbarStateWomen] = useState(false);
	const [navbarStateKid, setNavbarStateKid] = useState(false);
	const [navbarStateAccessories, setNavbarStateAccessories] = useState(false);
	const [navbarStateSale, setNavbarStateSale] = useState(false);
	let theEnd = 0;
	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);
		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight =
				window.pageXOffset || document.documentElement.scrollTop;
			if (windowHeight > theEnd) {
				setStickyClass("fixed top-[-100px]");
			} else if (windowHeight > 50) {
				setStickyClass("fixed top-0 left-0 ease-linear delay-300");
			} else {
				setStickyClass("block");
			}

			theEnd = windowHeight;
		}

		console.log(show);
		console.log(onMouseEnter);
	};

	return (
		<div>
			<div className="h-[35px] w-full bg-zinc-100 flex justify-between px-12 items-center max-[960px]:hidden">
				<span className="flex w-[60px] justify-between">
					<img
						src={require("../image/icons8-air-jordan-25.png")}
						alt="jordan"
						className="w-[20px] hover:opacity-70 hover:transition-all transition-all cursor-pointer"
					></img>
					<img
						src={require("../image/icons8-converse-25.png")}
						alt="converse"
						className="w-[20px] hover:opacity-70 hover:transition-all transition-all cursor-pointer"
					></img>
				</span>
				<ul className="flex w-[270px] justify-between text-xs">
					<li>
						<a href="/">Find a Store</a>
					</li>
					<li>|</li>
					<li>
						<a href="/">Help</a>
					</li>
					<li>|</li>
					<li>
						<a href="/">Join Us</a>
					</li>
					<li>|</li>
					<li>
						<a href="/">Sign In</a>
					</li>
				</ul>
			</div>

			<div
				className={`pl-12 pr-10 flex items-center h-[60px] ${stickyClass} max-[960px]: justify-between max-[960px]:px-6`}
				id="navbar"
				// onMouseMove={() => setOnMouseEnter(true)}
				// onMouseOut={() => setOnMouseEnter(false)}
				// onScroll={() => stickNavbar}
				onMouseLeave={leaveMouse}
				onMouseEnter={() => setOnMouseEnter(true)}
			>
				<span className="h-[60px] w-1/4">
					<img
						src={require("../image/icons8-nike-70.png")}
						alt="nike"
						className="w-[55px] cursor-pointer hover:opacity-70 hover:transition-all transition-all"
					/>
				</span>
				<ul className="w-1/2 flex px-12 justify-center h-full max-lg:w-2/3 max-lg:px-0 max-[960px]:hidden">
					<li
						className="px-3 h-full mb-[2px]"
						id="featured"
						onMouseEnter={onMouse}
						onMouseLeave={leaveMouse}
					>
						<a href="/" className="block h-[58px] py-4 mt-[2px] transition">
							New & Featured
						</a>

						<div
							id="featured--hover"
							className="bg-white absolute pt-5 pb-14 px-16 hidden w-full left-0 right-0 justify-center duration-1000"
						>
							<ul className="w-1/6 ">
								<li>
									<a href="/" className="mb-3 block">
										New & Featured
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										SNKRS Launch Calendar
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New & Upcoming Drops
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New in Running: Invincible 3
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Philly vs. KC
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Valentine's Day Shop
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Gifts $25 & Under
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Member Exclusive
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale - Up to 40% Off
									</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">New For Men</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Accessories</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shop All New</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">New For Women</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Accessories</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shop All New</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">New For Kids</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Accessories</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shop All New</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Drops</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">AJ1</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Dunks</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Get 'Em in SNKRS</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jordan Heat Check</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Last Chance Kicks</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Complete Your Look</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Latest In Jordan Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Drops 101</a>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="px-3 h-full mb-[2px]"
						id="men"
						onMouseEnter={onMouse}
						onMouseLeave={leaveMouse}
					>
						<a href="/" className="block h-[58px] pt-4 mt-[2px]">
							Men
						</a>
						<div className="w-full bg-white absolute hidden pt-5 pb-14 px-16">
							<ul className="w-1/6 ">
								<li>
									<a href="/" className="mb-3 block">
										Featured
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New in Running: Invincible 3
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jordan
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Matching Sets
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Customize with Nike by You
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Lifestyle</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jordan</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Air Max</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Air Force 1</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Blazer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Golf</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Training & Gym</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jordan</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Big & Tall </a>
								</li>

								<li className="pb-3 pt-10">
									<a href="/">All Tops</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Tops & T-Shirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Hoodies & Sweatshirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jackets & Vests </a>
								</li>

								<li className="pb-3 pt-10">
									<a href="/">All Bottoms</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Pants & Tights</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shorts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Underwear</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Shop By Sport</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">All Sport</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Golf</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Tennis</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baseball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Training & Gym</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Track & Field </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Lacrosse</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Yoga</a>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="px-3 h-full mb-[2px] max-md:hidden"
						id="women"
						onMouseEnter={onMouse}
						onMouseLeave={leaveMouse}
					>
						<a href="/" className="block h-[58px] pt-4 mt-[2px]">
							Women
						</a>
						<div className="w-full bg-white absolute hidden pt-5 pb-14 px-16">
							<ul className="w-1/6 ">
								<li>
									<a href="/" className="mb-3 block">
										Featured
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New in Running: Invincible 3
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jordan
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Matching Sets
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Customize with Nike by You
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Lifestyle</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jordan</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Air Max</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Air Force 1</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Blazer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Golf</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Training & Gym</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jordan</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Big & Tall </a>
								</li>

								<li className="pb-3 pt-10">
									<a href="/">All Tops</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Tops & T-Shirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Hoodies & Sweatshirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Jackets & Vests </a>
								</li>

								<li className="pb-3 pt-10">
									<a href="/">All Bottoms</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Pants & Tights</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shorts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Underwear</a>
								</li>
							</ul>
							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Shop By Sport</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">All Sport</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Golf</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Tennis</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baseball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Training & Gym</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Track & Field </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Lacrosse</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Yoga</a>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="px-3 h-full mb-[2px] max-lg:hidden"
						id="kid"
						onMouseEnter={onMouse}
						onMouseLeave={leaveMouse}
					>
						<a href="/" className="block h-[58px] pt-4 mt-[2px]">
							Kids
						</a>
						<div className="w-full bg-white absolute hidden pt-5 pb-14 px-16 ">
							<ul className="w-1/6 ">
								<li>
									<a href="/" className="mb-3 block">
										Featured
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jordan
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Matching Sets
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Big Kids (3.5Y - 7Y)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Little Kids (10.5C - 3Y)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baby & Toddler (1C - 10C)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Air Force 1</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Blazer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes $70 & Under</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Easy On & Off </a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">All Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Big Kids (XS - XL)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Little Kids (4 - 7)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baby & Toddler (0M - 4T)</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Extended Sizing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Tops & T-Shirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Hoodies & Sweatshirts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Outerwear & Jackets</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Pants & Tights</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shorts</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Underwear</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Shop by Age</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Big Kids </a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Little Kids</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baby & Toddler</a>
								</li>

								<li className="pb-3 pt-10">
									<a href="/">Sport & Activity</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">All Sport</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Play</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Basketball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Soccer</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Baseball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Softball</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Running</a>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="px-3 h-full mb-[2px] max-xl:hidden"
						id="sale"
						onMouseEnter={onMouse}
						onMouseLeave={leaveMouse}
					>
						<a href="/" className="block h-[58px] pt-4 mt-[2px]">
							Sale
						</a>
						<div className="w-full bg-white absolute hidden pt-5 pb-14 px-16">
							<ul className="w-1/6 ">
								<li>
									<a href="/" className="mb-3 block">
										Sale
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Last Chance Sale: Up to 65% Off
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New to Sale
									</a>
								</li>
								<li className="pb-1">
									<a
										href="/"
										className="text-sm text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										All Sale
									</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Men</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Equipment</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Women</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Equipment</a>
								</li>
							</ul>

							<ul className="w-1/6 ">
								<li className="pb-3">
									<a href="/">Kids</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Shoes</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Clothing</a>
								</li>
								<li className="pb-1 text-sm text-zinc-500 hover:text-black hover:transition-all transition-all">
									<a href="/">Equipment</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="w-1/4 flex flex-grow-0 justify-between pl-6 max-lg:w-1/2 max-xl:w-1/3 max-[960px]:hidden">
					<span className="bg-zinc-100 flex h-[40px] items-center w-4/6 rounded-full ">
						<img
							src={require("../image/icons8-search-50 (1).png")}
							alt="search"
							className="w-[25px] h-[25px] mx-3"
						/>
						<input
							className="bg-zinc-100 w-3/5 focus:outline-none"
							placeholder="Search"
						></input>
					</span>
					<span className="flex items-center justify-between w-[27%]">
						<div className="w-[40px] h-[40px] rounded-full hover:bg-zinc-200 flex items-center justify-center cursor-pointer transition-all">
							<img
								src={require("../image/icons8-loading-heart-40.png")}
								alt="heart"
								className="w-[20px] h-[20px]"
							></img>
						</div>
						<div className="w-[40px] h-[40px] rounded-full hover:bg-zinc-200 flex items-center justify-center cursor-pointer transiton-all">
							<img
								src={require("../image/icons8-shopping-bag-35.png")}
								alt="cart"
								className="w-[20px] h-[20px]"
							></img>
						</div>
					</span>
				</div>
				<div className="hidden max-[960px]:flex justify-end">
					<span className="flex items-center justify-between cursor-pointer">
						<img
							src={require("../image/icons8-shopping-bag-35.png")}
							alt="cart"
							className="w-[20px] h-[20px]"
						></img>
					</span>
					<span className="flex items-center ml-6 cursor-pointer">
						<img
							src={require("../image/icons8-search-50 (1).png")}
							alt="hambuger"
							className="w-[23px] h-[23px]"
						></img>
					</span>
					<span
						className="flex items-center ml-6 cursor-pointer"
						onClick={() => setNavbarState(!navbarState)}
					>
						<img
							src={require("../image/icons8-hamburger-32.png")}
							alt="hambuger"
							className="w-[25px] h-[25px]"
						></img>
					</span>
				</div>
			</div>
			<div className="bg-zinc-100 h-[60px] p-auto pt-2 max-[960px]:hidden">
				<p className="text-center ">Sale Up to 40%</p>
				<p className="text-center text-xs underline pt-1">
					Shop All Our New Markdown
				</p>
			</div>
			<div
				className={
					navbarState
						? "w-full h-full fixed top-0 right-0 z-[1000] transition-all duration-[250ms]"
						: "fixed h-full transition-all duration-[250ms] z-[1000]"
				}
			>
				<div
					className="w-full h-full absolute top-0 left-0 bg-zinc-500 opacity-70 transition-all"
					onClick={() => setNavbarState(!navbarState)}
				></div>

				<div
					className={
						navbarState
							? "fixed right-0 w-[320px] h-full bg-white transition-all z-[1000] duration-[250ms]"
							: "fixed h-full w-0 top-0 right-0 transition-all z-[1000] duration-[250ms]"
					}
				>
					<div className="w-full h-full relative overflow-hidden">
						<div
							className={
								navbarStateNewArrival ||
								navbarStateMen ||
								navbarStateWomen ||
								navbarStateAccessories ||
								navbarStateKid ||
								navbarStateSale
									? " absolute top-0 left-0 translate-x-[-320px] px-8 py-4 transition-all z-[1000] duration-[250ms]"
									: "translate-x-0 w-[320px] h-full bg-white px-8 py-4 z-[1000] transition-all duration-[250ms]"
							}
						>
							<div className="flex justify-end cursor-pointer">
								<img
									src={require("../image/icons8-close-48.png")}
									alt="arrow"
									className="w-5 h-5 rotate-180"
									onClick={() => setNavbarState(!navbarState)}
								></img>
							</div>
							<div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() =>
										setNavbarStateNewArrival(!navbarStateNewArrival)
									}
								>
									<p className=" text-2xl">New Arrivals</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() => setNavbarStateMen(!navbarStateMen)}
								>
									<p className=" text-2xl">Men</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() => setNavbarStateWomen(!navbarStateWomen)}
								>
									<p className=" text-2xl">Women</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() => setNavbarStateKid(!navbarStateKid)}
								>
									<p className=" text-2xl">Kids</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() =>
										setNavbarStateAccessories(!navbarStateAccessories)
									}
								>
									<p className=" text-2xl">Accessories</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div
									className="flex items-center justify-between mt-4 cursor-pointer"
									onClick={() => setNavbarStateSale(!navbarStateSale)}
								>
									<p className=" text-2xl">Sale</p>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-5 h-5 rotate-180"
									></img>
								</div>
								<div className="mt-8">
									<div className="flex items-center cursor-pointer">
										<img
											src={require("../image/icons8-air-jordan-50.png")}
											alt="logo"
											className="w-7 h-7"
										></img>
										<span className="ml-4">Jordan</span>
									</div>
									<div className="flex items-center cursor-pointer mt-4">
										<img
											src={require("../image/icons8-converse-67.png")}
											alt="logo"
											className="w-7 h-7"
										></img>
										<span className="ml-4">Converse</span>
									</div>
								</div>
								<div className="w-[95%] mt-10">
									<span className=" text-xl text-zinc-500">
										Become a Nike Member for the best products, inspiration and
										stories in sport.
									</span>
									<span className=" text-xl cursor-pointer"> Learn more</span>
								</div>
								<div className="mt-8 flex">
									<button className=" bg-black rounded-full h-[40px] text-white w-[100px] mr-2 hover:bg-zinc-500 hover:transition-all transition-all">
										Join Us
									</button>
									<button className=" bg-white rounded-full h-[40px] text-black w-[100px] border-[1px] border-zinc-300 hover:border-black hover:transition-all transition-all">
										Sign In
									</button>
								</div>
							</div>
						</div>

						<div
							className={
								navbarStateNewArrival
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() =>
										setNavbarStateNewArrival(!navbarStateNewArrival)
									}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										New Arrivals
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										SNKRS Launch Calendar
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New & Upcoming Drops
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New in Running: Invincible 3
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Philly vs. KC
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Valentine's Day Shop
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Gifts $25 & Under
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Member Exclusive
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale - Up to 40% Off
									</a>
								</li>
							</ul>
						</div>
						<div
							className={
								navbarStateMen
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() => setNavbarStateMen(!navbarStateMen)}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										Men
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shoes
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Clothing
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shop by Sport
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Versatile Workout Gear
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jondan
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Matching Sets
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Customize with Nike by You
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
							</ul>
						</div>
						<div
							className={
								navbarStateWomen
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() => setNavbarStateWomen(!navbarStateWomen)}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										Women
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shoes
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Clothing
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shop by Sport
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Versatile Workout Gear
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jondan
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Matching Sets
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Customize with Nike by You
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
							</ul>
						</div>
						<div
							className={
								navbarStateKid
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() => setNavbarStateKid(!navbarStateKid)}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										Kid
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										New Arrivals
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shoes
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Clothing
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sport & Activity
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Big Kids
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Little Kids
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Baby & Toddlers
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Extended Sizes
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Best Sellers
									</a>
								</li>
							</ul>
						</div>
						<div
							className={
								navbarStateAccessories
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() =>
										setNavbarStateAccessories(!navbarStateAccessories)
									}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										Accessories
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shop All
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Jordan
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Socks
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Bags & Backpacks
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Hats & Headwear
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sunglasses & Eyewear
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Shop by Sport
									</a>
								</li>
							</ul>
						</div>

						<div
							className={
								navbarStateSale
									? "translate-x-[0px] transition-all z-[1000] duration-[250ms] h-full bg-white px-8 py-4"
									: "absolute top-0 left-0 translate-x-[320px] h-full transition-all z-[1000] duration-[250ms] px-8 py-4"
							}
						>
							<ul>
								<li
									className="flex items-center cursor-pointer"
									onClick={() => setNavbarStateSale(!navbarStateSale)}
								>
									<img
										src={require("../image/icons8-left-arrow-64.png")}
										alt="arrow"
										className="w-4 h-4 mr-4 my-10"
									></img>
									<p className=" ">All</p>
								</li>
								<li className="pb-6">
									<p href="/" className="text-2xl text-black">
										Sale
									</p>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale Shoes
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Sale Clothing
									</a>
								</li>
								<li className="pb-3">
									<a
										href="/"
										className="text-md text-zinc-500 hover:text-black hover:transition-all transition-all"
									>
										Last Chance
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
