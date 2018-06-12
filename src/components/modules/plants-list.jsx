import React from 'react'
import Container from './module-container'
import { Icon, Table, Popconfirm, message } from 'antd';
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
                familia: '木兰科',
                genus: '木兰属',
                carea: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '2',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                familia: '木兰科',
                genus: '木兰属',
                carea: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '3',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                familia: '木兰科',
                genus: '木兰属',
                carea: '黑竹沟马里冷旧、蜂巢岩',
                darea: '生于海拔1 400-3 000米的潮湿的阔叶林中'
            },
            {
                key: '4',
                plant_id: '000001',
                plant_sname: '凹叶木兰',
                plant_alias: '姜朴、应春花、厚皮（四川）',
                familia: '木兰科',
                genus: '木兰属',
                carea: '黑竹沟马里冷旧、蜂巢岩',
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
                dataIndex: 'familia',
                key: 'familia',
                width: '5%'
            },
            {
                title: '属',
                dataIndex: 'genus',
                key: 'genus',
                width: '5%'
            },
            {
                title: '区域',
                dataIndex: 'carea',
                key: 'laber_id',
                width: '10%'
            },
            {
                title: '介绍',
                dataIndex: 'darea',
                key: 'darea',
                width: '30%'
            },
            {
                title: '地理信息编号',
                dataIndex: 'geo_id',
                key: 'geo_id',
                width: '10%'
            },
            {
                title: '详情',
                dataIndex: 'detail',
                key: 'detail',
                width: '5%',
                render: () => {
                    return (<a href="#">详情</a>)
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
            <Table loading={this.state.loading} style={{ backgroundColor: '#fff' }} dataSource={this.state.data} columns={columns}
                pagination={10}
            />
        </Container>)
    }
}
export default PlantsList