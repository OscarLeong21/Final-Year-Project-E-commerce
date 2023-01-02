import React, { useEffect } from "react";
import "../../styles/Admin/ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  getAllOrders,
  deleteAdminOrder,
} from "../../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";
import { FcDeleteDatabase } from "react-icons/fc";
import SideBar from "./SideMenu.js";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useAlert();

  const { orders } = useSelector((state) => state.allOrders);

  const { isDeleted } = useSelector((state) => state.updateorderReducer);

  const deleteOrderHandler = (id) => {
    alert.success("Order Deleted, Please refresh.");
    dispatch(deleteAdminOrder(id));
  };

  useEffect(() => {
    if (isDeleted) {
      navigate("/admin/adminpage");
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, navigate, isDeleted]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 400, flex: 0.6 },

    {
      field: "address",
      headerName: "Address",
      minWidth: 300,
      flex: 0.4,
    },
    {
      field: "city",
      headerName: "City",
      minWidth: 300,
      flex: 0.4,
    },
    {
      field: "country",
      headerName: "Country",
      minWidth: 300,
      flex: 0.4,
    },
    {
      field: "phonnum",
      headerName: "PhonNo",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.4,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 220,
      flex: 0.3,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 200,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <FcDeleteDatabase />
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        address: item.shippingInfo.address,
        city: item.shippingInfo.city,
        country: item.shippingInfo.country,
        phonnum: item.shippingInfo.phoneNum,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div>
      <div className="dashboard">
        <SideBar />
        <div className="productslistcontainer">
          <h1 id="productslistheading">All Orders</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={11}
            disableSelectionOnClick
            className="Listtable"
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
