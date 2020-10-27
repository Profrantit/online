import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import "./index"

export default function Home() {
  return (
    <Layout>
      <hr class="break"></hr>
      <div class="parent">
        <button class="chicken">Chicken</button>
        <button class="chicken">Beef</button>
        <button class="chicken">Vego</button>
        <button class="chicken">Vegan</button>
      </div>

      <Menu></Menu>
    </Layout>
  )
}
