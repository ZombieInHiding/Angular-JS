(function(){
var app = angular.module("store", []);
    app.controller('StoreController',function(){
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedrone',
        price: 2.95,
        description: 'Amazing bright gem',
        canPurchase: true,
        soldOut: false
    }
})();