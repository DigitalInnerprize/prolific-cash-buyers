import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SellerForm from "../components/SellerForm";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="banner"></div>
      <SellerForm />
    </Layout>
  )
}

export default IndexPage
