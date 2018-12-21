var vm1 = new Vue({
    el: "#app1",
    data: {
        message: ''
    }
})
var vm2 = new Vue({
    el: "#app2",
    data: {
        message: ''
    }
})

var vm3 = new Vue({
    el: "#app3",
    data: {
        checkboxOne: '',
        checkedNames: [],
    }
})

var vm4 = new Vue({
    el: "#app4",
    data: {
        picked: ''
    }
})
var vm5 = new Vue({
    el: "#app5",
    data: {
        selected: '',
        selects: [],
        options: [{
            text: 'one',
            value: '1'
        }, {
            text: 'two',
            value: '2',
        }, {
            text: 'three',
            value: '3'
        }],
        dyselect: '',
    }
})