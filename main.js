let btn = document.querySelector("button")
let ul= document.querySelector('ul')
let table = document.querySelector ('table')

let tr1=document.createElement("tr")
table.appendChild(tr1)
let th1= document.createElement('th')
th1.innerText='Name'
tr1.appendChild(th1)

let th2= document.createElement('th')
tr1.appendChild(th2)
th2.innerText='userName'

let th3=document.createElement('th')
th3.innerText='email-Id'
tr1.appendChild(th3)

let th4=document.createElement('th')
th4.innerText='user-Id'
tr1.appendChild(th4)

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
      data.forEach((item) => {

      let tr2=document.createElement('tr')
     table.appendChild(tr2)

      let td1=document.createElement('td')
      let td2=document.createElement('td')
      let td3=document.createElement('td')
      let td4=document.createElement('td')
  
     td1.innerText=item.name
     td2.innerText=item.username
     td3.innerText=item.email
     td4.innerText=item.id

     tr2.appendChild(td1)
     tr2.appendChild(td2)
     tr2.appendChild(td3)
     tr2.appendChild(td4)
    });

};

btn.addEventListener("click", fetchData);