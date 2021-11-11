
//  混入  此文件抽离公共代码 
// 远程获取数据   具体组件中提供一个fetchData 方法

export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue,
            };
        },
        async created() {
            this.data = await this.fatchData();
            this.isLoading = false;
        }
    }
}