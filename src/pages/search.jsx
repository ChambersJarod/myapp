import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

function Search(){
    if (window.sessionStorage.getItem("loggedin") == 'true'){
        return(
            <div>
                <Header/>
                    <div>
                        <title>aviable books</title>
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Genre</th>
                                <th>Publication date</th>
                            </tr>
                        </table>
                    </div>
                <Footer/>
            </div>
        )
    }else{
        return(
            <div>
                <Header/>
                    
                <Footer/>
            </div>
        )
    }
}


export default Search;