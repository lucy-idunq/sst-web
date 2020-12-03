
import React from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import HouseTwoToneIcon from '@material-ui/icons/HouseTwoTone';
// import GroupIcon from "@material-ui/icons/Group";
// import PermMediaIcon from "@material-ui/icons/PermMedia";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Orders",
    icon: <ShoppingBasketIcon />,
    link: "/orders",
  },
  {
    title: "Items",
    icon: <ListIcon />,
    link: "/items",
  },
  {
    title: "Invoice",
    icon: <DescriptionIcon />,
    link: "/invoice",
  },
  {
    title: "Delivery",
    icon: <DepartureBoardIcon />,
    link: "/delivery",
  },
  {
    title: "Inventory Stock",
    icon: <StorefrontTwoToneIcon />,
    link: "/inventory",
  },
  {
    title: "Warehouse",
    icon: <HouseTwoToneIcon />,
    link: "/warehouse",
  },
];