import React from 'react'
import { Icon,message} from 'antd';

require('../../styles/image-preview.css')
class ImagesPreview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active:false,
            index:0
        }
    }
    close = () => {
      this.setState({
          active:false
      })
    }
    left = () => {
      let index = this.state.index
      if(index === 0){
         // 到底了
          message.warn('到底了',1.5)
      }else{
          this.setState({
              index:index -1
          })
      }
    }
    right =() => {
        let len = this.props.images.length
        let index = this.state.index +1
        if (index === len) {
            // 到底了
            message.warn('到底了', 1.5)
        } else {
            this.setState({
                index: index
            })
        }
    }
    componentWillReceiveProps(nextProps){
            this.setState({
                active: nextProps.active
            })
    }
    download =() => {
        window.location.href =this.props.images[this.state.index]
    }
    render(){
        return (<div className={this.state.active ? 'images-active' :'images-done'}>
             <div className='model'></div>
             <div className='model-container'>
                <Icon type="left" onClick={this.left} className='icon' />
                <div className='image-container'>
                    <Icon type="close" onClick={this.close} className='image-close _icon' />
                    <img className='image' src={this.props.images[this.state.index]} />
                </div>
                <Icon type="right" onClick={this.right} className='icon' />
                <Icon type="download" onClick={this.download} className='image-download _icon'/>
             </div>
        </div>)
    }
}
export default ImagesPreview