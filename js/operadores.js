//ejercicio fecha valida
let dd;
let mm;
let aaaa;

//verificacion de año biciesto
If ((aaaa % 4 == 0 && aaaa % 100 !=0) || (aaaa % 100 == 0 && aaaa % 400 == 0))
&& ((mm == 2 && dd > 0 && dd <= 29) 
|| (mm == 1 && dd > 0 && dd <=31)
|| (mm == 3 && dd > 0 && dd <=31)
|| (mm == 4 && dd > 0 && dd <=30)
|| (mm == 5 && dd > 0 && dd <=31)
|| (mm == 6 && dd > 0 && dd <=30)
|| (mm == 7 && dd > 0 && dd <=31)
|| (mm == 8 && dd > 0 && dd <=31)
|| (mm == 9 && dd > 0 && dd <=30)
|| (mm == 10 && dd > 0 && dd <=31)
|| (mm == 11 && dd > 0 && dd <=30)
|| (mm == 12 && dd > 0 && dd <=31)
);
    {
    //es biciesto 
    console.log (aaaa, ' es biciesto');
    console.log (dd,mm,aaaa ,' es fecha correcta');
    //no es biciesto
    } elseif
    ((mm == 2 && dd > 0 && dd <= 28) 
    || (mm == 1 && dd > 0 && dd <=31)
    || (mm == 3 && dd > 0 && dd <=31)
    || (mm == 4 && dd > 0 && dd <=30)
    || (mm == 5 && dd > 0 && dd <=31)
    || (mm == 6 && dd > 0 && dd <=30)
    || (mm == 7 && dd > 0 && dd <=31)
    || (mm == 8 && dd > 0 && dd <=31)
    || (mm == 9 && dd > 0 && dd <=30)
    || (mm == 10 && dd > 0 && dd <=31)
    || (mm == 11 && dd > 0 && dd <=30)
    || (mm == 12 && dd > 0 && dd <=31)
    );
    {
     console.log (aaaa, ' no es biciesto');
     console.log (dd,mm,aaaa ,' es fecha correcta');
    }
     else 
    {
    console.log(dd,mm,aaaa, ' fecha incorrecta');
}