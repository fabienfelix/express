'use strict';

describe('View1 --> ', function() {

    beforeEach(module('myApp.view1'));

    var $controller;

    beforeEach(inject(function(_$controller_) {

        // The injector unwraps the underscores (_) 
        // from around the parameter names when matching
        $controller = _$controller_;

    }));

    describe('Inject --> ', function() {

        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('View1Ctrl', { $scope: $scope });
        });

        it('Controller --> ', inject(function($controller) {
            expect(controller).toBeDefined();
        }));

        it('myFuncTest()', function() {
            $scope.myFunc(0, 'myListName');
            $scope.myFuncTest();
            expect($scope.test).toBe('myListName');
        });

    });

});

// beforeEach(inject(function(_$httpBackend_, _$controller_) {
//   $httpBackend = _$httpBackend_;
//   $httpBackend.expectGET('phones/phones.json').respond(phonesData);

//   Phone = _Phone_;
// }));






// describe('home --> ', function() {

//     //console.log("hi !");

//     beforeEach(module('myApp', ['ngRoute', 'ngCookies']));

//     var $controller, $scope;

//     beforeAll(inject(function(_$controller_) {
//         $controller = _$controller_('View1Ctrl', { $scope: $scope });
//         $scope = {};
//     }));

//     it('test', function() {
//         expect(3).toBe(4);
//     });

//     // describe('Functions --> ', function() {
//     //     it('myFuncTest()', function() {
//     //         $scope.myFunc(0, 'myListName');
//     //         $scope.myFuncTest();
//     //         expect($scope.test).toBe($cookieStore.get('listName'));
//     //     });
//     // });

// });
