import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import "../../styles/Admin/ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  admindeleteUser,
} from "../../redux/actions/userAction.js";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideMenu.js";
import { FcDeleteDatabase } from "react-icons/fc";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useAlert();

  const { users } = useSelector((state) => state.allUsers);

  const { isDeleted } = useSelector((state) => state.delete);

  const deleteProductHandler = (id) => {
    alert.success("User Deleted, Please refresh.");
    dispatch(admindeleteUser(id));
  };

  useEffect(() => {
    if (isDeleted) {
      navigate("/admin/adminpage");
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, navigate, isDeleted]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 200, flex: 0.6 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 120,
      flex: 0.7,
    },

    {
      field: "name",
      headerName: "Name",
      minWidth: 130,
      flex: 0.3,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 130,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.4,
      headerName: "Actions",
      minWidth: 130,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
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

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <div>
      <div className="dashboard">
        <SideBar />
        <div className="productslistcontainer">
          <h1 id="productslistheading">All Users</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
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
