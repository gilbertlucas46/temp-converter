import React from 'react';

type Props = {
    celsius: number;
};

export const TempZones = ({celsius}: Props) => {
    let message = null;

    if (celsius >=100) {
        message = "It's Hot in here!";
    }
    else if (celsius >=36.5 && celsius <=37.5) {
        message = "Normal human body temperature!"
    }
    else if (celsius <=0) {
        message = "It's Freezing!"
    }
  return (
    <div>{message && <h5 className="hot">{message}</h5> }</div>
  )
}
