function asincrona(callback){
    setTimeout(() => {
        try {
            let a = 3 + z;    
            callback(null,a);
        } catch (error) {
            callback(error);
        }
    }, 2000);
}

    asincrona(function(err, data){
        if(err){
            console.error('Tenemos un error');
            console.error(err)
            //throw err; //No va a funcionar
            
        }    
        console.log(data);
    })

