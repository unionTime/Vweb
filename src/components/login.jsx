/* *
 * 登录页面
 *  */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'styles/login.css';
const FormItem = Form.Item;

class LoginContainer extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const _this = this;
        this.props.form.validateFields((err, values) => {
            // if (!err) {

            //     _this.props.loginFetch('/api/department/login', {
            //         tel: values.userName,
            //         password: values.password
            //     });
            // }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login-conatiner'>
               <div className='big_title'>
                    <span>黑竹沟高等植物信息管理系统</span>
               </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请正确输入账号，默认为注册时的电话。' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账号" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请正确输入密码' }]
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>记住</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                </Button>
                    </FormItem>
                </Form>
                <div className='bottom_title'>
                    <span>农禾之家公益发展中心版权所有</span>
                </div>
            </div>
            
        )
    }
}
export default Form.create()(LoginContainer)
