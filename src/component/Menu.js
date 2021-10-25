import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <li className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
}
const sites = [
  {
    label: "Home",
    to: "/",
    exact: true,
  },
  {
    label: "About",
    to: "/about",
    exact: false,
  },
  {
    label: "Product",
    to: "/product",
    exact: false,
  },
  {
    label: "Đăng nhập",
    to: "/login",
    exact: false,
  },
];
class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        {sites.map((site, index) => (
          <MenuLink
            to={site.to}
            key={index}
            activeOnlyWhenExact={site.exact}
            label={site.label}
          />
        ))}
      </ul>
    );
  }
}
export default Menu;
