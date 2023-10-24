let data=[{name:"karthick",age:20},
{name:"guvi",age:50}];

function displaydata(){
    const dataRows=document.getElementById("dataRow");
    dataRows.innerHTML="";


data.forEach((item,index)=>{
    const rows =` <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>
            <button type='button' class="btn btn-info=${index}">edit</button>
            <button type='button' class="btn btn-danger=${index}">delete</button>
        </td>
    </tr>`;
    dataRows.insertAdjacentHTML("beforeeend",rows)
});
}
function handleforSubmit(event){
    event.preventdefault();
    const nameinput=document.getElementById("name");
    const ageinput=document.getElementById("age");

    const name=nameinput.value.trim();
    const age=parseInt(ageinput.value);
}
displaydata();