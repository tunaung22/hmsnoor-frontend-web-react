import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components/AppNavbar/AppNavBar";
import { Flex } from "antd";

function AuthLayout() {
  // const [primary, setPrimary] = useState("#1677ff");

  return (
    <>
      <Flex>
        <Outlet />
      </Flex>
    </>
  );
}

export { AuthLayout };
