import React, { useEffect } from "react";
import "./Page11.css";
// import logo from "../../Assets/Images/logo3.png";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, getAllCategories } from "../../redux/actions/categoryAction";

function Page11() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error,loading,categoryList} = useSelector((state) => state.allCategories);

  console.log(categoryList&&categoryList,"=========== category list");

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }

    dispatch(getAllCategories())
  }, [dispatch,error]);

  const addCategoryHandler=()=>{
    navigate('/category/new')
  }


  return (
    <div>
      <div className="mainsection">
        {/* <div className="section1">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>
          <div>
            <ul className="navbar-nav justify-content-end flex-grow-1 ">
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Home</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Orders</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">All Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn px-4 ">Payments</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className=" s1-btn btn  px-4 ">Logout</button>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="section2 ">
          <nav
            class="s2-navabar navbar navbar-expand-lg "
            style={{ backgroundColor: "white" }}
          >
            <div class="container-fluid px-5">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <NavLink className="fw-bold navbar-brand" to="/">
                Catagories
              </NavLink>
              <button
                class="btn btn-outline-success btnround"
                type="submit"
              ></button>
            </div>
            <hr />
          </nav>
          <div className="d-flex justify-content-between  align-items-center px-2 py-1">
            <div className="p-5">
              <input
                class="form-control px-5"
                type="text"
                value="Search for catagories here..."
                aria-label="readonly input example"
                readonly
              />
            </div>
            <div>
              <div className="d-flex px-4 ">
                {/* <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Order status </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}
                <button type="button" class="btn btn-sm btn-link me-5">
                  Reorder Catagory
                </button>
                <div className="p2-selection mx-2 ">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>All nurseries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                {/* <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Lifetime</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}
                <button
                  type="button"
                  className="btn-page4 btn btn-success btn-md"
                  onClick={addCategoryHandler}
                >
                  + Add New Category
                </button>
              </div>
            </div>
          </div>
          {/* <div className="section2-btn d-flex  px-5 ">
            <button className="s2-btn">All</button>
            <button className="s2-btn">Pending</button>
            <button className="s2-btn">Shipped</button>
            <button className="s2-btn">Delivered</button>
            <button className="s2-btn">Cancelled</button>
          </div> */}
          <div className="s2-table px-5 m-3 ">
            <div className="s2-table py-4">
              <table class="table table-borderless table-sm ">
                <thead className="s2-table-nava">
                  <tr>
                    <th scope="col">IMG</th>
                    <th scope="col">Category Name</th>
                    {/* <th scope="col">Customer</th>
                    <th scope="col">Items</th> */}
                    <th scope="col">Products</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sales</th>
                    <th scope="col">Nursery Name</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider  my-5">
                 {categoryList&&categoryList.map((category,index)=>(
                   <tr key={index}>
                   <th scope="row"><img src={category?.avatar[0]?.url} alt="..." /></th>
                   <td>{category?.name}</td>
                   {/* <td>CustomerName </td> */}
                   <td> 1 </td>
                   {/* <td>COD</td> */}
                   <td>
                     <div>
                       <input
                         class="form-check-input s2-radio"
                         type="radio"
                         name="radioNoLabel"
                         id="radioNoLabel1"
                         value="Pending"
                         aria-label="..."
                       />{" "}
                       Pending
                     </div>
                   </td>
                   <td>Rs 320</td>
                   <td>Nursery Name</td>
                   {/* <td>
                     <select
                       class="form-select-sm px-3"
                       aria-label="Default select example"
                     >
                       <option selected>Select Nursery </option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                     </select>
                   </td> */}
                 </tr>
                 ))}
                  <tr>
                    <th scope="row">img</th>
                    <td>Flowers</td>
                    {/* <td>CustomerName </td> */}
                    <td> 2 </td>
                    {/* <td>COD</td> */}
                    <td>
                      <div>
                        <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>Nursery Name</td>
                    {/* <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">img</th>
                    <td>Flowers</td>
                    {/* <td>CustomerName </td> */}
                    <td> 1 </td>
                    {/* <td>COD</td> */}
                    <td>
                      <div>
                        <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>Nursery Name</td>
                    {/* <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page11;
