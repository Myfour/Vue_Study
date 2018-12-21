// 全局组件，template使用了html文件中的template
Vue.component('click', {
    template: '#clickme',
    props: ['message'], // props接受传入参数的数组
    methods: {
        onClick: function () {
            alert('yo..' + this.message) // 在JS中使用这个传入参数时需要this.xxx来使用
        }
    }
})


Vue.component('user', {
    template: `<a :href='"/user/"+username' >@{{username}}</a>`, // 传入的参数在template中使用，作为html文本可以使用{{x}}来使用
    // 如果是绑定到属性中，用法与v-bind绑定普通的data数据相同，将其作为一个字符串传入;需要注意需要拼接一个绑定属性时，需要在属性的
    // 引号中 再构建字符串来拼接，此时 属性的引号中的字符串会被解析为变量，需要拼接字符串 就需要再次构建字符串来拼接
    props: ['username']
})


Vue.component('user-x', {
    template: `<a :href="'/'+username+'/heihei'">@{{username}}</a>`,
    props: ['username']
})

// 全局的组件需要在Vue的实例中使用
var app = new Vue({
    el: '#app',
})


// 局部组件
var app2 = new Vue({
    el: '#app2',
    components: {
        click2: {
            template: '#clickme',
            methods: {
                onClick: function () {
                    alert('hey..' + this.msg)
                }
            },
            props: ['msg']
        }
    }
})