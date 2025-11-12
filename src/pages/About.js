import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
    style_ip_bg,
    style_ip_title,
    style_ip_about_text,
    style_ip_about_image,
} from "../components/styles.js";
import { playPageAudio, stopPageAudio } from "../components/AudioManager.js";
import catPic from "../assets/images/cat.jpg";
import dogPic from "../assets/images/dog.jpg";
import soccerPic from "../assets/images/soccer.jpg";
import beachPic from "../assets/images/beach.jpg";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

function About() {
    const isWide = useMediaQuery("(min-width: 1900px)");
    const isNarrow = useMediaQuery("(max-width: 1899px)");

    useEffect(() => {
        playPageAudio("about");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />
            <div style={style_ip_title}>More About Me</div>

            {/* Side Images for wide screen */}
            {isWide && (
                <div style={{ position: 'absolute', display: 'flex', minHeight: '100vh'}}>
                <img src={catPic} style={{ ...style_ip_about_image, top: '9rem', marginLeft: '7vw'}} alt="Cat" />
                <img src={soccerPic} style={{ ...style_ip_about_image, top: '9rem', marginLeft: '93vw', translate: '-100%'}} alt="Soccer" />
                <img src={dogPic} style={{ ...style_ip_about_image, top: '48rem', marginLeft: '7vw'}} alt="Dog" />
                <img src={beachPic} style={{ ...style_ip_about_image, top: '47rem', marginLeft: '93vw', translate: '-100%', marginBottom: '2rem'}} alt="Beach" />
                </div>
            )}
            

            {/*  Text Section */}
            <div style={style_ip_about_text}>
                I’m currently working on two master’s degrees in Computer Science and Applied Physics at UNC Charlotte.
                I should be finished with both by December 2025.
                <br /><br />
                I first got into physics in high school, where I also loved art and architecture.
                Toward the end of my undergraduate studies, I realized I wanted to do more than just theoretical work,
                so I decided to add computer science to the mix.
                It felt like the right next step, a way to take the problem-solving I already enjoyed and apply it in a
                more modern way.
                <br /><br />
                I’m most interested in computational physics, artificial intelligence, and machine learning, but I’m open
                to exploring almost anything that combines coding with scientific or analytical work.
                <br /><br />
                Outside of school and research, I like to spend time outdoors.
                I enjoy going to the beach and the mountains, camping with friends, and taking trips to new places
                with nice views.
                I’ve always appreciated balance between focus and downtime, city and nature, structure and creativity.
                <br /><br />
                I also value organization and attention to detail in everything I do, whether it’s research, coding, or
                design work.
                That mindset helps me stay consistent and keep projects moving smoothly, especially when I’m switching between lots of work.
                <br /><br />
                At home I have a cat named Laz and a dog named Pepper.
                They don’t always get along, but they keep things interesting.
                Laz also forces me to keep a schedule as he gets mad when I forget to feed him.
                <br /><br />
                In my free time I play soccer, billiards, and guitar.
                I also have a lap steel guitar that I mess around with, though the strings tend to break more often than they should.
                Music is usually playing while I work, and I listen to Dominic Fike, Yeek, Baird, Bakar, and Matt Champion.
                <br /><br />
                I follow West Ham United and Colombia’s national team and try to catch live soccer or hockey games whenever possible.
                Recently, I’ve been getting into F1, although I haven’t had as much time to watch as I’d like.
                <br /><br />
                My favorite color is gray because it’s simple, balanced, and calm, which are the same qualities I try to bring to my work.
                <br /><br />
                If you’d like to connect or talk about research, physics, or software projects, feel free to reach out!
            </div>
            
            {/* Image Row for small screen */}
            {isNarrow && (
                <div style={{marginTop: '3.25rem', marginBottom: '3rem', textAlign: 'center'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem'}}>
                        <img src={catPic} style={{width: '45vw', maxWidth: '400px'}} alt="Cat" />
                        <img src={soccerPic} style={{width: '45vw', maxWidth: '400px'}} alt="Soccer" />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
                        <img src={dogPic} style={{width: '45vw', maxWidth: '400px'}} alt="Dog" />
                        <img src={beachPic} style={{width: '45vw', maxWidth: '400px'}} alt="Beach" />
                    </div>
                </div>
            )}
            <div style={{width: "100%", height: "6vh", display: "block"}}></div>
        </div>
    );
}

export default About;
