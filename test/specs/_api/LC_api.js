const axios = require('axios');
const expect = require("chai");

let token = '';
let userId = '';
const host = 'https://server-stage.pasv.us';
describe('API TEST', () => {
    it('API ADMIN LOGIN', async () => {
        const response = await axios
            .post(`${host}/user/login`, {
                email: "admin610@qa6.us",
                password: "321321"
            })
        token = response.data.token;
        userId = response.data.userId;
        expect(response.status).equal(200, 'Wrong status');
        expect(response.statusText).equal('OK', 'Wrong statusText');
        expect(response.data.message).equal('Auth success', 'Wrong message')
    });
    it('User get all users', async () => {
        const response = await axios.get(`${host}/user`, {
            headers: {
                Authorization: token
            }
        })
        expect(response.status).equal(200, 'Wrong status');
        expect(response.statusText).equal('OK', 'Wrong statusText');
    });
});