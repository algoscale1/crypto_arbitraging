var app = angular.module('app');
app.config(function($interpolateProvider) {
   $interpolateProvider.startSymbol('//').endSymbol('//');
});
app.controller('homeController', ['$scope', function ($scope) {

    $scope.currency = {};
    $scope.currency.options = ['Currency1', 'Currency2', 'Currency3'];
    console.log($scope.currency.options[0])
    $scope.currency.selectedCurrency = $scope.currency.options[0];
    console.log($scope.currency.selectedCurrency)
    // $scope.serverData = [data]

    $scope.serverData = [
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 0
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 0
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 0
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 0
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 0
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 2
        },
        {
            'sellHere': 'hitbtc',
            'cryptoPair': 'ZEC/BTC',
            'ask': 0.05100556,
            'dateTime': new Date(),
            'buyHere': 'yobit',
            'spread': -0.000214440000000003,
            'bidVolume': 2.797,
            'bid': 0.05122,
            'askVolume': 0.06774932,
            'gain': 0.0000145281641808002,
            'state': 1
        },
        {
            'sellHere': 'southxchange',
            'cryptoPair': 'BCH/BTC',
            'ask': 0.142,
            'dateTime': new Date(),
            'buyHere': 'hitbtc',
            'spread': -0.00161408000000002,
            'bidVolume': 0.00448751,
            'bid': 0.14361408,
            'askVolume': 617.305,
            'gain': 0.996379654400011,
            'state': 1
        }
    ];


    function highlightRow(grid, row){
        if(row.entity.state === 2){
            return 'highlight-green'
        } else if (row.entity.state === 0){
            return 'highlight-red'
        } else if (row.entity.state === 1) {
            return 'highlight-yellow'}
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
                name: 'sellHere',
                displayName: 'Sell Here',
                cellTooltip: true,
                cellClass: highlightRow
            },
            {
                name: 'cryptoPair',
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
                name: 'dateTime',
                displayName: 'Date Time',
                cellTooltip: true,
                type: 'date',
                cellFilter: 'date:\'yyyy-MM-dd HH:mm\' ',
                cellClass: highlightRow
            },
            {
                name: 'buyHere',
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
                name: 'bidVolume',
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
                name: 'askVolume',
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

    $scope.arbtGridOptions.data = $scope.serverData.sort(function(a, b){
        return b.state-a.state
    });


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
}]);
