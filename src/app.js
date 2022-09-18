const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/weather.js')
const port = process.env.PORT || 3000
const app = express()
// Define paths to Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
// setup handlebars engine and views location 
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)
//setup static directory to serve 
app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{   // to make app route 
    res.render("index",{
        title : 'Weather App',
        name : 'samah'
    })
})

app.get('/help',(req,res)=>{
    res.render("help",{
        title : 'samah',
        Age : 30
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'Weather App',
        name : 'samah'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({error:"You Must provide address"})
    }
    forecast(req.query.address,(error,{current}={})=>{
        if(error)
        {
            return res.send({error})
        }
        res.send({forcast: current.weather_descriptions[0], address:req.query.address})

    })
}) 
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage : 'The help page not exist'
        })
})


app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({error:"You Must provide asearch item"})
    }
    console.log(req.query.search)
    res.send({products:[]})
}) 


app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage : 'My 404 Page'
        })
})
app.listen(port,()=>{
    console.log("The server is on port"+port)
})  // to app work on port 3000

