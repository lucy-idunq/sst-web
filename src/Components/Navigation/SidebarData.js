
import React from "react";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import HouseTwoToneIcon from '@material-ui/icons/HouseTwoTone';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InboxIcon from '@material-ui/icons/Inbox';
import AllOutIcon from '@material-ui/icons/AllOut';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FaceIcon from '@material-ui/icons/Face';
// import GroupIcon from "@material-ui/icons/Group";
// import PermMediaIcon from "@material-ui/icons/PermMedia";

export const SidebarData = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    id: "order",
    title: "Orders",
    icon: <ShoppingBasketIcon />,
    link: "/orders",
  },
  {
    id: "item",
    title: "Items",
    icon: <ListIcon />,
    link: "/items",
  },
  {
    id: "invoice",
    title: "Invoice",
    icon: <DescriptionIcon />,
    link: "/invoice",
  },
  {
    id: "delivery",
    title: "Delivery",
    icon: <DepartureBoardIcon />,
    link: "/delivery",
  },
  {
    id: "inventory",
    title: "Inventory Stock",
    icon: <StorefrontTwoToneIcon />,
    link: "/inventory",
  },
  {
    id: "stock",
    title: "Stocks",
    icon: <ShowChartIcon />,
    // link: "-",
    children: [
      {
        id: "stock",
        title: "Stock in",
        icon: <InboxIcon />,
        link: 'stock-in'
      },
      {
        id: "stock",
        title: "Stock out",
        icon: <AllOutIcon />,
        link: 'stock-out'
      },
      {
        id: "stock",
        title: "Stock return",
        icon: <KeyboardReturnIcon />,
        link: 'stock-return'
      },
    ]
  },
  {
    id: "warehouse",
    title: "Warehouse",
    icon: <HouseTwoToneIcon />,
    link: "/warehouse",
  },
  {
    id: "users",
    title: "Users",
    icon: <SupervisorAccountIcon />,
    // link: "customers",
    children: [
      {
        id: "users",
        title: "Customer",
        icon: <PersonIcon />,
        link: 'customers'
      },
      {
        id: "users",
        title: "Staff",
        icon: <AssignmentIndIcon />,
        link: 'staff'
      },
      {
        id: "users",
        title: "Admin",
        icon: <FaceIcon />,
        link: 'admin'
      },
    ]
  },
];

