import { useEffect } from "react";
import { withRouter } from "next/router";

const Home = ({ router }) => {
  useEffect(() => {
    router.push("/login");
  });
  return null;
};

export default withRouter(Home);
