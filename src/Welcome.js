import { auth } from "./firebase-config"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import "./Welcome.css"

function Welcome() {
  const navigate = useNavigate()
  const logout = async () => {
    await signOut(auth)
    navigate("/SignUp")

  }


  return (
    <div className="welcome__container">
      <div className="welcome__container-header_container"> 
        <div className="welcome__container-header">
          <h1 className="welcome__container-header_title">Panorama</h1>
          <div className="welcome__container-header_text">
            <a href="#hero-section"><h3>HOME</h3></a>
            <a href="#trend-section"><h3>TREND</h3></a>
            <a href="#new-collection_section"><h3>NEW</h3></a>
          </div>

          <button onClick={logout} className="welcome__container-header_button">LOG OUT</button>
        </div>
      </div>

      <hr className="demacation-line"></hr>
      <div className="welcome__container-hero_section" id="hero-section">
        <div className="welcome__container-hero_section-text">
          <h1>Glasses <br/> & Lens</h1>
          <p>Buy the highest quality of sunglasses from us. <br/> More than 100 types of assortment</p>
          <div className="welcome__container-hero_section-text_btn">
            <button className="welcome__container-hero_section-text_btn-1">Start Shopping</button>
            <button className="welcome__container-hero_section-text_btn-2">Explore More </button>
          </div>
        </div>
        <div className="welcome__container-hero_section-image">
          <img src="sunglasses-hero.jpg" alt="sunglasses-hero_section"></img>
        </div>
      </div>

      <hr className="demacation-line"></hr>

      <div className="welcome__container-trend_section" id="trend-section">
        <div className="welcome__container-trend_section-text">
          <h1>Trend <br/> Products</h1>
        </div>
        <div className="welcome__container-trend_section-product">
          <div className="welcome__container-trend_section-product_1">
            <div className="welcome__container-trend_section-product_1-top_section">
              <h3>Dolma <br/> <span>Vision</span></h3> 
              <h2>$233</h2>
            </div>
            <div className="welcome__container-trend_section-product_1-image_section">
              <img src="sunglasses-1.png" alt="vision-glasses"></img>
            </div>
          </div>
          <div className="welcome__container-trend_section-product_1">
            <div className="welcome__container-trend_section-product_1-top_section">
              <h3>Merrit <br/> <span>sunglasses</span></h3> 
              <h2>$199</h2>
            </div>
            <div className="welcome__container-trend_section-product_1-image_section">
              <img src="sunglasses-2.jpg" alt="sunglasses-2"></img>
            </div>
          </div>
          <div className="welcome__container-trend_section-product_1">
            <div className="welcome__container-trend_section-product_1-top_section">
              <h3>Josen <br/> <span>sunglasses</span></h3> 
              <h2>$178</h2>
            </div>
            <div className="welcome__container-trend_section-product_1-image_section">
              <img src="sunglasses-3.jpg" alt="sunglasses-3"></img>
            </div>
          </div>
        </div>
      </div>


      <div className="welcome__container-new_collections-section" id="new-collection_section">
        <h1 className="welcome__container-new_collections-section_title"> NEW COLLECTION</h1>
        <div className="welcome__container-new_collections-section_content">
          <div className="welcome__container-new_collections-section_content-image">
            <img src="sunglasses-4.webp" alt="sunglasses-4"></img>
          </div>
          <div className="welcome__container-new_collections-section_content-text">
            <p>
              Ray-Ban is a world-renowned brand that has been producing high-quality sunglasses since the 1930s. Their iconic designs, such as the Aviator and Wayfarer, have become synonymous with classic style and exceptional quality. Ray-Ban glasses are made with premium materials and advanced technology to provide superior protection and comfort. With a wide range of styles and colors, Ray-Ban glasses offer something for everyone, making them a timeless choice for fashion-conscious individuals.
            </p>
          </div>
        </div>
      </div>
      <hr className="demacation-line"></hr>

      <div className="welcome__container-footer_section">
        <h1> <a href="#hero-section">Panorama</a></h1>
        <p>copyrights 2023, designed by Taiwo Ibrahim</p>

      </div>

    </div>
  )
}


export default Welcome