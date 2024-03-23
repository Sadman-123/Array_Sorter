let txt=document.getElementById('txt');
let btn=document.querySelector('i');
let output=document.getElementById('output');
let output_arr=document.getElementById('output_arr');
let output_length=document.getElementById('output_length');
btn.addEventListener('click',()=>{
   let ds=txt.value;
   let xx= ds.split(',');
    let xy=xx.map((x)=>parseInt(x));
    xy.sort((a,b)=>{
        return a-b;
    })
    output_arr.innerText=`Sorted Array ${xy}`;
    output_length.innerText=`Length ${xy.length}`;
    output.style.display="block";
    txt.value="";
})
