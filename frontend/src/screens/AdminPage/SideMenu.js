import React from "react";
import "../../styles/Admin/SideMenu.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";

import {
  FcList,
  FcSurvey,
  FcManager,
  FcCollapse,
  FcExpand,
} from "react-icons/fc";

import { FaProductHunt, FaCartPlus } from "react-icons/fa";

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <Link to="/admin/adminpage">
        <p>
          <FcSurvey /> Dashboard
        </p>
      </Link>
      <Link to="/admin/orderlist">
        <p>
          <FcList />
          Orders
        </p>
      </Link>
      <Link to="/admin/userlist">
        <p>
          <FcManager /> Users
        </p>
      </Link>

      <TreeView
        defaultCollapseIcon={<FcCollapse />}
        defaultExpandIcon={<FcExpand />}
        className="Tree"
      >
        <TreeItem nodeId="1" label="Products">
          <Link to="/admin/productlist">
            <TreeItem nodeId="2" label="All" icon={<FaProductHunt />} />
          </Link>

          <Link to="/admin/addproduct">
            <TreeItem nodeId="3" label="Create" icon={<FaCartPlus />} />
          </Link>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default SideMenu;
