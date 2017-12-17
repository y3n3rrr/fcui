import React, { Component } from 'react'

class  WelcomeDash extends Component {
    render() {
        return (
            <div className="main-dash dashboard-tile">
        <div className="inner-shads1">
          <div className="dash-content-header dash-content-header-media ">
            <img className="animation-pulseSlow" alt="header image" src="assets/images/dashboard/dash-vector-wallpaper.jpg" />
            <div className="dash-content-image-color">
              <div className="dash-header-section">
                <div className="main-header">
                  <div className="row">
                    <div className="col-md-4 col-lg-6 col-sm-5">
                      {/* breadcrumb */}
                      <h1>Welcome <strong>Admin</strong><br /><small>Home/Dashboard</small></h1>
                    </div>
                    <div className="col-md-8 col-lg-6 col-sm-7">
                      <div className="text-center">
                        {/* Start Right Event Section */}
                        <div className="dash-header-content">
                          <div className="col-xs-3 col-sm-3">
                            <div className="row">
                              <h2 className="animation-hatch">
                                $<strong>99.7k</strong><br />
                                <small><i className="fa fa-thumbs-o-up" /> Great</small>
                              </h2>
                            </div>
                          </div>
                          <div className="col-xs-3 col-sm-3">
                            <div className="row">
                              <h2 className="animation-hatch">
                                <strong>199k</strong><br />
                                <small><i className="fa fa-heart-o" /> Likes</small>
                              </h2>
                            </div>
                          </div>
                          <div className="col-xs-3 col-sm-3">
                            <div className="row">
                              <h2 className="animation-hatch">
                                <strong>117</strong><br />
                                <small><i className="fa fa-calendar-o" /> Events</small>
                              </h2>
                            </div>
                          </div>
                          <div className="col-xs-3 col-sm-3">
                            <div className="row">
                              <h2 className="animation-hatch">
                                <strong>29° C</strong><br />
                                <small><i className="fa fa-map-marker" /> Sydney</small>
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/* End Right Event Section */}
                      </div>
                    </div>
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

export default WelcomeDash