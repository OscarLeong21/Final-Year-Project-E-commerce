import React, { useEffect } from "react";
import SideMenu from "./SideMenu.js";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../redux/actions/productActions.js";
import { getAllOrders } from "../../redux/actions/orderActions.js";
import { getAllUsers } from "../../redux/actions/userAction.js";
import "../../styles/Admin/AdminPage.css";

function AdminPage() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       // outOfStock += 1;
  //     }
  //   });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  return (
    <div className="dashboard">
      <SideMenu />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="totalSummary">
          <div className="totalamount">
            <p>
              Total Amount <br /> ${totalAmount}
            </p>
          </div>
          <div className="SummaryCircle">
            <Link to="/admin/productlist">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orderlist">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/userlist">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
