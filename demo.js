

const eject = document.querySelector('.app-Eject')                  // 按钮
const SideEdge = document.querySelector('.SideEdge')                // 侧边导航
const app = document.querySelector('.app')                          // app

// 判断打开
let type = true
eject.onclick = () => {
    // 打开
    if (type) {
        SideEdge.style.width = '20%'
        app.style.width = '80%'
    }
    // 关闭
    else {
        SideEdge.style.width = '0%'
        app.style.width = '100%'
    }
    // 切换
    type = !type

}