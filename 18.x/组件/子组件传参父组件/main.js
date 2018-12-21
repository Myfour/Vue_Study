Vue.component('balance', {
    template: `
    <div>
        <show @show-balance='show_balance'></show> 
        <div v-if='show'>
        显示余额：$100,000,000
        </div>
    </div>
    `, // 父组件中的子组件元素中为触发的show-balance事件触发方法，传入方法名 在 触发的方法中通过形参就可以获取字组件传来的数据对象
    data: function () {
        return {
            show: false
        }
    },
    methods: {
        show_balance: function (data) {
            this.show = true
            console.log(data)
        }
    }
})

Vue.component('show', {
    template: '<button @click="on_click()">显示余额</button>', // 点击触发一个方法，该方法发送一个show-balance事件到父组件中,
    // 同时传入数据对象
    methods: {
        on_click: function () {
            this.$emit('show-balance', {
                a: 1,
                b: 2
            })
        }
    }
})


var app = new Vue({
    el: '#app',
})