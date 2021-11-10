import { AppLayout } from "@core";
import { Button } from "antd";

const Home = () => {
  return <Button>Click me</Button>;
};

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
