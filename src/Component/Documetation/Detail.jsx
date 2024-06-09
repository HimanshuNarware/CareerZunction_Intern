import React, { useEffect, useState } from "react";
import Founder_img from "../../image/cz/h.png";
import Maintainer_img from "../../image/cz/c.jpeg";
import "./Detail.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Slider from "./Slider";
import { motion } from "framer-motion";

function Detail() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 550;

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{ marginTop: "150px" }}>
            <motion.h1
                initial={{ scale: 0, x: -150 }}
                whileInView={{ scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                }}
                style={{ color: "rgba(128, 128, 128, 0.44)", textAlign: "center" }}
            >
                Founder And Maintainers of CareerZunction
            </motion.h1>
            <div className="ProjectD">
                {width >= breakpoint ? (
                    <div className="inner-container" style={{ width: "100%", display: "flex", justifyContent: "space-evenly", padding: "6vh 0" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                            }}
                            className="section_founder"
                        >
                            <img className="fimg" src={Founder_img} alt="img" />
                            <p>Founder : Himanshu Narware</p>
                            <span>
                                <a className="github1" href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a className="linkedin1" href="https://linkedin.com/himanshunarware " target="_blank">
                                    <FaLinkedin />
                                </a>
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                            }}
                            className="section_maintainer"
                        >
                            <img className="fimg" src={Maintainer_img} alt="img" />
                            <p>Maintainer : Chaitali Sonare</p>
                            <span>
                                <a className="github1" href="#" target="_blank">
                                    {<FaGithub />}
                                </a>
                                <a className="linkedin1" href="# " target="_blank">
                                    <FaLinkedin />
                                </a>
                            </span>
                        </motion.div>
                    </div>
                ) : (
                    <Slider />
                )}
            </div>
        </div>
    );
}

export default Detail;
