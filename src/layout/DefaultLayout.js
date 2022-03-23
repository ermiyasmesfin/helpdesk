import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";
import { HeaderTeam } from "./partials/Header.Team.comp";
import { HeaderTech } from "./partials/Header.Tech.comp";



export const DefaultLayout = ({children}) => {
    return(
        <div className="default-layout">
            <header className="header mb-2">
                 <Header/>
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
                 <Footer/>
            </footer>
            
            
            
            
        </div>
    );
};
export const DefaultLayoutTeam = ({children}) => {
    return(
        <div className="default-layout">
            <header className="header mb-2">
                 <HeaderTeam/>
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
                 <Footer/>
            </footer>
            
            
            
            
        </div>
    );
};
export const DefaultLayoutTech = ({children}) => {
    return(
        <div className="default-layout">
            <header className="header mb-2">
                 <HeaderTech/>
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
                 <Footer/>
            </footer>
            
            
            
            
        </div>
    );
};