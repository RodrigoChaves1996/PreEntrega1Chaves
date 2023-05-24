import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CarWidget from '../CardWidget/CardWidget'




const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Florcha-Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fundas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cables</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Accesorios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vidrios Templados</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Parlantes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Torres</a></li>
                  <li><a className="dropdown-item" href="#">Portatiles</a></li>
                  <li><a className="dropdown-item" href="#">Profesionales</a></li>
                  <li><a className="dropdown-item" href="#">Economicos</a></li>
                  </ul>
                  </li>
            <li className="nav-item">
              <CarWidget/>
            </li>
            </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Tienda" aria-label="Search" />
            <button className="btn btn-outline-success" type="button">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
  
  export default Navbar;