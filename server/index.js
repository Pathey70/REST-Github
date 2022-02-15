const express = require('express')
const app = express()
const port = 3000
var length=6;
const dataMap=new Map();
const urlStart="http://localhost:3000/";
const pgiPc2="dgfg";
// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', function(req, res) {
    
    res.send("HelloWorld");
});
app.get('/:id', function(req, res) {
    
    var id=req.params.id;
    if(dataMap.has(id))
    {
        var data=dataMap.get(id);
        res.send(JSON.stringify(data));
        dataMap.delete(id);
    }
    else{
        let response={};
        response.success=false;
        response.error=404;
        response.message="Not Found";
        res.send(JSON.stringify(response));

    }

});
app.post('/share', function (req, res) {
    
    var data=req.body;
    var id="";
    
    while(true)
    {
        id=getRandomString(length);
        
        if(dataMap.has(id)===false)
        {
            break;
        }
    }
    
    dataMap.set(id,data);
    let response={};
    response.success=true;
    response.lnik=urlStart+id;
    res.send(JSON.stringify(response));

});
function getRandomString(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))