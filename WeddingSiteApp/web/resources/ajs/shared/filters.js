var app = angular.module('wed.filters', []);;

function isEmpty(value) {
    return angular.isUndefined(value) || value === '' || value === null || value !== value;
}


app.filter("priceFilter", function() {
  return function(input, price) {
      
    console.log(price);
    if(isEmpty(price) || 
            !(parseInt(price.min) >= 0) || !parseInt(price.max) ||
            price.min >= price.max ){
        price = {min: 0, max: 100000000 };
    }
    
    min = price.min;
    max = price.max;
    
    var filtered = [];
    
    angular.forEach(input, function(gift){
        if((gift.price >= min) && (gift.price <= max)){
            filtered.push(gift);
        }
    });

    return filtered;
  }
});

