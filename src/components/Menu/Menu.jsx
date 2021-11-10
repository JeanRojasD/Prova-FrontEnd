import React from "react";
import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    box-shadow: 0px 5px 5px grey;
    .options{
        display:flex;
        list-style-type: none;

        li{
            margin-left: 10px;
            font-weight: bold;
            color: #26F0F1;
        }

        a{
            text-decoration: none;
        }
    }
`
const Image = styled.img`
    width: 100px;
`

const Menu = () => {
    return (
        <Container>
            <Image src={logo} alt="logo" />
                <nav>
                    <ul className='options'>
                        <Link to="/"><li>Index</li></Link>
                        <Link to="/create"><li>Create</li></Link>
                    </ul>
                </nav>
        </Container>
    );
}

export default Menu;