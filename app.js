const yInfo=document.querySelector(".yInfo");
const yloc=document.querySelector(".yloc");
const yisp=document.querySelector(".yisp");
const yip=document.querySelector(".yip");
const bar=document.querySelector(".bar");
const btn=document.querySelector(".btn");
const ct2ip=document.querySelector(".ct2ip");
const ct2loc=document.querySelector(".ct2loc");
const ct2country=document.querySelector(".ct2country");
const mp=document.querySelector(".mp");


axios.get("https://ipapi.co/json/").then(response =>{
    yip.textContent = `Your IP: ${response.data.ip} `;
    yloc.textContent= `Location : ${response.data.city} , ${response.data.region} , ${response.data.country}`
    yisp.textContent= `ISP: ${response.data.org}`
})

btn.addEventListener("click", function(){
    if(bar.value==""){
        alert("Enter IP address");
    }
    else{
        var address=bar.value;
        axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=5720934a34b34437a50fb6c605c3d7d0&ip=${address}`).then(response=>{
            console.log(response);
            ct2ip.textContent= `IP: ${response.data.ip}`;
            ct2loc.textContent= `Location : ${response.data.city} , ${response.data.district} , ${response.data.country_code2}`;
            ct2country.textcontent=`${response.data.country_code2}`;
            mp.setAttribute("href", `https://maps.google.com/?q=${response.data.latitude},${response.data.longitude}`);
            mp.textContent=`Find On Gmap`;            
        })
    }
})