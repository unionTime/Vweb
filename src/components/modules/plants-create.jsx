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
        return arr.map((item,index) => (<FormItem key={index} label={item.label}
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
                    label='上传图片'
                >
                  <PicturesWall />
                </FormItem>
                <FormItem {...formItemLayout1} label=' ' >
                    <Button type="primary" htmlType="submit"><Icon type="plus" /> 提交 | 更新 </Button>
                </FormItem>
        </Form>
        </Container>)
    }
}
export default Form.create({})(PlantsCreate)