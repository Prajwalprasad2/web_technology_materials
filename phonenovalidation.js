function validate()
{
    var res=document.getElementById("phone").value

    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="Phone number required..!!"
        return false
    }
    else if(isNaN(res)==true)
    {
        document.getElementById("msg").innerHTML="enter valid phone number!!"
        return false
    }
    else if(res.length>10)
    {
       document.getElementById("msg").innerHTML="phone number cannot be morethan 10 digits..!!"
       return false
    }
    else if(res.length<10)
    {
       document.getElementById("msg").innerHTML="phone number cannot be lesshan 10 digits..!!"
       return false
    }
    else if(res.charAt(0)<6)
    {
       document.getElementById("msg").innerHTML="phone number should start with 6,7,8,9....!!"
       return false
    }

    
    
}