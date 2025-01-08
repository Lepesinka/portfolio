import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import styled from 'styled-components';

import bg from './assets/images/yellow-bg.png'
import photo from './assets/images/photo.png'

function App() {
    return (
        <div className="App">


            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;



