import React, { useEffect } from "react";
import "../styles/Myorder.css";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { myOrders } from "../redux/actions/orderActions.js";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";

const Myorder = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { orders } = useSelector((state) => state.myOrders);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch, alert]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 250, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return <Link to={`/order/${params.getValue(params.id, "id")}`}></Link>;
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  return (
    <div className="myOrdersPage">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        className="myOrdersTable"
        autoHeight
      />

      <Typography id="myOrdersHeading">
        {userInfo.user.name}'s Orders
      </Typography>
    </div>
  );
};

export default Myorder;
