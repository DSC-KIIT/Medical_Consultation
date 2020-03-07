import React from 'react'
import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import './home.css'

export function Home() {
    return(
        <div className="container-fluid">
            <Navbar />
            <br></br>
            <br></br>
            <div className="cards-container">

                <a href="/consultadoc">
                    <div className="card">
                        <div className="card-body">
                            <h2 className='card-text'>Consult a Doctor</h2>
                            <br></br>
                            <p>Chat with a doctor of your choice and get diagnosis</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                    <div className="card">
                        <div className="card-body">
                            <h2 className='card-text'>Nearby Hospitals</h2>
                            <br></br>
                            <p>Find hospitals and doctors nearby</p>
                        </div>
                    </div>
                </a>

                <div className="card" style={{width: '40%'}}>
                    <div className="card-body">
                        <h2 className='card-text'>Recent Medical News</h2>
                        <br></br>
                        <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Link 1</a> <br></br>
                        <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Link 2</a> <br></br>
                        <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Link 3</a>
                    </div>
                </div>
            
            </div>
            <Footer />
        </div>
    );
}

