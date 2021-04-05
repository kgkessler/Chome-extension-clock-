setInterval(
    function(){
        let date = new Date();
        document.getElementById("calendar").innerHTML=`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
        document.getElementById("clock").innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    },1000);