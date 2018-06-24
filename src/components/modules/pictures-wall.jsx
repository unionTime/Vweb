import React from 'react'
import { Upload, Icon, Modal } from 'antd';
class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: []
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        });
    }

    handleChange = ({fileList}) => {
        console.log(fileList)
        this.setState({ fileList })}

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">选择图片</div>
            </div>
        )
        return (
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
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default PicturesWall