import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';
import OurTeam from './components/OurTeam';
import BrandShowCase from './components/BrandShowCase';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductIntro from './components/ProductIntro';
import FeatureList from './components/FeatureList';
import BrandList from './components/BrandList';
import SimpleTestimonial from './components/SimpleTestimonial';
import FooterInfo from './components/FooterInfo';

export default class IceworksPreviewPage extends Component {
  static displayName = 'IceworksPreviewPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="iceworks-preview-page-page">
        <AbilityIntroduction />
        <OurTeam />
        <BrandShowCase />
        <Testimonial />
        <Footer />
        <ProductIntro />
        <FeatureList />
        <BrandList />
        <SimpleTestimonial />
        <FooterInfo />
      </div>
    );
  }
}
