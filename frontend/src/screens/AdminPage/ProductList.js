import React, { useEffect } from "react";
import "../../styles/Admin/ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminProduct,
  deleteAdminProduct,
} from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import SideBar from "./SideMenu.js";
import { FcDeleteDatabase } from "react-icons/fc";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useAlert();

  const { products } = useSelector((state) => state.getProducts);

  const { isDeleted } = useSelector((state) => state.updeproductReducer);

  const deleteProductHandler = (id) => {
    alert.success("Product Deleted, Please refresh.");
    dispatch(deleteAdminProduct(id));
  };

  useEffect(() => {
    if (isDeleted) {
      navigate("/admin/adminpage");
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, navigate, isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 180, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 500,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 90,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
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

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        stock: item.countInStock,
        price: item.price,
      });
    });

  return (
    <div>
      <div className="dashboard">
        <SideBar />
        <div className="productslistcontainer">
          <h1 id="productslistheading">All products</h1>

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

export default ProductList;
