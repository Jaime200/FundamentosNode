const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function (err,encripted){
    console.log(encripted);
    bcrypt.compare(password,encripted,function(err,same){
        
        console.log(same);
    })

} )