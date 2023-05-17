fetch('https://fakestoreapi.com/products/').then((res)=>{
    
return res.json();

}).then((data)=>{
    console.log(data[0].title);
    console.log(data);
    let catchdata="";
   
   for (const key in data) {
   catchdata+=`<tr>
   <td>${data[key].title}</td>
   <td>${data[key].description}</td>
   <td>${data[key].price}</td>
   </tr>`;
   console.log(data[key].title);
   }
   document.getElementById('showdata').innerHTML=catchdata;
})
            