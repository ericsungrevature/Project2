import React from "react";
import Display from "../../components/Display";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";


const HomePage = () => {
    return(
        <div>
            {<Navbar/>}
            {<Header/>}
            <div className="row">
                <div className="col-lg-3">
                    {<Sidebar/>}
                </div>
                <div className="col-lg-7">
                    {<Display/>}
                </div>
            </div>
            {<Footer/>}
        </div>
    )
}
export default HomePage;