from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
import pymongo
from pymongo import MongoClient
import os
import datetime


client = MongoClient('localhost', 27017)
class TradeData(View):

    def get(self, request):
        return render(request, 'index.html')


class GetData(View):

    def get(self, request):
        db = client['crypto_exchange']
        docs = db.exchange_data
        data = docs.find().sort('_id', pymongo.DESCENDING).limit(20)
        query_data = []
        for each_data in data:
            query_data.append(each_data)
    # query_data = [{"_id": 1, "type": "strong", "bid_volume": 0.00150385, "date_time": "2018-03-14T12:36:49.219Z",
    #                "bid": 0.12200001,
    #                "ask": 0.11774, "ask_volume": 89.5129, "crypto_pair": "BCH/BTC",
    #                "spread": -0.0042600100000000085, "sell_here": "nova", "buy_here": "bitflyer"},
    #               {"_id": 2, "type": "weak", "bid_volume": 0.00150385, "date_time": "2018-03-14T12:36:49.218Z",
    #                "bid": 0.12200001,
    #                "ask": 0.116201, "ask_volume": 4.483, "crypto_pair": "BCH/BTC", "spread": -0.005799010000000007,
    #                "sell_here": "nova", "buy_here": "binance"}
    #               ]
        return JsonResponse({"data": query_data})
