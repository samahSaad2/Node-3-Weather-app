const request = require('request')
const weather =(address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=4cfa126858c6544ae117d7b1e99af069&query='+address+'&units=c'
    request({url,json:true},(error,{body})=>{
      if(error)
      {
         callback("Unable to connect to weather service !",undefined)
      }
      else if(body.error)
      {
        callback("Unable to find location",undefined)
      }
      else 
      {
          callback(undefined,body)
          // console.log(current.weather_descriptions[0],".It is currently",current.temperature,"degrees out. It feels like",current.feelslike,"degrees out.")
      }
  
  })  
  }
module.exports = weather