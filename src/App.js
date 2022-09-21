import { Route, Routes } from "react-router";

import { Link } from "react-router-dom";

import "./App.css";

import AddSupplier from "./Pages/AddSupplier";
import Detail from "./Pages/Detail";
import HomePage from "./Pages/Home";
import List from "./Pages/List";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <h2>SUPPLIERS</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                Suppliers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addSupplier">
                Add Supplier
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addSupplier" element={<AddSupplier />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="py-5">
        <div className="container">
          <div className="row footer-item">
            <div className="col-12">© 2022 Company, <Link to="/"> Suppliers </Link>. All rights reserved.</div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
