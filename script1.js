//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
n = 2;

function Prost(n)
{
    for(let i = 2; i<n; i++){
        if((n%i)===0)
            return 0;
    }
    return 1;
}

while(n<100)
{
    if(Prost(n))
    {
        console.log(n);
    }
    n++;
}