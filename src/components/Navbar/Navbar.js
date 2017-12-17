import React, { Component } from 'react'

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
                    <a className="waves-effect waves-light" href="javascript:void(0)"> <i className="layout-icon icon_archive_alt" aria-hidden="true" /> Layouts <span className="arrow_carrot-down" aria-hidden="true" /></a>
                    <ul className="utmenu-submenu">
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Dashboard<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="dashboard_v1.html">Dashboard 1</a></li>
                          <li><a className="waves-effect waves-light" href="dashboard_v2.html">Dashboard 2</a></li>
                          <li><a className="waves-effect waves-light" href="dashboard_v3.html">Dashboard 3</a></li>
                        </ul>
                      </li>
                      <li><a className="waves-effect waves-light" href="layouts/grids.html">Grid System</a></li>
                      <li><a className="waves-effect waves-light" href="layouts/layout-grid.html">Layout Grids</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="waves-effect waves-light" href="javascript:void(0)"> <i className="layout-icon icon_document_alt" aria-hidden="true" /> Features <span className="arrow_carrot-down" aria-hidden="true" /></a>
                    <ul className="utmenu-submenu">
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">General Pages<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/faq.html">FAQ</a></li>
                          <li><a className="waves-effect waves-light" href="features/userlist.html">User List</a></li>
                          <li><a className="waves-effect waves-light" href="features/Invoice.html">Invoice</a></li>
                          <li><a className="waves-effect waves-light" href="features/blank.html">Blank</a></li>
                          <li><a className="waves-effect waves-light" href="features/profile.html">Profile</a></li>
                          <li><a className="waves-effect waves-light" href="features/search.html">Search</a></li>
                          <li><a className="waves-effect waves-light" href="features/gallery.html">Gallery</a></li>
                          <li><a className="waves-effect waves-light" href="features/gallery-grid.html">Gallery Grid</a></li>
                          <li><a className="waves-effect waves-light" href="features/maintenance.html">Maintenance</a></li>
                          <li><a className="waves-effect waves-light" href="features/email.html">Email</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Error Pages<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/error-400.html">Error 400</a></li>
                          <li><a className="waves-effect waves-light" href="features/error-403.html">Error 403</a></li>
                          <li><a className="waves-effect waves-light" href="features/error-404.html">Error 404</a></li>
                          <li><a className="waves-effect waves-light" href="features/error-405.html">Error 405</a></li>
                          <li><a className="waves-effect waves-light" href="features/error-500.html">Error 500</a></li>
                          <li><a className="waves-effect waves-light" href="features/error-503.html">Error 503</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Maps<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/maps.html">Google Maps</a></li>
                          <li><a className="waves-effect waves-light" href="features/vector-map.html">Vector Map</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Login<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/login.html">Login Page 1</a></li>
                          <li><a className="waves-effect waves-light" href="features/login_v2.html">Login Page 2</a></li>
                          <li><a className="waves-effect waves-light" href="features/login_v3.html">Login Page 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Register<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/register.html">Register Page 1</a></li>
                          <li><a className="waves-effect waves-light" href="features/register_v2.html">Register Page 2</a></li>
                          <li><a className="waves-effect waves-light" href="features/register_v3.html">Register Page 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Forgot Password<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/forgot_password.html">Forgot Password 1</a></li>
                          <li><a className="waves-effect waves-light" href="features/forgot_password_v2.html">Forgot Password 2</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Lockscreen<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/lockscreen.html">Lockscreen 1</a></li>
                          <li><a className="waves-effect waves-light" href="features/lockscreen_v2.html">Lockscreen 2</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Apps<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="features/contacts.html">Contacts</a></li>
                          <li><a className="waves-effect waves-light" href="features/calendar.html">Calendar</a></li>
                          <li><a className="waves-effect waves-light" href="features/project.html">Project</a></li>
                          <li><a className="waves-effect waves-light" href="features/mailbox.html">Mailbox</a></li>
                          <li><a className="waves-effect waves-light" href="features/message.html">Message</a></li>
                          <li><a className="waves-effect waves-light" href="features/media.html">Media</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="wsmenu-click" /><a className="waves-effect waves-light" href="javascript:void(0)"> <i className="layout-icon icon_ribbon_alt" aria-hidden="true" /> Components <span className="arrow_carrot-down" aria-hidden="true" /></a>
                    <ul className="utmenu-submenu">
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Basic UI<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li>
                            <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Panel<span className="arrow_carrot-down" aria-hidden="true" /></a>
                            <ul className="utmenu-submenu-sub-sub">
                              <li><a className="waves-effect waves-light" href="components/panel-structure.html">Panel Structure</a></li>
                              <li><a className="waves-effect waves-light" href="components/panel-action.html">Panel Action</a></li>
                              <li><a className="waves-effect waves-light" href="components/panel-transition.html">Panel Transition</a></li>
                            </ul>
                          </li>
                          <li><a className="waves-effect waves-light" href="components/buttons.html">Buttons</a></li>
                          <li><a className="waves-effect waves-light" href="components/icons.html">Icons</a></li>
                          <li><a className="waves-effect waves-light" href="components/list.html">List</a></li>
                          <li><a className="waves-effect waves-light" href="components/dropdowns.html">Dropdowns</a></li>
                          <li><a className="waves-effect waves-light" href="components/image.html">Images</a></li>
                          <li><a className="waves-effect waves-light" href="components/modals.html">Modals</a></li>
                          <li><a className="waves-effect waves-light" href="components/scrollable.html">Scrollable</a></li>
                          <li><a className="waves-effect waves-light" href="components/typography.html">Typography</a></li>
                          <li><a className="waves-effect waves-light" href="components/utilities.html">Utilities</a></li>
                          <li><a className="waves-effect waves-light" href="components/colors.html">Colors</a></li>
                          <li><a className="waves-effect waves-light" href="components/carousel.html">Carousel</a></li>
                          <li><a className="waves-effect waves-light" href="components/tabs-accordions.html">Tabs &amp; Accordions</a></li>
                          <li><a className="waves-effect waves-light" href="components/badges-labels.html">Badges &amp; Labels</a></li>
                          <li><a className="waves-effect waves-light" href="components/tooltip-popover.html">Tooltip &amp; Popover</a></li>
                          <li><a className="waves-effect waves-light" href="components/progress_bars.html">Progress Bars</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Advanced UI<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li id="demo" className="site-menu-item hidden-xs demo"><a className="waves-effect waves-light" href="javascript:void(0)">Tour</a></li>
                          <li><a className="waves-effect waves-light" href="components/animation.html">Animation</a></li>
                          <li><a className="waves-effect waves-light" href="components/highlight.html">Highlight</a></li>
                          <li><a className="waves-effect waves-light" href="components/alertify.html">Alertify</a></li>
                          <li><a className="waves-effect waves-light" href="components/masonry.html">Masonry</a></li>
                          <li><a className="waves-effect waves-light" href="components/rating.html">Rating</a></li>
                          <li><a className="waves-effect waves-light" href="components/context-menu.html">Context Menu</a></li>
                          <li><a className="waves-effect waves-light" href="components/sortable-nestable.html">Sortable &amp; Nestable</a></li>
                          <li><a className="waves-effect waves-light" href="components/toastr.html">Toastr</a></li>
                          <li><a className="waves-effect waves-light" href="components/lightbox.html">Lightbox</a></li>
                          <li><a className="waves-effect waves-light" href="components/treeview.html">Treeview</a></li>
                          <li><a className="waves-effect waves-light" href="components/google_maps.html">Google Maps</a></li>
                          <li><a className="waves-effect waves-light" href="components/vector_maps.html">Vector Maps</a></li>
                          <li><a className="waves-effect waves-light" href="components/bootbox_sweetalert.html">Bootbox Sweetalert</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Elements<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="components/alerts.html">Alerts</a></li>
                          <li><a className="waves-effect waves-light" href="components/ribbon.html">Ribbon</a></li>
                          <li><a className="waves-effect waves-light" href="components/pricing-tables.html">Pricing Table</a></li>
                          <li><a className="waves-effect waves-light" href="components/overlay.html">Overlay</a></li>
                          <li><a className="waves-effect waves-light" href="components/step.html">Step</a></li>
                          <li><a className="waves-effect waves-light" href="components/cover.html">Cover</a></li>
                          <li><a className="waves-effect waves-light" href="components/timeline-simple.html">Simple Timeline</a></li>
                          <li><a className="waves-effect waves-light" href="components/timeline.html">Timeline</a></li>
                          <li><a className="waves-effect waves-light" href="components/testimonials.html">Testimonials</a></li>
                          <li><a className="waves-effect waves-light" href="components/blockquotes.html">Blockquotes</a></li>
                          <li><a className="waves-effect waves-light" href="components/breadcrumbs.html">Breadcrumbs</a></li>
                          <li><a className="waves-effect waves-light" href="components/comments.html">Comments</a></li>
                          <li><a className="waves-effect waves-light" href="components/media.html">Media</a></li>
                          <li><a className="waves-effect waves-light" href="components/chat.html">Chat</a></li>
                          <li><a className="waves-effect waves-light" href="components/nav.html">Nav</a></li>
                          <li><a className="waves-effect waves-light" href="components/navbars.html">Navbars</a></li>
                          <li><a className="waves-effect waves-light" href="components/pagination.html">Pagination</a></li>
                          <li><a className="waves-effect waves-light" href="components/headers.html">Different Headers</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className="waves-effect waves-light" href="javascript:void(0)">Forms <span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="components/general.html">General Elements</a></li>
                          <li><a className="waves-effect waves-light" href="components/material-element.html">Material Elements</a></li>
                          <li><a className="waves-effect waves-light" href="components/layouts.html">Form Layouts</a></li>
                          <li><a className="waves-effect waves-light" href="components/validation.html">Form Validation</a></li>
                          <li><a className="waves-effect waves-light" href="components/masks.html">Form Masks</a></li>
                          <li><a className="waves-effect waves-light" href="components/form-advanced.html">Advanced Elements</a></li>
                          <li><a className="waves-effect waves-light" href="components/form-wizard.html">Form Wizard</a></li>
                          <li>
                            <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Editor<span className="arrow_carrot-down" aria-hidden="true" /></a>
                            <ul className="utmenu-submenu-sub-sub">
                              <li><a className="waves-effect waves-light" href="components/editor-ace.html">Ace Editor</a></li>
                              <li><a className="waves-effect waves-light" href="components/editor-markdown.html">Markdown</a></li>
                              <li><a className="waves-effect waves-light" href="components/editor-markdown-flav.html">Markdown Flav</a></li>
                              <li><a className="waves-effect waves-light" href="components/code-editor.html">Code Editor</a></li>
                            </ul>
                          </li>
                          <li><a className="waves-effect waves-light" href="components/Image-cropping.html">Image Cropping</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className="waves-effect waves-light" href="javascript:void(0)">Tables <span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="components/basic.html">Basic Tables</a></li>
                          <li><a className="waves-effect waves-light" href="components/bootstrap.html">Bootstrap Tables</a></li>
                          <li><a className="waves-effect waves-light" href="components/floatthead.html">floatThead</a></li>
                          <li><a className="waves-effect waves-light" href="components/responsive.html">Responsive Tables</a></li>
                          <li><a className="waves-effect waves-light" href="components/editable.html">Editable Tables</a></li>
                          <li><a className="waves-effect waves-light" href="components/datatable.html">Datatable</a></li>
                          <li><a className="waves-effect waves-light" href="components/ajax_datatable.html">Ajax Datatable</a></li>
                          <li><a className="waves-effect waves-light" href="components/jsgrid.html">jsGrid</a></li>
                          <li><a className="waves-effect waves-light" href="components/footable.html">FooTable</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Charts<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="components/chart.html">Chart.js</a></li>
                          <li><a className="waves-effect waves-light" href="components/gauges.html">Gauges</a></li>
                          <li><a className="waves-effect waves-light" href="components/flot.html">Flot</a></li>
                          <li><a className="waves-effect waves-light" href="components/peitycharts.html">Peity Charts</a></li>
                          <li><a className="waves-effect waves-light" href="components/morrischarts.html">Morris Charts</a></li>
                          <li><a className="waves-effect waves-light" href="components/chartist.html">Chartist</a></li>
                          <li><a className="waves-effect waves-light" href="components/c3-chart.html">C3 Chart</a></li>
                          <li><a className="waves-effect waves-light" href="components/easypiechart.html">Easy Pie Chart</a></li>
                          <li><a className="waves-effect waves-light" href="components/echarts.html">EChart</a></li>
                          <li><a className="waves-effect waves-light" href="components/rickshaw.html">Rickshaw</a></li>
                          <li><a className="waves-effect waves-light" href="components/sparkline.html">Sparkline</a></li>
                        </ul>
                      </li>
                      <li>
                        <span className="wsmenu-click02" /><a className="waves-effect waves-light" href="javascript:void(0)">Widgets<span className="arrow_carrot-down" aria-hidden="true" /></a>
                        <ul className="utmenu-submenu-sub">
                          <li><a className="waves-effect waves-light" href="components/static-widget.html">Static Widgets</a></li>
                          <li><a className="waves-effect waves-light" href="components/data-widget.html">Data Widgets</a></li>
                          <li><a className="waves-effect waves-light" href="components/blog-widget.html">Blog Widgets</a></li>
                          <li><a className="waves-effect waves-light" href="components/social-widget.html">Social Widgets</a></li>
                          <li><a className="waves-effect waves-light" href="components/chart-widget.html">Chart Widgets</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="nav navbar-nav navbar-toolbar">
              {/*  Mega Menu */}
              <li className="dropdown dropdown-fw dropdown-mega">
                <a href="javascript:void(0)" className="dropdown-toggle waves-effect waves-light" data-hover="dropdown" data-toggle="dropdown"><i className="layout-icon icon_genius" aria-hidden="true" /><span className="mega-text">Extra Features </span><span className="arrow_carrot-down" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <div className="mega-menu-content">
                      <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-2 col-xs-12">
                          <h5 className="mobile-megamenu waves-effect waves-light">Page Layouts <span className="icon_plus" /> </h5>
                          <ul className="list-menu">
                            <li className="mega-menu">
                              <a href="features/userlist.html">
                                <i className="arrow_triangle-right" aria-hidden="true" />
                                User List
                              </a>
                            </li>
                            <li>
                              <a href="features/Invoice.html"><i className="arrow_triangle-right" aria-hidden="true" />Invoice</a>
                            </li>
                            <li>
                              <a href="features/profile.html"><i className="arrow_triangle-right" aria-hidden="true" />Profile</a>
                            </li>
                            <li>
                              <a href="features/gallery.html"><i className="arrow_triangle-right" aria-hidden="true" />Gallery</a>
                            </li>
                            <li>
                              <a href="features/gallery-grid.html"><i className="arrow_triangle-right" aria-hidden="true" />Gallery grid</a>
                            </li>
                            <li>
                              <a href="features/email.html"><i className="arrow_triangle-right" aria-hidden="true" />Email</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 col-xs-12">
                          <h5 className="mobile-megamenu waves-effect waves-light">Charts &amp; Forms <span className="icon_plus" /></h5>
                          <ul className="list-menu">
                            <li>
                              <a href="components/flot.html"><i className="arrow_triangle-right" aria-hidden="true" />Flot</a>
                            </li>
                            <li>
                              <a href="components/chartist.html"><i className="arrow_triangle-right" aria-hidden="true" />Chartist</a>
                            </li>
                            <li>
                              <a href="components/validation.html"><i className="arrow_triangle-right" aria-hidden="true" />Form validation</a>
                            </li>
                            <li>
                              <a href="components/layouts.html"><i className="arrow_triangle-right" aria-hidden="true" />Form layouts</a>
                            </li>
                            <li>
                              <a href="components/jsgrid.html"><i className="arrow_triangle-right" aria-hidden="true" />JsGrid</a>
                            </li>
                            <li>
                              <a href="components/footable.html"><i className="arrow_triangle-right" aria-hidden="true" />FooTable</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xs-12">
                          <h5 className="mobile-megamenu waves-effect waves-light mobile-margin">UI &amp; Components <span className="icon_plus" /></h5>
                          <ul className="list-menu mega-item">
                            <li className="mega-menu">
                              <ul>
                                <li>
                                  <a href="components/animation.html">
                                    <i className="arrow_triangle-right" aria-hidden="true" />
                                    Animation
                                  </a>
                                </li>
                                <li>
                                  <a href="components/buttons.html"><i className="arrow_triangle-right" aria-hidden="true" />Buttons</a>
                                </li>
                                <li>
                                  <a href="components/colors.html"><i className="arrow_triangle-right" aria-hidden="true" />Colors</a>
                                </li>
                                <li>
                                  <a href="components/dropdowns.html"><i className="arrow_triangle-right" aria-hidden="true" />Dropdowns</a>
                                </li>
                                <li>
                                  <a href="components/icons.html"><i className="arrow_triangle-right" aria-hidden="true" />Icons</a>
                                </li>
                                <li>
                                  <a href="components/lightbox.html"><i className="arrow_triangle-right" aria-hidden="true" />Lightbox</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu">
                              <ul>
                                <li>
                                  <a href="components/tooltip-popover.html"><i className="arrow_triangle-right" aria-hidden="true" />Tooltip &amp; popover</a>
                                </li>
                                <li>
                                  <a href="components/progress_bars.html"><i className="arrow_triangle-right" aria-hidden="true" />Progress bars</a>
                                </li>
                                <li>
                                  <a href="components/sortable-nestable.html"><i className="arrow_triangle-right" aria-hidden="true" />Sortable nestable</a>
                                </li>
                                <li>
                                  <a href="components/bootbox_sweetalert.html"><i className="arrow_triangle-right" aria-hidden="true" />Bootbox &amp; sweetalert</a>
                                </li>
                                <li>
                                  <a href="components/ribbon.html"><i className="arrow_triangle-right" aria-hidden="true" />Ribbon</a>
                                </li>
                                <li>
                                  <a href="components/pricing-tables.html"><i className="arrow_triangle-right" aria-hidden="true" />Pricing tables</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xs-12 mobile-image-mega">
                          <h5>Image</h5>
                          <ul className="list-menu">
                            <li className="mega-menu">
                              <a href="javascript:void(0)">
                                <img src="assets/images/test.png" alt="features-img" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
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