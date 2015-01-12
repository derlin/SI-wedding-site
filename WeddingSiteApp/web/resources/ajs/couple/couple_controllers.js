var app = angular.module('wed.couple.controllers', []);

app.controller('MainController',
        ['$scope', 'GiftFactory', 'GoldenBookFactory',
            function ($scope, GiftFactory, GBFactory) {

               

                $scope.refresh = function () {
                    $scope.gbEntries = GBFactory.get(function (items) {
                        console.log(items);
                    });

                    $scope.gifts = GiftFactory.getAll(function (items) {
                        console.log(items);
                    });

                };

                $scope.clicks = 11;

                $scope.addGift = function () {
                    $scope.clicks++;
                    var gift = {"addedBy": "Test" + $scope.clicks, "available": false, "price": 45.34, "title": "Beautiful chair"};
                    GiftFactory.add(gift, $scope.refresh);
                    console.log("added");
                }
                
                
                 // first load: get data
                $scope.refresh();
            }]);
