function login(){
    let passwordU = document.getElementById('passwordU').value;/*'let' = declare variable (function scope)*/
    /*'var' = declare variable (block scope)*/
    /*g = global */
    /*method match() will compare with value in variable 'passwordU'*/

    var upper = passwordU.match(/[A-Z]/g);
    var lower = passwordU.match(/[a-z]/g);
    var num = passwordU.match(/[1-9]/g);
    var symbol = passwordU.match(/[!@#$%^&*()_+}{":?><,./';|}]/g);
    
    /*counts the number of characters in string and compare it*/      
    /* TRUE*/
    if (passwordU.length >= 12){
        alert('Tahniah! kata laluan mangandungi lebih daripada 12 huruf');
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
    }

    /*match with variable 'upper'*/    
    /* TRUE*/
    if (upper){
        alert('Tahniah! kata laluan mangandungi huruf besar');
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
    }

    /*match with variable 'lower'*/    
    if (lower){/* TRUE*/
        alert('Tahniah! kata laluan mengandungi huruf kecil');
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
    }

    /*match with variable 'num'*/    
    if (num){/* TRUE*/
        alert('Tahniah! kata laluan mengandungi huruf nombor');
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf nombor');
    }

    /*match with variable 'symbol'*/
    if (symbol){/* TRUE*/
       alert('Tahniah! kata laluan mengandungi simbol');
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi simbol');
    }

}