import logo from '../../assets/logo.svg'
import { Container, Content } from './style';

export function Header (){

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt-money logo" />
                <button type="button">Nova transação </button>
            </Content>
        </Container>
    )
}