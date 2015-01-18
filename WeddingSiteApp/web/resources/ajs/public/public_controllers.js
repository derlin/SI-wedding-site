var app = angular.module('wed.public.controllers', []);

app.controller('MainController',
        ['$scope', 'GiftFactory',
            function ($scope, GiftFactory) {

                $scope.refresh = function () {
                    $scope.gifts = GiftFactory.getAll(function (items) {
                        console.log(items);
                    });
                };

                $scope.clicks = 11;

                $scope.addGift = function (gift) {
                    $scope.clicks++;
                    console.log(gift);
                    GiftFactory.add(gift, $scope.refresh);
                    console.log("added");
                    $scope.resetForm();
                };

                $scope.addPersonalGift = function (gift) {
                    $scope.clicks++;
                    gift.addedBy = gift.gifter;
                    gift.available = false;
                    console.log(gift);
                    GiftFactory.add(gift, $scope.refresh);
                    console.log("added");
                    $scope.resetForm();
                };
                
                $scope.addMoneyGift = function (gift) {
                    $scope.clicks++;
                    gift.title = "Money"
                    gift.addedBy = gift.gifter;
                    gift.available = false;
                    console.log(gift);
                    GiftFactory.add(gift, $scope.refresh);
                    console.log("added");
                    $scope.resetForm();
                };

                $scope.giveGift = function (gift) {
                    $scope.clicks++;
                    console.log(gift.id);
                    gift.available = false;
                    GiftFactory.update(gift, $scope.refresh);
                    console.log("updated");
                };

                $scope.giveGiftConf = function (gift) {
                    console.log("give confirmation");
                    $scope.cur_gift = angular.copy(gift);
                    $('#giveGiftModal').click();
                };

                $scope.resetForm = function () {
                    console.log($scope.cur_gift);
                    $scope.cur_gift = angular.copy({title: "", description: "", price: "", imageurl: "", gifter: ""});
                };

                $scope.isGiftValid = function (gift) {
                    return gift && gift.title &&
                            parseInt(gift.price) && gift.price > 0 &&
                            gift.gifter;
                }
                
                $scope.isMoneyGiftValid = function (gift) {
                    return gift && parseInt(gift.price) && gift.price > 0 && gift.gifter;
                }

                $scope.search_price = {}
                // first load: get data
                $scope.refresh();
            }]);


app.controller('GbController',
        ['$scope', 'GoldenBookFactory',
            function ($scope, GBFactory) {


                $scope.resetForm = function () {
                    console.log($scope.cur_gb);
                    $scope.cur_gb = angular.copy({message: "", signature: ""});
                };

                $scope.refresh = function () {
                    console.log("refresh");
                    $scope.entries = GBFactory.getAll(function (items) {
                        console.log(items);
                    });
                };

                $scope.addEntry = function (entry) {
                    GBFactory.add(entry, function () {
                        $scope.refresh();
                        $scope.resetForm();
                    });
                }

                $scope.randomColor = function () {
                    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
                }

                $scope.isEntryValid = function (gb) {
                    console.log($scope.cur_gb);
                    return gb && gb.message && gb.signature;
                }
                // first load: get data
                $scope.show_add = false;
                $scope.order_reversed = true;
                $scope.cur_gb = {message: ""};
                $scope.refresh();
                // init
            }]);

