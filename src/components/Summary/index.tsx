import { Container } from "./style";
import income from './../../assets/income.svg'
import outcome from './../../assets/outcome.svg'
import total from './../../assets/total.svg'


export function Summary (){
    return (
        <Container>
            <div>
                <header>
                        <p>Entradas</p>
                        <img src={income} alt="" />                   
                </header>
                <strong>R$ 1.000</strong>

            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="" />
                </header>
                    <strong>R$ 1.000</strong>
            </div>

            <div className="card-total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong>R$ 1.000</strong>
            </div>
        </Container>
    )
}  