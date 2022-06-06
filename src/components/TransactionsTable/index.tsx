import { Container } from "./style";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <th>Título </th>
                    <th>Valor </th>
                    <th>Categoria </th>
                    <th>Data </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">R$2000.00</td>
                        <td>Desenvolvimento</td>
                        <td>06/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$2000.00</td>
                        <td>Desenvolvimento</td>
                        <td>06/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}