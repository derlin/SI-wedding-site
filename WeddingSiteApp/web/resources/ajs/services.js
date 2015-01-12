var services = angular.module('wed.services', ['ngResource']);

services.factory('GoldenBookFactory', function ($resource) {
    return $resource('/wedding-site/webresources/ch.eiafr.si.wedding.jpa.goldenbookentry/', {}, {
        get:  { method: 'GET', isArray: true },
        add: { method: 'POST'}
    })
});

services.factory('GiftFactory', function ($resource) {
    return $resource('/wedding-site/webresources/ch.eiafr.si.wedding.jpa.gift/:id', {}, {
        get:    { method: 'GET', params: {id: '@id'} },
        getAll:    { method: 'GET', isArray: true },
        add: { method: 'POST'},
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

