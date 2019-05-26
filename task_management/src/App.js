import React,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [] ,//id unique,name, status
      isDisplayForm : false
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks 
      })
    }
  }  
  themData = ()=>{
    var tasks=[
    {
      id: this.genarateID(),
      name : "Bui",
      status : true
    },
    {
      id: this.genarateID(),
      name: 'Van',
      status:true
    },
    {
      id: this.genarateID(),
      name: 'Truong',
      status: false
    }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  genarateID() {
    return this.s4()+ '-'+this.s4()+'+'+this.s4();
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  
  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id =  this.genarateID();
    tasks.push(data);
    this.setState({
      tasks : tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      tasks[index].status = !tasks[index].status; 
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));

    }

  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    })
    return result;
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  render() {
    var { tasks, isDisplayForm } = this.state;// var tasks = this.state.tasks;
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit = {this.onSubmit} onCloseForm = {this.onCloseForm} /> : "";
    var elemets = tasks.map((task, index) => {
      return <task/>
    });
    return(
     <div className="container">
        <div className="text-center"> <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>

               {/*TaskForm*/}
               {elmTaskForm}
               {/* #TaskForm*/}
            </div>
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.onToggleForm}
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                
                <button type="button" className="btn btn-danger ml-5" onClick={this.themData}>
                    <span className="fa fa-plus mr-5"></span>Thêm data
                </button>
                {/*Control*/}
                    <Control/>
                {/*#Control*/}
                
                <div className="row mt-15">
                    {/*TaskList*/}
                    <TaskList 
                      tasks={tasks}
                      onUpdateStatus={this.onUpdateStatus}
                      onDelete={this.onDelete}
                    />
                    {/*TaskList*/}

                </div>
            </div>
        </div>
    </div>
    ); 
  }
}

export default App;
