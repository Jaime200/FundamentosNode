function otraFuncion(){
  seRompe();   
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try {
            return 3+ z    
        } catch (error) {
            cb(error);
        }
        
    }, 1000);
}

try {
    // otraFuncion()  
    seRompeAsincrona(function (err){
        console.log('Hay Error');
        console.log(err.message);
        
    });
} catch (error) {
    console.error('Error');
    console.error(error.message);
    console.log('Error capturado');
}


