/* *
 * 后台管理页面 架构
 *  */
import React from 'react';
import { Layout, Menu } from 'antd';
require('styles/center.css');
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

class Center extends React.Component{
  constructor(props){
      super(props)
  }
  render(){
      return (<Layout>
          < Header style={{ height: '41px' }} >
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[this.props.menuKey]} style={{ lineHeight: '40px' }} >
                  <Menu.Item key='1'><Link to='/manage'>管理中心</Link></Menu.Item>
                  <Menu.Item key='2'><Link to='system'>系统设置</Link></Menu.Item>
            </Menu>
          </Header >
          <Content className='content'>{this.props.children}</Content>
          <Footer className='footer'>
              <span className='footer-title' >黑竹沟高等植物信息管理系统</span>
              <span className='footer-auth' >农禾之家公益发展中心版权所有</span>
          </Footer>
          </Layout>)
  }
}
export default Center