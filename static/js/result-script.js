function copyShortUrl(){const a=document.getElementById("short-url");navigator.clipboard.writeText(a.textContent).then(()=>{alert("Short URL copied to clipboard!")}).catch(a=>{console.error("Error copying short URL:",a)})}function downloadQRCode(){var a=document.getElementById("qrcode"),b=a.src,c=document.createElement("a"),d=new XMLHttpRequest;d.responseType="blob",d.onload=function(){var a=new FileReader;a.onloadend=function(){c.href=a.result,c.download="qrcode.png",document.body.appendChild(c),c.click(),document.body.removeChild(c)},a.readAsDataURL(d.response)},d.open("GET",b),d.send()}function shortenAnotherLink(){window.location.href="/"}var qrcode=document.getElementById("qrcode");qrcode.onload=function(){var a=document.getElementById("qr-code-container");a.style.animation="none",a.addEventListener("mouseenter",function(){a.style.cursor="pointer";var b=document.getElementById("qrcode-overlay");b.style.display="flex"}),a.addEventListener("mouseleave",function(){const a=document.getElementById("qrcode-overlay");a.style.display="none"}),a.addEventListener("click",function(){downloadQRCode()})};var copyButton=document.querySelector(".copy-button");copyButton.addEventListener("click",function(){copyShortUrl()});