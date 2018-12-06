import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css';
import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import '../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory,{ textFilter } from 'react-bootstrap-table2-filter';

class App extends Component {

  constructor(props) {
        super(props);
        this.products = [{
            app: "CAPTURE",
            env: "QA",
            type: "ORACLE",
            url:"jdbc:oracle.thin:@120.34.87.89:8090/",
            lsmodified:"16/06/2018",
            modifier: "Adam Ward",
            constatus: "PASS"
        },{
          app: "DataMart",
          env: "Dev",
          type: "MSSQL",
          url:"jdbc:sqlserver:@120.34.87.89:8090/",
          lsmodified:"19/08/2018",
          modifier: "Katie Perry",
          constatus: "FAIL"
        },{
          app: "REVMCMT DEV",
          env: "DEV",
          type: "ORACLE",
          url:"jdbc:oracle.thin:@120.34.87.89:8090/",
          lsmodified:"27/10/2018",
          modifier: "Richard Sandler",
          constatus: "PASS"
        }];
    }

  render() {

    const columns = [{
      dataField: 'app',
      text: 'Application\n',
      sort: true,
      headerAlign: 'left',
      filter: textFilter(),
    }, {
      dataField: 'env',
      text: 'Environment',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }, {
      dataField: 'type',
      text: 'Type',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }, {
      dataField: 'url',
      text: 'URL',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }
    , {
      dataField: 'lsmodified',
      text: 'Last Modified\n',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }
    , {
      dataField: 'modifier',
      text: 'Modifier',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }, {
      dataField: 'constatus',
      text: 'Test Connection',
      sort: true,
      headerAlign: 'left',
      filter: textFilter()
    }];

    const defaultSorted = [{
      dataField: 'app',
      order: 'asc'
    }];

  const CaptionElement = () => <h3 class="navbar header-top navbar-expand-lg  navbar-dark bg-dark navbar-brand" style={{textAlign: 'left', color: 'white', width: '100%'}}>Data Connection List</h3>;
  return (
    <div className='container' style={{marginTop:50}}>
      <CaptionElement/>
      <BootstrapTable  bootstrap4 striped hover defaultSorted={defaultSorted} classes={'table'} keyField="app" data={ this.products} columns={ columns } filter={ filterFactory() } bordered={true}  />
    </div>

    );
  }
}

export default App;
