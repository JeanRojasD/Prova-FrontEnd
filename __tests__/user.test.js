import user from '../src/api/user'
import axios from 'axios'

jest.mock('axios');

describre('user', () => {
    it('fetches sucessfully data from an API', async () => {
        const data = {
            data: {
                user: [
                    {
                        id: 1,
                        nome: 'Jean',
                        email: 'jeans@gmail.com',
                        phone: '45999405679'
                    },
                ]
            }
        }

         axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });
   
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
 
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );
    });
})