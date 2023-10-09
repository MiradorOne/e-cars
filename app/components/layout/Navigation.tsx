import React from "react";
import { Link } from "@remix-run/react";

interface Props {
  ulStyle?: string;
  liStyle?: string;
}

const Navigation = ({ ulStyle, liStyle }: Props) => {
  return (
    <ul className={ulStyle}>
      <Link to={"/"}>
        <li className={liStyle}>All Cars</li>
      </Link>
      <Link to={"/"}>
        <li className={liStyle}> About Us</li>
      </Link>
      <Link to={"/blog"}>
        <li className={liStyle}>Blog</li>
      </Link>
      <Link to={"/"}>
        <li className={liStyle}>Contact</li>
      </Link>
    </ul>
  );
};

export default Navigation;
