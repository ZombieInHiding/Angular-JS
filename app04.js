(function () {
    var app = angular.module("store", []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab == checkTab;
        };
    });

    var gems = [
        {
            name: 'Dodecahedrone',
            price: 2.95,
            description: 'Amazing bright gem',
            canPurchase: false,
            soldOut:true,
            images: ["images/01.jpg", "images/02.jpg"]
        },
        {
            name: 'Pentagonal',
            price: 12.95,
            description: 'Amazing Pentagonal gem',
            canPurchase: false,
            soldOut: true,
            images: ["images/03.jpg", "images/04.jpg"]
        }
    ];
})();