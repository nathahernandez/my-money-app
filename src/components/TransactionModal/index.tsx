import Modal from "react-modal";
import { Container, TypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import inBlackImg from "../../assets/inblack.svg";
import outBlackImg from "../../assets/outblack.svg";
import inImg from "../../assets/in.svg";
import outImg from "../../assets/out.svg";

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal ({isOpen, onRequestClose} : TransactionModalProps) {
    return (
            <Modal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                <button 
                    type="button"
                    onClick={onRequestClose}
                    className="modal-close"
                    >
                    <img src={closeImg} alt="Fechar Modal" />
                </button>
                <Container>
                    <h2>Nova Transação</h2>
                    <input type="title" placeholder="Título" />
                    <input type="number" placeholder="Valor" />
                    <TypeContainer>
                        <button 
                        type="button"
                        className="deposit"
                        >   
                            <img className="inWhite" src={inImg} alt="Depósito" />
                            <img className="inBlack" src={inBlackImg} alt="Depósito" />
                            <span>Entrada</span>
                        </button>
                        <button 
                        type="button"
                        className="withdraw"
                        >
                            <img className="outWhite" src={outImg} alt="Retirada" />
                            <img className="outBlack" src={outBlackImg} alt="Retirada" />
                            <span>Saída</span>
                        </button>
                    </TypeContainer>
                    <input type="category" placeholder="Categoria" />
                    <input type="submit" value="Enviar" />
                </Container>
            </Modal>
    );

}