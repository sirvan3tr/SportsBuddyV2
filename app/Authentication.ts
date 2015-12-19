import $ = require('jquery');
export default class Authentication {
  logged : boolean;
  logged_timeout : number;
  logged_inTime : boolean;
  constructor() {
    this.logged = false;
    this.logged_inTime = false;
  }
  receivedAuthStatus(status:boolean) {
    clearTimeout(this.logged_timeout);
    this.logged = status;
    this.logged_timeout = setTimeout(() => {
      this.logged_inTime = false;
    }, 3000);
  }
  isLoggedIn(cb:any) {
    if(this.logged_inTime == true) {
      cb(this.logged);
    }
    else {
      $.get("/isAuthenticated",(data:any) => {
        console.log(data);
        this.receivedAuthStatus(data.auth);
        cb(this.logged);
      });
    }
  }
}
