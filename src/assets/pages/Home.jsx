import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <div className="background">
                <motion.h1 
                    className="Tittle"
                    initial={{ opacity: 0, y: -50 }}   
                    animate={{ opacity: 1, y: 0 }}     
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    HACKIST
                </motion.h1>

                <motion.img 
                    src="/images/burp.svg"  
                    alt="Burp Suite Logo"
                    width={200}
                    animate={{
                        y: [0, -20, 0]  
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                />
            </div>
        </>
    );
};

export default Home;


