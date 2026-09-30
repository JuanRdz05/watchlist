import "./home.css";

function Home() {
	return (
		<main className="home">
			<section className="hero">
				<div className="hero-content">
					<h1 className="hero-title">
						Todo lo que quieres ver,
						<span> en un solo lugar.</span>
					</h1>
					<p className="hero-description">
						Organiza y lleva el seguimiento de tus animes, mangas, series y
						películas de una forma sencilla.
					</p>
					<div className="hero-actions">
						<button className="hero-button primary">
							<i className="fa-solid fa-plus"></i> Agregar contenido
						</button>
						<button className="hero-button secondary">
							<i className="fa-solid fa-compass"></i> Explorar
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
export default Home;
