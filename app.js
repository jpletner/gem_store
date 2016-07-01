(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedrone',
      price: 2.95,
      description: '. . .',
      images: [
        {
          full: 'dodecahedrone-01-full.jpg',
          thumb: 'dodecahedrone-01-thumb.jpg'
        },
        {
          full: 'dodecahedrone-02-full.jpg'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false
    },
  ];

})();
