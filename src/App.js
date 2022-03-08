import React from "react";
import Product from "./Common/Product";
import pfp from "./Resources/user-avatar.png";
import img1 from "./Resources/image-1.png";
import img2 from "./Resources/image-2.png";
import img3 from "./Resources/image-3.png";

function App() {
    const user = {
        avi: pfp,
        name: "fake name",
    };
    const photos = [img1, img2, img3];
    return (
        <div className="App">
            <Product
                user={user}
                review="After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. After a few days of experience, I found that the battery life is really great. The A13 process upgrade and all of the other features were really nice. "
                rating="3"
                photos={photos}
            />
        </div>
    );
}

export default App;
