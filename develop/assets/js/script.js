$(document).ready(function() {
    var timeEl = $('<p>');
    var dayEl = $('<p>');
    var box1 = $('#div1');
    var box2 = $('#div2');
    var box3 = $('#div3');
    var box4 = $('#div4');
    var box5 = $('#div5');
    var box6 = $('#div6');
    var box7 = $('#div7');
    var box8 = $('#div8');
    var box9 = $('#div9');

    var militaryTime=[9,10,11,12,13,14,15,16,17]

    var getCurrentHour=moment().hour()

    console.log(getCurrentHour)
            
    for(var i=0;i < militaryTime.length;i++){

        if(getCurrentHour > militaryTime[i] ){
            $("#div"+i).addClass("past") 
        }
        if(getCurrentHour===militaryTime[i]){
            $("#div"+i).addClass("present")
        }
       
        if(getCurrentHour<militaryTime[i]) {
            $("#div"+i).addClass("future")
        }
        if(localStorage.getItem(i)){
            $("#div"+i).val(localStorage.getItem(i))
        }
    }

    $(".saveBtn").on("click",function(){
         var id=$(this).attr("data-id")

         var text=$("#div"+id).val()
         localStorage.setItem(id,text)
    })
})