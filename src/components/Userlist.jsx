import React,{Component}from'react';
import { withAlert } from 'react-alert'
import axiosGet from '../axios/AxiosGet';
import MaterialTable, { MTableToolbar } from 'material-table';

var arr=[];

class Userlist extends Component{
    constructor(props){
        super(props);
        this.state={
            listData:[],
            flag:false,
            listData1:[],
        }
    
    }
 
componentDidMount(){
    this.getData();
}
async getData(){
    this.state.listData = axiosGet(true).then(function(data) {
        return data;
      });
this.setState({listData:await this.state.listData});
console.log("this.state.listData",await this.state.listData);
// if(await this.state.listData){
//     for(var i=0;i<this.state.listData.length;i++){
//         var obj={
//           name:this.state.listData[i].name,
//           phone:this.state.listData[i].phone,
//           username:this.state.listData[i].username,
//            company:this.state.listData[i].company.name
           
//         }
//        this.state.listData[i]=obj;
//     }
//     this.setState({listData: this.state.listData});
//     console.log("here after listData",this.state.listData);


// }
}

    render(){

        return(


<div >
    {this.state.listData!=undefined?(
<MaterialTable
            title=""
            columns={[
              { title: 'FULL NAME',field: 'name'},
              { title: 'PHONE', field: 'phone' },
              { title: 'USER NAME', field: 'username' },
              { title: 'COMPANY NAME', field: 'company' }
             
            ]}
            data={(this.state.listData)}        
          />):([])}
                <div style={{textAlign:"center",paddingTop:20}}>
                  <input type="button"  className="btn btn-success" value="GOTONEXT" onClick={()=> this.props.history.push('/drag')} />

</div>
</div>

        )}
    }
    export default withAlert()(Userlist);
