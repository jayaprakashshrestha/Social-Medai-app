import React from "react";
import { Sidebar } from "flowbite-react";
import {
  TableCellsIcon,
  UserIcon,
  ArrowRightCircleIcon,
  InboxIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";

const SidebarComponent = (): JSX.Element => {
  return (
    <div className="h-full fixed mt-12 ">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={ChartBarIcon}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse icon={ShoppingCartIcon} label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={InboxIcon}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={UserIcon}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ShoppingBagIcon}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ArrowRightCircleIcon}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TableCellsIcon}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
