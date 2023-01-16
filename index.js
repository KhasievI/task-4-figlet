const figlet = require('figlet')

figlet('intocode', function(err, data) {
    if(err) {
        console.log('error');
    }
    console.log(data);
})