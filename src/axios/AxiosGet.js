import axios from 'axios';
export default function axiosGet(condition){
    const options = {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
       
      };
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(axios(options));
        }, Math.floor(5 * 10));
      })
        .then(
          function(response) {
            console.log("here response json",response.data);
           if(condition==true){
            for(var i=0;i<response.data.length;i++){
              var obj={
                name:response.data[i].name,
                phone:response.data[i].phone,
                username:response.data[i].username,
                 company:response.data[i].company.name
                 
              }
             response.data[i]=obj;
          }
        }
            return response.data;
            // this.setState({items:response.data.data});
          }.bind(this),
        )
        .catch(function(error) {
          if (error.response) {
            console.log('here ', error.response.data);
          } else {
            console.log('here error', error);
          }
        });
}