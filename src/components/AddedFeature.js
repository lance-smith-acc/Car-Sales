import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button key={props.feature.id} className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
      <button onClick={() => console.log(props)}>Test</button>
    </li>
  );
};

export default AddedFeature;
