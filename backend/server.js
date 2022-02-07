import express from 'express'
import mongoose from 'mongoose'

import Videos from './db-model.js'
import data from './data.js'

const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'), res.setHeader('Access-Control-Allow-Headers', '*'), next()
})

const connection_url =
  'mongodb+srv://admin:B2fVqL5kAdhUJP09@cluster0.dkdlh.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => res.status(200).send('Hellow World'))

app.get('/v1/posts', (req, res) => res.status(200).send(data))

app.get('/v2/posts', (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.get('/v2/posts/recomendation', (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/v2/posts', (req, res) => {
  const dbVideos = req.body

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.post('/v2/posts/recomendation', (req, res) => {
  const dbVideos = req.body

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.listen(port, () => console.log(`listeting on ${port}`))
