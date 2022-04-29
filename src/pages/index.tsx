import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet"; // To modify head on each pages
import Layout from "./layout";
import { TemperatureInput } from "../components/TemperatureInput";
import { TempZones } from "../components/TempZones";
import styled, { ThemeProvider } from 'styled-components'
import DividerStyles from '../components/styles/DividerStyles.js'
import Wave from '../images/wave.svg';
import { ArrowDirection } from "../components/ArrowDirection";
import { Toggle } from "../components/Toggle";

const TempWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.div`
  overflow: hidden;
`;

const lightTheme = {
  body: '#e2e2e2',
  text: '#363537',
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

const IndexPage = () => {
    const [state, setState] = useState({scale: '', value: '', width: 4});
    const [direction, setDirection] = useState("up");

    const useDarkMode = () => {
      const [theme, setTheme] = useState('light');
    
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark')
          window.localStorage.setItem('theme', 'dark');
        } else {
          setTheme('light')
          window.localStorage.setItem('theme', 'light');
        }
      };
      
      useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
    
        if (localTheme) {
          setTheme(localTheme);
        } else {
          window.localStorage.setItem('theme', 'light');
        }
      })
    
      return [theme, toggleTheme]
    };

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
          <Layout theme={theme}>
              <Main>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <TempWrapper theme={theme}>
                  <TemperatureInput
                    scale="c"
                    value={celsius}
                    width={state.width}
                    onChange={handleCelsiusChange}
                    theme={theme}
                    />
                  <DividerStyles>
                    <Wave/>
                    <ArrowDirection direction={direction}/>
                  </DividerStyles>
                  <TemperatureInput
                    scale="f"
                    width={state.width}
                    value={fahrenheit}
                    theme={theme}
                    onChange={handleFahrenheitChange} />
                {/*<TempZones
      celsius={parseFloat(celsius)} />*/} 
                </TempWrapper>
              </Main>
          </Layout>
        </ThemeProvider>
      </>
    )
}

export default IndexPage
