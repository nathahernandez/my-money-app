import logoImg from '../../assets/money.png'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal } : HeaderProps) {

    return (
        <Container>
            <Content>
                <div className="Logo">
                    <img src={logoImg} alt="Money App" />
                    <p>Money App</p>
                </div>

                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação 
                </button>
            </Content>
        </Container>
    )
}