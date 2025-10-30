function pierwiastek(a, n){
            let x = a;
            for(let i = 0; i < n; i++){
                x = 0.5*(x+a/x);
            }
            return x;
        }
document.write(pierwiastek(2,1000));
