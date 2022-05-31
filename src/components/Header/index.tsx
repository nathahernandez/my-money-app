import logoImg from '../../assets/money.png'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <div className="Logo">
                    <img src={logoImg} alt="Money App" />
                    <p>Money App</p>
                </div>
                <button> Nova Transação </button>
            </Content>
        </Container>
    )
}