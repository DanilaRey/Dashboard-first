import Dashboard from "./pages/Dashboard"
import UserProfile from "./pages/UserProfile"
import Table from "./pages/Table"
import { MdDashboard, MdApi } from 'react-icons/md';
import { FaUserAlt, FaGithub } from 'react-icons/fa';
import BlogPosts from "./pages/BlogPosts";

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard/>,
      element: <Dashboard />,
      layout: "/admin"
    },
    {
      path: "/blog",
      name: "Blog Posts",
      icon:  <FaGithub/>,
      element: <BlogPosts />,
      layout: "/admin"
    },
    {
      path: "/user",
      name: "User Profile",
      icon:  <MdApi/>,
      element: <UserProfile />,
      layout: "/admin"
    },
  ];
  
  export default dashboardRoutes;