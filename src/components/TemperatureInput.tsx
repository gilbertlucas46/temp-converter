import React from 'react';
import styled from 'styled-components';
import FormStyles from '../components/styles/FormStyles.js'

const Wrapper = styled.div`
    flex: 1;
    input {
      color: ${({ theme }) => theme.text};
      border-bottom: 2px solid ${({ theme }) => theme.text};
      font-weight: 700;
    }
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
             /* ff 3.6+ */
             background:-moz-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.03) 24%, rgba(255, 255, 255, 0) 38%); 
            /* safari 5.1+,chrome 10+ */
            background:-webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.03) 24%, rgba(255, 255, 255, 0) 38%);
            /* opera 11.10+ */
            background:-o-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.03) 24%, rgba(255, 255, 255, 0) 38%);
            /* ie 6-9 */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#FFFFFF', GradientType=1 );
            /* ie 10+ */
            background:-ms-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.03) 24%, rgba(255, 255, 255, 0) 38%);
            /* global 94%+ browsers support */
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
        <FormStyles>
            <div className= "form-group">
                <label>
                    <h3>In {scaleNames[scale]}</h3>
                </label>
                <input
                    id="focusedInputed" 
                    type="number"
                    value={value}
                    style={{ width: width + 3 +'ch'}} // (ch) Character unit to auto adjust width + 3ch offset
                    onChange={onChange} 
                />
            </div>
        </FormStyles>
    </Wrapper>
    )
}
