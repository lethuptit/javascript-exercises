var endpoint ='https://jsonplaceholder.typicode.com/posts'
var endpoint= 'https://official-joke-api.appspot.com/random_joke'
var endpoint='https://dummy.restapiexample.com/api/v1/employees'
// const prom = fetch(endpoint)
// prom.then(response => {
//   if(response.ok)
//     console.log(response)
//     response.json().then( jsonResponse =>{
//       // console.log('Data from promise:')
//       // console.log(jsonResponse)
//     })
// })


async function fetch_data(){
  const prom = await fetch(endpoint)
  if(prom.ok){
      const jsonResponse = await prom.json ()
      //console.log('Data from async function:')
      console.log(jsonResponse.data)
      return jsonResponse.data
  }
  alert("Error in Fetching employee data!")  
}

function displayTableContent(data){
    const table_header = document.getElementById('employee-table').querySelector('thead')
  table_header.innerHTML=""
  const table_body = document.getElementById('employee-table').querySelector('tbody')
  table_body.innerHTML=""

  //table header & its row
  const headers = ['ID', 'Name', 'Salary', 'Age']
  const theaderRow = document.createElement('tr')  
  headers.forEach(text=>{
    const th = document.createElement('th')
    th.textContent = text
    theaderRow.appendChild(th)
  })
  table_header.appendChild(theaderRow)
  if(data!=='undefined' && data.length >0 ){
    data.forEach((employee, index)=>{
      //console.log(employee)
      const tr = document.createElement('tr')    
      const id = document.createElement('td')
      id.textContent = employee.id
      const name = document.createElement('td')
      name.textContent = employee.employee_name
      const salary = document.createElement('td')
      salary.textContent = employee.employee_salary
      const age = document.createElement('td')
      age.textContent = employee.employee_age
      tr.appendChild(id)
      tr.appendChild(name)
      tr.appendChild(salary)
      tr.appendChild(age)
      if(index%2===0)
        tr.style.setProperty('background-color', 'lightblue')

      table_body.appendChild(tr)
    })
  }
}

function addNewEmployee(event, data){
    event.preventDefault()
    let ids = data.map(a => a.id);
    try{
        const id = parseInt(document.getElementById('id').value)
        if(ids.indexOf(id)!==-1)
        {
            alert('The ID is existing')
            return
        }
        const name = document.getElementById('name').value
        const salary = document.getElementById('salary').value
        const age = document.getElementById('age').value
        let new_Employee = {
            id:id,
            employee_name: name,
            employee_salary: salary,
            employee_age : age
        }
        data.push(new_Employee)   
         
    }catch(error){
        alert('Some input is invalid')
    }
    displayTableContent(data)
}

async function getTableContent(){
    const data = await fetch_data()
    const add_bnt = document.getElementById('addBnt')  
    add_bnt.addEventListener('click', (event)=> addNewEmployee(event, data))
    displayTableContent(data)
}


document.addEventListener('DOMContentLoaded',getTableContent)
