import React, { Component } from 'react'
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import PageHeader from '../Header'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'

var filenames=[]
const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true
        },
        deleteFile: {
            enabled: true,
            endpoint: '/uploads'
        },
        request: {
            endpoint: 'http://localhost:51654/api/upload'
        },
        
        retry: {
            enableAuto: false
        },
        callbacks: {
            onSubmitted: function(id, name) {
                filenames.push(name);
            },
            onComplete: (id, name, response) => {
                response.success= response.Success
                console.log(id,name,response)
                // handle completed upload
            },
            onValidate: function(fileData) {
                debugger
                return uploader.qq.indexOf(filenames, fileData.name) < 0;
            }
        }
    }
})

class FileUpload extends Component {
  constructor(props){
    super(props)
    this.appState=this.props.appState
    this.checkedGender='0'
  }
  onSubmit = (e) => {
    debugger
    e.preventDefault();
    const formData = {
      name: this.name.value,
      surname: this.surname.value,
      gender: this.checkedGender
    };
    //this.props.appState.postSaveComment(formData);
   }
   onGenderChange=(val)=>{
     debugger
     this.checkedGender=val;
   }
    render() {
        return (
            <div className="page-content">
            <PageHeader />
          <div className="panel">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="page-wrap">
                    {/* Start Icon With Simple Form */}
                    <h4 className="list-title">Simple Forms With Icon</h4>
                    <div className="margin-vertical-20">
                      <form className="form-horizontal" onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Name: </label>
                          <div className="col-sm-9">
                            <div className="input-group input-group-icon">
                              <span className="input-group-addon">
                                <span className="icon" data-icon="" />
                              </span>
                              <input type="text" className="form-control" placeholder="Username" ref={(input)=>{this.name=input}}  defaultValue="Mehmet Yener"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Surname: </label>
                          <div className="col-sm-9">
                            <div className="input-group input-group-icon">
                              <span className="input-group-addon">
                                <span className="icon" data-icon="" />
                              </span>
                              <input type="text" className="form-control" placeholder="Surname" ref={(input)=>{this.surname=input}} defaultValue="YILMAZ"/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-material">
                          <label className="col-sm-3 control-label">Gender: </label>
                          <div className="col-sm-9">
                          <label className="control control-radio">Male
									<input type="radio" name="gender" onChange={()=>this.onGenderChange('0')} defaultChecked/>
									<span className="control_indicator"></span>
									</label>
                        <label className="control control-radio">Female
									<input type="radio" name="gender" onChange={()=>this.onGenderChange('1')}/>
									<span className="control_indicator"></span>
									</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Birthdate: </label>
                          <div className="col-sm-9">
                            <div className="input-group input-group-icon">
                              <span className="input-group-addon">
                                <span className="icon" data-icon="" />
                              </span>
                              <input type="text" className="form-control" placeholder="Email" defaultValue="24.08.1989"/>
                            </div>
                          </div>
                        </div>
                        
                        <div className="form-group form-material">
                          <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-info waves-effect waves-light">Submit </button>
                            <button type="reset" className="btn btn-dark waves-effect waves-light">Reset</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* End Icon With Simple Form */}
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="page-wrap">
                    {/* Start Right Icon With Simple Form */}
                    <h4 className="list-title ">Forms With Right Icon</h4>
                    <div className="margin-vertical-20">
                    <Gallery uploader={ uploader } /> 
                    </div>
                    {/* ENd Right Icon With Simple Form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default FileUpload
