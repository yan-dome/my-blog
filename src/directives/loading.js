
// 引入文件
import ImagSrc from '@/assets/loading.gif'
import styles from './loading.module.less';
// 查找是否有这个元素 得到这个元素
function getLoadingImage(el) {
    return el.querySelector('img[data-rolt=loading]');
}

// 创建一个元素
function createLoadingImg() {
    const img = document.createElement('img');
    // 设置一个自定义属性
    img.dataset.rolt = 'loading';
        // 设置img的 类名
    img.className = styles.loading;
        // 设置 img 的路径
    img.src = ImagSrc;
    return img;
}

// 导出自定义指令的配置对象
export default function (el, binding) {
    // 根据binding.value 的值 决定删除还是创建img元素
    const curImg = getLoadingImage(el);
    if (binding.value) {
        if (!curImg) {
            // 创建一个img元素
            const img = createLoadingImg()
            // 在真实Dom后面中插入
            el.appendChild(img);
        }
    } else {
        // 删除img元素
        if (curImg) {
            curImg.remove();

        }
    }

}
