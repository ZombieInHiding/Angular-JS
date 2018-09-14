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
            images: ["images/01.jpg", "images/02.jpg"],
            reviews: [
                {
                    stars:5,
                    body:"I love this gem",
                    author:"Pranjali"
                },
                {
                    stars:4,
                    body:"I like this gem",
                    author:"Shalini"
                }
            ]
        },
        {
            name: 'Pentagonal',
            price: 12.95,
            description: 'Amazing Pentagonal gem',
            canPurchase: false,
            soldOut: true,
            images: ["images/03.jpg", "images/04.jpg"],
            reviews: [
                {
                    stars:4,
                    body:"Its nice",
                    author:"Ashwina"
                },
                {
                    stars:4,
                    body:"Its amazing",
                    author:"Shreya"
                }
            ]
        }
    ];
})();