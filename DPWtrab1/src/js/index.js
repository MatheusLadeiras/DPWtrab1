//Levar a página de volta ao topo
mybutton = document.getElementById("myBtn");
function topFunction() {
    document.documentElement.scrollTop = 0; 
}

//Calcular acertos e erros no quiz
function EntregarRespostas() {         
        var acertos = 0;          
        for(var i = 1; i <= 45; i++) {
                var radios = document.getElementsByName('questao'+i);
                for(var j = 0; j < radios.length; j++) {
                    var radio = radios[j];
                        if(radio.value == "correto" && radio.checked) {
                            acertos++;
                        }

                    /* var erro1, erro2, erro3, erro4, erro5, erro6, erro7, erro8, erro9, erro10; */
                
                    if (radio.value == "errado1" && radio.checked) {
                        var erros = 1
                    } else if (radio.value == "errado2" && radio.checked) {
                        var erros = 2
                    } else if (radio.value == "errado3" && radio.checked) {
                        var erros = 3
                    } else if (radio.value == "errado4" && radio.checked) {
                        var erros = 4
                    } else if (radio.value == "correto" && radio.checked) {
                        var erros = 0
                    }
                    switch(i) { 
                        case 1: let erro1 = erros 
                            /* O problema está sendo o (erros+"coluna1")
                            var colunaCompleta = (erros+'coluna1')
                            document.getElementById(colunaCompleta).innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"; */
                            switch(erros) {
                                case 0: document.getElementById('Q1').innerHTML = "<span>Questão 1</span>"
                                break
                                case 1: document.getElementById('1coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 2: let erro2 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q2').innerHTML = "<span>Questão 2</span>"
                                break
                                case 1: document.getElementById('1coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 3: let erro3 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q3').innerHTML = "<span>Questão 3</span>"
                                break
                                case 1: document.getElementById('1coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 4: let erro4 = erros 
                            switch(erros) {
                                case 0: document.getElementById('Q4').innerHTML = "<span>Questão 4</span>"
                                break
                                case 1: document.getElementById('1coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 5: let erro5 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q5').innerHTML = "<span>Questão 5</span>"
                                break
                                case 1: document.getElementById('1coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 6: let erro6 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q6').innerHTML = "<span>Questão 6</span>"
                                break
                                case 1: document.getElementById('1coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 7: let erro7 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q7').innerHTML = "<span>Questão 7</span>"
                                break
                                case 1: document.getElementById('1coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 8: let erro8 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q8').innerHTML = "<span>Questão 8</span>"
                                break
                                case 1: document.getElementById('1coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 9: let erro9 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q9').innerHTML = "<span>Questão 9</span>"
                                break
                                case 1: document.getElementById('1coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                        case 10: let erro10 = erros
                            switch(erros) {
                                case 0: document.getElementById('Q10').innerHTML = "<span>Questão 10</span>"
                                break
                                case 1: document.getElementById('1coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 2: document.getElementById('2coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 3: document.getElementById('3coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                                case 4: document.getElementById('4coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                                break
                            }
                            erros = 5
                        break
                    }
                } 
        }
        document.getElementById('resultado').innerHTML = acertos;
        document.getElementById('resultado').innerHTML = `Você acertou um total de ${acertos} questões, veja as respostas certas na tabela abaixo:`;
        let button = document.querySelector("button");
        button.disabled = true;
        let tabela = document.getElementById("tabelaResultado");
        tabela.hidden = false;
        //alert("Erros: " + erro1 + erro2 + erro3 + erro4 + erro5 + erro6 + erro7 + erro8 + erro9 + erro10 + writeRow);
}

// Arrumar as janelas da galeria
function popupWindow(win, w, h, title, content) {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    var myWindow = window.open("", "MsgWindow", `width=${w}, height=${h}, top=${y}, left=${x}`);
    myWindow.document.write('<html><head><title>Minha memória!</title><link rel="stylesheet" href="../css/index.css"></head><body>');
    myWindow.document.write(title);
    myWindow.document.write(content);
} 

// Colocar o header nas páginas
function adicionarMenu() {
    var menu = document.createElement('div') // `` te faz poder colocar o texto em multiplas linhas, colocar "" em cada linha desejada também é viável
    //Testando no resultado do quiz e no negócio do menu, é evidente que o problema é do código dentro do div.innerHTML
    div.innerHTML =  ` 
    <div class="cabecalho">
    <a class="logo" href="./index.html">
        <img src="../imagens/logoOrlando.jpg" alt="logo de orlando" height="50" >
        <img src="../imagens/textoOrlando.png" alt="palavra Orlando" height="50" >
        <img src="../imagens/textoTour.png" alt="palavra Tour" height="50">
    </a>
    <nav class="menu">
        <ul>
            <li>
                <a  style="display:none" href="./index.html">Início</a>
            </li>
            <li>
                <a href="../html/historia.html">História</a>
            </li>
            <li>
                <a href="../html/curiosidades.html">Curiosidades</a>
            </li>
            <li>
                <a href="../html/quiz.html">Quiz</a>
            </li>
            <li>
                <a href="../html/galeria.html">Galeria</a>
            </li>
            <li id="lastLi" >
                <a id="contatos" href="../html/contatos.html">Entre em contato conosco!</a>
            </li>
        </ul>
    </div> 
    `;
    document.getElementsByClassName("menu").appendChild(div);
}


 '<div class="cabecalho">'
   + '<a class="logo" href="./index.html">'
       + '<img src="../imagens/logoOrlando.jpg" alt="logo de orlando" height="50" >'
       + '<img src="../imagens/textoOrlando.png" alt="palavra Orlando" height="50" >'
       + '<img src="../imagens/textoTour.png" alt="palavra Tour" height="50">'
    + '</a>'
    + '<nav class="menu">'
        '<ul>'
            '<li>'
                '<a  style="display:none" href="./index.html">Início</a>'
            '</li>'
            '<li>'
                '<a href="../html/historia.html">História</a>'
            '</li>'
            '<li>'
                '<a href="../html/curiosidades.html">Curiosidades</a>'
            '</li>'
            '<li>'
                '<a href="../html/quiz.html">Quiz</a>'
            '</li>'
            '<li>'
                '<a href="../html/galeria.html">Galeria</a>'
            '</li>'
            '<li id="lastLi" >'
                '<a id="contatos" href="../html/contatos.html">Entre em contato conosco!</a>'
            '</li>'
        '</ul>'
    '</div>';