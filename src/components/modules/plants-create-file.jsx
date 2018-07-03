import React from 'react'
import Container from './module-container'
import { Icon, Form, Row, Col, Input, Upload, Button } from 'antd';
const FormItem = Form.Item;
const props = {
    action: 'http://upload-z2.qiniup.com',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: []
};

const formItemLayout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
}
const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
}
class PlantsCreateFile extends React.Component{
    constructor(props){
        super(props)
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (<Container headerLeft={<span><Icon type="plus" /> 批量创建</span>}
            headerRight={null}>
            <Form className="fromcss"
                layout="horizontal"
            >
             <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout1}
                            label='文件'
                        >
                            <div className="dropbox">
                                {getFieldDecorator('dragger', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile
                                })(
                                    <Upload.Dragger name="file" accept="file" action="/api/v1/manage/batch" headers={{
                                        'X-HZG-USER-ID': window.XHZGUSERID,
                                        'Authorization': 'HZG ' + window.Authorization}}>
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">点击选择文件或拖拽文件到此</p>
                                        <p className="ant-upload-hint">支持execl文件</p>
                                    </Upload.Dragger>
                                )}
                            </div>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout1}
                            label='图片'
                        >
                            <Upload {...props}
                                data={(file) => {
                                    let obj = {
                                        token: window.qiniu_token,
                                        key: file.name
                                    }
                                    return obj
                                }}
                                >
                                <Button>
                                    <Icon type="upload" /> 图片
    </Button>
                            </Upload>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem {...formItemLayout} label=' ' >
                    <Button type="primary" htmlType="submit"><Icon type="plus" /> 完成 </Button>
                </FormItem>
            </Form>
        </Container>)
    }
}
export default Form.create({})(PlantsCreateFile)