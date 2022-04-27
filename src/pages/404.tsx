import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "./layout"

const NotFoundPage = () => {
    return (
      <>
        <Helmet title="Not found" defer={false} />
        <Layout>
            <h1>Page not found</h1>
            we couldn’t find what you were looking for.
        </Layout>
      </>
    )
}

export default NotFoundPage
