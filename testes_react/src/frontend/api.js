import axios from 'axios';
import { toast } from 'react-toastify';


export default axios.create({
  baseURL: "http://localhost:3131",
  validateStatus: function (status) {
    if (status === 401) {
    	toast.error("Token Expirado! Vocẽ será redirecionado para a área de Login")
    	localStorage.removeItem('token');
		localStorage.removeItem('user');
		window.location.reload(true)
    } 

    return status >= 200 && status < 300;
  }
});
