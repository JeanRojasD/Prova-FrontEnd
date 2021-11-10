import React from "react";
import styled from "styled-components"

import Menu from "../../components/Menu/Menu"
import Table from "../../components/Table/TableComponent"
import Search from "../../components/Search/Search"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .space{
        margin-top: 100px;
    }
`

const Index = () => {
    return(
        <Container>
            <Menu/>
            <Search/>
            <Table/>
        </Container>
    );
}

export default Index;