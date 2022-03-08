import React from "react";
import Product from "./Common/Product";
import pfp from "./Resources/user-avatar.png";
import img1 from "./Resources/image-1.png";
import img2 from "./Resources/image-2.png";
import img3 from "./Resources/image-3.png";

function App() {
    const user = {
        avi: pfp,
        name: "ina",
    };
    const photos = [img1, img2, img3];
    return (
        <div className="App">
            <Product
                user={user}
                review="After a few days of experience, I found that the battery life is really great. The A13 
                process upgrade and all of the other features were really nice. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum."
                rating="3"
                photos={photos}
            />
        </div>
    );
}

export default App;
