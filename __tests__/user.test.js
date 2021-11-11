const axios = require('axios')
const api = require('../src/api/user')

describe('fetchData', () => {

    beforeAll(async () => {
        const user = {
            nome: 'Jean',
            email: 'jeanrojas@gmail.com',
            phone: '45999405679'
        }

        await api.post("/", user)
    })

    it('Puxando dados da api corretamente', async () => {

        const response = await api.get("/")

        const listUser = [{
            id: 1,
            nome: 'Jean',
            email: 'jeanrojas@gmail.com',
            phone: '45999405679'
        }]

        expect(response.status).toBe(200)
        expect(response.data).toEqual(listUser)
    });

});