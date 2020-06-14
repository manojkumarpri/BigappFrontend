import React,{Component}from'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css';
import '../vendor/daterangepicker/daterangepicker.css';
import '../css/util.css';
import '../css/main.css';
import { withAlert } from 'react-alert'
import axiosGet from '../axios/AxiosGet';



class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            listData:[],
            flag:false,
        }
        this.login=this.login.bind(this);
    
    }
   async  login(){
        if(this.validateEmail()){
          this.state.listData = axiosGet(false).then(function(data) {
                  return data;
                });
          this.setState({listData:await this.state.listData});
            if(await this.state.listData){
                for (var i=0; i < this.state.listData.length; i++) {
                    if (this.state.listData[i].username === this.state.username&&this.state.listData[i].email==this.state.email) {
                      this.setState({flag:true});
                      this.props.alert.show('Successfully loggedin', {
                            timeout: 2000, 
                            type: 'success',
                            onOpen: () => {
                            
                            }, 
                            onClose: () => {
                                this.props.history.push('/userlist');

                            } 
                          })
                    }
                }
                if(this.state.flag==false){
                    this.props.alert.show('invalid credentials', {
                        timeout: 2000, 
                        type: 'error',
                        onOpen: () => {
                        
                        }, 
                        onClose: () => {
                         
                        } 
                      })
                }
            }
         
          
        }
        
    }
  validateEmail=()=>{

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
    {
      return (true)
    }
    this.props.alert.show("You have entered an invalid email address!")
      return (false)
  }


  

    render(){

        return(


<div className="limiter">
<div className="container-login100">
    <div className="wrap-login100 p-b-160 p-t-50">
        <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">
                Account Login
            </span>
            
            <div className="wrap-input100 rs1 validate-input" data-validate = "Username is required">
                <input className="input100" type="text" value={this.state.username} name="username" required onChange={(evt)=>this.setState({username:evt.target.value})} />
                <span className="label-input100">Username</span>
            </div>
            
            
            <div className="wrap-input100 rs2 validate-input" data-validate="Password is required">
                <input className="input100" type="text" value={this.state.email} name="pass" required onChange={(evt)=>this.setState({email:evt.target.value})}/>
                <span className="label-input100">Email</span>
            </div>

            <div className="container-login100-form-btn">
              
            <input type="button" className="login100-form-btn" value="Sign in" onClick={()=>this.login()} />

                {/* <button className="login100-form-btn" onClick={()=>this.login()}>
                    Sign in
                </button> */}
            </div>
            
            <div className="text-center w-full p-t-23">
                <a href="#" className="txt1">
                    Forgot password?
                </a>
            </div>
        </form>
    </div>
</div>

</div>

        )}
    }
    export default withAlert()(Login)
