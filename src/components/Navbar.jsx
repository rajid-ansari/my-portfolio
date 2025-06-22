import resume from "../assets/resume.pdf"
import logo from "/logo.png"

const Navbar = () => {
	return (
		<nav className="navbar text-gray-100 flex justify-between items-center py-4  font-semibold font-bebus">
			<div className="logo">
				<img src={logo} alt="" height={20} width={60} />
			</div>
			<div className="navbar-menu">
				<button className="h-11 px-6 py-2 border  rounded-full lg:px-6 lg:py-2 bg-gray-200 text-black font-bold flex overflow-hidden justify-between gap-2 items-center group hover:text-white">
					<a id="resume" href="https://drive.google.com/file/d/1vqJb-F8ZH5kfoIOJurWE0bbpGM3njpeJ/view?usp=sharing" target="_blank" className="overflow-hidden z-5">Resume</a>
					<div className="lg:h-[1px] lg:w-[1px] relative right-10 rounded-full bg-black group-hover:scale-[240] transition-all duration-200 ease-in"></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;