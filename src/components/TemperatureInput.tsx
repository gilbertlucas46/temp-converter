import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.div`
    height: 100%;
    .form-group {
        height: 100%;
        position: relative;
        &:before {
            content: '';
        }
        h3 {
            margin: 0;
        }
    }
    input {
        min-width: 2ch;
        padding: 0;
        font-size: 32px;
        border: 0;
        border-bottom: 1px solid #000;
        &:focus-visible {
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

const Wrapper = styled.div`
    flex: 1;
    &.last-form {
        z-index: 12;
    }
    &.first-form {
        position: relative;
        z-index: 9;
        &::before, &:after {
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            bottom: 0;
        }
        &:before {
            content: '';
            background:linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.03) 24%, rgba(255, 255, 255, 0) 38%);
        }
    }
`;

type Props = {
    scale: string;
    value: string;
    width: number;
    onChange:(text: React.ChangeEvent<HTMLInputElement>) => void
};

type scaleNames = {
    [key: string]: string
}

export const TemperatureInput = ({scale, value, width, onChange}: Props) => {

    const scaleNames: scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    return (
    <Wrapper className={scale === 'c' ? 'first-form' : "last-form"}>
        <Form>
            <div className= "form-group">
                <label>
                    <h3>Enter Temperature in {scaleNames[scale]}: </h3>
                </label>
                <input
                    id="focusedInputed" 
                    type="number"
                    autoFocus 
                    value={value}
                    style={{ width: width +'ch'}}
                    onChange={onChange} 
                />
            </div>
        </Form>
    </Wrapper>
    )
}
