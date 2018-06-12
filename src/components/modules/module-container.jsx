import React from 'react'
require('../../styles/module-container.css')
class Container extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className='module-container'>
                <div className='module-container-header'>
                    <div className='module-container-header-left'>{this.props.headerLeft}</div>
                    <div className='module-container-header-right'>{this.props.headerRight}</div>
                </div>
                {this.props.children}
            </div>)
    }
}
export default Container