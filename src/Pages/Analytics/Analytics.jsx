import React from "react";
import { NavLink } from "react-router-dom";

const Page5 = () => {
  return (
    <div className="section2">
      <nav
        className="s2-navabar navbar navbar-expand-lg "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink className="fw-bold navbar-brand" to="/">
            Analytics
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>
      <div className="d-flex justify-content-between align-items-center py-1">
        <div className="p-5">
          <h4>Overview</h4>
        </div>
        <div>
          <div className="d-flex align-items-center px-4 ">
            {/* <button type="button" className="btn btn-sm btn-link me-5">
              Reorder Catagory
            </button> */}
            <div className="p2-selection mx-2">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>All nurseries</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="p2-selection mx-2">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>Lifetime</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between w-100 px-5">
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between w-100 px-5 py-4">
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h5 className="card-title">TOTAL ORDERS</h5>
            <h2 className="card-subtitle mb-2 text-muted">2</h2>
          </div>
        </div>
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h5 className="card-title">TOTAL SALES</h5>
            <h2 className="card-subtitle mb-2 text-muted">2,500</h2>
          </div>
        </div>
      </div>

      <hr style={{ width: "95%", margin: "1rem auto" }} />

      <div className="container d-flex justify-content-between w-100 px-5 py-4">
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h2 className="card-title mb-4">SALES BY TOP NURSERIES</h2>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h2 className="card-title mb-4">SALES BY TOP REGIONS</h2>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div class="progress my-3">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
