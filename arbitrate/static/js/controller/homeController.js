var app = angular.module('app');

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('//').endSymbol('//');
});

app.controller('homeController', ['$scope','$http', function ($scope,$http) {

    $scope.currency = {};
    $scope.currency.options = ['Crypto Pair', 'Currency', 'Currency'];
    $scope.currency.selectedCurrency = $scope.currency.options[0];

    $scope.getServerData = function(){
        $http({
            method: 'GET',
            url: '/api/getData'
        }).then(function successCallback(response){
            $scope.arbtGridOptions.data = response.data.data.sort(function(a, b){
                return b.type - a.type;
            });
        })
    };

    function highlightRow(grid, row) {
        if (row.entity.type === 1) {
            return 'highlight-green'
        // } else if (row.entity.type === "strong") {
        //     return 'highlight-red'
        } else if (row.entity.type === 0) {
            return 'highlight-yellow'
        }
    }

//    $scope.arbtGridOptions = {
//        paginationPageSizes: [15, 20, 25, 50, 75],
//        paginationPageSize: 20,
//        useExternalPagination: false,
//        enableGridMenu: true,
//        enableColumnMenus: false,
//        enableSorting: false,
//        enableColumnResizing: true,
//        columnDefs: [
//            {
//                name: 'sell_here',
//                displayName: 'Sell Here',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'crypto_pair',
//                displayName: 'Crypto Pair',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'ask',
//                displayName: 'Ask',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'date_time',
//                displayName: 'Date Time',
//                cellTooltip: true,
//                type: 'date',
//                cellFilter: 'date:\'yyyy-MM-dd HH:mm\' ',
//                cellClass: highlightRow
//            },
//            {
//                name: 'buy_here',
//                displayName: 'Buy Here',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'spread',
//                displayName: 'Spread',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'bid_volume',
//                displayName: 'Bid Volume',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'bid',
//                displayName: 'Bid',
//                cellTooltip: true,
//                cellClass: highlightRow
//            },
//            {
//                name: 'ask_volume',
//                displayName: 'Ask Volume',
//                cellTooltip: true,
//                cellClass: highlightRow
//            }
//        ],
//        data: []
//    };

    $scope.exchange1model = [];
    $scope.exchange1data = [
        {
            id: 1,
            label: "David"
        }, {
            id: 2,
            label: "Jhon"
        }, {
            id: 3,
            label: "Lisa"
        }, {
            id: 4,
            label: "Nicole"
        }, {
            id: 5,
            label: "Danny"
        }];
    $scope.exchange1settings = {
        smartButtonMaxItems: 3
    };
    $scope.exchange1text = {
        buttonDefaultText: "Buy Here"
    };


    $scope.exchange2model = [];
    $scope.exchange2data = [
        {
            id: 1,
            label: "Rishu"
        }, {
            id: 2,
            label: "Jitender"
        }, {
            id: 3,
            label: "Rishabh"
        }, {
            id: 4,
            label: "Purushotam"
        }, {
            id: 5,
            label: "Rahul"
        }];
    $scope.exchange2settings = {
        smartButtonMaxItems: 3
    };
    $scope.exchange2text = {
        buttonDefaultText: "Sell Here"
    };

    (function(){
        $scope.getServerData();
    })()
}]);