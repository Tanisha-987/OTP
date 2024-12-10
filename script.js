let o = document.getElementById("otp1");
let g = document.getElementById("generate1");
 
g.addEventListener('click',function()
{
    let d
    let s = '';
    
    for(let i=0; i<=3;i++)
    {
        d = Math.floor(Math.random() * 10);
        s += d 
    }
o.innerHTML=s
})

