import React from "react";
import { Link } from "@remix-run/react";

interface Props {
  ulStyle?: string;
  liStyle?: string;
}

const Navigation = ({ ulStyle, liStyle }: Props) => {
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>All Cars</li>
      <li className={liStyle}> About Us</li>
      <Link to={"/blog"}>
        <li className={liStyle}>Blog</li>
      </Link>
      <li className={liStyle}>Contact</li>
    </ul>
  );
};

export default Navigation;
