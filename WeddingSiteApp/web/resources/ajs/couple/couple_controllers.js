var app = angular.module('wed.couple.controllers', []);


app.filter("priceFilter", function() {
  return function(input, min, max) {
      
    min = min | 0;
    max = max | Number.MAX_VALUE;

    return input.filter(function(gift) {
        console.log(min);
      return (gift.price >= min) && (gift.price >= max);
    });
  }
});

//app.filters.filter("priceFilter", function() {
//  return function(input, min, max) {
//    console.log("filter " + min);  
//    min = min | 0;
//    max = max | Number.MAX_VALUE;
//    
//    return (gift.price >= min) && (gift.price >= max);
//
//  }
//});


app.controller('MainController',
        ['$scope', 'GiftFactory', 'GoldenBookFactory', 
            function ($scope, GiftFactory, GBFactory) {

                $scope.refresh = function () {
                    $scope.gifts = GiftFactory.getAll(function (items) {
                        console.log("scope.gifts refreshed.");
                        var total = 0;
                        $scope.gifts.forEach(function(g){
                            total += g.price;
                        });
                        console.log("total value: " + total);
                        $scope.total = total;
                    }); 

                };

                $scope.clicks = 11;

                $scope.addGift = function () {
                    $scope.clicks++;
                    var gift = {"addedBy": "Test" + $scope.clicks, "available": false, "price": 45.34, "title": "Beautiful chair"};
                    GiftFactory.add(gift, $scope.refresh);
                    console.log("added");
                }

                // ---------------------- popup add/edit

                $scope.newGift = function () {
                    console.log("new gift");
                    $scope.cur_gift = {available: true};
                    $scope.cur_gift_new = true;
                    $('#openGiftModal').click();
                };

                $scope.editGift = function (gift) {
                    $scope.cur_gift = angular.copy(gift);
                    $scope.cur_gift_new = false;
                    $('#openGiftModal').click();
                };
                
                $scope.removeGift = function (gift) {
                    GiftFactory.delete(gift, $scope.refresh);
                };

                $scope.saveGift = function () {
                    $scope.cur_gift.addedBy = 'couple'; // TODO
                    if($scope.cur_gift.available) $scope.cur_gift.gifter = null;
                    
                    console.log($scope.cur_gift);

                    var callback = function () {
                        $scope.refresh();
                        $scope.info_text = "Gift saved.";
                    };

                    if ($scope.cur_gift_new) {
                        console.log("new");
                        GiftFactory.add($scope.cur_gift, callback);
                    } else {
                        console.log("update");
                        GiftFactory.update($scope.cur_gift, callback);
                    }
                };
                
                $scope.isGiftValid = function(gift){
                    return gift && gift.title && 
                          parseInt(gift.price) && gift.price > 0 &&
                          (gift.available || gift.gifter);
                }

                // ---------------------- gifts table


//                $scope.priceFilter = function(gift){
//                    console.log(search_price_min);
//                    //$scope.search_price_min = $scope.search_price_min + 1;
//                    return (gift.price > $scope.search_price_min) && (gift.price < $scope.search_price_max);
//                }
                
                

                // first load: get data
                $scope.refresh();
                $scope.search_price_min = 0;
                $scope.search_price_max = 10000;
            }]);
