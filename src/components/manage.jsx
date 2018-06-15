import React from 'react'
import Center from './center'
import PlantsCreate from './modules/plants-create'
import PlantsCreateFile from './modules/plants-create-file'
import PlantsList from './modules/plants-list'
import ImagesPreview from './modules/image-preview'
class Manage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<Center menuKey='1'>
            <ImagesPreview />
            <PlantsCreate />
            <PlantsCreateFile />
            <PlantsList />
        </Center>)
    }
}
export default Manage
