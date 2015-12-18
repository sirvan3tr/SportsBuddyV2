import $ = require('jquery');
export default class Authentication {
  isLoggedIn(cb:any) {
    $.get("/isAuthenticated",function(data:any) {
      console.log(data);
      cb(data.auth);
    });
  }
}
