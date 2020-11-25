function Show()
{
    var bruh = document.getElementById("show").value;
    
    if(bruh!=1)
    {
        document.getElementById("show").hidden=false;
        document.getElementById("show").value=1;
    }
    else
    {       
         document.getElementById("show").hidden=true;
         document.getElementById("show").value=0;
    }

}