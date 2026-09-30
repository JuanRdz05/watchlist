import "./navbar.css";

function Navbar() {
	return (
		<>
			<nav>
				<div className="logo-container">
					<img src="../public/logo.png" alt="logo" />
				</div>
				<div className="options-container">
					<ul className="options-list">
						<li className="option">Inicio</li>
						<li className="option">Explorar</li>
						<li className="option">Perfiles</li>
						<li className="option">Comunidad</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
