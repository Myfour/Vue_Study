var app = new Vue({
    el: '#app',
    data: {
        foodlist: ['葱', '姜', '蒜'],
        foodlist_obj: [{
            name: '葱',
            price: 10
        }, {
            name: '姜',
            price: 8
        }, {
            name: '蒜',
            price: '6'
        }]
    },
})