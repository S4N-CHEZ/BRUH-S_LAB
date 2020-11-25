function Return()
{
    var string = document.getElementById("first").value;
    document.getElementById("first").value = string+"=>новый агрумент"
}

function Sum()
{
    var string = document.getElementById("second").value;
    var Sum = 0;
    var Array = [];

    if(string.length!=5)
        {
            document.getElementById("second1").value="Тут нет 5 символов";
            return(Function);
        }

    for(var i = 0; i < 5;)
    {
        if(isNaN(string[i]))
        {
            document.getElementById("second1").value="Не все символы являются числами";
            return(Function);
        }
        else
        Sum+=parseInt(string[i],10);
        i+=2;
    }
    document.getElementById("second1").value = Sum;
    
}

function Quadro()
{
    var string = document.getElementById("third").value;
    let Array = '';

    if(string.length!=5)
        {
            document.getElementById("third1").value="Тут нет 5 символов";
            return(Function);
        }

    for(var i = 0; i < 5; i++)
    {
        if(string[i]==' ')
        {
            Array+=' ';
        }
        else
        {
            if(isNaN(string[i]))
            {
                Array+='0';
            }
            else
            Array+=string[i]*string[i];
        }
    }
    document.getElementById("third1").value=Array;
}