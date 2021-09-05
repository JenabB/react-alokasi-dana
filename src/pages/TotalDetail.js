import React from "react";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import Helmet from "react-helmet";
const TotalDetail = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Total Dana Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppBarWithBackButton title="Total Dana Detail" />

      <h1>Total</h1>
    </div>
  );
};

export default TotalDetail;
