import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const root=[
    {
        name:'首页',
        path:'/admin/home',
        key:'/admin/home'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        key:'/admin/user',
        children:[
            {
                name:'权限管理',
                path:'/admin/user/root',
                key:'/admin/user/root'
            },
            {
                name:'信息管理',
                path:'/admin/user/info',
                key:'/admin/user/info',
                children:[
                    {
                        name:'权限管理1',
                        path:'/admin/user/root',
                        key:'/admin/user/root'
                    },
                    {
                        name:'信息管理1',
                        path:'/admin/user/info',
                        key:'/admin/user/info',
                        children:[
                            {
                                name:'权限管理2',
                                path:'/admin/user/root',
                                key:'/admin/user/root'
                            },
                            {
                                name:'信息管理2',
                                path:'/admin/user/info',
                                key:'/admin/user/info'
                            }
                        ]
                    }
                ]
            }
         ]
    },
    {
        name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'
    }
]
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    }
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.children){
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                        {item.name}
                    </Menu.Item>
                )
            }
        })
    }
    render(){
        return(
            <div>
                <Menu style={{width:256}} mode="vertical" theme="dark">
                    {this.renderItem(root)}
                    {/*{root.map((item,index)=>{
                        return(
                            <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                        )
                    })}*/}
                </Menu>
                {/*<button onClick={this.jump.bind(this,'/admin/home')}>首页</button>
                <button onClick={this.jump.bind(this,'/admin/user')}>用户管理</button>*/}
                {/*<Menu style={{width: 256}} mode="vertical" theme='dark'>
                    <Menu.Item key="1">首页</Menu.Item>
                    <SubMenu title='用户管理'>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        <SubMenu title='用户管理'>
                            <Menu.Item key="1">Option 1</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>,*/}
            </div>
        )
    }
}
export default withRouter(CustomSlider)