import React, { Component } from "react";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="header-wrapper fixed-top">
          <Header />
        </section>
        <section className="banner-wrapper container px-lg-5 ">
          <Banner />
        </section>
        <section className="item-wrapper container px-lg-5 ">
          <Item />
        </section>
        <section className="footer-wrapper">
          <Footer />
        </section>
      </div>
    );
  }
}
