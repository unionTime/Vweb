import React from 'react'
import Container from './module-container'
import PicturesWall from './pictures-wall'
import { Icon, Form, Row, Col, Input, Upload, Button} from 'antd';
require('../../styles/plants-create.css')
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
const formItemLayout1 = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
}
const inuptMap1 = [
    { label: '标准名称', name: 'plant_sname' },
    { label: '别名', name: 'plant_alias' },
    { label: '拉丁文名', name: 'plant_lname' },
    { label: '科', name: 'plant_family' },
    { label: '属', name: 'plant_genus' },
    { label: '采集范围', name: 'plant_area' }
]
const inuptMap2 = [
    { label: '土壤', name: 'plant_soil' },
    { label: '湿度', name: 'plant_humidity' },
    { label: '朝向', name: 'plant_orientation' },
    { label: '气候', name: 'plant_climate' },
    { label: '经度', name: 'plant_longitude' },
    { label: '纬度', name: 'plant_latitude' }
]
const inuptMap3 = [
    { label: '国内分布区域', name: 'plant_distribution_area' },
    { label: '药性特征', name: 'plant_drug_feature' },
    { label: '恩格勒自然系统', name: 'plant_engler' },
    { label: '林奈人为系统', name: 'plant_linna' }
]
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
    inputItemRender = (arr) => {
        const { getFieldDecorator } = this.props.form;
        return arr.map(item => (<FormItem label={item.label}
            {...formItemLayout} >
            {getFieldDecorator(item.name, {
                rules: [
                    { required: this.state.update, message: '请输入' + item.label }
                ]
            })(
                <Input />
            )}
        </FormItem>))
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
                        {this.inputItemRender(inuptMap1)}
                  </Col >
                  <Col span={8}>
                        {this.inputItemRender(inuptMap2)}
                  </Col >
                  <Col span={8}>
                        {this.inputItemRender(inuptMap3)}
                </Col >
              </Row>
                <FormItem
                    {...formItemLayout1}
                    label={<span><Icon type="file-add" /> 上传文件</span>}
                >
                  <PicturesWall />
                </FormItem>
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
                <FormItem {...formItemLayout1} label=' ' >
                    <Button type="primary" htmlType="submit"><Icon type="plus" />提交 | 上传</Button>
                </FormItem>
        </Form>
        </Container>)
    }
}
export default Form.create({})(PlantsCreate)