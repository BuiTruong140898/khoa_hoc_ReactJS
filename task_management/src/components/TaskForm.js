import React,{Component} from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }

    onCloseForm = () => {
    this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name == 'status'){
            value = target.value === 'true' ? true : false; 
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //xoa cac gia tri 
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name:'',
            status: false
        })
    }


    render() {
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-titlem">
                    <a><span  
                        className="fa fa-times-circle"
                        onClick={this.onCloseForm}
                    ></span></a>

                    <span className="text-right">Thêm Công Việc</span>
                </h3>
            </div>

            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            className="form-control"
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                        className="form-control" 
                        name="status" 
                        required="required"
                        value={this.state.status}
                        onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="button" onClick={this.onClear} className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    ); 
    }
    }
export default TaskForm;
