import React from "react"
import { Link } from "gatsby"
import "./menu.css"
export default function Menu({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <div className="menus">
        <div class="container">
          <a href="/noodle">
            <h3 class="titleF">Chicken Noodle Soup With Garlic</h3>
            <img
              alt="Noodle soup"
              src="https://embed.widencdn.net/img/mccormick/rvr1iyzale/1318x1318px/chinese_chicken_noodle_soup_with_garlic_&_ginger_6247.jpg?crop=true&anchor=727,26&q=80&r=270&color=ffffffff&u=o2hyef"
            ></img>
            <button class="btnC">Chicken</button>
            <h4 class="price">100kr</h4>
          </a>
        </div>
        <a href="/about">
          <h3 class="titleF">Butternut Soup</h3>
          <img
            alt="Butternut soup"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-crock-pot-butternut-squash-soup-horizontal-1535155553.png"
          ></img>
        </a>
        <a href="/about">
          <h3 class="titleF">Chicken Soup</h3>
          <img
            alt="chicken soup"
            src="https://229hkg2lw84tezus91ay33k2-wpengine.netdna-ssl.com/wp-content/uploads/2012/03/homemade-chicken-soup-1302x904.jpg"
          ></img>
        </a>
        <a href="/about">
          <h3 class="titleF">Fish Soup</h3>
          <img
            alt="fish soup"
            src="https://infra-recipesepi-prod-cdn.azureedge.net/497f69/contentassets/dec1e9dae7144f6b9ded8dd751faf7c9/full_klassisk-fiskesuppe.jpg"
          ></img>
        </a>
        <a href="/about">
          <h3 class="titleF">Vegiterian Soup</h3>
          <img
            alt="vego soup"
            src="https://www.recipetineats.com/wp-content/uploads/2014/06/DSC_0038-680x451.jpg"
          ></img>
        </a>
        <a href="/about">
          <h3 class="titleF">Vegan Soup</h3>
          <img
            alt="vegan soup"
            src="https://www.tasteofhome.com/wp-content/uploads/2019/09/Vegan-Tortilla-Soup_EXPS_FT19_245345_F_0912_1-1-696x696.jpg"
          ></img>
        </a>
      </div>
    </div>
  )
}
