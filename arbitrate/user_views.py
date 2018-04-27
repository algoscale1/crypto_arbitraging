from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
import pymongo
from pymongo import MongoClient
import os
import datetime

import arbitrate.constants


client = MongoClient('localhost', 27017)
class TradeData(View):

    def get(self, request):
        exchanges = constants.EXCHANGES
        crypto_pairs = constants.CRYPTO_PAIRS
        
        db = client['crypto_exchange']
        docs = db.exchange_data
        data = docs.find().sort('_id', pymongo.DESCENDING).limit(20)
        query_data = []
        for each_data in data:
             each_data["_id"] = ""
             query_data.append(each_data)
        return render(request, 'index.html',{"data": query_data, 'exchanges': exchanges, 'crypto_pairs': crypto_pairs})
