import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Button from 'react-bootstrap/Button';
import logo from './spenz.png'


const config = require('./config')
const fetch = require('node-fetch')


const API_KEY = config.API_KEY
const sl = 'pt' //source linguage
const tl = 'en' //translate linguage
const tl2 = 'es' //translate linguage

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 ;
    font-family: "Segoe UI",Arial,sans-serif;
    background: #74ebd5;
    background: linear-gradient(to right, #ACB6E5, #74ebd5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }

  .div-translate {
    display:flex;
  }

  .input-translate{
    border-radius: 8px;
    margin-left: 30px;
    heigth: 200px;
  }

  .btn-secondary {
    margin-left: 40px;
  }
  
  .form-control{
    margin-left: 30px;
  }

  #inputPassword {
    margin-left: 30px;
    
  }

  .img-logo{
    width:150px;
    height:70px;
    margin-left: 45%;
    margin-bottom: 100px;
  }
`;


const TranslatedBox = styled.div`
	width: 600px;
	min-height: 300px;
	height: auto;
	border-radius: 8px;
	padding: 35px;
	background: #fff;
  filter: drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.3));
  margin-left:30px;
  margin-top: 30px;
`;


function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
      
      <img class="img-logo" src={logo}/>
          <div class="div-translate">
            <input type="text" class="form-control col-sm-6 my-3" id="inputPassword" placeholder="Texto em português para traduzir" id="text"/>
            <Button variant="secondary btn-sm col-sm-3 my-3" onClick={translate}>Translate</Button>
          </div>
          <div class="div-translate">

          <TranslatedBox>
            <h2>English:</h2><br/>
          <label id="en-translation"></label>
          </TranslatedBox>
          <TranslatedBox>
          <h2>Espanish:</h2><br/>
          <label id="es-translation"></label>
          </TranslatedBox>
          </div>
      </React.Fragment>
  );

  function translate(){
    const API_KEY = 'trnsl.1.1.20190724T223624Z.669fa18d8bc4ae8a.5c934ea5c18c7f2b9e67ad43af2d9ab09fe470ab'
    const sl = 'pt' //source linguage
    const tl = 'en' //translate linguage
    const tl2 = 'es' //translate linguage
    var text = document.getElementById('text').value
    console.log(text)
    var url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${text}&lang=${sl}-${tl}`
    var url2 = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${text}&lang=${sl}-${tl2}`
  
  fetch(url)
      .then(res => res.json())
      .then(json => 
        document.getElementById('en-translation').innerHTML = json.text)
  
      fetch(url2)
      .then(res => res.json())
      .then(json => 
        document.getElementById('es-translation').innerHTML = json.text)
  }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
