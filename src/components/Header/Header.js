import React from "react";
import TitleImage from "./TitleImage/TitleImage";
import AppBar from "./AppBar/AppBar";
import "./Header.css"

export default function Header() {

    const mainFeaturedPost = {
        title: 'TRAVEL',
        description:
            "is the only thing you buy that makes you richer",
        image: 'https://cdn.pixabay.com/photo/2019/01/27/22/32/mountains-3959204_960_720.jpg',
        imgText: 'main image description',
        // linkText: 'Continue reading…',
    };


    return (

        <header>
        <TitleImage post={mainFeaturedPost}></TitleImage>
        <AppBar></AppBar>

        </header>

    );
}