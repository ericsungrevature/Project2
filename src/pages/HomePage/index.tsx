import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from '../../components/Navbar/index';

const HomePage = () => {
    return(
        <div>
            {<Navbar/>}
            {<Header/>}
            {<Footer/>}
        </div>
        

    )
}
export default HomePage;