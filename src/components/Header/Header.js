import React, { Component } from 'react'

class PageHeader extends Component {
    render() {
        return (
            <div className="page-header">
				<div className="header-left-panel">
					<h1 className="page-title">Form layouts</h1>
					<ol className="breadcrumb">
						<li><a href="../dashboard_v1.html">Home</a></li>
						<li className="text-info">Forms</li>
						<li className="active">Form layouts</li>
					</ol>
				</div>
			</div>
        )
    }
}

export default PageHeader