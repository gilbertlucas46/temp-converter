import React, { useState } from "react";
import {Helmet} from "react-helmet"; // To modify head on each pages
import Layout from "./layout";
import { TemperatureInput } from "../components/TemperatureInput";
import { TempZones } from "../components/TempZones";

const IndexPage = () => {
    const [state, setState] = useState({scale: '',value: ''});

    const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'c', value});
    }

    const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState({scale: 'f', value});
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
            <TemperatureInput
              scale="c"
              value={celsius}
              onChange={handleCelsiusChange}
              />
            <TemperatureInput
              scale="f"
              value={fahrenheit}
              onChange={handleFahrenheitChange} />
            <TempZones
              celsius={parseFloat(celsius)} />
        </Layout>
      </>
    )
}

export default IndexPage
