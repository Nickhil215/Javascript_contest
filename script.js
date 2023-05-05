
let arr=[];



async function fetchCities(){
    const url=`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`
    const response=await fetch(url);
    const data=await response.json();

    for(let i in data){
        // console.log(data[i]);
        let obj=data[i]
        arr.push(obj);
    }
   

}

function search(arr){
    let input=document.getElementById('search').value.toLowerCase();
    // console.log(input);

    let filterd=arr.filter((data)=>{
        return (
            data.first_name.toLowerCase().includes(input) ||
            data.last_name.toLowerCase().includes(input) ||
            data.email.toLowerCase().includes(input)
        )
    })

    // while (table.rows.length > 1) {
    //     table.deleteRow(-1);
    // }
    arranging(filterd)

}

function AtoZ(arr){
    arr.sort((a, b) => {
        if (a.first_name + a.last_name < b.first_name + b.last_name) {
          return -1;
        }
        if (a.first_name + a.last_name > b.first_name + b.last_name) {
          return 1;
        }
        return 0;
      });
    arranging(arr);
}

function ZtoA(arr){
    arr.sort((a, b) => {
        if (a.first_name + a.last_name < b.first_name + b.last_name) {
          return 1;
        }
        if (a.first_name + a.last_name > b.first_name + b.last_name) {
          return -1;
        }
        return 0;
      });
    arranging(arr);
}

function marks(arr){
    arr.sort((a, b) => a.marks - b.marks);
    arranging(arr);
}



function passing(arr){

    let pass=arr.filter((data)=>{
        return (data.passing==true)
    })

    pass.sort((a, b) => {
        if (a.passing < b.passing) {
          return -1;
        }
        if (a.passing > b.passing) {
          return 1;
        }
        return 0;
      });
    arranging(pass);
}

function classes(arr){
    arr.sort((a, b) => {
        if (a.class < b.class) {
          return -1;
        }
        if (a.class > b.class) {
          return 1;
        }
        return 0;
      });
    arranging(arr);
}

let table = document.getElementById('table');

function arranging(arr){
    

    // console.log(arr)
    // clear existing rows in the table
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    // table.innerHTML='';
    arr.forEach(item => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const classCell = document.createElement("td");
        const marksCell = document.createElement("td");
        const passingCell = document.createElement("td");
        const genderCell = document.createElement("td");

        const img=document.createElement('img');

        img.src=item.img_src;

        idCell.innerText = item.id;
        nameCell.innerText = item.first_name + ' ' + item.last_name;
        emailCell.innerText = item.email;
        classCell.innerText = item.class;
        marksCell.innerText = item.marks;
        if(item.passing==true){
            passingCell.innerText = 'passing';
        }else{
            passingCell.innerText = 'failed';
        }        
        genderCell.innerText = item.gender;
        nameCell.appendChild(img)

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(genderCell);
        row.appendChild(classCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(emailCell);

        table.appendChild(row);
    });
};

fetchCities().then(() => {
    arranging(arr);
  });
// arranging(arr);

document.getElementById("AtoZ").addEventListener('click', () => {
    AtoZ(arr);
  
});

document.getElementById("ZtoA").addEventListener('click', () => {
    ZtoA(arr);
});

document.getElementById('Marks').addEventListener('click', ()=>{
    marks(arr);
})

document.getElementById('Passing').addEventListener('click', ()=>{
    passing(arr);
})

document.getElementById('Class').addEventListener('click' , ()=>{
    classes(arr);
})

document.getElementById('Gender').addEventListener('click',()=>{
    gender(arr);
})

document.getElementById('btn').addEventListener('click',()=>{
    search(arr);
})


