var app = angular.module('wed.public.controllers', []);

app.controller('MainController',
        ['$scope', 'GiftFactory', 
            function ($scope, GiftFactory) {

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


app.controller('GbController',
        ['$scope', 'GoldenBookFactory',
            function ($scope, GBFactory) {             

                
                $scope.resetForm = function(){
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
                    GBFactory.add(entry, function(){
                        $scope.refresh();                        
                        $scope.resetForm();
                    });
                }

                $scope.randomColor = function(){
                    return "#"+((1<<24)*Math.random()|0).toString(16);
                }
                
                $scope.isEntryValid = function(gb){
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

