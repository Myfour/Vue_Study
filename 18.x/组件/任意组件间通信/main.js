var Event = new Vue(); // 任意组件间通信 需要用到这个中间量


Vue.component('huahua', {
    template: `
    <div>
        我说:<input @keyup='on_change' v-model='i_said' type='text'>
    </div>
    `,
    data: function () {
        return {
            i_said: ''
        }
    },
    methods: {
        on_change: function () {
            Event.$emit('huahua_said_something', this.i_said) // 发出一个事件到中间件，并传入该组件的数据
        }
    }
})
Vue.component('shuandan', {
    template: `
    <div>花花说：{{huahua_said}}</div>
    `,
    data: function () {
        return {
            huahua_said: ''
        }
    },
    mounted: function () {
        // 保存当前组件到me中
        var me = this
        // 中间件触发传入的事件，提取到传入的数据
        Event.$on('huahua_said_something', function (data) {
            console.log(data)
            me.huahua_said = data
        })
    }
})

var app = new Vue({
    el: '#app',
})