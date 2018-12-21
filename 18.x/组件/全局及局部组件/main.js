// 全局的Component这个是，之后定义的域都可以使用
Vue.component('alert', {
    template: '<button @click="on_click">弹弹弹</button>',
    methods: {
        on_click: function () {
            alert('Yo~ man.')
        }
    }
})

new Vue({
    el: '#seg1',
})

new Vue({
    el: '#seg2',
    components: {
        alert_box: {
            template: '<button @click="on_click">seg2弹弹弹</button>',
            methods: {
                on_click: function () {
                    alert('Yo....')
                }
            }
        }
    }
})