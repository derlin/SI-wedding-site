var services = angular.module('wed.services', ['ngResource']);

services.factory('GoldenBookFactory', function ($resource) {
    return $resource('/wedding-site/webresources/ch.eiafr.si.wedding.jpa.goldenbookentry/', {}, {
        getAll: { method: 'GET', isArray: true },
        add: { method: 'POST'}
    })
});

services.factory('GiftFactory', function ($resource) {
    return $resource('/wedding-site/webresources/ch.eiafr.si.wedding.jpa.gift/:id', {}, {
        // GiftFactory.get({id: id}, callback);
        get:    { method: 'GET', params: {id: '@id'} },
        // GiftFactory.getAll(callback);
        getAll:    { method: 'GET', isArray: true },
        // GiftFactory.add({title: 'titre', addedBy: 'me', price: 23.4});
        add: { method: 'POST'},
        // GiftFactory.addMoneyGift({addedBy: 'me', price: 23.4}, callback);
        addMoneyGift: { method: 'POST', url: '/wedding-site/webresources/ch.eiafr.si.wedding.jpa.gift/money' },
        // GiftFactory.update({id: id}, giftupdated, callback);
        update: { method: 'PUT', params: {id: '@id'} },
        // GiftFactory.delete({id: id}, callback);
        delete: { method: 'DELETE', params: {id: '@id'} },
        // GiftFactory.addMoney({addedby: 'me', value: '23.4'}, callback);
        /*addMoney: {
            method: 'GET',
            url: '/wedding-site/webresources/ch.eiafr.si.wedding.jpa.gift/money/:addedby/:value' }, */
        
    })
});

