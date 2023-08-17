import React from 'react'
import Headerhome from '../components/headerhome';
import Footer from '../components/footer';


import './home.css';


function Home(){
    return(
        
        <div className='homeCon'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Headerhome/>
            <div className='searcher'>
                <h1>Search our database to find out how many books we have!<a href="/search"><i class="fa fa-search fa-3"></i></a></h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;