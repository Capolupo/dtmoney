import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import { Content } from './styles';

export function Header(){
    return(
        <Container> {/* Container é o meu Header Stylizado */}
          <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova transação
            </button>
          </Content>
        </Container>
    )    
}