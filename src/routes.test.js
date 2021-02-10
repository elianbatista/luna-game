const request = require('supertest')
const app = require('./app.js')

describe('Route test', () => {
  test('Should return status 200 on get in root', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200)
  })
  test('Should return status 404 on request a not found route', async () => {
    const response = await request(app).get('/not-found-route')
    expect(response.status).toEqual(404)
  })
})