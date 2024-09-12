const express = require('express')
const app = express()
const router = require('./routers')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use("/", express.static("public"))
app.use(router)

app.listen(port, () => {
  console.log(`HeavensFeel listening on port ${port}`)
})