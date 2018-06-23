import React from 'react'
import Container from './module-container'
import ImagesPreview from './image-preview'
import { Icon, Table, Popconfirm, message, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/plants'

class PlantsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            previewImages: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
            previewImagesActive:false,
            data: []
        }
    }
    componentDidMount(){
        this.props.actions.plants('/api/v1/manage?page=1&num=20')
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.plants.toJS().success){
            this.setState({
                data: nextProps.plants.toJS().data.plant_records
            })
        }
    }
    preview = () => {
      this.setState({
          previewImagesActive:true
      })
    }
    /* 删除 */
    confirm = () => {
    }
    cancel = () => {
        message.error('取消');
    }
    expandedRowRender = (record) => {
        return (
            <Row>
                <Col span={8}>
                    <p>采集范围：{record.plant_area}</p>
                    <p>土壤：{record.plant_soil}</p>
                    <p>湿度：{record.plant_humidity}</p>
                </Col>
                <Col span={8}>
                    <p>朝向：{record.plant_orientation}</p>
                    <p>气候：{record.plant_climate}</p>
                    <p>林奈人为系统：{record.plant_linna}</p>
                </Col>
                <Col span={8}>
                    <p>经度：{record.plant_longitude}</p>
                    <p>纬度：{record.plant_latitude}</p>
                    <p>恩格勒自然系统：{record.plant_engler}</p>
                </Col>
            </Row>
        )
    }
    render() {
        console.log(this.state.data)
        const columns = [
            {
                title: '植物编号',
                dataIndex: 'plant_id',
                key: 'plant_id',
                width: '10%'
            },
            {
                title: '标准名称',
                dataIndex: 'plant_sname',
                key: 'plant_sname',
                width: '10%'
            },
            {
                title: '别名',
                dataIndex: 'plant_alias',
                key: 'plant_alias',
                width: '10%'
            },
            {
                title: '科',
                dataIndex: 'plant_family',
                key: 'plant_family',
                width: '5%'
            },
            {
                title: '属',
                dataIndex: 'plant_genus',
                key: 'plant_genus',
                width: '5%'
            },
            {
                title: '分布区域',
                dataIndex: 'plant_distribution_area',
                key: 'plant_distribution_area',
                width: '15%'
            },
            {
                title: '药性特征',
                dataIndex: 'plant_drug_feature',
                key: 'plant_drug_feature',
                width: '20%'
            },
            {
                title: '图片',
                dataIndex: 'imgs',
                key: 'imgs',
                width: '5%',
                render: (imgs) => {
                    return (<a  onClick={() => this.preview(imgs)} >图片</a>)
                }
            },
            {
                title: '操作',
                dataIndex: 'update',
                key: 'update',
                width: '5%',
                render: () => {
                    return (<a href="#">更新</a>)
                }
            },
            {
                title: '删除',
                dataIndex: 'delete',
                key: 'delete',
                width: '5%',
                render: (text, record) => {
                    return (<Popconfirm title="你确定要删除该用户吗？" onConfirm={() => this.confirm(record)} onCancel={this.cancel} okText="是" cancelText="否">
                        <a href="#">删除</a>
                    </Popconfirm>)
                }
            }
        ]
        return (<Container
            headerLeft={<span><Icon type="appstore-o" /> 植物列表</span>}
            headerRight={null} >
            <Table loading={this.state.loading} style={{ backgroundColor: '#fff' }} dataSource={this.state.data} expandedRowRender={record => this.expandedRowRender(record)} columns={columns}
                pagination={10}
            />
            <ImagesPreview images={this.state.previewImages} active={this.state.previewImagesActive} />
        </Container>)
    }
}
const mapStateToProps = state => {
    let { plants } = state
    return { plants }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PlantsList);