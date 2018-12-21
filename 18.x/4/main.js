var app = new Vue({
    el: '#app',
    methods: {
        onClick: function () {
            console.log('Clicked....')
        },
        onEnter: function () {
            console.log('enter....')
        },
        onOut: function () {
            console.log('leave....')
        },
        onSubmit: function (e) {
            e.preventDefault();
            console.log('submitted...')
        },
        onSubmit2: function () {
            console.log('submitted...')
        }
    }
})