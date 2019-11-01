import React from 'react'
import Style from './index.module.less'
import { Layout, Menu, Icon } from 'antd';
import CustomSlider from '../../components/customSlider/customSlider'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends React.Component{
    render(){
        return(
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <CustomSlider></CustomSlider>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        /*  <div className={Style.admin}>
                <div className="left">
                    侧边栏
                </div>
                <div className="right">
                    <div>header</div>
                    <div>
                        {this.props.children}
                    </div>
                    <div>footer</div>
                </div>
            </div>  */
        )
    }
}
export default Admin