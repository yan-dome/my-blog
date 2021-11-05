
import Icon from '../components/Icon'
import getComponentsRootDom from './getComponentsRootDom'
import styles from './showMessage.module.less'
/**
 * 
 * @param {String} message   消息体
 * @param {String} type  消息类型   成功 success  错误 error  正常 info  警告 warn
 * @param {Number} duration  消失时间 多久消失
 * @param {HTMLElement} container  容器  消息会显示在中间位置  如果不传显示页面中间
 */
export default function (options = {}) {
    const message = options.message || '';
    const type = options.type || 'info'
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const callback = options.callback;
    //创建一个div消息元素
    const div = document.createElement('div');
    //得到图标组件的元素  type 得到图标类型
    const IconDom = getComponentsRootDom(Icon, { type });
    // 在页面生成 带标签元素的Html     ${styles.icon}避免类名冲突
    div.innerHTML = `<span class="${styles.icon}">${IconDom.outerHTML}</span><div>${message}</div>`

    const V = styles[`message-${type}`];
    div.className = `${styles.message} ${V}`;
    //将div加入到容器中 

    //容器是否改动过 如果是静态 设置为相对定位
    if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative'


    }
    //将元素添加到DIV

    container.appendChild(div)
    //强行渲染一次
    div.clientHeight;

    //回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    //等一段时间消失 
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        // 过渡完成执行 仅执行一次
        div.addEventListener('transitionend', function () {
            div.remove();
            // 运行回调函数
            // options.callback && options.callback();
            if (options.callback) {
                callback();
            }


        }, { once: true })
    }, duration);
}
