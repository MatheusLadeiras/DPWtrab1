var div = document.createElement('div');
div.innerHTML = `
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
document.getElementById('menu').appendChild(div);