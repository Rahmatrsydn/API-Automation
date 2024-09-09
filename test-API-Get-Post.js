const request = require('supertest');

describe('API Test for "restful-api.dev"', () => {
    it('Test - GET ALL Objects', async () => {
        const response = await request("https://api.restful-api.dev/")
        .get("objects")
        console.log(response.statuscode)
        console.log(response.body)
    });

    it('Test - POST Store Object', async () => {
        const respone = await request("https://api.restful-api.dev/")
        .post("objects")
        .send(
            {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }})
    }
    )

        console.log(response.statuscode)
        console.log(response.body)


    });