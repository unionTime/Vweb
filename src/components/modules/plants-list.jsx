import React from 'react'
import Container from './module-container'
import { Icon, Table, Popconfirm, message, Row, Col} from 'antd';

const expandedRowRender = (record) => {
    return (
        <Row>
            <Col>
                <p>采集范围：{record.plant_area}</p>
                <p>土壤：{record.plant_soil}</p>
                <p>湿度：{record.plant_humidity}</p>
            </Col>
            <Col>
                <p>朝向：{record.plant_orientation}</p>
                <p>气候：{record.plant_climate}</p>
                <p>林奈人为系统：{record.plant_linna}</p>
            </Col>
            <Col>
                <p>经度：{record.plant_longitude}</p>
                <p>纬度：{record.plant_latitude}</p>
                <p>恩格勒自然系统：{record.plant_engler}</p>
            </Col>
        </Row>
    )
}
class PlantsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [{
                key: '1',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                plant_family: '木兰科',
                plant_genus: '木兰属',
                plant_distribution_area: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '2',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                plant_family: '木兰科',
                plant_genus: '木兰属',
                plant_distribution_area: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '3',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                plant_family: '木兰科',
                plant_genus: '木兰属',
                plant_distribution_area: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '4',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                plant_family: '木兰科',
                plant_genus: '木兰属',
                plant_distribution_area: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            }
            ]
        }
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
                width: '10%'
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
                width: '10%',
                render: () => {
                    return (<a href="#">图片</a>)
                }
            },
            {
                title: '删除',
                dataIndex: 'delete',
                key: 'delete',
                width: '10%',
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
        </Container>)
    }
}
export default PlantsList