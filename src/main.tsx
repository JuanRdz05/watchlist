import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Navbar />
		<Home />
	</StrictMode>,
);
