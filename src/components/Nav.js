import React from 'react';
import Container from './reusebleComponents/Container';
import Logo from './Logo';

const Nav = ()=>{
    return(
        <nav>
            <Container>
                <Logo />
            </Container>
        </nav>
    )}

export default Nav;