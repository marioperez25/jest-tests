const getCars = require('./asyncGetCars');
const mock = {
    "cars": [
        {
            "id": "001",
            "make": "honda",
            "model": "cr-v",
            "year": 2004
        },
        {
            "id": "002",
            "make": "volkswagen",
            "model": "beattle",
            "year": "1972"
        },
        {
            "id": "003",
            "make": "toyota",
            "model": "tercel",
            "year": "1992"
        },
        {
            "id": "004",
            "make": "mazda",
            "model": "protege",
            "year": "1993"
        }
    ],
    "reviews": [
        {
            "id": "001",
            "author": "test1@mail.com",
            "rate":"5",
            "carId": "001"
        },
        {
            "id": "002",
            "author": "test2@mail.com",
            "rate":"3.0",
            "carId": "002"
        },
        {
            "id": "003",
            "author": "test3@mail.com",
            "rate":"4.2",
            "carId": "003"
        },
        {
            "id": "004",
            "author": "test4@mail.com",
            "rate":"3.9",
            "carId": "004"
        }
    ]
}

test( 'test async function', ()=>{
    expect(getCars)
    .toBe(mock);
})