
//get collection names from the database
use('product')
db.getCollectionNames();

use('product')
db.electronics.insertMany([{"name":"ipod", "price":510},
                            {"name":"radio", "price": 480},
                            {"name": "iphone","price": 750.99, "tax":1.8}
]);

//list all documents
use('product');
db.electronics.find();


//list 3 documents
use('product');
db.electronics.find().limit(3);

//3-5 products
use('product');
db.electronics.find().skip(2).limit(3);

//list which name:"ipod"
use('product');
db.electronics.find({"name":"ipod"});

//name:ipod & price : 110
use('product');
db.electronics.find({"name":"ipod", "price":110});

//with & operator
use('product');
db.electronics.find({$and:[{"name": "radio"},{"price":80}]});

//name:ipod or price:110 or name:"radio"
use('product');
db.electronics.find({$or:[{"name": "ipod"}, {"price":110}, {"name":"radio"}]});


//just see name and price
use('product');
db.electronics.find({$or:[{"name": "ipod"},{"price":110}]},{"_id":0});

//list all documents with name and price
use('product');
db.electronics.find({},{"name":1, "price":1, "_id":0});

//list price and name and also price is descending
use('product');
db.electronics.find({},{"name":1, "price":1, "_id":0}).sort({"price":-1});


//name:radio and descending by price
use('product');
db.electronics.find({"name": "radio"}).sort({"price":-1});

//list just first ipod
use('product');
db.electronics.findOne({"name":"radio"}, {"price":110});

//name:radio and price descending
use('product');
db.electronics.find({"name":"radio"}).sort({"price":-1});

//price = 110
use('product');
db.electronics.find({"price":{$eq:110}});

//price less than or equal 110
use('product');
db.electronics.find({"price":{$lte:110}});

//price<=110 and see just name and price
use('product');
db.electronics.find({"price":{$lte:110}},{"_id":0});

//list all products which is price 100,80 or 480
use('product');
db.electronics.find({"price":{$in:[100,80,480]}},{"_id":0});

//list all products which is price is not 100,80 or 480
use('product');
db.electronics.find({"price":{$nin:[100,80,480]}},{"_id":0});