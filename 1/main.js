var vm = new Vue({
    el: "#app",
    data: {
        isActive: true,
        Classobj: {
            disable: true,
            readonly: true
        }
    }
})

var vm = new Vue({
    el: "#app2",
    data: {
        istrue: true,
        activeClass: 'active',
        staticClass: 'static',
    }
})

var vm = new Vue({
    el: "#app3",
    data: {
        mystyle: {
            color: 'blue',
            fontSize: '50px',
        },
        mystyle2: {
            margin: '50px',
        }
    }
})