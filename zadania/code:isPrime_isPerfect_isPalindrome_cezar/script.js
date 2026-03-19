/*
        let n = "gwgsdg.ed f@ com";
        let a = n.split("").reverse().join("");
        document.write(a); 
*/


// research: relacja, visoner, cezar

        function isPrime(x){
            for(let i=2; i<(x-1); i++){
                if(x % i == 0){
                    return false;
                }
            }
            return true;
        }
        // document.write(isPrime(17));

        // liczba doskonala
        function isPerfect(x){
            let suma = 1;
            for(let i = 2; i <= Math.sqrt(x); i++){
                if(x % i == 0){
                    suma += i + x/i;
                }
            }
            if(suma == x)
                return true;
            else
                return false;
        }

        function isPalindrome(x){
            let l = x.length;
            for(let i = 0; i < l/2; i++)
                if(x.charAt(i) != x.charAt(l-i-1))
                return false;
            return true;
        }
        document.write(isPalindrome("KAJAK"));

        // kod cezara
        function cezar(){
            let a = "ABCDEFGHIJKLMNOPQRDTUVWXYZ";
            let s = "TKTVAGHYHUBT"; //    %26
            let key = 3;
            let newstr = "";

        for(i = 0; i < s.length; i++){
            for(j = 0; j < a.length; j++){
                if(s.charAt(i) === a.charAt(j)){
                    let newindx = (j+key)%26;
                    newstr += a[newindx];
                }
            }
        }
        return newstr;
    }
