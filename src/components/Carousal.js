import img1 from '../assets/media/image1.png';
import img2 from '../assets/media/image2.png';
import img3 from '../assets/media/image3.png';

import React, { Component } from 'react'

export default class Carousal extends Component {
    constructor(props) {
        super(props);
 
        // Create instance
        this.slide = React.createRef()
        this.myRef = React.createRef();
    }
  render() {
    return (
        <>
        <h1>hello</h1>
    </>
    )
  }
}
