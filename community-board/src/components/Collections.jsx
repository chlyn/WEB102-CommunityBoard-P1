import React from "react";
import Card from './Card';
import '../Collections.css';

const Collections = () => {
    return (
        <div className="collections">
            <h2>Events</h2>
            <div className="collections-container">
                <Card
                    image="https://anitab.org/wp-content/uploads/2024/08/GHC-Why-you-should-attend.jpg"
                    alt="Event image"
                    title="Grace Hopper Celebration (GHC) 2025"
                    type="event"
                    dateTitle="Date:"
                    date="November 4-7"
                    locationTitle="Location:"
                    location="Chicago, Illinois"
                    description="The largest women-in-tech conference for networking, careers, and innovation."
                    link="https://ghc.anitab.org/ghc-25-announcement/#GHC-25-form/"
                    button="Register"
                />
                <Card
                    image="https://intouch.ccgmag.com/resource/resmgr/beya_images/2025/BEYA_40_STDBanner.png"
                    alt="Event image"
                    title="BEYA STEM Conference 2025"
                    type="event"
                    dateTitle="Date:"
                    date="Febrary 13-15"
                    locationTitle="Location:"
                    location="Baltimore, Maryland"
                    description="Celebrates Black professionals in STEM with networking and career opportunities."
                    link="https://s4.goeshow.com/ccgroup/beyastem/2025/register.cfm"
                    button="Register"
                />
                <Card
                    image="https://i.ytimg.com/vi/dXDWu7w-OP8/maxresdefault.jpg"
                    alt="Event image"
                    title="Women in Cybersecurity (WiCyS) 2025"
                    type="event"
                    dateTitle="Date:"
                    date="April 2-5"
                    locationTitle="Location:"
                    location="Baltimore, Maryland"
                    description="Empowers women in cybersecurity through mentorship and networking."
                    link="https://www.wicys.org/events/wicys-2025/"
                    button="Register"
                />  
                <Card
                    image="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/d08a051d-0d3d-4008-a51f-a96e0709c486/b7f4cdbe-41ba-4f9f-b9b2-0bdedfaa1b1a_1196x662.jpg"
                    alt="Event image"
                    title="DEF CON"
                    type="event"
                    dateTitle="Date:"
                    date="April 7-10"
                    locationTitle="Location:"
                    location="Las Vegas, Nevada"
                    description="A top cybersecurity and hacking conference featuring hands-on challenges, security research, and expert talks."
                    link="https://defcon.org/"
                    button="Register"
                />                
            </div>

            <h2>Resources</h2>
            <div className="collections-container">
                <Card
                    image="https://devresourc.es/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdev-resources%2Fimage%2Fupload%2Fresources%2Fscreenshots%2Ff6380f74-3d50-4f38-9c89-811dd4a7c57f.png&w=3840&q=75"
                    alt="Resource Image"
                    title="W3Schools"
                    type="resource"
                    locationTitle="Type:"
                    location="Online Learning Platform"
                    description="W3Schools is an online platform for learning web development and programming with interactive tutorials, coding exercises, and references for HTML, CSS, JavaScript, Python, and more."
                    link="https://www.w3schools.com/"
                    button="Explore"
                />
                <Card
                    image="https://www.baselinehq.com/r/hero-new.png"
                    alt="Resource image"
                    title="Baseline"
                    type="resouce"
                    locationTitle="Type:"
                    location="Design Bootcamp"
                    description="Baseline is a design system platform that helps teams create, maintain, and implement consistent brand identities. It provides tools for design tokens, typography, colors, and assets, ensuring brand consistency across digital products."
                    link="https://www.baselinehq.com/"
                    button="Explore"
                />
                <Card
                    image="https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_lim.size_1050x591.v1627670281.png"
                    alt="Resource image"
                    title="FreeCodeCamp"
                    type="resource"
                    locationTitle="Type:"
                    location="Online Learning Platform"
                    description="freeCodeCamp is a nonprofit online learning platform that offers free coding tutorials, projects, and certifications in web development, data science, and programming."
                    link="https://www.freecodecamp.org/"
                    button="Explore"
                />  
                <Card
                    image="https://blog.tryhackme.com/content/images/2023/03/Content-Banner---updated.png"
                    alt="Resource image"
                    title="TryHackMe"
                    type="resource"
                    locationTitle="Type:"
                    location="Cybersecurity Training Platform"
                    description="TryHackMe is a cybersecurity training platform with hands-on labs and hacking challenges. It helps users learn ethical hacking and cyber defense through real-world simulations."
                    link="https://tryhackme.com/"
                    button="Explore"
                />                
            </div>

            <h2>Hackathons & Competitions</h2>
            <div className="collections-container">
                <Card
                    image="https://i.ytimg.com/vi/kUKgwX4bLyA/maxresdefault.jpg"
                    alt="Hackathons Image"
                    title="Major League Hacking"
                    type="hackathon"
                    locationTitle="Type:"
                    location="Global League Hackathon"
                    description="Major League Hacking (MLH) is a global hackathon organization that supports student developers through hackathons, coding competitions, and fellowship programs to build skills and projects."
                    link="https://mlh.io/"
                    button="Register"
                />
                <Card
                    image="https://www.hackthebox.com/storage/blog/ctfrecapcover.jpg"
                    alt="Competition Image"
                    title="HackTheBox CTF"
                    type="competition"
                    locationTitle="Type:"
                    location="Capture The Flag"
                    description="Hack The Box is an advanced cybersecurity training platform that provides penetration testing labs, hacking challenges, and real-world attack simulations for security professionals and learners."
                    link="https://www.hackthebox.com/hacker/ctf"
                    button="Register"
                />
                <Card
                    image="https://i.ytimg.com/vi/LdP4eTH_Zck/maxresdefault.jpg"
                    alt="Competition Image"
                    title="Kaggle Competitions"
                    type="competition"
                    locationTitle="Type:"
                    location="AI/ML Challenges"
                    description="Kaggle is a platform for data science and machine learning competitions, where participants solve real-world problems using AI, data analysis, and predictive modeling."
                    link="https://www.freecodecamp.org/"
                    button="Register"
                />  
                <Card
                    image="https://miro.medium.com/v2/resize:fit:1200/0*1zyHCKLfhmwf91Lo.png"
                    alt="Challenge Image"
                    title="Daily UI Challenge"
                    type="challenge"
                    locationTitle="Type:"
                    location="Challenge"
                    description="A 100-day UX/UI challenge providing daily design prompts to help designers practice, improve their skills, and build a portfolio."
                    link="https://www.dailyui.co/"
                    button="Register"
                />                
            </div>

        </div>
        
    )
}

export default Collections;