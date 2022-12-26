import { Link } from "react-router-dom";

import { Button } from "../../components/Button";

import { Header } from "../../components/Header";

import { Input } from "../../components/Input";

import { Container, TextContent, Title } from "./styles";
import imageBanner from "../../assets/banner.png"

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>

            o seu futuro global agora.
          </Title>
          <TextContent>
            Dadoos
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null} />
        </div>
        <div>
          <Input placeholder="Email" />
        </div>
      </Container>
    </>
  );
};

export { Login };
