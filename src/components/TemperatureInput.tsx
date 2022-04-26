import React from 'react';

type Props = {
    scale: string;
    value: string;
    onChange:(text: React.ChangeEvent<HTMLInputElement>) => void
};


export const TemperatureInput = ({scale, value, onChange}: Props) => {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };
    return (
        <>
        <form>
            <div className= "form-group">
                <label>
                    <h3>Enter Temperature in {scaleNames[scale]}: </h3>
                </label>
                <input
                 className="form-control container text-center" id="focusedInputed" 
                 type="text" 
                 value={value}
                onChange={onChange} />
            </div>
        </form>
        </>
  )
}
