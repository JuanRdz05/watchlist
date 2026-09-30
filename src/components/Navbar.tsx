import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	// Cerrar al hacer clic fuera o con Escape
	useEffect(() => {
		if (!menuOpen) return;

		const handleClickOutside = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setMenuOpen(false);
			}
		};
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [menuOpen]);

	return (
		<nav ref={navRef}>
			<div className="logo-container">
				<img src="../logo.jpg" alt="logo" />
			</div>

			<div className="searchbar">
				<input type="text" placeholder="Buscar..." />
				<button aria-label="Buscar">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>

			<div
				className={`options-container ${menuOpen ? "open" : ""}`}
				id="main-menu"
			>
				<ul className="options-list">
					<li className="option">
						<Link to="/" onClick={() => setMenuOpen(false)}>
							Inicio
						</Link>
					</li>
					<li className="option">
						<Link to="/explore" onClick={() => setMenuOpen(false)}>
							Explorar
						</Link>
					</li>
					{/* Agrega aquí más <li> cuando tengas el Link listo:
					    Perfil (/profile), Comunidad (/community) */}
				</ul>
			</div>

			<button
				className="menu-button"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
				aria-expanded={menuOpen}
				aria-controls="main-menu"
			>
				<i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
			</button>
		</nav>
	);
}

export default Navbar;
