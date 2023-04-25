import React from 'react';


import './FieldTile.css';

const FieldTile = ({tile}) => {

// get color for tile
const getColorForTile = (tile) => {

    let color;

    switch (tile){
      case 'W':
        color = "blue";
        break;
      case 'L': 
        color = "bisque";
        break;
      case 'F':
        color = "green";
        break;
      default:
        color = "brown";
    }

    return color;
  }

  return (
    <div className="fieldTile" style={{"backgroundColor": getColorForTile(tile)}}> {tile} </div>
  )
}

export default FieldTile