
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



