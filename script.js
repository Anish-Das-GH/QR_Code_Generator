let inp = document.getElementById("inptext");
let qrimg = document.getElementById("img");
let btn = document.getElementById("btn");
let imgbox = document.getElementById("imgbox");

btn.addEventListener("click",getQR)

function getQR()
{
    if(inp.value == "")
    {
        alert("Enter a Valid URL or Text");
    }
    else
    {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value;
        imgbox.classList.add("show-img");
    }
}
