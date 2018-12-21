var vm1 = new Vue({
    el: '#app',
    data: {
        ok: true,
    }
})
var vm2 = new Vue({
    el: '#app2',
    data: {
        type: 'A',
    }
})
var vm3 = new Vue({
    el: "#app3",
    data: {
        shouldshow: true
    }
})
var vm4 = new Vue({
    el: "#app4",
    data: {
        items: [
            'a', 'b', 'c', 'd'
        ],
        myobject: {
            firstname: 'john',
            lastname: 'smith',
            age: '28',
        }
    }
})
Vue.set(vm4.myobject, 'addAttr', 'this is add.') // 动态添加响应元素
// 为某一个响应对象添加多个新的属性值，做法如下
vm4.myobject = Object.assign({}, vm4.myobject, {
    age: 27,
    favoriteColor: 'Vue Green'
})

var vm5 = new Vue({
    el: "#app5",
    data: {
        list: [1, 2, 3, 4, 5, 6, 7]
    },
    computed: {
        even: function () {
            return this.list.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})

var vm6 = new Vue({
    el: "#app6",
    data: {
        list: [1, 2, 3, 4, 5, 6, 7]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})