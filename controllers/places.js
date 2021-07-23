// describes our restaurants

const router = require('express').Router()
const express = require('express')
const app = express()


let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
  }]

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
    // res.render('places', { places })

  })

router.get('/new', (req, res) => {
    res.render('places/new')
  })

module.exports = router