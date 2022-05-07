import Cookies from "js-cookie";
import { decode } from "js-base64";
import { useState, useEffect } from "react";
// import { client, customerQuery } from "@graphql";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const encodedToken = Cookies.get("access_token");
    const token = encodedToken && decode(encodedToken);
    // client(customerQuery(token)).then((res) => {
    //   if (res?.customer) {
    //     setIsLoggedIn(true);
    //   }
    // });
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
