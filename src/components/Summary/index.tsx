import { Container } from "./styles";
import EntradasImg from '../../assets/in.svg'
import SaidasImg from '../../assets/out.svg'
import TotalImg from '../../assets/all.svg'
import EntradasBlackImg from '../../assets/inblack.svg'
import SaidasBlackImg from '../../assets/outblack.svg'

export function Summary(){
    return(
        <Container>
            <div className="in">
                <header>
                    <p>Entradas</p>
                    <img className="inWhite" src={EntradasImg} alt="Entradas" />
                    <img className="inBlack" src={EntradasBlackImg} alt="Entradas" />
                </header>
                <strong>R$ 2300.00</strong>
            </div>
            <div className="out">
                <header>
                    <p>Saídas</p>
                    <img className="outWhite" src={SaidasImg} alt="Saídas" />
                    <img className="outBlack" src={SaidasBlackImg} alt="Saídas" />
                </header>
                <strong>R$ 630.00</strong>
            </div>
            <div className="last">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$ 1670.00</strong>
            </div>
        </Container>
    )
}