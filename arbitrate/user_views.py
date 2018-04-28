from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
import pymongo
from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt
from arbitrate.constants import EXCHANGES, CRYPTO_PAIRS

exchanges = EXCHANGES
crypto_pairs = CRYPTO_PAIRS

client = MongoClient('localhost', 27017)
class TradeData(View):
    def get(self, request):
        db = client['crypt_exch']
        data = db.exch_data.find({'type': 1}).sort('_id', pymongo.DESCENDING).limit(20)
        query_data = []
        for each_data in data:
            each_data["_id"] = ""
            query_data.append(each_data)
        return render(request, 'index.html', {'data': query_data})


class GetExchanges(View):
    def get(self, request):

        db = client['crypt_exch']
        data = db.exch_data.find({'type': 1}).sort('_id', pymongo.DESCENDING).limit(20)
        query_data = []
        for each_data in data:
             each_data["_id"] = ""
             query_data.append(each_data)

        data = [{'data': query_data, 'exchanges': exchanges, 'crypto_pairs': crypto_pairs}]
        return JsonResponse(data, safe=False)

import json
class Filter(View):
    @csrf_exempt
    def post(self, request):

        post_data = request.POST

        da = json.loads(list(post_data.keys())[0])
        buy = da["buy"]

        data= {}
        sell = da['sell']
        pairs = da['pair']

        db = client['crypt_exch']
        data = db.exch_data.find({'type':1, 'buy_here':{'$in':buy}, 'sell_here': {'$in': sell},
        'crypto_pair': {'$in': pairs}}).limit(20)
        query_data = []
        for each_data in data:
             each_data["_id"] = ""
             query_data.append(each_data)

        data = [{'data': query_data, 'exchanges': exchanges, 'crypto_pairs': crypto_pairs}]
        return JsonResponse(data, safe=False)