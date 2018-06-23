import { message } from 'antd';
class Verification {
    resStatus(response, success, error){
       //请求成功
       if (response.status == 200){
           if (response.ok){
               message.success('成功', 1.5)
               return response.json().then(res => success(res))
           }else{
               message.error('失败', 2)
               return error('error')
           }
           
       }
       // 请求错误
       if (response.status == 400) {
           message.error('失败', 2)
           return error('error')
       }
       // 系统错误
       if (response.status == 500) {
           message.error('失败', 2)
           return error('error')
       }
   }
}
export default Verification