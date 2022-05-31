import { Container } from "./styles";
import EntradasImg from '../../assets/in.svg'
import SaidasImg from '../../assets/out.svg'
import TotalImg from '../../assets/all.svg'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
                <strong>R$ 2300.00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas" />
                </header>
                <strong>- R$ 630.00</strong>
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