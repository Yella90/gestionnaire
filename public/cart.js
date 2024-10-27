import { Chart } from "chart.js";


const canvas=document.getElementById("barcanvas");
const barchar= new Chart(canvas,{
    type:"bar",
    data:{
        labels:["laye","esdmon"],
        datasets:[{
            data:[1233,1232]
        }],
    }

})