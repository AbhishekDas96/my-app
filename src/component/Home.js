import React ,{ useState } from 'react';
import TextForm from './TextForm';
      function Home(props) {
      return (
        <>
            <div className="container">
          { <TextForm showalert={props.showAlert} heading = "enter your text" mode={props.mode}/> }
            </div>
          </>     
        );
    }

    export default Home;