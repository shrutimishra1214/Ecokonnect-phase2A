import React, { Fragment, useEffect, useState, useRef } from "react";
import "./About.scss";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillCodepenCircle, AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import Api from "../../Config/API";
import Loader from "react-loader-spinner";

const About = (props) => {
    const _isMounted = useRef(true);
    const [isLoading, setLoading] = useState(false);
    const [githubInfo, setGithubInfo] = useState({
        starts: null,
        forks: null,
        repoUrl: ""
    });
    const { changeMainState } = props;
    useEffect(() => {
        changeMainState("currentPage", "About");
    }, [changeMainState]);
    const contactList = Object.freeze([
        { type: "github", title: "Github", url: "https://github.com/Mahmoud-farargy", icon: (<ImGithub style={{ fontSize: "30px" }} />), id: "github" },
        { type: "gmail", title: "Email", url: "mailto:mahmoudfarargy9@gmail.com", icon: (<MdEmail style={{ fontSize: "35px" }} />), id: "gmail" },
        { type: "instagram", title: "Instagram", url: "https://www.instagram.com/codepugilist", icon: (<AiFillInstagram style={{ fontSize: "35px" }} />), id: "instagram" },
        { type: "codepen", title: "Code Pen", url: "https://codepen.io/mahmoud-farargy/pens/public", icon: (<AiFillCodepenCircle style={{ fontSize: "35px" }} />), id: "codepen" }
    ]);
    useEffect(() => {
        if(process.env.NODE_ENV !== "production"){
            return;
        }
        setLoading(true);
        Api().get('https://api.github.com/repos/Mahmoud-farargy/instagram-clone').then(response => {
            if (_isMounted.current) {
                setLoading(false);
                const { stargazers_count = 100, forks_count = 100, html_url = "https://github.com/Mahmoud-farargy/instagram-clone" } = response.data;
                if (response.data) {
                    setGithubInfo({
                        ...githubInfo,
                        starts: stargazers_count,
                        forks: forks_count,
                        repoUrl: html_url
                    })
                }
            }
        }).catch(err => {
            if (_isMounted.current) {
                setLoading(false);
                console.error(err);
            }
        });
        return () => {
            _isMounted.current = false;
        }
    }, []);
    return (
        <Fragment>
            <div id="about--container" className="flex-column">
                <div className="about--inner">
                    <div className="about-sub flex-column">
                        <div className="flex-column about-section-inner">
                            {/* <Avatar  className="my-image" src={myImage} alt="Me" draggable="false" /> */}
                            <br/><br/><h2>Welcome to EcoKonnect :)</h2><br/>
                            {/*<ul className="flex-row socials--links">
                                {
                                    contactList && contactList.length > 0 &&
                                    contactList.map((contactItem, idx) => {
                                        return (
                                            <li title={contactItem.title} key={`${contactItem.id}${idx}`}>
                                                <a href={contactItem.url} rel="noopener noreferrer" target="_blank">
                                                    {contactItem.icon}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>*/}
                            <div tabIndex="-1" className="github--repo--info flex-row">
                                <a rel="noopener noreferrer" target="_blank">
                                    <p>EcoKonnect(Eco Network App), an application visualizes the carbon footprint created by different aspects of daily life, particularly food consumption and public transportation, and encourages end-users to reduce it while also including a social interaction element.
This app is a godsend in the current climate of resource depletion and human involvement in the ongoing degradation of the environment.
                                    </p>
                                    <p>
                                    The idea for this project is inspired by the various reputed journals and papers and is also in alignment with the Climate Action goal, under the United Nations 17 Sustainable Development Goals. With this application, we aspire to achieve India’s Paris Commitment target.
So what is ecokonnect? It is a social media application which we hope to build for the ecotizens.  Ecotizen is a portmanteau (port·man·tow) of eco + citizen. This application will provide various features to its users to help lower their carbon footprint and participate in a sustainable way of living. We want our users to feel like they are a part of a community that cares about their contribution to the environment. 

                                    <br/><br/></p>
                                    <h6>Upcoming Features: Chat, Explore, Settings, Activity Page, Search, Notification, Offers</h6><br/><br/>
                                    <h4>Stay tuned 😉</h4>
                                    
                                </a>

                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default About;