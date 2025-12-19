// Home Page (hp)
    // Background (bg)
        // Container (container)
        export const style_hp_bg_container = {
            position: "relative",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
        };
        // Image (image)
        export const style_hp_bg_image = {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
        };
    // Cover (cover)
        // Background (bg)
        export const style_hp_cover_bg = {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
        };
        // Button Text (button)
        export const style_hp_cover_button = {
            background: "none",
            border: "1px solid white",
            color: "white",
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            zIndex: 101
        };
        // Title box (title_box)
        export const style_hp_cover_title_box = {
            position: "absolute",
            borderTop: "8px",
            top: "30%",
            width: "100%",
            textAlign: "center",
            color: "white",
            letterSpacing: "2px",
            zIndex: 2,
            fontSize: "1.4rem",
            zIndex: 102
        };
    // Contact Portion (con)
        // Button Links Text (button_text)
        export const style_hp_con_button_text = {
            background: "black",
            color: "white",
            fontSize: "1.5rem",
            padding: "1rem 2rem",
            margin: "1rem",
            cursor: "pointer",
            borderRadius: "30px",
            transition: "all 0.2s ease",
            width: "200px",
            border: "4px solid white"
        };
        // Button Grid (grid)
        export const style_hp_con_grid = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            top: "35%",
            columnGap: "2rem",
            width: "fit-content",
            position: "relative",
            margin: "0 auto",
            background: "rgba(20,20,20,1)",
            borderRadius: "30px",
            padding: "3rem 0rem 0rem 0rem"
        };
        // Header
        export const style_hp_con_header = {
            color: "white",
            marginBottom: "1.5rem",
            gridColumn: "1 / -1",
            textAlign: "center",
            marginTop: "-1rem",
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: '"Times New Roman", Times, serif'
        }

// Individual Pages (ip)
    // Background Photo (bg)
    export const style_ip_bg = {
        backgroundColor: "black",
        color: "white",
        overflowY: "auto",
        height: "100vh",
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1rem",
        paddingBottom: "4rem",
    };
    // Title box (title_box)
    export const style_ip_title_box = {
        position: "absolute",
        top: "10%",
        width: "100%",
        letterSpacing: "1px",
        fontSize: "2.5rem",
        color: "white",
        textAlign: "center",
        zIndex: 1,
        fontWeight: "bold"
    };
    // Title Header (title)
    export const style_ip_title = {
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "2.5rem",
            textTransform: "uppercase",
            textAlign: "center",
        };
    // About Page (with responsive side photos)
        // Image Sizing (image)
        export const style_ip_about_image = {
            position: "absolute",
            maxWidth: "400px",
            // height: "auto",
            // marginTop: "-20rem"
        };
        // Text (text)
        export const style_ip_about_text = {
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "1.15rem",
            lineHeight: "1.8rem",
            zIndex: 2,
        };
    // Career (career)
        // Sections for Education/Skills/Experience etc... (section)
        export const style_ip_career_section = {
            backgroundColor: "rgba(20,20,20,1)",
            borderRadius: "20px",
            padding: "2rem 3rem",
            marginBottom: "2rem",
            width: "min(80%, 710px)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            marginLeft: "auto",
            marginRight: "auto",
        };
        // Section Header
        export const style_ip_career_section_header = {
            fontSize: "1.4rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textAlign: "center",
        };
        // Skills List (list)
        export const style_ip_career_list = {
            listStyleType: "none",
            padding: 0,
            lineHeight: "1.8rem",
        };
        // Grid Nest (nested)
        export const style_ip_career_list_nested = {
            marginTop: "0.5rem",
            listStyle: "none",
            lineHeight: "2rem",
        };
        // Certificate (cert)
            // Dropdowns (dropdown)
            export const style_ip_career_cert_dropdown = {
                cursor: "pointer",
                fontSize: "1.2rem",
                marginTop: "1rem",
                userSelect: "none",
                transition: "color 0.2s ease",
            };
            // Pop-up Frame (iframe)
            export const style_ip_career_cert_iframe = {
                width: "100%",
                height: "500px",
                marginTop: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "black",
            };
    // Project Page (proj)
        // Grid (grid)
        export const style_proj_grid = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "2rem",
            padding: "4rem 3rem",
            maxWidth: "1200px",
            margin: "0 auto",
        };
        // Card (card)
            // Format (format)
            export const style_proj_card_format = {
                backgroundColor: "rgba(20,20,20,0.9)",
                border: "2px solid white",
                borderRadius: "20px",
                padding: "2rem",
                textAlign: "center",
                width: "100%",
                maxWidth: "320px",
                minHeight: "150px",
                cursor: "pointer",
            };
            // Title (title)
            export const style_proj_card_title = {
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.8rem",
            };
            // Description (desc)
            export const style_proj_card_desc = {
                fontSize: "1.1rem",
                lineHeight: "1.5rem",
            };
            export const style_proj_card_link = {
                textDecoration: "none",
                color: "inherit",
            };


// Nav Bar (nb)
    // Line spacing/font (line)
    export const style_nb_line = {
        backgroundColor: "black",
        padding: "0.25rem 0.4rem",
        margin: "0.5rem 0",
        fontSize: "1.8rem",
        color: "white",
        pointerEvents: "auto",
    };
    // Updating Links (Used in NavBar)
    export const style_nb_link = {
        ...style_nb_line, 
        cursor: "pointer", 
        textDecoration: "underline",
        transition: "all 0.2s ease",
        opacity: 0.9
    };
    // Box (box)
        // Format (format)
        export const style_nb_box_format = {
            position: "absolute",
            top: "30px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
            pointerEvents: "none",
        }
        // Top Left (left)
        export const style_nb_box_left = {
            ...style_nb_box_format,
            left: "30px",
            alignItems: "flex-start",
        };
        // Top right (right)
        export const style_nb_box_right = {
            ...style_nb_box_format,
            right: "30px",
            alignItems: "flex-end",
        };
    // Mobile view (mobile)
        // Buttons (button)
        export const style_nb_mobile_button = {
            position: "absolute",
            top: "10px",
            zIndex: 10,
            background: "black",
            border: "1px solid white",
            color: "white",
            padding: "6px 10px",
            cursor: "pointer",
            borderRadius: "4px",
            fontSize: "1.2rem",
            userSelect: "none",
        };
        // Left button offset (button_left)
        export const style_nb_mobile_button_left = {
            ...style_nb_mobile_button,
            left: "15px",
        };
        // Right button offset (button_right)
        export const style_nb_mobile_button_right = {
            ...style_nb_mobile_button,
            right: "15px",
        };
        // Overlay for mobile menu (mobile_overlay)
        export const style_nb_mobile_overlay = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9,
        };

// hyperlinks (hyperlink)
export const style_hyperlink = {
    fontColor: "white",
    textDecoration: "underline",
    cursor: "pointer",
};