import { Palette, Component, Home } from "lucide-react";
import NavLinkItem from "./nav-link-item";

const itemsArray = [
  { title: "Home", icon: Home, redirect: "/" },
  { title: "Style Guide", icon: Palette, redirect: "/design-tokens" },
  { title: "Components", icon: Component, redirect: "/button-demo" },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-between gap-4">
      {itemsArray.map((item, index) => {
        return <NavLinkItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default NavLinks;
