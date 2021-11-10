import styled from "styled-components";
import { Layout, Menu, Input, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const StyledLayout = styled(Layout)`
  height: 100%;
  .ant-layout-sider {
    background-color: white;
    border-right: 1px solid #ddddee;
  }
`;

const StyledNestedLayout = styled(Layout)`
  background-color: white;
  .ant-layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px 16px;
    .ant-input-affix-wrapper {
      width: 60%;
    }
  }
`;

const AppLayout = ({ children }) => {
  return (
    <StyledLayout>
      <Sider></Sider>
      <StyledNestedLayout>
        <Header>
          <Input
            size="large"
            placeholder="Search for data"
            prefix={<SearchOutlined />}
          />
          <Avatar size="large">LP</Avatar>
        </Header>
        <Content>{children}</Content>
      </StyledNestedLayout>
    </StyledLayout>
  );
};

export default AppLayout;
