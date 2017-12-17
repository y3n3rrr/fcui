import React, { Component } from 'react'
import WelcomeDash from './WelcomeDash'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <WelcomeDash />
            <div className="page-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <div className="bg-white widget widgett-shadow">
              <div className="heading-top-index-3">
                <div className="row">
                  <div className="col-sm-12">
                    {/* Start Chart Section */}
                    <div className="left-dash-head">
                      <h3 className="list-title">Chart</h3>
                    </div>
                    <div className="right-dash-head">
                      <div className="btn-group mar-button dash-select">
                        <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                          <li />
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* End Chart Section */}
                  </div>
                </div>
              </div>
              <div className="chart-main-div">
                <div id="non-ribbon-chord" className="echart-size" />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div className="bg-white widget widgett-shadow">
              {/* Start Analysis Section */}
              <div className="heading-top-index-3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="left-dash-head">
                      <h3 className="list-title">Live Analysis</h3>
                    </div>
                    <div className="right-dash-head">
                      <div className="btn-group mar-button dash-select">
                        <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                          <li />
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-float2">
                <div id="realtime-flot" className="placeholder-float echart-size" />
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="counter text-left padding-20">
                    <div className="counter-number-group font-size-24 margin-bottom-5">
                      <h3 className="margin-top-0">82,219 K</h3>
                    </div>
                    <div className="counter-label">Lifetime earnings</div>
                    <div>
                      <span className="sparkline-bar5">6,3,8,6,5,4,7,4,9</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="padding-20">
                    <div className="font-size-20 text-uppercase multi-daigram-dash">SYSTEM STATUS</div>
                    <ul className="list-unstyled margin-md-0">
                      <li>
                        <div className="text-left">
                          <span className="text-info">Handles - 79 %</span>
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-info bg-blue-600" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} style={{width: '79%'}} role="progressbar">
                            <span className="sr-only">79%</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="text-left">
                          <span className="text-info">Threads - 55 %</span>
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-info bg-red-600" aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} style={{width: '55%'}} role="progressbar">
                            <span className="sr-only">55%</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="text-left">
                          <span className="text-info">Proccess - 45 %</span>
                        </div>
                        <div className="progress progress-xs margin-md-0">
                          <div className="progress-bar progress-bar-info bg-green-600" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}} role="progressbar">
                            <span className="sr-only">45%</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Analysis Section */}
            </div>
          </div>
        </div>
        <div className="widget-box">
          {/* Start Box Section */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-in-box">
            <div className="row">
              <div className="card-box widget-user-icon">
                <i className="fa fa-tasks  fa-5x dash-icon-head blue" />
                <div className="wid-u-info">
                  <div className="huge">49.98%</div>
                  <div>Total Database Load</div>
                  <span className="line-info">2,3,2,2,1,3,6,3,2,1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-in-box">
            <div className="row">
              <div className="card-box widget-user-icon">
                <i className="fa fa-picture-o fa-5x dash-icon-head yellow" />
                <div className="wid-u-info">
                  <div className="huge">+47 Photos</div>
                  <div>Gallery</div>
                  <span className="line-info">1,1,0,2,3,4,2,1,2,2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-in-box">
            <div className="row">
              <div className="card-box widget-user-icon ">
                <i className="fa fa-file-text fa-5x dash-icon-head purple" />
                <div className="wid-u-info">
                  <div className="huge">14/331</div>
                  <div>Notification</div>
                  <span className="line-info">9,2,5,5,7,4,4,3,2,2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-in-box">
            <div className="row">
              <div className="card-box widget-user-icon">
                <i className="fa fa-envelope-o fa-5x dash-icon-head light-red " />
                <div className="wid-u-info">
                  <div className="huge">5 Messages</div>
                  <div>Support center</div>
                  <span className="line-info">3,3,1,62,4,3,7,3,2,5</span>
                </div>
              </div>
            </div>
          </div>
          {/* End Box Section */}
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="widgett-shadow widget-bottom-margin">
              {/* Start Contacts Section */}
              <div className="heading-top-index-3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="left-dash-head">
                      <h3 className="list-title">Contacts</h3>
                    </div>
                    <div className="right-dash-head">
                      <div className="btn-group mar-button dash-select">
                        <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                          <li />
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="static-box contact-list-div widget-bottom-spacing">
                <div className="example table-responsive padding-top-0">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ela</td>
                        <td>Emmett</td>
                        <td>@Elijah</td>
                        <td>
                          <span className="label label-danger">admin</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Andy</td>
                        <td>Moronta</td>
                        <td>@Ramiro</td>
                        <td>
                          <span className="label label-info">member</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Odaniel</td>
                        <td>Oswaldo</td>
                        <td>@Maxime</td>
                        <td>
                          <span className="label label-warning">developer</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Florene</td>
                        <td>Farwell</td>
                        <td>@Farwell</td>
                        <td>
                          <span className="label label-success">supporter</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Mccarville</td>
                        <td>Murray</td>
                        <td>@Mmurray</td>
                        <td>
                          <span className="label label-info">member</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Feeley</td>
                        <td>Fermina</td>
                        <td>@Fmina</td>
                        <td>
                          <span className="label label-success">supporter</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* End Contacts Section */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="widgett-shadow widget-small-space">
              {/* Start Message Section */}
              <div className="heading-top-index-3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="left-dash-head">
                      <h3 className="list-title">Messages</h3>
                    </div>
                    <div className="right-dash-head">
                      <div className="btn-group mar-button dash-select">
                        <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                          <li />
                          <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="static-box margin-bottom-0">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="chat_message_wrapper">
                      <div className="chat_user_avatar">
                        <img className="user-image-left" src="assets/images/global/image6.jpg" alt="chat-img" />
                      </div>
                      <ul className="chat_message_left">
                        <li className="chat_margin">
                          <h3 className="chat-name-left">Verdell Rea</h3>
                          <p>It has survived not only five centuries <span className="chat_message_time_left"><i className="icon icon_clock_alt" /> 19 JUN 1:30 PM</span> </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="chat_message_wrapper">
                      <div className="chat_user_avatar">
                        <img className="user-image-right" src="assets/images/global/image2.jpg" alt="chat-img" />
                      </div>
                      <ul className="chat_message_right">
                        <li className="chat_margin">
                          <h3 className="chat-name-right">Sevral Den</h3>
                          <p>Maecenas nec odio et ante tincidunt tempus..<span className="chat_message_time_right"><i className="icon icon_clock_alt" /> 13:39</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="chat_message_wrapper">
                      <div className="chat_user_avatar">
                        <img className="user-image-left" src="assets/images/global/image6.jpg" alt="chat-img" />
                      </div>
                      <ul className="chat_message_left">
                        <li className="chat_margin">
                          <h3 className="chat-name-left">Verdell Rea</h3>
                          <p>Donec sodales sagittis magna. <span className="chat_message_time_left"><i className="icon icon_clock_alt" /> 19 JUN 1:30 PM</span> </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="chat_message_wrapper">
                      <div className="chat_user_avatar">
                        <img className="user-image-right" src="assets/images/global/image2.jpg" alt="chat-img" />
                      </div>
                      <ul className="chat_message_right">
                        <li className="chat_margin">
                          <h3 className="chat-name-right">Sevral Den</h3>
                          <p>Lorem Ipsum is simply dummy <span className="chat_message_time_right"><i className="icon icon_clock_alt" /> 13:39</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="chat_message_wrapper">
                      <div className="chat_user_avatar">
                        <img className="user-image-left" src="assets/images/global/image6.jpg" alt="chat-img" />
                      </div>
                      <ul className="chat_message_left">
                        <li className="chat_margin">
                          <h3 className="chat-name-left">Verdell Rea</h3>
                          <p>Sed aliquam ultrices mauris. <span className="chat_message_time_left"><i className="icon icon_clock_alt" /> 19 JUN 1:30 PM</span> </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <form>
                    <div className="input-group">
                      <span className="input-group-btn margin-0">
                        <a href="#" className="btn fa fa-camera" />
                      </span>
                      <textarea className="form-control dash-form-group" placeholder="Type message here ..." defaultValue={""} />
                      <span className="input-group-btn">
                        <button type="button" className="btn margin-0 send-messages-dash"><i className="fa fa-paper-plane" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Message Section */}
            </div>
          </div>
          <div className="col-sm-12 col-lg-8 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6 activities-res-width">
                    <div className="dash-widget widgett-shadow">
                      {/* Start Activities Section */}  
                      <div className="heading-top-index-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="left-dash-head">
                              <h3 className="list-title">Activities</h3>
                            </div>
                            <div className="right-dash-head">
                              <div className="btn-group mar-button dash-select">
                                <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                                  <li />
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="  simple-timeline">
                        <div className="static-box padding-bottom-10 margin-bottom-0">
                          <ul className="timeline timeline-simple">
                            <li className="timeline-item timeline-reverse padding-left-0 margin-vertical-0">
                              <div className="timeline-point" data-placement="right" data-toggle="tooltip" data-trigger="hover" data-original-title="9.30 am" />
                              <div className="timeline-content">
                                <div className="widgett widgett-article widgett-shadow">
                                  <div className="widgett-body padding-vertical-10">
                                    <p className="text-info margin-bottom-5">1 hour ago</p>
                                    <p>Integer cubilia mollis. Fringilla tincidunt  mollis.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="timeline-item timeline-reverse padding-left-0 margin-vertical-0">
                              <div className="timeline-point bg-green-500" data-placement="right" data-toggle="tooltip" data-trigger="hover" data-original-title="4.00 am" />
                              <div className="timeline-content">
                                <div className="widgett widgett-article widgett-shadow">
                                  <div className="widgett-body padding-vertical-10">
                                    <p className="text-info margin-bottom-5">5 hour ago</p>
                                    <p>Pulvinar ornare varius faucibus quisque quis ornare id purus ut.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="timeline-item timeline-reverse padding-left-0 margin-vertical-0">
                              <div className="timeline-point bg-orange-500" data-placement="right" data-toggle="tooltip" data-trigger="hover" data-original-title="6.30 pm" />
                              <div className="timeline-content">
                                <div className="widgett widgett-article widgett-shadow">
                                  <div className="widgett-body padding-vertical-10">
                                    <p className="text-info margin-bottom-5">Yesterday</p>
                                    <p>Leo class cras fringilla dis torquent faucibus natoque curabitur ornare.</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Activities Section */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6 task-res-width">
                    <div className="dash-widget widgett-shadow">
                      {/* Start Task Section */}
                      <div className="heading-top-index-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="left-dash-head">
                              <h3 className="list-title">Tasks</h3>
                            </div>
                            <div className="right-dash-head">
                              <div className="btn-group mar-button dash-select">
                                <a className="btn-group mar-button dash-select " data-toggle="dropdown" aria-expanded="false"> 
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                                  <li />
                                  <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="static-box padding-bottom-5 margin-bottom-0">
                        <div className="task-main-div">
                          <ul className="list-task list-group sortable" data-role="tasklist" id="nestable">
                            <li className="list-group-item task-done" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputSchedule" name="inputCheckboxesSchedule" defaultChecked />
                                <label htmlFor="inputSchedule">
                                  <i className="icon icon_calendar" aria-hidden="true" />
                                  <span>Variable length pagination</span>
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputCall" name="inputCheckboxesCall" />
                                <label htmlFor="inputCall">
                                  <i className="icon icon_phone" aria-hidden="true" />
                                  <span>Includes jQuery Plugin</span>
                                  <span className="label label-danger">Today</span>
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputBook" name="inputCheckboxesBook" />
                                <label htmlFor="inputBook">
                                  <i className="icon icon_calendar" aria-hidden="true" />
                                  <span>On-the-fly filtering</span>
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputForward" name="inputCheckboxesForward" />
                                <label htmlFor="inputForward">
                                  <span>Hide certain columns at different sizes</span>
                                  <span className="label btn-info">2 weeks</span>
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputBook2" name="inputCheckboxesBook" />
                                <label htmlFor="inputBook2">
                                  <i className="icon icon_calendar" aria-hidden="true" />
                                  <span>On-the-fly filtering</span>
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item" data-role="task">
                              <div className="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="inputRecieve" name="inputCheckboxesRecieve" />
                                <label htmlFor="inputRecieve">
                                  <span>Includes LESS and CSS</span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Task Section */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="widgett-shadow widget-bottom-margin">
                  {/* Start Product Section */}
                  <div className="heading-top-index-3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="left-dash-head">
                          <h3 className="list-title">Products</h3>
                        </div>
                        <div className="right-dash-head">
                          <div className="btn-group mar-button dash-select">
                            <a className="btn-group mar-button dash-select" data-toggle="dropdown" aria-expanded="false"> 
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right" role="menu">
                              <li><a href="javascript:void(0)" className=" waves-effect waves-light">Action</a></li>
                              <li><a href="javascript:void(0)" className=" waves-effect waves-light">Another action</a></li>
                              <li><a href="javascript:void(0)" className=" waves-effect waves-light">Something else here</a></li>
                              <li />
                              <li><a href="javascript:void(0)" className=" waves-effect waves-light">Separated link</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="static-box product-list-div widget-bottom-spacing">
                    {/* Start Contact Table Section */}
                    <div className="example table-responsive">
                      <div className="responsive-table">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Products</th>
                              <th>Popularity</th>
                              <th>Sales</th>
                              <th>Position</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Protin Powder</td>
                              <td>
                                <span data-plugin="peityBar" data-skin="blue" style={{display: 'none'}}>5,3,9,6,5,9,7,3,5,2</span>
                                <svg className="peity" height={22} width={44}>
                                  <rect x="0.44000000000000006" y="9.777777777777777" width="3.52" height="12.222222222222223" />
                                  <rect x="4.840000000000001" y="14.666666666666668" width="3.5199999999999987" height="7.333333333333332" />
                                  <rect x="9.24" y={0} width="3.5199999999999996" height={22} />
                                  <rect x="13.64" y="7.333333333333334" width="3.5199999999999996" height="14.666666666666666" />
                                  <rect x="18.04" y="9.777777777777777" width="3.520000000000003" height="12.222222222222223" />
                                  <rect x="22.439999999999998" y={0} width="3.520000000000003" height={22} />
                                  <rect x="26.839999999999996" y="4.888888888888889" width="3.5200000000000067" height="17.11111111111111" />
                                  <rect x="31.24" y="14.666666666666668" width="3.5200000000000067" height="7.333333333333332" />
                                  <rect x="35.64" y="9.777777777777777" width="3.520000000000003" height="12.222222222222223" />
                                  <rect x="40.04" y="17.11111111111111" width="3.520000000000003" height="4.888888888888889" />
                                </svg>
                              </td>
                              <td>
                                <span className="text-danger text-semibold">28.76%</span>
                              </td>
                              <td>
                                <span className="text-danger text-semibold">Down</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Air Conditioner</td>
                              <td>
                                <span data-plugin="peityBar" data-skin="blue" style={{display: 'none'}}>10,6,2,4,5,8,4,1,8,7</span>
                                <svg className="peity" height={22} width={44}>
                                  <rect x="0.44000000000000006" y={0} width="3.52" height={22} />
                                  <rect x="4.840000000000001" y="8.8" width="3.5199999999999987" height="13.2" />
                                  <rect x="9.24" y="17.6" width="3.5199999999999996" height="4.399999999999999" />
                                  <rect x="13.64" y="13.2" width="3.5199999999999996" height="8.8" />
                                  <rect x="18.04" y={11} width="3.520000000000003" height={11} />
                                  <rect x="22.439999999999998" y="4.399999999999999" width="3.520000000000003" height="17.6" />
                                  <rect x="26.839999999999996" y="13.2" width="3.5200000000000067" height="8.8" />
                                  <rect x="31.24" y="19.8" width="3.5200000000000067" height="2.1999999999999993" />
                                  <rect x="35.64" y="4.399999999999999" width="3.520000000000003" height="17.6" />
                                  <rect x="40.04" y="6.600000000000001" width="3.520000000000003" height="15.399999999999999" />
                                </svg>
                              </td>
                              <td>
                                <span className="text-warning text-semibold">8.55%</span>
                              </td>
                              <td>
                                <span className="text-warning text-semibold">Down</span>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>RC Cars</td>
                              <td>
                                <span data-plugin="peityBar" data-skin="blue" style={{display: 'none'}}>2,8,3,10,7,4,9,8,4,3</span>
                                <svg className="peity" height={22} width={44}>
                                  <rect x="0.44000000000000006" y="17.6" width="3.52" height="4.399999999999999" />
                                  <rect x="4.840000000000001" y="4.399999999999999" width="3.5199999999999987" height="17.6" />
                                  <rect x="9.24" y="15.4" width="3.5199999999999996" height="6.6" />
                                  <rect x="13.64" y={0} width="3.5199999999999996" height={22} />
                                  <rect x="18.04" y="6.600000000000001" width="3.520000000000003" height="15.399999999999999" />
                                  <rect x="22.439999999999998" y="13.2" width="3.520000000000003" height="8.8" />
                                  <rect x="26.839999999999996" y="2.1999999999999993" width="3.5200000000000067" height="19.8" />
                                  <rect x="31.24" y="4.399999999999999" width="3.5200000000000067" height="17.6" />
                                  <rect x="35.64" y="13.2" width="3.520000000000003" height="8.8" />
                                  <rect x="40.04" y="15.4" width="3.520000000000003" height="6.6" />
                                </svg>
                              </td>
                              <td>
                                <span className="text-success text-semibold">58.56%</span>
                              </td>
                              <td>
                                <span className="text-success text-semibold">Up</span>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Down Coat</td>
                              <td>
                                <span data-plugin="peityBar" data-skin="blue" style={{display: 'none'}}>0,5,8,7,6,2,8,3,9,10</span>
                                <svg className="peity" height={22} width={44}>
                                  <rect x="0.44000000000000006" y={21} width="3.52" height={1} />
                                  <rect x="4.840000000000001" y={11} width="3.5199999999999987" height={11} />
                                  <rect x="9.24" y="4.399999999999999" width="3.5199999999999996" height="17.6" />
                                  <rect x="13.64" y="6.600000000000001" width="3.5199999999999996" height="15.399999999999999" />
                                  <rect x="18.04" y="8.8" width="3.520000000000003" height="13.2" />
                                  <rect x="22.439999999999998" y="17.6" width="3.520000000000003" height="4.399999999999999" />
                                  <rect x="26.839999999999996" y="4.399999999999999" width="3.5200000000000067" height="17.6" />
                                  <rect x="31.24" y="15.4" width="3.5200000000000067" height="6.6" />
                                  <rect x="35.64" y="2.1999999999999993" width="3.520000000000003" height="19.8" />
                                  <rect x="40.04" y={0} width="3.520000000000003" height={22} />
                                </svg>
                              </td>
                              <td>
                                <span className="text-info text-semibold">35.76%</span>
                              </td>
                              <td>
                                <span className="text-info text-semibold">Up</span>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Android Phone</td>
                              <td>
                                <span data-plugin="peityBar" data-skin="blue" style={{display: 'none'}}>2,4,6,4,7,6,3,6,8,10</span>
                                <svg className="peity" height={22} width={44}>
                                  <rect x="0.44000000000000006" y="17.6" width="3.52" height="4.399999999999999" />
                                  <rect x="4.840000000000001" y="13.2" width="3.5199999999999987" height="8.8" />
                                  <rect x="9.24" y="8.8" width="3.5199999999999996" height="13.2" />
                                  <rect x="13.64" y="13.2" width="3.5199999999999996" height="8.8" />
                                  <rect x="18.04" y="6.600000000000001" width="3.520000000000003" height="15.399999999999999" />
                                  <rect x="22.439999999999998" y="8.8" width="3.520000000000003" height="13.2" />
                                  <rect x="26.839999999999996" y="15.4" width="3.5200000000000067" height="6.6" />
                                  <rect x="31.24" y="8.8" width="3.5200000000000067" height="13.2" />
                                  <rect x="35.64" y="4.399999999999999" width="3.520000000000003" height="17.6" />
                                  <rect x="40.04" y={0} width="3.520000000000003" height={22} />
                                </svg>
                              </td>
                              <td>
                                <span className="text-warning text-semibold">21.13%</span>
                              </td>
                              <td>
                                <span className="text-warning text-semibold">down</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* End Contact Table Section */}
                  </div>
                  {/* End Product Section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}

export default Dashboard