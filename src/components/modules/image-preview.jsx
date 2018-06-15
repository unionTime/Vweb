import React from 'react'
require('../../styles/image-preview.css')
class ImagesPreview extends React.Component{
    constructor(props){
        super(props)
    }
    click = (e) => {
        console.log(this.refs.image)
    }
    render(){
        return (<div className='images-active'>
             <div className='model'></div>
             <div className='image-container'>
                <img className='image' ref='image' src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
             </div>
        </div>)
    }
}
export default ImagesPreview