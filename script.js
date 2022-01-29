let bits = document.querySelectorAll('.img_bit');
let flags = [];

for (let i = 0; i < bits.length; i++)
{
   flags[i] = false;
}


bits.forEach(element => element.addEventListener('click', rotateBits))
randomizeRotation();

function randomInteger(min, max)
{
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


function randomizeRotation()
{
    setTimeout(() => {
        for (let i = 0; i < 100; i++)
        {
                let randomIndex = randomInteger(0, 15);
                let rotation = randomInteger(0, 2);
                setTimeout(() => {
                    if (rotation == 1 || rotation == 2)
                    {
                        bits[randomIndex].id = "img_vert";
                        flags[randomIndex] = true;
                    }
                    else
                    {
                        bits[randomIndex].id = "peppa_gor";
                        flags[randomIndex] = false;
                    }
                }, 200);

        }
    }, 100);

}




function rotateBits(e)
{
    let index = -1;
    e.target.className = "img_bit1";
    for (let i = 0; i < bits.length; i++)
    {
        if (bits[i].className == "img_bit1")
        {
            index = i;
            break;
        }
    }
    if (index != -1)
    {
        let startIndexI;
        let startIndexJ;
        if (index < 4)
        {
            startIndexI = index;
        }
        else if (index < 8)
        {
            startIndexI = index - 4;
        }
        else if (index < 12)
        {
            startIndexI = index - 8;
        }

        if (index % 4 == 0)
        {
            startIndexJ = index;
        }
        else if ((index - 1) % 4 == 0)
        {
            startIndexJ = index - 1;
        }
        else if ((index - 2) % 4 == 0)
        {
            startIndexJ = index - 2;
        }
        else if ((index - 3) % 4 == 0)
        {
            startIndexJ = index - 3;
        }

        for (let i = startIndexI; i <= startIndexI + 8; i = i + 4)
        {
            if (!flags[i])
            {
                bits[i].id = "img_vert";
                flags[i] = true;
            }
            else
            {
                bits[i].id = "peppa_gor";
                flags[i] = false;
            }
        }

        for (let i = startIndexJ; i <= startIndexJ + 3; i++)
        {
            if (i == index)
            {
                continue;
            }
            if (!flags[i])
            {
                bits[i].id = "img_vert";
                flags[i] = true;
            }
            else
            {
                bits[i].id = "peppa_gor";
                flags[i] = false;
            }
        }
    }
    e.target.className = "img_bit";
    setTimeout(() => {
        checkWin();
    }, 100);

}

function checkWin()
{
    let flag = true;
    for (let i = 0; i < bits.length; i++)
    {
        if (!flags[i])
        {
            continue;
        }
        else
        {
            flag = false;
            break;
        }
    }
    if (flag)
    {
        alert("Выиграли");
    }
    if (!flag)
    {
        for (let i = 0; i < bits.length; i++)
        {
            if (flags[i])
            {
                continue;
            }
            else
            {
                flag = false;
                break;
            }
        }
        if (flag)
        {
            alert("Выиграли");
        }
    }

}