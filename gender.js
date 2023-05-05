function gender(arr) {
    const maleStudents = arr.filter(student => student.gender === 'Male');
    const femaleStudents = arr.filter(student => student.gender === 'Female');
  
    const maleTable = createTable(maleStudents);
    const femaleTable = createTable(femaleStudents);
  
    table.remove();
  
    let sec=document.getElementById('section')
  
    sec.appendChild(maleTable);
    sec.appendChild(femaleTable);
  }
  
  function createTable(arr) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Name', 'Gender', 'Class', 'Marks', 'Passing', 'Email'];
  
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    arr.forEach(student => {
      const row = document.createElement('tr');
  
      const idCell = document.createElement('td');
      idCell.textContent = student.id;
      row.appendChild(idCell);
  
      const nameCell = document.createElement('td');
      nameCell.textContent = `${student.first_name} ${student.last_name}`;
      const img=document.createElement('img');
      img.src=student.img_src
      nameCell.appendChild(img)
      row.appendChild(nameCell);
  
      const genderCell = document.createElement('td');
      genderCell.textContent = student.gender;
      row.appendChild(genderCell);
  
      const classCell = document.createElement('td');
      classCell.textContent = student.class;
      row.appendChild(classCell);
  
      const marksCell = document.createElement('td');
      marksCell.textContent = student.marks;
      row.appendChild(marksCell);
  
      const passingCell = document.createElement('td');
      passingCell.textContent = student.passing ? 'passing' : 'failed';
      row.appendChild(passingCell);
  
      const emailCell = document.createElement('td');
      emailCell.textContent = student.email;
      row.appendChild(emailCell);
  
      table.appendChild(row);
    });
  
    return table;
  }
  