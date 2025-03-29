const express = require('express')
const date = require(__dirname + '/date.js')

const app = express()

const port = 3100

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('view engine', 'ejs')

const items = []
const workItems = []
const day = date.getDate() //assim executa a função 
// ou let day = date()

app.get('/', (req, resp) => {

    resp.render('list',
        {
            day: day,
            newListItems: items,
            listTitle: 'Notes'
        })

    /*  resp.render('list', { day, action }) quando tiver dois é assim*/
})

app.post('/', (req, res) => {
    console.log(req.body)

    let item = req.body.newItem

    if(req.body.listTitle === 'Trabalho') {
        workItems.push(item)
        res.redirect('/trabalho')
    } else {
        items.push(item)

        res.redirect('/')
    }
})

app.get('/trabalho', (req, res) => {
    res.render('list',
        {
            listTitle: 'Trabalho',
            newListItems: workItems,
            day: day
        })
})

app.post('/trabalho', (req, res) => {
    let item = req.body.newItem

    workItems.push(item)

    res.redirect('/trabalho')
})

app.get ('/sobre', (req,res) => {
    res.render('about')
})


app.listen(port, () => {
    console.log("Servido rodando")
})