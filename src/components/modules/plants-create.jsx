import React from 'react'
import Container from './module-container'
import { Icon, Form, Row, Col, Input, Upload} from 'antd';
import Img from 'react-image'
require('../../styles/plants-create.css')
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
};
const formItemLayout1 = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
};
class PlantsCreate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            update:false
        }
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (<Container
            headerLeft={<span><Icon type="plus" /> 新增植物</span>}
               headerRight={null} >
        <Form className="fromcss"
                layout="horizontal"
                >
              <Row>
                    <Col span={8}>
                        <FormItem label="名称"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="名称"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="名称"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                  </Col >
                  <Col span={8}>
                        <FormItem label="种类"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="种类"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="种类"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                 </Col >
                  <Col span={8}>
                        <FormItem label="属"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="属"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                        <FormItem label="属"
                            {...formItemLayout} >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: this.state.update, message: '请输入姓名' }
                                ]
                            })(
                                <Input disabled={this.state.update} placeholder="请输入姓名" />
                            )}
                        </FormItem>
                </Col >
              </Row>
              <div className='upload-img'>
                <div className='upload-img-title'><Icon type="file-jpg" /> 上传图片:</div>
                <div className='upload-img-arr'>
                        <Img src={['../../images/yeoman.png', '../../images/yeoman.png']} />
                </div>
              </div>
              <div className='upload-file'>
                    <FormItem
                        {...formItemLayout1}
                        label={<span><Icon type="file-add" /> 上传文件</span>}
                    >
                        <div className="dropbox">
                            {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile
                            })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">点击选择文件或拖拽文件到此</p>
                                    <p className="ant-upload-hint">支持execl文件</p>
                                </Upload.Dragger>
                            )}
                        </div>
                    </FormItem>
              </div>
        </Form>
        </Container>)
    }
}
export default Form.create({})(PlantsCreate)