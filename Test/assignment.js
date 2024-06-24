const context = {  
    students: [
      {
        image: "./Imgs/bee_809052.png",
        alttext:'This is student image',
        name: 'Student 1',
        description: 'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
        level: 4,
        point: 1699
      },
      {
        image: "./Imgs/cat_3468377.png",
        alttext:'This is student image',
        name: 'Student 2',
        description: 'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
        level: 3,
        point: 1234
      },
      {
        image: "./Imgs/cow_4594681.png",
        alttext:'This is student image',
        name: 'Student 3',
        description: 'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
        level: 5,
        point: 2345
      },
      {
        image: './Imgs/kiss_817763.png',
        alttext:'This is student image',
        name: 'Student 4',
        description: 'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
        level: 6,
        point: 5678
      },
      {
        image: "./Imgs/lion_616412.png",
        alttext:'This is student image',
        name: 'Student 5',
        description: 'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
        level: 3,
        point: 1987
      }
    ]
  };
  
  const templateElement = document.getElementById("templateCard")
  var templateSource = templateElement.innerHTML
  const template = Handlebars.compile(templateSource) 
  const compiledHtml = template(context)
  document.getElementById("project-list").innerHTML =compiledHtml
  
  
  const comboBox = document.querySelector(".order-select")
  comboBox.addEventListener("change", (event) =>{
    alert('changed')
    const selectedValue = event.target.value
    const sortedStudents = context.students.sort((a, b) => {
      if (selectedValue === "name") {
        return a.name.localeCompare(b.name)
      } else if (selectedValue === "point") {
        return a.point - b.point
      } else if (selectedValue === "level") {
        return b.level - a.level
      }
    })
    context.students = sortedStudents
    console.log(sortedStudents)
    const sortedHtml = template(context)
    document.getElementById("project-list").innerHTML = sortedHtml
  })
  
   const btn123 = document.querySelector('#plus-btn123');  
   btn123.addEventListener('click', increasePoint);

  function increasePoint(e){
    // const point = event.target.parentElement.parentElement.parentElement.querySelector(".point");
     console.log("point")
     alert('test9')
    // const currentPoint = parseInt(point.textContent) +1
    // point.innerHTML = currentPoint

    
  };
  
  function decreasePoint(event){
    const point =event.target.parentElement.parentElement.querySelector(".point");
    console.log(point)
    const currentPoint = parseInt(point.textContent) -1
    point.innerHTML = currentPoint
  
  }
  
  console.log(bnt)
  