import {useState} from "react";
import styles from "./Form.module.css";

const Form = () => {

    const [peso, setPeso] = useState(0); 
    const [altura, setAltura] = useState(0); 
    const [resultadoIMC, setResultadoIMC] = useState("");


    const RetornaIMC = (e) => {
        e.preventDefault()
        let IMC = peso / (altura * altura);
        let IMCFixed = IMC.toFixed(2);

        if (IMCFixed < 18.5) {
            setResultadoIMC("Segundo a tabela de IMC, você está no nível de Magreza");
            } else if (IMCFixed >= 18.5 && IMCFixed <= 24.9) {
            setResultadoIMC("Segundo a tabela de IMC, você está em um peso normal, parabéns.");
            } else if (IMCFixed >= 25 && IMCFixed <= 29.9) {
            setResultadoIMC("Segundo a tabela de IMC, você está no nível de sobrepeso");
            } else if (IMCFixed >= 30 && IMCFixed <= 34.9) {
            setResultadoIMC("Segundo a tabela de IMC, você está no nível de obesidade grau 1");
            } else if (IMCFixed >= 35 && IMCFixed <= 40) {
            setResultadoIMC("Segundo a tabela de IMC, você está no nível de obesidade grau 2");
            } else if (IMCFixed > 40) {
            setResultadoIMC("Segundo a tabela de IMC, você está no nível de obesidade grau 3");
            };

            
    }

    return (
        <div className={styles.container}>
            <h1>Descubra o valor do seu IMC:</h1>

        <form className={styles.form}>
            <input type="number" placeholder="Seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />kgs
            <input type="number" placeholder="Sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/>m
        </form>
        <button onClick={RetornaIMC}>Calcular</button>

        {resultadoIMC && <p>{resultadoIMC}</p>}

        <div className={styles.linksaude}>
        <p>Sua saúde importa e muito! Descubra mais sobre IMC e recomendações médicas em:</p>
        <a href="https://www.tuasaude.com/imc/">Tua Saúde</a>
        </div>

        </div>
    )   
    
}

export default Form;