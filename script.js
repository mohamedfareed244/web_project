function show_rules(){
    console.log('2');
 /*document.getElementById('safety_rules').style='height:30%';*/
document.getElementById('safety_image').style='margin-left:3%; width:50px; height:50px;';
document.getElementById('safety_label').style='font-size:7px; margin-left:3%;';
document.getElementById('Learn_more').style='left:2%; top: 17%;';
document.getElementById('Learn_more').innerHTML="Hide";


document.getElementById('safety_in_rules').style=' margin-left:10%';
document.getElementById("Learn_more").onclick=hide;
} 
function hide(){
    console.log('1');
    document.getElementById('Learn_more').innerHTML="Learn More";

document.getElementById('safety_image').style='margin-left:30%; width:80px; height:80px;';
document.getElementById('safety_label').style='font-size:20px; margin-left:20%;';
document.getElementById('Learn_more').style='left:75%; top: 12%;';
document.getElementById('safety_in_rules').style='margin-left:-150%';
document.getElementById("Learn_more").onclick=show_rules;
}