import React from "react";
import TitleImage from "./TitleImage/TitleImage";
import AppBar from "./AppBar/AppBar";
import "./Header.css"

export default function Header() {

    const mainFeaturedPost = {
        title: 'TRAVEL',
        description:
            "is the only thing you buy that makes you richer - bluargh",
        image: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850181_960_720.jpg',
        imgText: 'main image description',
        // linkText: 'travel blog',
    };


    return (

        <header>
        <TitleImage post={mainFeaturedPost}></TitleImage>
        <AppBar></AppBar>

        </header>

    );
}