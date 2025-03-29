/*
const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const port = 3100

app.set('view engine', 'ejs')


app.get('/', (req, resp) => {
   
    let today = new Date();

    let currentDay = today.getDay()

    let day = ''

    let action = ''

    color = 'black'

    if (currentDay === 0) {
        day = "Domingo,"
        action = "Sem trabalho"
    } else if (currentDay === 1) {
        day = "Segunda,"
        action = 'Bora trabalhar'
        color = 'blue'
    } else if (currentDay === 2) {
        day = "Terça,"
        action = 'Bora trabalhar'
        color = 'blue'
    } else if (currentDay === 3) {
        day = "Quarta,"
        action = 'Bora trabalhar'
        color = 'blue'
    } else if (currentDay === 4) {
        day = "Quinta,"
        action = 'Bora trabalhar'
        color = 'blue'
    } else if (currentDay === 5) {
        day = "Sexta,"
        action = 'Bora trabalhar'
        color = 'blue'
    } else if (currentDay === 6) {
        day = "Sábado,"
        action = 'Sem trabalho'
    } else {
        day = "Não foi possível achar o day"
        action = '"Não foi possível achar a ação'
    }
})

ou 

switch (currentDay) {
        case 0: 
            day = 'Domingo'
            action = 'Sem trabalho'
            break;
        case 1: 
            day = 'Segunda'
            action = 'Bora trabalhar'
            break;
        case 2: 
            day = 'Terça'
            action = 'Bora trabalhar'
            break;
        case 3: 
            day = 'Quarta'
            action = 'Bora trabalhar'
            break;
        case 4: 
            day = 'Quinta'
            action = 'Bora trabalhar'
            break;
        case 5: 
            day = 'Sexta'
            action = 'Bora trabalhar'
            break;
        case 6: 
            day = 'Sábado' 
            action = 'Sem trabalho'

            break;
        
        default:
            day = 'Não foi possível achar'
            action = '"Não foi possível achar a ação'
            break;
    } 

app.listen(port, () => {
    console.log("Servido rodando")
})

list:js 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabalho</title>
</head>
<body>
    <h1 style="color: <%= color %>" > <%= day %> </h1>
    <p> <%= action %> </p>
</html>
































































*/