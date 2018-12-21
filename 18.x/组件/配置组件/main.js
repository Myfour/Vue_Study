Vue.component('like', {
    template: 
    `
    <button @click="toggle_like()">
        👍{{like}}
    </button>
    `, // 如果内容过多需要换行可以使用ES6的 ` ` 来包括字符串
    data: function () {
        return {
            like: 10,
            liked: false
        }
    },
    methods: {
        toggle_like: function () {
            if (!this.liked) {
                this.like++;
                this.liked = true;
            } else {
                this.like--;
                this.liked = false
            }
        }
    }
})

Vue.component('like_tmp', {
    template: '#like-component-tpl', // template写到了html中的写法
    data: function () {
        return {
            like: 10,
            liked: false
        }
    },
    methods: {
        toggle_like: function () {
            if (!this.liked) {
                this.like++;
            } else {
                this.like--;
            }
            this.liked = !this.liked
        }
    }
})


var app = new Vue({
    el: '#app',
})