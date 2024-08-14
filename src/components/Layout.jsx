import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({title,children}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
