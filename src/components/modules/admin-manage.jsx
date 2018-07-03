import React from 'react'
import Container from './module-container'
import { Icon, Row, Col, Input, Form, Button} from 'antd';
require('../../styles/admin-manage.css')
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/admin'
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 }
};
class AdminManage extends React.Component{
  constructor(props){
      super(props)
      this.state={
          update:false
      }
  }
    create = (e) => {
        e.preventDefault();
        let _this = this
        this.props.form.validateFields((err, values) => {
            _this.props.actions.register('/api/v1/register',{
                usr_id: values.usr_id,
                pwd: values.pwd2
            })
        })
    }
    update = (e) => {
        e.preventDefault()
        let _this = this
        this.props.form.validateFields((err, values) => {
            _this.props.actions.update_pwd('/api/v1/password',{
                old_pwd: values.old_pwd,
                pwd: values.pwd1
            })
        })
    }
  render(){
      const { getFieldDecorator } = this.props.form;
      return (<Container headerLeft={<span><Icon type="plus" /> 管理员管理</span>}
          headerRight={null} >
          <div className='admin'>
              <div className='admin-update' >
              <div className='title-item'><Icon type="sync" /> 更新密码</div>
                  <Form onSubmit={this.update} >
                <Row>
                      <Col span={6}>
                          <FormItem label="密码"
                              {...formItemLayout} >
                              {getFieldDecorator('old_pwd', {
                                  rules: [
                                      { required: this.state.update, message: '请输入旧密码' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请输入旧密码" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem label="再次输入"
                              {...formItemLayout} >
                              {getFieldDecorator('old_pwd_again', {
                                  rules: [
                                      { required: this.state.update, message: '请再次输入旧密码' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请再次输入旧密码" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem label="新密码"
                              {...formItemLayout} >
                              {getFieldDecorator('pwd1', {
                                  rules: [
                                      { required: this.state.update, message: '请输入新密码' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请输入新密码" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem {...formTailLayout} >
                              <Button type="primary" htmlType="submit"><Icon type="plus" />更新</Button>
                          </FormItem>
                      </Col>
                </Row>
            </Form>
          </div>
          <div className='admin-create'>
                  <div className='title-item'><Icon type="user-add" /> 新增管理员</div>
                  <Form onSubmit={this.create} >
                  <Row>
                      <Col span={6}>
                          <FormItem label="账号"
                              {...formItemLayout} >
                              {getFieldDecorator('usr_id', {
                                  rules: [
                                      { required: this.state.update, message: '请输入管理员账号' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请输入管理员账号" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem label="密码"
                              {...formItemLayout} >
                              {getFieldDecorator('pwd2', {
                                  rules: [
                                      { required: this.state.update, message: '请输入密码' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请输入密码" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem label="再次密码"
                              {...formItemLayout} >
                              {getFieldDecorator('_pwd', {
                                  rules: [
                                      { required: this.state.update, message: '请输入密码' }
                                  ]
                              })(
                                  <Input disabled={this.state.update} placeholder="请输入密码" />
                              )}
                          </FormItem>
                      </Col>
                      <Col span={6}>
                          <FormItem {...formTailLayout} >
                              <Button type="primary" htmlType="submit"><Icon type="plus" />注册</Button>
                          </FormItem>
                      </Col>
                  </Row>
              </Form>
          </div>
          </div>
      </Container>)
  }
}
const mapStateToProps = state => {
    let { plant_create, plant } = state;
    return { plant_create, plant }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(AdminManage))