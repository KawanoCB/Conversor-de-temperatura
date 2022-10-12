    function myFunction(){

        var num = parseInt(document.getElementById("num").value);
        var resp = document.getElementById("resultado");
        
        if(document.getElementById("CtoK").selected==true)//Celsius para Kelvin
        resp.innerHTML = ctok(num);
        if(document.getElementById("CtoF").selected==true)//Celsius para Fahrenheit
        resp.innerHTML = ctof(num);
        if(document.getElementById("CtoR").selected==true)//Celsius para Rankine
        resp.innerHTML = ctor(num);

        if(document.getElementById("FtoK").selected==true)//Fahrenheit para Kelvin
        resp.innerHTML = ftok(num);
        if(document.getElementById("FtoC").selected==true)//Fahrenheit para Celsius
        resp.innerHTML = ftoc(num);
        if(document.getElementById("FtoR").selected==true)//Fahrenheit para Rankine
        resp.innerHTML = ftor(num);

        if(document.getElementById("KtoC").selected==true)//Kelvin para Celsius
        resp.innerHTML = ktoc(num);
        if(document.getElementById("KtoF").selected==true)//Kelvin para Fahrenheit
        resp.innerHTML = ktof(num);
        if(document.getElementById("KtoR").selected==true)//Kelvin para Rankine
        resp.innerHTML = ktor(num);

        if(document.getElementById("RtoK").selected==true)//Rankine para Kelvin
        resp.innerHTML = rtok(num);
        if(document.getElementById("RtoC").selected==true)//Rankine para Celsius
        resp.innerHTML = rtoc(num);
        if(document.getElementById("RtoF").selected==true)//Rankine para Fahrenheit
        resp.innerHTML = rtof(num);

    }
    function ctok(x) //Celsius para Kelvin
    {
    return ( (x + 273.15) );
    }
    function ctof(x) //Celsius para Fahrenheit
    {
    return ((1.8*x + 32));
    }
    function ctor(x) //Celsius para Rankine
    {
    return ( (1.8*x + 491.67) );
    }
    function ftok(x) //Fahrenheit para Kelvin
    {
    return ( (x+459.67)*5/9);
    }
    function ftoc(x) //Fahrenheit para Celsius
    {
    return ( (x-32)*5/9 );
    }
    function ftor(x) //Fahrenheit para Rankine
    {
    return ( (x+459.67) );
    }
    function ktoc(x) //Kelvin para Celsius
    {
    return ( (x-273.15) );
    }
    function ktof(x) //Kelvin para Fahrenheit
    {
    return ( (x - 273.15) * 9/5 + 32  );
    }
    function ktor(x) //Kelvin para Rankine
    {
    return ( (x * 9/5 ));
    }
    function rtok(x) //Rankine para Kelvin
    {
    return ( (x * 5/9 ) );
    }
    function rtoc(x) //Rankine para Celsius
    {
    return ( (x - 491,67) * 5/9 );
    }
    function rtof(x) //Rankine para Fahrenheit
    {
    return ( (x - 459.67) );
    }
