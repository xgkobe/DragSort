/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-05 22:58:04
 */
import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import './index.less';

const { Header, Sider, Content } = Layout;

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const {children} = props;
  const history = useNavigate();

  let location = useLocation();

  // useEffect((a) => {
  //   console.log(location.pathname);
  // }, [location]);

  return (
    <Layout>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onBreakpoint={(value) => setCollapsed(value)}
        onCollapse={(value) => setCollapsed(value)}
        trigger={
          collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined/>
          )
        }
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'home',
              onClick: () => {history('/home')}
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to="/about">about</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
              onClick: () => {history('/nav')}
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })} */}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflowY: 'scroll'
          }}
          className='content'
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;