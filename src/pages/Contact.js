// import React, {useEffect} from "react";
// import { style_ip_bg, style_ip_title_box, style_ip_con_button_text, style_ip_con_grid, style_ip_con_location } from "../components/styles.js";
// import { playPageAudio, stopPageAudio } from "../components/AudioManager.js";

// function Contact() {
//     useEffect(() => {
//         playPageAudio("contact");
//         return () => stopPageAudio();
//     }, []);

//     const copyEmail = () => {
//         navigator.clipboard.writeText("LHoskin.Work@gmail.com");
//         alert("Email copied to clipboard!");
//     };

//     return (
//         <div style={style_ip_bg}>
//             <div style={style_ip_title_box}>Contact Information</div>

//             <div style={style_ip_con_grid}>
//                 <button style={style_ip_con_button_text} onClick={() => window.open("https://github.com/lhosk", "_blank")}>
//                     GitHub
//                 </button>
                
//                 <button style={style_ip_con_button_text} onClick={copyEmail}>
//                     Email
//                 </button>
                
//                 <button style={style_ip_con_button_text} onClick={() => window.open("https://discordapp.com/users/lucasx53/", "_blank")}>
//                     Discord
//                 </button>
                
//                 <button style={style_ip_con_button_text} onClick={() => window.open("https://linkedin.com/in/lhosk", "_blank")}>
//                     LinkedIn
//                 </button>
            
//             </div>

//             <div style={style_ip_con_location}>Grigg 242 @ UNC Charlotte</div>
//         </div>
//     );
// }

// export default Contact;