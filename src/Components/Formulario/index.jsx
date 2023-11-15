import Form from 'react-bootstrap/Form';
import styles from './Formulario.module.css'
import { useEffect, useState } from 'react';


const Formulario = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)
    const [tabela, setTabela] = useState('Aguardando...')

    function calculaTabela(){
            if (imc < 18.5)
                setTabela(' De acordo com a tabela, seu IMC se encaixa na categoria: Abaixo do peso')
            else if (imc >= 18.5 && imc <= 24.9)
                setTabela(' De acordo com a tabela, seu IMC se encaixa na categoria: Peso normal')
            else if (imc >= 25 && imc <= 29.9)
                setTabela(' De acordo com a tabela, seu IMC se encaixa na categoria: Sobrepeso')
            else if (imc >= 30 && imc <= 34.9)
                setTabela('De acordo com a tabela, seu IMC se encaixa na categoria: Obesidade grau 1')
            else if (imc >= 35 && imc <= 39.9)
                setTabela('De acordo com a tabela, seu IMC se encaixa na categoria: Obesidade grau 2')
            else if (imc > 40)
                setTabela('De acordo com a tabela, seu IMC se encaixa na categoria: Obesidade grau 3')
    }

    useEffect(() => {
        setImc((peso / ((altura/100) * (altura/100))).toFixed(1))
    }, [altura, peso])

    useEffect(() => {
        if(peso && altura != 0 )
            calculaTabela()
    }, [imc])
    

    return (

        <Form className={styles.container}>
            <h1>Calculadora de IMC</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Altura (cm)</Form.Label>
                <Form.Control onChange={(e) =>  {setAltura(e.target.value)}} type="number" placeholder="Digite sua altura em centímetros" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control onChange={(e) =>  {setPeso(e.target.value)}} type="number" placeholder="Digite seu peso em quilogramas" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Seu IMC:</Form.Label>
                <Form.Control value={imc} type="number" step='.01'  disabled />
            </Form.Group>
            <Form.Text>
                {tabela}
            </Form.Text>
        </Form>
    )
}

export default Formulario