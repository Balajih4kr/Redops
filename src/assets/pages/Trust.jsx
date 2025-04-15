import { motion } from 'framer-motion';
import '../styles/Trust.css';

const Trust = () => {
    return (
        <>
            <div className='Trust'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 right-header">
                        <h1>Why <span>Choose Us?</span></h1>
                        <hr />
                        <p className='sub-head'>💡✔️ Real-World Hacking Skills</p>
                        <p>Learn how professional hackers break systems — from reconnaissance to exploitation</p>
                        <p>Start from scratch and grow step by step into penetration testing and bug bounty</p>
                        </div>
                        <div className="col-6 youtube">
                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/f0kJeonCkjI?si=V3EXi5ABhrpaOhsT"
                        title="YouTube video player" 
                        frameborder="5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Trust;
