var vm1 = new Vue({
    el: "#app1",
    data: {
        count: 0
    }
})
var vm2 = new Vue({
    el: "#app2",
    data: {
        name: 'Vue.js is it ?'
    },
    methods: {
        greet: function (event) {
            alert('Hello' + this.name)
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})