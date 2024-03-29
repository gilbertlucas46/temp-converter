import React, { useState } from "react";
import {Helmet} from "react-helmet"; // To modify head on each pages
import Layout from "../components/Layout";
import { TemperatureInput } from "../components/TemperatureInput";
import styled, { ThemeProvider } from 'styled-components'
import DividerStyles from '../components/styles/DividerStyles.js'
import Wave from '../images/wave.svg';
import { ArrowDirection } from "../components/ArrowDirection";
import { Toggle } from "../components/Toggle";
import { useDarkMode } from "../components/hooks/useDarkMode";

const TempWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.div`
    overflow: hidden;
`;

const lightTheme = {
    body: 'var(--lightTheme)',
    text: 'var(--darkTheme)',
    toggleBorder: 'var(--gray-200)',
    gradient: 'linear-gradient(var(--gray-700), var(--gray-500))',
}

const darkTheme = {
    body: 'var(--darkTheme)',
    text: 'var(--lightTheme)',
    toggleBorder: 'var(--gray-600)',
    gradient: 'linear-gradient(var(--purple-1), var(--purple-2))',
}

const IndexPage = () => {
    const [state, setState] = useState({scale: '', value: '', width: 4});
    const [direction, setDirection] = useState("up");
  
    const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'c', value, width: value.length});
        setDirection("down");
    }

    const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'f', value, width: value.length});
        setDirection("up");
    }

    // Formula Based on https://www.calculatorsoup.com/calculators/conversions/temperature.php
    const toCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;
    const toFahrenheit = (celsius: number) => (celsius * 9 / 5) + 32;
    const Convert  = (value: string, convert: (temperature: number) => number) => {
        const input = parseFloat(value);
        if (Number.isNaN(input)) return '';
        const output = convert(input);
        const rounded = (Math.round(output * 1000) / 1000).toFixed(2);
        return rounded.toString();
    }

    const scale = state.scale;
    const value = state.value;
    const celsius = scale === 'f' ? Convert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? Convert(value, toFahrenheit) : value;
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
      <>
        <Helmet title="Temperature Converter" defer={false} />
        <ThemeProvider theme={themeMode}>
            <Layout >
                <Main>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                    <TempWrapper >
                        <TemperatureInput
                          scale="c"
                          value={celsius}
                          width={state.width}
                          onChange={handleCelsiusChange}
                          />
                        <DividerStyles>
                            <Wave/>
                            <ArrowDirection direction={direction}/>
                        </DividerStyles>
                        <TemperatureInput
                          scale="f"
                          width={state.width}
                          value={fahrenheit}
                          onChange={handleFahrenheitChange} />
                    </TempWrapper>
                  </Main>
            </Layout>
        </ThemeProvider>
      </>
    )
}

export default IndexPage
