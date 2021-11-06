import axios from "axios";

import  { shouMeassage } from '../utils'
const ins = axios.create();// 创建一个实例
//在响应之前拦截器运行
    ins.interceptors.response.use(function (req) {
        // console.log('拦截器');
        
       if (req.data.code !== 0) {
        shouMeassage({
            message:req.data.msg,
            type:'error',
            duraction:2000,
        });
        return null;
       }
        return req.data.data;
    });
export default ins;
