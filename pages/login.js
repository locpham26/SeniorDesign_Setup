import { AuthLayout } from "@core";

const Login = () => {
  return <h1>Login</h1>;
};

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
