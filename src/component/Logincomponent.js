//import logo from './logo.svg';
import '../App.css';
import React, { Component } from 'react';

class  Logincomponent extends React.Component {

constructor(props) {
    super(props);
    this.state = {

             drop_down_options: [
      {
        name: 'Select Category',
        value: null,
      },
      {
        name: 'Match',
        value: '1',
      },
       {
        name: 'English',
        value: '2',
      }

      ]

    };

    // This binding is necessary to make `this` work in the callback
  // this.submitdata = this.submitdata.bind(this);
  }


  submitdata = (event) => {

    console.log('File submit hanele ');

    /*
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));*/
  }


  handleChange = (event) => {
    this.setState({ value: event.target.value });

       console.log(' '+event.target.value);
  };
  



  render() {
    const { drop_down_options } = this.state;
   return  <div  className="App container">

    <header className="App-header">
    



       <div className="row input_padding">

       <div className="col col-md-6 text-sm-left">
      
       Course Name:

       </div>

       <div className="col col-md-6 text-sm-left">

         <input type="text" name="courseName" id="courseName" placeholder="Course Name" />

         </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6 text-sm-left">
      
       Course Description: 


         </div>

         <div className="col col-md-6 text-sm-left">
         
        <textarea type="text" name="courseDecription" id="courseDecription" placeholder="Course Description"></textarea>

         </div>
      
       </div>


          <div className="row input_padding">

           <div className="col col-md-6 text-sm-left">
      
            Course courseCategory: 

           </div>
      
          <div className="col col-md-6 text-sm-left">


        <select id="courseCategory" name="courseCategory" onChange={this.handleChange}>


        {drop_down_options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}

                                    

                              </select>


                              </div>
      
       </div>


        <div className="row input_padding">
 
         <div className="col col-md-6 text-sm-left">
      
       Course Image Url: 

         </div>

          <div className="col col-md-6 text-sm-left">

        <input type="text" name="courseImageUrl" id="courseImageUrl" placeholder="Course Image Url" />

        </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6 text-sm-left">
      
       Preview Url: 

          </div>

          <div className="col col-md-6 text-sm-left">
        <input type="text" name="previewUrl" id="previewUrl" placeholder="Preview Url" />

         </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6">&nbsp;</div>
         <div className="col col-md-6"><input type="button" value="Submit" className="btn btn-success"    onClick={this.submitdata}  /></div>
      
       </div>

     </header>
       
     
    </div>;
}




}

export default Logincomponent;
