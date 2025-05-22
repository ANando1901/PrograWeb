import { Link } from "react-router";
import { cerrarSesion } from "../Utils/cerrar_sesion";
import "../Estilos/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top text-white navbar-freaky">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand text-neon">🎮 GameStore</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-neon" to={"/"}>🕹️ Explorar</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-neon" href="#" role="button" data-bs-toggle="dropdown">🎲 Categorías</a>
                            <ul className="dropdown-menu bg-dark text-white border-neon">
                                <li><Link className="dropdown-item text-neon" to={"/best-sellers"}>Más vendidos</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/top-rated"}>Mejor puntuados</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/free-to-play"}>Gratis</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/multiplayer"}>Multijugador</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/early-access"}>Acceso anticipado</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-neon" href="#" role="button" data-bs-toggle="dropdown">💻 Plataformas</a>
                            <ul className="dropdown-menu bg-dark text-white border-neon">
                                <li><Link className="dropdown-item text-neon" to={"/ps4"}>PS4</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/ps5"}>PS5</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/switch"}>Switch</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/windows"}>Windows</Link></li>
                                <li><Link className="dropdown-item text-neon" to={"/macos"}>MacOS</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link text-neon" to={"/special-offers"}>🔥 Ofertas</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-neon" href="#" role="button" data-bs-toggle="dropdown">👤 Perfil</a>
                            <ul className="dropdown-menu bg-dark text-white border-neon">
                                {(() => {
                                    if (!sessionStorage.getItem("user")) {
                                        return <>
                                            <li><Link className="dropdown-item text-neon" to={"/iniciar_sesion"}>Iniciar Sesión</Link></li>
                                            <li><Link className="dropdown-item text-neon" to={"/crear_cuenta"}>Crear Cuenta</Link></li>
                                        </>;
                                    } else {
                                        return <>
                                            <li><Link className="dropdown-item text-neon" to={"/profile"}>Mi perfil</Link></li>
                                            <li><Link className="dropdown-item text-neon" onClick={cerrarSesion} to={"/"}>Cerrar sesión</Link></li>
                                        </>;
                                    }
                                })()}
                            </ul>
                        </li>
                    </ul>

                    {/* 🔁 Nueva sección con buscador a la izquierda y carrito a la derecha */}
                    <div className="d-flex align-items-center">
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2 border-neon" type="search" placeholder="Buscar" />
                            <button className="btn btn-outline-neon" type="submit">🔍</button>
                        </form>

                        <Link to="/carrito" className="btn btn-outline-neon d-flex align-items-center">
                            🛒 Mi Carrito
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
