var app = angular.module('app');

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('//').endSymbol('//');
});

app.controller('homeController', ['$scope','$http', function ($scope,$http) {

    $scope.currency = {};
    $scope.currency.options = ['Currency1', 'Currency2', 'Currency3'];
    $scope.currency.selectedCurrency = $scope.currency.options[0];

    $scope.getServerData = function(){
        $http({
            method: 'GET',
            url: '/api/getData'
        }).then(function successCallback(response){
            $scope.arbtGridOptions.data = response.data.data.sort(function(a, b){
                return b.state - a.state
            });
        })
    };

    function highlightRow(grid, row) {
        if (row.entity.type === "strong") {
            return 'highlight-green'
        // } else if (row.entity.type === "strong") {
        //     return 'highlight-red'
        } else if (row.entity.type === "weak") {
            return 'highlight-yellow'
        }
    }

    $scope.arbtGridOptions = {
        paginationPageSizes: [14, 25, 50, 75],
        paginationPageSize: 14,
        useExternalPagination: false,
        enableGridMenu: true,
        enableColumnMenus: false,
        enableSorting: false,
        enableColumnResizing: true,
        columnDefs: [
            {
                name: 'sell_here',
                displayName: 'Sell Here',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'crypto_pair',
                displayName: 'Crypto Pair',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'ask',
                displayName: 'Ask',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'date_time',
                displayName: 'Date Time',
                cellTooltip: true,
                type: 'date',
                cellFilter: 'date:\'yyyy-MM-dd HH:mm\' ',
                cellClass: highlightRow
            },
            {
                name: 'crypto_pair',
                displayName: 'Buy Here',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'spread',
                displayName: 'Spread',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'bid_volume',
                displayName: 'Bid Volume',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'bid',
                displayName: 'Bid',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'ask_volume',
                displayName: 'Ask Volume',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'gain',
                displayName: 'Gain',
                cellTooltip: true,
                cellClass: highlightRow
            }
        ],
        data: []
    };

    // $scope.arbtGridOptions.data = $scope.serverData.sort(function(a, b){
    //     return b.state-a.state
    // });

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
        buttonDefaultText: "Exchange 1"
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
        buttonDefaultText: "Exchange 2"
    };

    (function(){
        $scope.getServerData();
    })()
}]);