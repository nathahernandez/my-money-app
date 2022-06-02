import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"
export function TransactionTable() {
   
    useEffect (() => {
    
        api.get("/transactions")
        .then(response => console.log(response.data));

    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>FastFood</td>
                        <td className="withdraw">R$ 200.00</td>
                        <td>Comida</td>
                        <td>06/03/2020</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td  className="withdraw">R$ 250.00</td>
                        <td>Casa</td>
                        <td>06/03/2020</td>
                    </tr>
                    <tr>
                        <td>Água</td>
                        <td className="withdraw">R$ 180.00</td>
                        <td>Casa</td>
                        <td>06/03/2020</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 2300.00</td>
                        <td>Trabalho</td>
                        <td>06/03/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}