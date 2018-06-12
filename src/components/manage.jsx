import React from 'react'
import Center from './center'
import PlantsCreate from './modules/plants-create'
import PlantsList from './modules/plants-list'
class Manage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<Center menuKey='1'>
            <PlantsCreate />
            <PlantsList />
        </Center>)
    }
}
export default Manage
