import * as qiniu from 'qiniu-js'

class Qiniu {
   constructor(){
       this.config = {
           useCdnDomain: true,
           region: qiniu.region.z2
       };
   }
   // 上传大量
   upload (images){
    // 从后端获取token
       return Promise(async(resolve,reject) => {
        // 文件默认参数
        let putExtra = {
            mimeType: ['image/png', 'image/jpeg'] || null
        }
        await Promise.all(images.map(item => this.this.qiniu(item, '', '', putExtra)))
                .then(res => resolve(res)).catch(e => reject(e))
    })
   }
    async qiniu(file, key, token, putExtra){
        await qiniu.upload(file, key, token, putExtra, this.config)
    }
}
export default Qiniu