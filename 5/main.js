// 定义一个名为 button-counter 的新组件
// Vue.component是全局注册的组件
Vue.component('button-counter', {
    // 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


Vue.component('blog-list', {
    template: "<div><h1>{{ title }} and {{ title2 }}</h1><div>xxxx</div></div>",
    // props通过html属性传参
    props: ['title', 'title2'],
})

var vm1 = new Vue({
    el: "#app1",
})

var vm2 = new Vue({
    el: "#app2",
    data: {
        posts: [{
            id: 1,
            title: 'Tercy',
            title2: 'Mcgrady'
        }, {
            id: 2,
            title: 'Kris',
            title2: 'wu'
        }, {
            id: 3,
            title: 'Cash',
            title2: 'Lee'
        }]
    }
})