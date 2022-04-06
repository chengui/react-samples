import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';
import loadable from '@loadable/component';
import routes from './constants/route';
import logo from './assets/logo.png';
import './styles/Layouts.less';

const { Header, Sider, Content, Footer } = Layout;

const Icon = loadable(
  props => import(`@ant-design/icons/es/icons/${props.type}.js`)
);


class Layouts extends React.Component {
  state = {
    title: '',
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  naming = (title) => {
    this.setState({
      title,
    })
  }

  render() {
    return (
      <Layout className='layout'>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className='logo'>
            <Link href='#' to='#' onClick={this.toggle}>
              <img alt='logo' src={logo}/>
              { this.state.collapsed ? '' : 'Dashboard' }
            </Link>
          </div>
          <Menu
            theme='dark'
            mode='inline'
            className='menu'
          >
          {
          routes
            .filter(i => i.navi)
            .map(menu => (
              <Menu.Item key={menu.name}
                icon={
                  <Icon type={menu.icon} />
                }
                className={menu.className}
              >
                <Link
                  href={menu.path} to={menu.path}
                  onClick={this.naming.bind(this, menu.title)}
                >
                  {menu.title}
                </Link>
              </Menu.Item>
            ))
          }
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
	      <Button
	        className="trigger"
	        type="text"
	        icon={this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
     	        onClick={this.toggle} 
	      />
            <span className='profile'>
              <Dropdown
                trigger={['click']}
                overlay={(
                  <Menu>
                    <Menu.Item key='logout'
                      icon={
                        <LogoutOutlined />
                      }
                    >
                      <Link href='/logout' to='/logout'>
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu>
                )}
              >
                <Avatar src={this.props.avatar}/>
              </Dropdown>
            </span>
          </Header>
          <Content className='content'>
            { this.props.children }
          </Content>
          <Footer className='footer'>
            { 'Copyright @' }
            <Link color='inherit' href='mailto:gui.g.chen@gmail.com' to='/'>
              Chen Gui
            </Link>
            { ' ' }
            { new Date().getFullYear() }
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

Layouts.defaultProps = {
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};

export default Layouts;
