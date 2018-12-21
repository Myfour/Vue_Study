var app = new Vue({
    el: '#app',
    data: {
        math: 90,
        physics: 88,
        english: 94
    },
    computed: { // 计算属性中记住每个属性是一个function
        sum: function () {
            return this.math + this.physics + this.english
        },
        avg: function () {
            return Math.round(this.sum / 3)
        }
    }
})