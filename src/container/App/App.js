import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import WorkSpace from '../../component/WorkSpace/WorkSpace';



class App extends Component {
  render() {
    return (  
     <Layout>
       <WorkSpace />
     </Layout>
    
    );
  }
}

export default App;
