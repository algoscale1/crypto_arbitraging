from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
import pymongo
from pymongo import MongoClient

from arbitrate.constants import EXCHANGES, CRYPTO_PAIRS


client = MongoClient('localhost', 27017)


class TradeData(View):
    def get(self, request):
        return render(request, 'index.html')


class GetExchanges(View):
    def get(self, request):
        exchanges = EXCHANGES
        crypto_pairs = CRYPTO_PAIRS
        db = client['crypto_exchange']
        data = db.exchange_data.find({'type': 1}).sort('_id', pymongo.DESCENDING).limit(20)
        query_data = []
        for each_data in data:
             each_data["_id"] = ""
             query_data.append(each_data)
        data = [{'data': query_data, 'exchanges': exchanges, 'crypto_pairs': crypto_pairs}]
        return JsonResponse(data, safe=False)


class Filter(View):
    def post(self, request):
        buy = request.POST['buy'].split(',')
        sell = request.POST['sell'].split(',')
        pairs = request.POST['pair'].split(',')
        db = client['crypto_exchange']
        result = db.exchange_data.find({'type': 1, 'buy_here': {'$in': buy}, 'sell_here': {'$in': sell},
                                  'crypto_pair': {'$in': pairs}}).limit(20)
        data = []
        for res in result:
            res["_id"] = ""
            data.append(res)
        data = [{'data': data}]
        return JsonResponse(data, safe=False)