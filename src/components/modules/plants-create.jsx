import React from 'react'
import Container from './module-container'
import PicturesWall from './pictures-wall'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/plants'
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
            update:false,
            type:'create',
            imgs:[],
            label:[],
            data:{
                plant_sname: '',
                plant_alias: '',
                plant_lname: '',
                plant_family: '',
                plant_genus: '',
                plant_area: '',
                plant_soil: '',
                plant_humidity: '',
                plant_orientation: '',
                plant_climate: '',
                plant_longitude: '',
                plant_latitude: '',
                plant_distribution_area: '',
                plant_drug_feature: '',
                plant_engler: '',
                plant_linna: '',
                imgs: [],
                labels: []
            }
        }
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.plant == this.props.plant){
            return
        }
        if (nextProps.plant.toJS().success){
            this.setState({
                type:'update',
                data: nextProps.plant.toJS().data
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let _this =this
        this.props.form.validateFields((err,values) => {
            let obj ={
                plant_sname: values.plant_sname,
                plant_alias: values.plant_alias,
                plant_lname: values.plant_lname,
                plant_family: values.plant_family,
                plant_genus: values.plant_genus,
                plant_area: values.plant_area,
                plant_soil: values.plant_soil,
                plant_humidity: values.plant_humidity,
                plant_orientation: values.plant_orientation,
                plant_climate: values.plant_climate,
                plant_longitude: values.plant_longitude,
                plant_latitude: values.plant_latitude,
                plant_distribution_area: values.plant_distribution_area,
                plant_drug_feature: values.plant_drug_feature,
                plant_engler: values.plant_engler,
                plant_linna: values.plant_linna,
                imgs: _this.state.imgs,
                labels:_this.state.label
            }
            if (_this.state.type == 'create'){
                _this.props.actions.plant_create('/api/v1/manage/plant', obj)
            }
            if (_this.state.type == 'update'){
                _this.props.actions.plant_update('/api/v1/manage/plant',obj)
            }
        })
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
    upload = (e) => {
    }
    onChange = (file, fileList) => {
        return false
    }
    render(){
        return (<Container
            headerLeft={<span><Icon type="plus" /> {this.state.type == 'create'? '新增植物':'更新植物'}</span>}
               headerRight={null} >
        <Form className="fromcss"
                layout="horizontal"
                onSubmit={this.handleSubmit}
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
                    <Button type="primary" htmlType="submit"><Icon type="plus" />{this.state.type == 'create' ? ' 提交 ' : '更新'}</Button>
                </FormItem>
        </Form>
        </Container>)
    }
}
const mapStateToProps = state => {
    let { plant_create, plant} = state;
    return { plant_create, plant}
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(PlantsCreate))