import pymongo

url = 'mongodb+srv://braxsii:drishya123@belloworld.ifofh8h.mongodb.net/belloWorld'
client = pymongo.MongoClient(url)

db = client['pegasus']