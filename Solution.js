'use strict'

function Solve()
{
    var letters = document.getElementById('letters').value;
    var currentLetter;
    var previousLetter;
    var solution;
    for(let i = 0; i < letters.length; i++)
    {
        currentLetter = letters.substring(i,i+1);
        if(i == 0)
        {
            previousLetter = currentLetter;
            solution = currentLetter;
        }
        else
        {
            if(currentLetter == previousLetter)
            {
                break;
            }
            else
            {
                for(let j = 0; j < solution.length; j++)
                {
                    let result = solution.search(currentLetter);
                    if(result == -1)
                    {
                        solution += currentLetter;
                    }
                    else
                    {
                        break;
                    }
                }
            }
            previousLetter = currentLetter;
        }
    }

    alert(solution);
}