import React from 'react'
import Center from './center'
import AdminManage from './modules/admin-manage'
class System extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
       return(
           <Center menuKey='2'>
               <AdminManage />
           </Center>
       )
   }
}

export default System