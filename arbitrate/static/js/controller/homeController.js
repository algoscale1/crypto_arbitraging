var app = angular.module('app');

 //app.config(function ($interpolateProvider) {
 //    $interpolateProvider.startSymbol('//').endSymbol('//');
 //});
//app.config(function($httpProvider) {
//    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
//    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
//});
app.controller('homeController', ['$scope', '$http', function ($scope, $http) {

    // $scope.currency = {};
    // $scope.currency.options = ['Crypto Pair', 'Currency', 'Currency'];
    // $scope.currency.selectedCurrency = $scope.currency.options[0];
    // $scope.tableData = [];
    $scope.buyHeremodel = [];
    $scope.buyHeredata = [];
    $scope.sellHeredata = [];
    $scope.cryptoPairsdata = [];
    $scope.tableData = []

    $scope.getServerData = function () {
        $http({
            method: 'GET',
            url: '/api/getExchanges'
        }).then(function successCallback(response) {
        console.log(response);
            response.data[0].exchanges.forEach(function (item, index) {
                $scope.buyHeredata.push({
                    label: item,
                    id: index + 1
                });
                $scope.sellHeredata.push({
                    label: item,
                    id: index + 1
                });
            });
            response.data[0].crypto_pairs.forEach(function (item, index) {
                $scope.cryptoPairsdata.push({
                    label: item,
                    id: index + 1
                });
            });
            $scope.tableData = response.data[0].data;
            $scope.arbtGridOptions.data = response.data[0].data;
        })
    };

    function highlightRow(grid, row) {
        if (row.entity.type === 1) {
            return 'highlight-green'
        } else if (row.entity.type === 0) {
            return 'highlight-red'
        }
    }

    $scope.arbtGridOptions = {
        paginationPageSizes: [15, 20, 25, 50, 75],
        paginationPageSize: 20,
        enableGridMenu: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableColumnResizing: false,
        // enablePaginationControls: false,
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
                name: 'buy_here',
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
            }
        ],
        data: []
    };


    $scope.buyHeresettings = {
        smartButtonMaxItems: 3,
        enableSearch: true
    };
    $scope.buyHeretext = {
        buttonDefaultText: "Buy Here"
    };


    $scope.sellHeremodel = [];
    $scope.sellHeresettings = {
        smartButtonMaxItems: 3,
        enableSearch: true
    };
    $scope.sellHeretext = {
        buttonDefaultText: "Sell Here"
    };


    $scope.cryptoPairsmodel = [];
    $scope.cryptoPairssettings = {
        smartButtonMaxItems: 3
    };
    $scope.cryptoPairstext = {
        buttonDefaultText: "Crypto Pairs"
    };

    $scope.updateTable = function () {
        $scope.sellArr = [];
        $scope.buyArr = [];
        $scope.pairArr = [];
        $scope.buyHeredata.forEach(function (item, index) {
            $scope.buyHeremodel.forEach(function (value) {
                if (item.id === value.id) {
                    $scope.buyArr.push(item.label);
                }
            });
            $scope.sellHeremodel.forEach(function (value) {
                if (item.id === value.id) {
                    $scope.sellArr.push(item.label);
                }
            });
        });
        $scope.cryptoPairsdata.forEach(function (item, index) {
            $scope.cryptoPairsmodel.forEach(function (value) {
                if (item.id === value.id) {
                    $scope.pairArr.push(item.label);
                }
            });
        });


        $scope.filterData = [];
        if( ($scope.buyArr.length === 0) && ($scope.sellArr.length === 0) && ($scope.pairArr.length === 0) ){
            $scope.filterData = $scope.tableData;
        } else {
        $scope.tableData.forEach(function(item){
            var test = false;
            $scope.buyArr.forEach(function(buyItem){
                if( item.buy_here == buyItem ){
                    test = true;
                }
            });
            $scope.sellArr.forEach(function(sellItem){
                if( item.sell_here == sellItem ){
                    test = true;
                }
            });
            $scope.pairArr.forEach(function(pairItem){
                if( item.crypto_pair == pairItem ){
                    test = true;
                }
            });
            if(test === true ) {
                $scope.filterData.push(item);
            }
        });
        }
        console.log($scope.filterData);
        $scope.arbtGridOptions.data = $scope.filterData;

//        var myObj = new FormData();
//        myObj.append('buy',$scope.buyArr);
//        myObj.append('sell',$scope.sellArr);
//        myObj.append('pair',$scope.pairArr);
//
//
//        $http.post('/api/filter', myObj, {
//            transformRequest: angular.identity,
//            headers: { 'Content-Type': undefined }
//        }).then(function(response){
//            $scope.arbtGridOptions.data = response.data[0].data.sort(function (a, b) {
//                return b.type - a.type;
//            });
//        })

    };

    (function () {
        $scope.getServerData();
    })()
}]);

//            $http.post('/ServerRequest/PostDataResponse', data, config)
