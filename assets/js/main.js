/* Calculadora */
const display = document.querySelector('#textoDisplay');
const displaySecundario = document.querySelector('#textoDisplay2');
let incrementador = 0;

function escrever (numero) {    
    incrementador++;
    escreverDisplay(numero, incrementador);
}

function tecladoOperador (operador) {
    if (operador === 'somar'){
        incrementador = 0;        
        displaySecundario.innerHTML += `${display.value}+`
        display.value = '';
    }
    else if (operador === 'subtrair'){
        incrementador = 0;
        displaySecundario.innerHTML += `${display.value}-`
        display.value = '';
    }

    else if (operador === 'multiplicar'){
        incrementador = 0;
        displaySecundario.innerHTML += `${display.value}*`
        display.value = '';
    }
    else if (operador === 'dividir'){
        incrementador = 0;
        displaySecundario.innerHTML += `${display.value}/`
        display.value = '';
    }
}

function calcular () {
    incrementador = 0;
    expr = displaySecundario.innerHTML + display.value
    let calculo = eval(`${expr}`);
        displaySecundario.innerHTML = ''
        display.value = calculo;
}

function escreverDisplay (texto, incrementador) {    
    incrementador > 9 ? '' : display.value += texto; // Se Incrementador for maior que 9, não escreve nada.
}

function apagarNumeros() {
    incrementador = 0;
    display.value = '';
    displaySecundario.innerHTML = '';
}

/* Temas */

const root = document.querySelector(':root');
const divMenu = document.querySelector('.menu');



const themes = {
    principal(){
        root.style.setProperty('--cl-fundo', '#7EB8DF');
        root.style.setProperty('--cl-container', '#CDE3F3AF');
        root.style.setProperty('--cl-menu', '#CADDE7B4');

        root.style.setProperty('--cl-text-display-principal', '#0E4B72');
        root.style.setProperty('--cl-text-display-secundario', '#8B98A7');
        root.style.setProperty('--cl-icon', '#09324D');
        
        root.style.setProperty('--cl-btn-principal', '#49A2F2');
        root.style.setProperty('--cl-btn-secundario', '#0F4C73');
        root.style.setProperty('--cl-btn-operador',   '#F1A634');        
        root.style.setProperty('--cl-btn-calcular',   '#28CF55');
        root.style.setProperty('--cl-btn-apagar',     '#F2686B');

        root.style.setProperty('--cl-text-btn-principal', '#FFF');
        root.style.setProperty('--cl-text-btn-secundario', '#FFF');
        root.style.setProperty('--cl-text-btn-operador',   '#FFF');        
        root.style.setProperty('--cl-text-btn-calcular',   '#FFF');
        root.style.setProperty('--cl-text-btn-apagar',     '#FFF');

        
        root.style.setProperty('--display-principal',   '#0E4B72');
        root.style.setProperty('--display-secundario',  '#8B98A7');

        divMenu.innerHTML = `<a type="button" href="#" class="menu-btn fa-fw fa-solid fa-moon" onclick="themes.dark();"></a>
        <a href="https://github.com/iMaxSilva" type="button" class="menu-btn fa-fw fa-brands fa-github"></a>
        <a href="https://www.linkedin.com/in/imaxsilva/" type="button" class="menu-btn fa-fw fa-brands fa-linkedin"></a>`;
        
    },
    dark(){
        root.style.setProperty('--cl-fundo', '#0F171C');
        root.style.setProperty('--cl-container', '#0C1317');
        root.style.setProperty('--cl-menu', '#0C1317');

        root.style.setProperty('--cl-text-display-principal', '#1883C8');
        root.style.setProperty('--cl-text-display-secundario', '#8B98A7');
        root.style.setProperty('--cl-icon', '#0E4B72');

        root.style.setProperty('--cl-btn-principal', '#091520');
        root.style.setProperty('--cl-btn-secundario', '#0F4C73');
        root.style.setProperty('--cl-btn-operador',   '#20190A');        
        root.style.setProperty('--cl-btn-calcular',   '#0F200A');
        root.style.setProperty('--cl-btn-apagar',     '#200A0A');

        root.style.setProperty('--cl-text-btn-principal', '#188CF4');
        root.style.setProperty('--cl-text-btn-secundario', '#FFF');
        root.style.setProperty('--cl-text-btn-operador',   '#F1A634');        
        root.style.setProperty('--cl-text-btn-calcular',   '#28CF55');
        root.style.setProperty('--cl-text-btn-apagar',     '#EE3C40');
        
        root.style.setProperty('--display-principal',   '#eae3dc');
        root.style.setProperty('--display-secundario',  '#dfd9d2');
        divMenu.innerHTML = `<a type="button" href="#" class="menu-btn fa-fw fa-solid fa-sun" onclick="themes.principal();"></a>
        <a href="https://github.com/iMaxSilva" type="button" class="menu-btn fa-fw fa-brands fa-github"></a>
        <a href="https://www.linkedin.com/in/imaxsilva/" type="button" class="menu-btn fa-fw fa-brands fa-linkedin"></a>`;
        
    }
}

const temaEscuro  = window.matchMedia("(prefers-color-scheme: dark)");
const temaClaro = window.matchMedia("(prefers-color-scheme: light)");


temaEscuro.matches ? themes.dark() : themes.principal()
