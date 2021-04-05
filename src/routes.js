/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "",
    icon: "",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Data from Google Analytics",
    rtlName: "",
    icon: "",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "App",
    rtlName: "",
    icon: "",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Order",
    rtlName: "قائمة الجدول",
    icon: "",
    component: TableList,
    layout: "/admin",
  },


];
export default routes;
