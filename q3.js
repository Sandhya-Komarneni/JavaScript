function checkNumber(num)
{
    if(num>0)
        return "Positive";
    else if(num<0)
        return "Negative";
    else
        return "Zero";
}

var res=checkNumber(5);
console.log(res);