const express = require('express')
const app = new express()


// models
const Movie = require(__basedir + '/models/movie')
const Comment = require(__basedir + '/models/comment')

const DEFAULT_MOVIES_PER_PAGE = 10
const DEFAULT_COMMENTS_PER_PAGE = 3

// handlebars
const path = require('path')

layouts = path.join(path.dirname(__dirname), 'views/layouts')
console.log(layouts)

const expressHandlebars = require('express-handlebars')
const { getSystemErrorMap } = require('util')
const { json } = require('express')
app.engine('hbs', expressHandlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

// Home Directory
app.get('/', async(req, res) => {
  //get page from querystring
  let page = req.query.page

  //determine if page querystring was used
  if (page == null){
    console.log('PAGE NOT ENTERED, DEFAULTING TO PAGE 1')
    page = 1
  }
  else{
    console.log('PAGE ' + page +' SELECTED')
  }
  let prevPage = page - 1
  let nextPage = parseInt(page) + 1

  //retrieve results
  const results = await Movie.find({}).sort({popularity: 'desc'}).lean().skip(page > 0 ? ((page - 1) * DEFAULT_MOVIES_PER_PAGE) : 0).limit(DEFAULT_MOVIES_PER_PAGE)
  const pages = Math.floor(await Movie.countDocuments({}) / 10)

  console.log('FOUND ALL MOVIES ON PAGE ' + page)

  //render page
  res.render('home', {
    layout: 'index', 
    title:'Movie Database',
    pages: pages,
    prev: prevPage,
    next: nextPage,
    movie: results
  })
})

app.get('/movies/:id', async (req, res) => {
  //retrieve results from using paramater 'id'
  console.log('RETRIEVING MOVIE WITH ID ' + req.params.id)
  const results = await Movie.find({_id: req.params.id}).lean()

  //return results as response
  res.render('movie', {
    layout: 'index',
    movie: results
  })
})

module.exports = app

app.get('/search', async (req, res) => {
  //TODO search function

})