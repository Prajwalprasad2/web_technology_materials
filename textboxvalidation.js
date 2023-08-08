function fun()
{
    var res=document.getElementById("name").value

    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="please enter name..!!"
        return false
    }
    else if(res.length<3)
    {
        document.getElementById("msg").innerHTML="name cannot be lessthan 3 charectors..!!"
        return false
    }
    else if(res.length>15)
    {
       document.getElementById("msg").innerHTML="name cannot be morethan 15 charectors..!!"
       return false
    }

    
    
}