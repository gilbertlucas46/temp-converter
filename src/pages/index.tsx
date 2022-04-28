import React, { useState } from "react";
import {Helmet} from "react-helmet"; // To modify head on each pages
import Layout from "./layout";
import { TemperatureInput } from "../components/TemperatureInput";
import { TempZones } from "../components/TempZones";
import styled from 'styled-components';

import Wave from '../images/wave.svg'

const TempWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Divider = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 9;
  }
`;

const Main = styled.div`
  overflow: hidden;
`;

const IndexPage = () => {
    const [state, setState] = useState({scale: '', value: '', width: 8});

    const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'c', value, width: value.length});
    }

    const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'f', value, width: value.length});
    }

    // Formula Based on https://www.calculatorsoup.com/calculators/conversions/temperature.php
    const toCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;
    const toFahrenheit = (celsius: number) => (celsius * 9 / 5) + 32;
    const Convert  = (value: string, convert: (temperature: number) => number) => {
        const input = parseFloat(value);
        if (Number.isNaN(input)) return '';
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const scale = state.scale;
    const value = state.value;
    const celsius = scale === 'f' ? Convert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? Convert(value, toFahrenheit) : value;

    return (
      <>
        <Helmet title="Temperature Converter" defer={false} />
        <Layout>
            <Main>
              
              <TempWrapper>
                <TemperatureInput
                  scale="c"
                  value={celsius}
                  width={state.width}
                  onChange={handleCelsiusChange}
                  />
                  <Divider>
                <Wave/>
              </Divider>
                <TemperatureInput
                  scale="f"
                  width={state.width}
                  value={fahrenheit}
                  onChange={handleFahrenheitChange} />
              {/*<TempZones
    celsius={parseFloat(celsius)} />*/} 
              </TempWrapper>
            </Main>
        </Layout>
      </>
    )
}

export default IndexPage
