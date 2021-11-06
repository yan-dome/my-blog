
import Mock from 'mockjs';

Mock.mock("/api/blog",'get',{
    code:3,
    msg:"fasdfsaf",
    data:[{
       fdgafdg:"dsfsdf"
    },]
})