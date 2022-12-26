import React from "react";
import { BuscarInputContainer, Container, Input, MenuRight, Row, Wrapper, Menu, ImgLogo } from "./styles";

import { Button } from "../Button";

import logoImg from "../../assets/logo.png"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <ImgLogo src={logoImg} alt="logo" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar aqui" />
                    </BuscarInputContainer>

                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>

    )
}

export { Header }