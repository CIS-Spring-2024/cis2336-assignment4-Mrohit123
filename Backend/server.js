const express = require('express');
const app = express()
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static((path.join(__dirname + '/../Frontend'))));

//Get request to load biography page
app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/../Frontend/HTML/biography.html'));
});


//Post request to submit order
app.use(express.json()) 
app.post('/confirm-order',(request, response) => {
    isArray = Array.isArray(request.body.priceValueHiddenId31);
    var total = 0;
    var numberOfItems = 0;
    if (isArray) {
        numberOfItems = request.body.priceValueHiddenId31.length
        for (var i=0;i<numberOfItems;i++) {
            if (request.body.priceValueHiddenId31[i] != undefined) {
                total = total + Number(request.body.priceValueHiddenId31[i]);
            }
        }
    } else {
        numberOfItems = 1;
        total = total + Number(request.body.priceValueHiddenId31);
    }

    orderText = "<h1 style=\"color: blue\">Your order has been submitted.<br> Number of items :"+numberOfItems +"<br> Total amount : $"+total.toFixed(2)+" </h1>"
    response.send(orderText);

});

app.listen(PORT, () => {
    console.log('Server running on http://$(PORT)');
});

// display a message on the terminal
console.log("Server running at port=" + PORT); 