import axios from 'axios';


export default axios.create({
  baseURL: "http://localhost:3131",
  validateStatus: function (status) {
    if (status === 401) {
    	localStorage.removeItem('token');
		localStorage.removeItem('user');
		window.location.reload(true)
    } 

    return status >= 200 && status < 300;
  }
});
