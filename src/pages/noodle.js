import React from "react"
import Checkout from "../components/checkout"
import Menu from "../components/Menu"
import "./index"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function Noodle() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Layout></Layout>

      <h3>Dinks and extras</h3>
      <hr class="break"></hr>

      <img
        class="drinkO"
        alt="coke"
        src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2019/07/12/diet-coke-helps-boost-coca-cola-s-brand-value-brand-finance-rankings/9912727-1-eng-GB/Diet-Coke-helps-boost-Coca-Cola-s-brand-value-Brand-Finance-rankings_wrbm_large.jpg"
      ></img>
      <img
        class="drinkO"
        alt="Gin"
        src="https://cdn.shopify.com/s/files/1/0271/5071/2889/products/brighton-gin-copa-gin-glass-gin-tonic-750x750_grande.jpg?v=1594219671"
      ></img>
      <img
        class="drinkO"
        alt="Gin"
        src="https://cdn.shopify.com/s/files/1/0271/5071/2889/products/brighton-gin-copa-gin-glass-gin-tonic-750x750_grande.jpg?v=1594219671"
      ></img>
      <img
        class="drinkO"
        alt="Gin"
        src="https://cdn.shopify.com/s/files/1/0271/5071/2889/products/brighton-gin-copa-gin-glass-gin-tonic-750x750_grande.jpg?v=1594219671"
      ></img>
      <hr class="break"></hr>
      <h2>chinese chicken noodle soup with garlic </h2>
      <div class="container">
        <img
          alt="Noodle soup"
          src="https://embed.widencdn.net/img/mccormick/rvr1iyzale/1318x1318px/chinese_chicken_noodle_soup_with_garlic_&_ginger_6247.jpg?crop=true&anchor=727,26&q=80&r=270&color=ffffffff&u=o2hyef"
        ></img>
        <button class="btn">Chicken</button>
        <div class="bottom-right">
          <h3 class="price">100kr</h3>
        </div>
      </div>

      <div class="adding">
        <Link
          to="/order"
          style={{ textShadow: `none`, backgroundImage: `none` }}
        >
          <button>go to order</button>
        </Link>
      </div>
      <p>
        A delicious soup with plenty of vibrant flavors that are brought
        together in one pot. Once you try this recipe, you’ll never go back to
        the packaged soups again!
      </p>

      <div class="bContainer">
        <button class="optionB">Chicken +</button>
        <button class="optionB">Noodles +</button>
        <button class="optionB">Chili Sauce +</button>
        <button class="optionB">Coconut Flakes +</button>
        <button class="optionB">Cat Meat +</button>
      </div>
      <Checkout />
    </div>
  )
}
