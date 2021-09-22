'use strict'

function getHashTags()
{
    var headline = document.getElementById('headline').value;
    var wordArr = headline.split(" ");

    var hashtagArr = [];
    var indexArr = [];

    let longWord = "";
    let index = -1;

    while(hashtagArr.length < 3)
    {
        for(let i = 0; i < wordArr.length; i++)
        {
            let indexInArray = indexArr.includes(i);
            if(!indexInArray)
            {
                if(wordArr[i].length > longWord.length)
                {
                    longWord = wordArr[i];
                    index = i;
                }
            }
        }

        hashtagArr.push('#' + longWord);
        if(hashtagArr.length == wordArr.length)
        {
            break;
        }
        indexArr.push(index);
        longWord = "";
        index = -1;
    }

    for(let i = 0; i < hashtagArr.length; i++)
    {
        hashtagArr[i] = hashtagArr[i].toLowerCase();
    }

    hashtagArr.sort((a,b) => b.length - a.length);

    alert(hashtagArr);
}

function search(htArr, word)
{
    var result = -1;
    for(let i = 0; i < htArr.length; i++)
    {
        if(htArr[i].substring(1) == word)
        {
            result = i;
        }
    }

    return result;
}