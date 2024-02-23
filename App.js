import {useState, useEffect } from "react";
import './App.css';


//Create a web app in Typescript with React JS functional components to provide information on NYC High schools.
//1. Display a list of NYC High Schools (school_name, dbn)
//    1. Access the JSON API directly from below link: https://data.cityofnewyork.us/resource/s3k6-pzi2.json
//2. Selecting a school should show additional information about the school. At the very least, display the overview_paragraph
//3. Please consider reusable component pattern to solve #1 and #2
//4. Implement the unit test cases using JEST/Enzyme or React Testing Library
//5. Write automation will be plus point
//Ensure that you provide clear and thorough explanations while writing your code. Clarify the steps and reasoning behind your decisions, making it easier for others to understand and learn from your work.


function App() {

  const [data, setData] = useState([]);
  const [schoolDetails, setSchoolDetails] = useState([]);

  useEffect(() => {

    fetch('https://data.cityofnewyork.us/resource/s3k6-pzi2.json')   // FETCHING THE DATA FROM THE API
    .then(response => response.json())
    .then(result => setData(result))                // STORING THE RESULTS OF THE FETCHED DATA IN SETDATA

  }, []);

  const handleSchoolDetails = (details) => {

    console.log('test', details)
    setSchoolDetails(details);

  }


  return (
    <div className="App">
      <h2>NYC High Schools </h2>
      {data && data.map(x=>               //DATA EXISTS, MAPPING THE DATA AND DISPLAYING THE SCHOOL NAME AND DBN. ONCLICK OF SCHOOLNAME, DISPLAYS THE DATA FOR THE SCHOOL.
        <li>
          <ui testid="school_name" onClick={() => handleSchoolDetails(x)}>{x.school_name}</ui>    
                                          
          <ui>:</ui>
          <ui testid="school_dbn">{x.dbn}</ui>
        </li>
      )}
    
       {schoolDetails && (             // IF SCHOOL DETAILS EXISTS, DISPLAYS THE SCHOOL DETAILS, OVERVIEW_PAGAGRAPH IN TABULAR FORMAT
         <table> 
          <h2>School Details:</h2>               
         <tr>
           <td testid="school_para">{schoolDetails.overview_paragraph}</td>
           <td testid="school_opp">{schoolDetails.academicopportunities1}</td>
           <td testid="school_opp2">{schoolDetails.academicopportunities2}</td>
         </tr>
        </table>

       )}
       

      
    </div>
  );
}

export default App;



//Create a web app in Typescript with React JS functional components to provide information on NYC High schools.
//1. Display a list of NYC High Schools (school_name, dbn)
//    1. Access the JSON API directly from below link: https://data.cityofnewyork.us/resource/s3k6-pzi2.json
//2. Selecting a school should show additional information about the school. At the very least, display the overview_paragraph
//3. Please consider reusable component pattern to solve #1 and #2
//4. Implement the unit test cases using JEST/Enzyme or React Testing Library
//5. Write automation will be plus point
//Ensure that you provide clear and thorough explanations while writing your code. Clarify the steps and reasoning behind your decisions, making it easier for others to understand and learn from your work.



//Code Submission Guidelines:
//1.      Submit your code via Gitlab.com. Feel free to use your current account or create a free account.
//2.      Create a new PUBLIC project.
//3.      Create a repository and add your code challenge.
//4.      Add the email address of Photon Point of Contact as a “Master” to your project:
//User Name: Shyam-Photon/ Photon PoC email ids: Shyam.su1@photon.com
//4. Also share your Public project link or entire code Repo Zip file to the recruiter.

