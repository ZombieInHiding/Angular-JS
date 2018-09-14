(function () {
    var app = angular.module("store", []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedrone',
            price: 2.95,
            description: 'Amazing bright gem',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal',
            price: 12.95,
            description: 'Amazing Pentagonal gem',
            canPurchase: false,
            soldOut: true
        }
    ]
})();