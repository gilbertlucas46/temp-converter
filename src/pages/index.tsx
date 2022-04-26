import * as React from "react";
import {Helmet} from "react-helmet";
import Layout from "./layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
     <Helmet title="Temperature Converter" defer={false} />
     <Layout>
        test
     </Layout>
    </main>
  )
}

export default IndexPage
