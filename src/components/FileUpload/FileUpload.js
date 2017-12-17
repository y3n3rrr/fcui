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
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Your Name: </label>
                          <div className="col-sm-9">
                            <div className="input-group input-group-icon">
                              <span className="input-group-addon">
                                <span className="icon" data-icon="" />
                              </span>
                              <input type="text" className="form-control" placeholder="Username" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-material">
                          <label className="col-sm-3 control-label">Your Gender: </label>
                          <div className="col-sm-9">
                            <div className="radio-custom radio-default radio-inline padding-top-0">
                              <input type="radio" id="inputHorizontalMale2" name="inputRadiosMale2" />
                              <label htmlFor="inputHorizontalMale2">Male</label>
                            </div>
                            <div className="radio-custom radio-default radio-inline padding-top-0">
                              <input type="radio" id="inputHorizontalFemale2" name="inputRadiosMale2" defaultChecked />
                              <label htmlFor="inputHorizontalFemale2">Female</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Your Email: </label>
                          <div className="col-sm-9">
                            <div className="input-group input-group-icon">
                              <span className="input-group-addon">
                                <span className="icon" data-icon="" />
                              </span>
                              <input type="text" className="form-control" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Password: </label>
                          <div className="col-sm-9">
                            <div className="input-group">
                              <div className="input-group-addon"><i className="icon icon_lock" /></div>
                              <input type="password" className="form-control" id="Inputpwd1" placeholder="Enter Password" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label">Confirm Password: </label>
                          <div className="col-sm-9">
                            <div className="input-group">
                              <div className="input-group-addon"><i className="icon icon_lock" /></div>
                              <input type="password" className="form-control" id="Inputpwd2" placeholder="Enter confirm Password" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-material">
                          <div className="col-sm-9 col-sm-offset-3">
                            <button type="button" className="btn btn-info waves-effect waves-light">Submit </button>
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
