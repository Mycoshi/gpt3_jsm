import React from 'react';
import {Article, Brand, CTA, Feature, Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import './App.css'


const App = () => {
    return (


        <div className="App"> 

            <div className="gradient__bg">
                <Header />
                <Navbar />
            </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />


        </div>
    )
}

export default App