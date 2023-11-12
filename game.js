

function randomWord() 
{
    var word;
    const words=["skopje", "zagreb", "beograd", "sarajevo", "madrid", "paris", "lyon", "berlin", "vienna", "split", "bitola", "lisabon", "london", "rome", "milan", "sydney", "austin", "boston", "budapes","chicago"];
    return words[Math.floor(Math.random()*20 +1)];
}
function start()
{
    attemps=0;
    counter=0;
    word=randomWord();
    array=Array(word.length).fill('_');
    show();
    Attemp();
    Counting();
    Hide();

    var Letters = [];
    while (Letters.length < 3) 
    {
        var randomindex = Math.floor(Math.random()*word.length);
        if (Letters.indexOf(randomindex)===-1)
        {
            Letters.push(randomindex);
        }
    }
    for(var i of Letters)
    {
        array[i]=word[i];
    }
    show();
}
var array=[];
function show()
{
    document.getElementById("words").textContent = array.join(' ');
}
var attemps=0;
function Attemp()
{
    document.getElementById("attempsnumber").textContent = attemps;
}
var counter=0;
var time;
function Counting()
{
    time=setInterval(function() 
        {
            counter++;
            document.getElementById("timecounter").textContent = counter;
        }, 1000);
}
function checkLetter()
{
    const letter= document.getElementById("checkLetter").value.toLowerCase();
    if(letter.length==1 && /[a-z]/.test(letter))
    {
        if(word.includes(letter))
        {
            for(var i=0;i<word.length;i++)
            {
                if(word[i]===letter)
                {
                    array[i]=letter;
                }
            }
            show();
            if(!array.includes('_'))
                result(true);
        }
        else
        {
            attemps++;
            Attemp();
            if(attemps>=5)
                result(false);
        }  
    }
}
function result(res)
{
    clearInterval(time);
    var izlez = document.getElementById("result");
    var message = document.getElementById("message");
    if (res)
    {
        message.textContent = "CORRECT ANSWER, your spend time is "+counter+"seconds";
    } 
    else
    {
        message.textContent = "TRY AGAIN!.";
    }
    izlez.style.display = 'flex';
}
function Hide()
{
    document.getElementById("result").style.display = 'none';
}
window.addEventListener("load",start,false);