import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
        <div className="main-header navbar navbar-default navbar-fixed-top navbar-inverse navbar-mega">
        <div className="navbar-header">
          {/*  Template Logo */}
          <a className="navbar-brand" href="dashboard_v1.html">
            <img className="navbar-brand-logo navbar-brand-logo-normal" src="assets/images/logo.png" title="Porish" alt="logo" />
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <div className="collapse navbar-collapse navbar-block navbar-collapse-toolbar" id="site-navbar-collapse">
            {/*  Menu */}
            <div className="utmenucontainer">
              <div className="overlapblackbg" />
              <a id="wsnavtoggle" className="animated-arrow"><span /></a>
              <nav className="utmenu">
                <ul className="mobile-sub utmenu-list">
                  <li>
                    <div className="navbar-header mobile-res-logo">
                      <a className="navbar-brand" href="javascript:void(0)">
                        <img className="navbar-brand-logo navbar-brand-logo-normal" src="assets/images/logo.png" title="Porish" alt="logo" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <a className="waves-effect waves-light" href="javascript:void(0)"> <i className="layout-icon icon_genius" aria-hidden="true" /> Face Recognation <span className="arrow_carrot-down" aria-hidden="true" /></a>
                    <ul className="utmenu-submenu">
                   
                      <li><a className="waves-effect waves-light" href="/">Home</a></li>
                      
                      <li><Link to="/file">Face Upload</Link></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
         
            <ul className="nav navbar-nav navbar-toolbar navbar-right">
              <li id="search-icon">
                {/*  Toggle Search */}
                <a className="icon icon_search waves-effect waves-light" href="javascript:void(0)" role="button">
                  <span className="sr-only">Toggle Search</span>
                </a>
              </li>
              <li className="dropdown">
                {/*  Profile Section */}
                <a className="navbar-avatar dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up" role="button">
                  <span className="avatar avatar-online">
                    <img src="assets/images/global/profile-image.jpg" alt="Profile Image" />
                    <i />
                  </span>
                </a>
                <ul className="dropdown-menu position-absolute" role="menu">
                  <li role="presentation">
                    <a href="javascript:void(0)" role="menuitem"><i className="icon icon_profile" aria-hidden="true" /> Profile</a>
                  </li>
                  <li role="presentation">
                    <a href="javascript:void(0)" role="menuitem"><i className="icon icon_balance" aria-hidden="true" /> Billing</a>
                  </li>
                  <li role="presentation">
                    <a href="javascript:void(0)" role="menuitem"><i className="icon icon_cog" aria-hidden="true" /> Settings</a>
                  </li>
                  <li className="divider" role="presentation" />
                  <li role="presentation">
                    <a href="javascript:void(0)" role="menuitem"><i className="icon icon_lock_alt" aria-hidden="true" /> Logout</a>
                  </li>
                </ul>
              </li>
              <li id="toggleFullscreen">
                {/*  Full Screen */}
                <a className="icon icon-fullscreen waves-effect waves-light" id="toggle" data-toggle="fullscreen" href="javascript:void(0)" role="button">
                  <i aria-hidden="true" className="arrow_expand" />
                </a>
              </li>
              <li className="dropdown">
                {/*  Notification Box */}
                <a className="waves-effect waves-light" data-toggle="dropdown" href="javascript:void(0)" title="Notifications" data-animation="scale-up" role="button">
                  <i className="icon icon_document_alt" aria-hidden="true" />
                  <span className="badge badge-danger up">5</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media position-absolute" role="menu">
                  <li className="dropdown-menu-header" role="presentation">
                    <h5>NEW UPDATES
                      <a className="dropdown-menu-noti-btn" href="javascript:void(0)" role="button">
                        <i className="icon icon_cog" aria-hidden="true" />
                      </a>
                    </h5>
                    <span className="label label-round label-danger">New 5</span>
                  </li>
                  <li className="list-group hover-item" role="presentation">
                    <div data-role="container">
                      <div data-role="content">
                        <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className="media">
                            <div className="media-left padding-right-10">
                              <i className="icon icon_documents_alt bg-red white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">New tasks needs to be done</h6>
                              <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 min ago</time>
                            </div>
                            <div className="media-right">
                              <div className="btn-group">
                                <span className="btn btn-info btn-sm waves-effect waves-dark"><i className="icon_check" /></span>
                                <span className="btn btn-default btn-sm waves-effect waves-dark">
                                  <i className="icon_cog" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className="media">
                            <div className="media-left padding-right-10">
                              <i className="icon icon_gift_alt bg-green white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">New feature added</h6>
                              <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">1 hours ago</time>
                            </div>
                            <div className="media-right">
                              <div className="btn-group">
                                <span className="btn btn-info btn-sm waves-effect waves-dark">
                                  <i className="icon_check" />
                                </span>
                                <span className="btn btn-default btn-sm waves-effect waves-dark">
                                  <i className="icon_pencil" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className="media">
                            <div className="media-left padding-right-10">
                              <i className="icon  icon_adjust-vert bg-red white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Change your password</h6>
                              <time className="media-meta" dateTime="2015-06-11T14:05:00+08:00">2 days ago</time>
                            </div>
                            <div className="media-right">
                              <div className="btn-group">
                                <span className="btn btn-info btn-sm waves-effect waves-dark">
                                  <i className="icon_check" />
                                </span>
                                <span className="btn btn-default btn-sm waves-effect waves-dark">
                                  <i className="icon_key_alt" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className="media">
                            <div className="media-left padding-right-10">
                              <i className="icon icon_calendar bg-blue white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">New Product order</h6>
                              <time className="media-meta" dateTime="2015-06-10T13:50:18+08:00">3 days ago</time>
                            </div>
                            <div className="media-right">
                              <div className="btn-group">
                                <span className="btn btn-info btn-sm waves-effect waves-dark">
                                  <i className="icon_check" />
                                </span>
                                <span className="btn btn-default btn-sm waves-effect waves-dark">
                                  <i className="icon_cart_alt" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className="media">
                            <div className="media-left padding-right-10">
                              <i className="icon icon_comment bg-orange white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">New User review</h6>
                              <time className="media-meta" dateTime="2015-06-10T12:34:48+08:00">3 days ago</time>
                            </div>
                            <div className="media-right">
                              <div className="btn-group">
                                <span className="btn btn-info btn-sm waves-effect waves-dark">
                                  <i className="icon_check" />
                                </span>
                                <span className="btn btn-default btn-sm waves-effect waves-dark">
                                  <i className="icon_cog" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-menu-footer" role="presentation">
                    <a href="javascript:void(0)" role="menuitem">
                      All notifications
                    </a>
                  </li>
                </ul>
              </li>
              <li id="chatbox">
                {/*  Chat Box */}
                <a className="waves-effect waves-light" data-toggle="site-sidebar" href="javascript:void(0)" title="Chat" data-url="site-sidebar.tpl">
                  <i className="icon icon_comment_alt" aria-hidden="true" />
                </a>
              </li>
              <li className="dropdown">
                {/* Flag Box */}
                <a className="icon flag-avtar dropdown-toggle waves-effect waves-light" data-animation="scale-up" data-toggle="dropdown" href="javascript:void(0)" role="button">
                  <span aria-hidden="true" className="flag-icon flag-icon-background flag-icon-us" />
                </a>
                <ul className="dropdown-menu position-absolute language-box" role="menu">
                  <li className="active" role="presentation">
                    <a className="waves-effect waves-light" href="javascript:void(0)" role="menuitem"><span aria-hidden="true" className="icon flag-icon flag-icon-background flag-icon-us" /><span className="flag-country" data-country="us">US</span></a>
                  </li>
                  <li role="presentation">
                    <a className="waves-effect waves-light" href="javascript:void(0)" role="menuitem"><span aria-hidden="true" className="icon flag-icon flag-icon-background flag-icon-au" /><span className="flag-country" data-country="au">AU</span></a>
                  </li>
                  <li role="presentation">
                    <a className="waves-effect waves-light" href="javascript:void(0)" role="menuitem"><span aria-hidden="true" className="icon flag-icon flag-icon-background flag-icon-in" /><span className="flag-country" data-country="in">IN</span></a>
                  </li>
                  <li role="presentation">
                    <a className="waves-effect waves-light" href="javascript:void(0)" role="menuitem"><span aria-hidden="true" className="icon flag-icon flag-icon-background flag-icon-pt" /><span className="flag-country" data-country="pt">PT</span></a>
                  </li>
                  <li role="presentation">
                    <a className="waves-effect waves-light" href="javascript:void(0)" role="menuitem"><span aria-hidden="true" className="icon flag-icon flag-icon-background flag-icon-de" /><span className="flag-country" data-country="de">DE</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className="form-group">
                {/*  Search Box */}
                <div className="input-search">
                  <i className="input-search-icon icon_search" aria-hidden="true" />
                  <input type="text" className="form-control" name="site-search" placeholder="Search..." />
                  <button type="button" className="input-search-close icon icon_close" aria-label="Close" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        )
    }
}

export default Navbar