import React from 'react'
import Container from './module-container'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/plants'
import { Icon, Form, Row, Col, Input, Upload, Button, Modal} from 'antd';
require('../../styles/plants-create.css')
import AddType from './labels'
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
            imgs: [],
            stutas:true,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            tags: [],
            inputVisible: false,
            inputValue: '',
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
    //删除类型
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
    }
    showInput = () => {
        this.setState({ inputVisible: true });
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }
    //新增类型
    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: ''
        });
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.plant == this.props.plant){
            return
        }
        if (nextProps.plant.toJS().success){
            let imgs = nextProps.plant.toJS().data.imgs
            let _imgs = []
            for (let i = 0; i<imgs.length; i++){
                _imgs.push({
                    uid: imgs[i].img_id,
                    name: imgs[i].img_name,
                    status: 'done',
                    url: imgs[i].img_path,
                    img_type: imgs[i].img_type,
                    img_text: imgs[i].img_text
                })
            }
            this.setState({
                type:'update',
                data: nextProps.plant.toJS().data,
                fileList: _imgs,
                tags: nextProps.plant.toJS().data.labels
            })
            let { setFieldsValue } = this.props.form
            setFieldsValue(nextProps.plant.toJS().data)
        }
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let _this =this
        this.props.form.validateFields((err,values) => {
            let imgs = []
            for (let i = 0; i < this.state.fileList.length; i++){
                if (this.state.fileList[i].url){
                    imgs.push({
                        img_path: this.state.fileList[i].url,
                        img_name: this.state.fileList[i].name,
                        img_type: this.state.fileList[i].img_type,
                        img_text: this.state.fileList[i].img_text
                    })
                }else{
                    imgs.push({
                        img_path: this.state.fileList[i].name,
                        img_name:'None',
                        img_type: 'None',
                        img_text: 'None'
                    })
                }
            }
            let obj ={
                ...values,
                imgs: imgs,
                labels:_this.state.tags
            }
            if (_this.state.type == 'create'){
                _this.props.actions.plant_create('/api/v1/manage/plant', obj)
            }
            if (_this.state.type == 'update'){
                obj.plant_id = this.state.data.plant_id
                _this.props.actions.plant_update('/api/v1/manage/plant',obj)
            }
        })
    }
    inputItemRender = (arr) => {
        let { getFieldDecorator } = this.props.form
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
        const { previewVisible, previewImage, fileList, tags, inputVisible, inputValue } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">选择图片</div>
            </div>
        )
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
                        <FormItem {...formItemLayout} label='标签' >
                            <AddType tags={tags} inputVisible={inputVisible} inputValue={inputValue}
                                handleClose={this.handleClose} showInput={this.showInput} handleInputChange={this.handleInputChange} handleInputConfirm={this.handleInputConfirm} />
                        </FormItem>
                </Col >
              </Row>
                <FormItem
                    {...formItemLayout1}
                    label='上传图片'
                >
                    <div className="clearfix">
                        <Upload
                            action="http://upload-z2.qiniup.com"
                            listType="picture-card"
                            fileList={fileList}
                            data={(file) => {
                                let obj = {
                                    token: window.qiniu_token,
                                    key: file.name
                                }
                                return obj
                            }}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 10 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
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