import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon} from 'antd';
/* *
 * --------------
 * 新增标签类型
 * --------------
 *  */
class AddType extends Component {
    constructor(props) {
        super(props)
    }
    saveInputRef = input => this.input = input

    render() {
        const { tags, inputVisible, inputValue } = this.props;
        return (
            <div>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag key={tag} closable={true} afterClose={() => this.props.handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.props.handleInputChange}
                        onBlur={this.props.handleInputConfirm}
                        onPressEnter={this.props.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag
                        onClick={this.props.showInput}
                        style={{ background: '#fff', borderStyle: 'dashed' }}
                    >
                        <Icon type="plus" /> 新增
              </Tag>
                )}
            </div>
        );
    }
}
export default AddType