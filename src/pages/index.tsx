import React, { useState, Dispatch  } from "react";
import {Helmet} from "react-helmet"; // To modify head on each pages
import Layout from "./layout";
import styled from 'styled-components';
import { TemperatureInput } from "../components/TemperatureInput";
import { TempZones } from "../components/TempZones";


const IndexPage = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCelsius(value);
  }

  const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFahrenheit(value)
  }

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
