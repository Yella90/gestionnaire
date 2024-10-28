import { Chart } from "chart.js";


const canvas=document.getElementById("barcanvas");
 export function bars(ids){const barchar= new Chart(ids,{
    type:"bar",
    data:{
        labels:["laye","esdmon"],
        datasets:[{
            data:[1233,1232]
        }],
    }

})
 }