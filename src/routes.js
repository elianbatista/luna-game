const Router = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/pages/index.html')
})

module.exports = router