import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Member from './Member';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const membersData = [
  {
    name: 'Dhruvi Jain',
    position: 'Developer',
    image: 'Dhruvi jain.jpeg',
    github: 'https://github.com/Dhruvi1102',
    linkedin: 'https://www.linkedin.com/in/dhruvi-jain-95b959271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    details: ''
  },
  {
    name: 'Kratika Pancholy',
    position: 'Developer',
    image: 'Kratika Pancholy .jpeg',
    github: 'https://github.com/Kratika-001',
    linkedin: 'https://www.linkedin.com/in/kratika-pancholy-712275210/',
    details: ''
  },
  {
    name: 'Priyanka Jangid',
    position: 'Developer',
    image: 'Priyanka Jangid.jpeg',
    github: 'https://github.com/priyanka7976',
    linkedin: 'https://www.linkedin.com/in/priyanka-jangid-342721219        ',
    details: ''
  },
  {
    name: 'Mansi Gupta',
    position: 'Developer',
    image: 'Mansi Gupta.jpeg',
    github: 'https://github.com/MansiGupta24',
    linkedin: ' https://www.linkedin.com/in/mansi-gupta-93211921b/',
    details: ''
  },
  // Add more member data as needed
];

ReactDOM.render(
  <React.StrictMode>
    {/* <div>
      <h1 style={{ textAlign: 'center' }}>Hand Gesture Recognition</h1>
      <div className="members-grid">
        {membersData.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
            github={member.github}
            linkedin={member.linkedin}
            details={member.details}
          />
        ))}
      </div> */}
      <App />
    {/* </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
