//import logo from './logo.svg';
import React, { useState, useEffect  } from 'react';

import '../App.css';


const dropDownItem = [

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


    ];



  




const Logincomponent = () =>  {



 const [categoryId, setCategoryId] = useState('');
 const [courseName, setsetCourseName] = useState('');
 const [courseDescription, setCourseDescription] = useState('');
  const [courseImageUrl, setCourseImageUrl] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');


 useEffect(() => {
    // Update the document title using the browser API
   

    console.log('You select category Id  '+categoryId);
  });



  const onButtonClick = () => {
       

     


       console.log('categoryId :  '+categoryId+" , courseName : "+courseName+" ,  courseDescription:  "+courseDescription+" ,  courseImageUrl: "+courseImageUrl+" ,  previewUrl: "+previewUrl);

  };

  return (
<>

     <div  className="App container">

    <header className="App-header">
    



       <div className="row input_padding">

       <div className="col col-md-6 text-sm-left">
      
       Course Name:

       </div>

       <div className="col col-md-6 text-sm-left">

         <input type="text" name="courseName" id="courseName" placeholder="Course Name"  value={courseName}   onChange={e => setsetCourseName(e.target.value)} />

         </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6 text-sm-left">
      
       Course Description: 


         </div>

         <div className="col col-md-6 text-sm-left">
         
        <textarea type="text" name="courseDecription" id="courseDecription" placeholder="Course Description" onChange={e => setCourseDescription(e.target.value)} value={courseDescription} />
        

         </div>
      
       </div>


          <div className="row input_padding">

           <div className="col col-md-6 text-sm-left">
      
            Course courseCategory: 

           </div>
      
          <div className="col col-md-6 text-sm-left">


        <select id="courseCategory" name="courseCategory"   value={categoryId}
        onChange={e => setCategoryId(e.target.value)}>

               {dropDownItem.map(item => (
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

        <input type="text" name="courseImageUrl" id="courseImageUrl" placeholder="Course Image Url"   value={courseImageUrl} onChange={e => setCourseImageUrl(e.target.value)} />

        </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6 text-sm-left">
      
       Preview Url: 

          </div>

          <div className="col col-md-6 text-sm-left">
        <input type="text" name="previewUrl" id="previewUrl" placeholder="Preview Url"  value={previewUrl} onChange={e => setPreviewUrl(e.target.value)} />

         </div>
      
       </div>


        <div className="row input_padding">

         <div className="col col-md-6">&nbsp;</div>
         <div className="col col-md-6"><input type="button" value="Submit" className="btn btn-success"   onClick={onButtonClick}    /></div>
      
       </div>

     </header>
       
     
    </div>

     </>

    );


  }



export default Logincomponent;
