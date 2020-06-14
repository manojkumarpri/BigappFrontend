import React, { Component } from 'react';
import './Drag.css';

export default class DragandDrop extends Component {
    state = {
        tasks: [
            {name:"BIG_APP",category:"wip", bgcolor: "yellow"},
            {name:"Interview", category:"wip", bgcolor:"pink"},
            {name:"Callletter", category:"complete", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
userselect=(name)=>{
console.log("here user sleected"+name);
if(name=="BIG_APP"){
    this.refs.BIG_APP.style.background = "#036ffc";
    this.refs.Interview.style.background = "pink";
    this.refs.Callletter.style.background = "skyblue";
}
else if(name=="Interview"){
    this.refs.Interview.style.background = "#036ffc";
    this.refs.Callletter.style.background = "skyblue";
    this.refs.BIG_APP.style.background = "yellow";
}
else if(name=="Callletter"){
    this.refs.Callletter.style.background = "#036ffc";
    this.refs.BIG_APP.style.background = "yellow";
    this.refs.Interview.style.background = "pink";
}
console.log("here ref",this.refs)
// this.refs.name.style.background = "#036ffc";
}
    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                    onClick={()=>this.userselect(t.name)}
                    ref={t.name}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP FILES</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">Search Permissions</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">Search Permissions</span>
                     {tasks.complete}
                </div>
                <div style={{textAlign:"center"}}>
                <div style={{paddingTop:'20%'}}  >                  <input type="button"  style={{backgroundColor:"#036ffc",width:'8%',height:'25%'}} value="move" onClick={()=> this.props.history.push('/drag')} />
 </div>
                </div>

            </div>
        );
    }
}