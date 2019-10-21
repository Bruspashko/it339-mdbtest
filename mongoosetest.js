const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://it339-ostap:vbc5NasuvsY6Wwh8@cluster0-0rdwi.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const Customer = mongoose.model('customers', { name: String, address: String });

const customer = new Customer({name: "Company Inc", address: "Highway 37" });
customer.save().then(() => console.log('Pushed a new customer into remote db'));
