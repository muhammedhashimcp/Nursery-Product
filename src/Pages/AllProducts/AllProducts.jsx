import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAdminProducts,
  getProducts,
} from "../../redux/actions/productAction";
import Loader from "../../Components/SideBar/Loader/Loader";

const Page10 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, products } = useSelector((state) => state.products);
  console.log(products, "====== all Products");
  useEffect(() => {
    if (error) {
      alert.error(error.message);
      dispatch(clearErrors());
    }

    dispatch(getProducts());
  }, [dispatch, error]);

  const AddProductHandler = () => {
    navigate('/product/new');
  };

  const ProductDetailsHandler = (id) => {
    navigate(`/product/edit/${id}`);
  };

  return (
    <div className="section2 ">
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
            All Products
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>
      <div className="d-flex justify-content-between align-items-center px-2 py-1">
        <div className="p-5">
          <input
            className="form-control px-5"
            type="text"
            value=""
            placeholder="Search for catagories here..."
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div>
          <div className="d-flex align-items-center px-4 ">
            <div className="form-check me-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Show low/Out of stock products
              </label>
            </div>
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
            <button
              type="button"
              className="btn-page4 btn btn-success btn-md"
              onClick={AddProductHandler}
            >
              + Add New Product
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            className="container-lg d-flex justify-content-between px-5 py-2"
            style={{ width: "100%" }}
          >
            <table
              className="table table-borderless"
              style={{
                overflow: "hidden",
                width: "100%",
                borderRadius: ".5rem",
                backgroundColor: "white",
              }}
            >
              <thead style={{ backgroundColor: "#eaeaea" }}>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Nursery Name</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, intex) => (
                    <tr>
                      <td>
                        <div
                          style={{
                            backgroundColor: "#ececec",
                            borderRadius: ".5rem",
                            width: "70px",
                            height: "70px",
                            overflow: "hidden",
                          }}
                          scope="row"
                        >
                          <img
                            className="bg-primary img-fluid rounded-start"
                            src={product.images[0]?.url}
                            alt="img"
                          />
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>{product.stock}</td>
                      <td>...</td>
                      <td>Rs {product.price}</td>
                      <td>Nursery Name</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="container-lg d-flex flex-wrap justify-content-between px-5 py-2">
            <div className="container-md p-0">
              <div
                style={{ borderRadius: ".5rem" }}
                className="container-sm d-flex flex-wrap gap-5 px-0 py-2"
              >
                {products &&
                  products.map((product, index) => (
                    <div className="card" style={{ width: "30%" }} key={index}>
                      <div className="row g-0 d-flex justify-content-center">
                        <div
                          className="col-md-4"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            className="cardBox"
                            style={{
                              backgroundColor: "#ececec",
                              borderRadius: ".5rem",
                              width: "70px",
                              height: "70px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={product.images[0]?.url}
                              className=" bg-primary img-fluid rounded-start"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title text-capitalize">
                              {product.name}
                            </h5>
                            <p className="card-text">
                              <small className="text-muted text-capitalize">
                                per piece
                              </small>
                            </p>
                            <span className="card-text fs-5">
                              Rs {product.price}
                            </span>

                            <span
                              className="form-check form-switch d-inline me-2"
                              style={{ position: "absolute", right: "0" }}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </span>
                          </div>
                        </div>
                        <hr style={{ width: "95%" }} />
                        <div className="d-flex p-2 justify-content-between align-items-center">
                          <h5>In Stock: {product.stock}</h5>
                          <button
                            type="button"
                            className="btn bg-success btn-success btn-md"
                            onClick={()=>
                              ProductDetailsHandler(product._id)
                            }
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page10;
