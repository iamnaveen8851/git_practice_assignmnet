


function checkPrime(num){
    let count = 0;
    for(let i = 1; i <= num; i++)
    {
        if(num % i == 0)
        {
            count++
        }
    }
    
    if(count != 2)
    {
        console.log("Is Prime");
    }
    else
    {
        console.log("Isn't Prime");
    }
}

checkPrime(13)

