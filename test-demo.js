const request = require("supertest");
var chai = require('chai');
chai.use(require('chai-json-schema'));

const assert = chai.assert
const should = chai.should
const expect = chai.expect

describe('API Test for "restful-api.dev"', () => {
    const BASE_URL = "https://api.restful-api.dev/"

    it('Test - GET ALL Objects', async () => {
       const response = await request(BASE_URL)
       .get("objects");
       console.log(response.body)
         
       //assertion
       assert.equal(response.statusCode, 200)
       assert.equal(response.body[0].name, "Google Pixel 6 Pro")
       assert.equal(respone.body[0].data.color, "Cloudy White")

       expect(response.statusCode).to.equal(200)
    });

    it('Test - POST Store Object', async () => {
        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"

        }
    }

    const response = await request(BASE_URL)
    .post("objects")
    .send(body)

    console.log(response.statusCode)
    console.log(response.body)

    // assertion
    should(response.statusCode === 200)

    const jsonSchema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "data": {
            "type": "object",
            "properties": {
              "year": {
                "type": "integer"
              },
              "price": {
                "type": "number"
              },
              "CPU model": {
                "type": "string"
              },
              "Hard disk size": {
                "type": "string"
              }
            },
            "required": [
              "year",
              "price",
              "CPU model",
              "Hard disk size"
            ]
          },
          "createdAt": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name",
          "data",
          "createdAt"
        ]
      }
      assert.jsonSchema(response.body, jsonSchema)

    });

});
