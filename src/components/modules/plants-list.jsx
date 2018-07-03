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
            loading: true,
            previewImages: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
            previewImagesActive:false,
            data: [],
            page:1,
            num:50,
            len:0,
            del_record:{}
        }
    }
    componentDidMount(){
        this.plants('/api/v1/manage?page=1&num=50')
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.plants == this.props.plants){
            return
        }
        if (nextProps.plants.toJS().success){
            let data = [...this.state.data, ...nextProps.plants.toJS().data.plant_records]
            this.setState({
                data: data,
                loading:false,
                page: this.state.page + 1
            })
        }
        if (nextProps.plants.toJS().isFail){
            this.setState({
                loading: false
            })
        }
        if (nextProps.plant_delete != this.props.plant_delete&&nextProps.plant_delete.toJS().success){
            
        }
    }
    preview = (imgs) => {
      this.setState({
          previewImagesActive:true,
          previewImages: imgs
      })
    }
    /* 删除 */
    confirm = (record) => {
        this.setState({
            del_record: record
        })
        this.props.actions.plant_delete('/api/v1/manage/plant', {plant_ids: [record.plant_id]})
        this.updateList(record)
    }
    updateList = (record) => {
        let data = this.state.data;
        for (let i = 0; i < data.length; i++) {
            if (record.plant_id == data[i].plant_id) {
                data.splice(i, 1);
                this.setState({
                    data: data
                })
            }
        }
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
    paginationChange = (agination) => {
        let { current, pageSize } = agination;
        //如果为最后一页就加载
        if (current * pageSize == (this.state.page - 1) * 50) {
            this.plants('/api/v1/manage?num=50&page=' + this.state.page);
        }
    }
    plants = (url) => {
        this.props.actions.plants(url)
    }
    render() {
        const columns = [
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
                width: '25%'
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
                render: (plant_id, record) => {
                    return (<a href="#" onClick={() => this.props.actions.plant('/api/v1/manage/plant/'+record.plant_id+'?operation=1')} >更新</a>)
                }
            },
            {
                title: '删除',
                dataIndex: 'delete',
                key: 'delete',
                width: '5%',
                render: (text, record) => {
                    return (<Popconfirm title="你确定要删除该植物吗？" onConfirm={() => this.confirm(record)} onCancel={this.cancel} okText="是" cancelText="否">
                        <a href="#">删除</a>
                    </Popconfirm>)
                }
            }
        ]
        return (<Container
            headerLeft={<span><Icon type="appstore-o" /> 植物列表</span>}
            headerRight={null} >
            <Table onChange={this.paginationChange} loading={this.state.loading} rowKey={(record) => record.plant_id} style={{ backgroundColor: '#fff' }} dataSource={this.state.data} expandedRowRender={record => this.expandedRowRender(record)} columns={columns}
                pagination={10}
            />
            <ImagesPreview images={this.state.previewImages} active={this.state.previewImagesActive} />
        </Container>)
    }
}
const mapStateToProps = state => {
    let { plants ,plant_delete} = state
    return { plants ,plant_delete}
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PlantsList);