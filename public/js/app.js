console.log(" heelo from custom app.js")

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
// response.json().then((data)=>{
//     console.log(data)
// })
// })



const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')
// messageOne.textContent='test'
weatherForm.addEventListener('submit',(event) =>{
  event.preventDefault();
  const location = search.value
  messageOne.textContent='';
  messageTwo.textContent=''
  fetch('http://api.weatherstack.com/current?access_key=4cfa126858c6544ae117d7b1e99af069&query='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageOne.textContent=data.error.info
            console.log(data.error)
        }
        else 
        {
            messageOne.textContent=data.current.weather_descriptions[0]+" .It is currently "+data.current.temperature+
            " degrees out. It feels like "+data.current.feelslike+" degrees out." + " Cloud Cover = "+data.current.cloudcover;
            messageTwo.textContent = data.location.name
        }
    
    })
})
})