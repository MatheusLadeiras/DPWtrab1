//Levar a página de volta ao topo
mybutton = document.getElementById("myBtn");
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
                            if (erros == 1) {
                                document.getElementById('1coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna1').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q1').innerHTML = "<span>Questão 1</span>"
                            }
                            erros = 5
                        break
                        case 2: let erro2 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna2').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q2').innerHTML = "<span>Questão 2</span>"
                            } 
                            erros = 5
                        break
                        case 3: let erro3 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna3').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q3').innerHTML = "<span>Questão 3</span>"
                            }
                            erros = 5
                        break
                        case 4: let erro4 = erros 
                            if (erros == 1) {
                                document.getElementById('1coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna4').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q4').innerHTML = "<span>Questão 4</span>"
                            }
                            erros = 5
                        break
                        case 5: let erro5 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna5').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q5').innerHTML = "<span>Questão 5</span>"
                            }
                            erros = 5
                        break
                        case 6: let erro6 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna6').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q6').innerHTML = "<span>Questão 6</span>"
                            }
                            erros = 5
                        break
                        case 7: let erro7 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna7').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q7').innerHTML = "<span>Questão 7</span>"
                            }
                            erros = 5
                        break
                        case 8: let erro8 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna8').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q8').innerHTML = "<span>Questão 8</span>"
                            }
                            erros = 5
                        break
                        case 9: let erro9 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna9').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q9').innerHTML = "<span>Questão 9</span>"
                            }
                            erros = 5
                        break
                        case 10: let erro10 = erros
                            if (erros == 1) {
                                document.getElementById('1coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 2) {
                                document.getElementById('2coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 3) {
                                document.getElementById('3coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 4) {
                                document.getElementById('4coluna10').innerHTML = "<img src=\"../imagens/redX.jpg\" alt=\"X\" height=\"30px\">"
                            } else if (erros == 0) {
                                document.getElementById('Q10').innerHTML = "<span>Questão 10</span>"
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
        //alert("Erros: " + erro1 + erro2 + erro3 + erro4 + erro5 + erro6 + erro7 + erro8 + erro9 + erro10 + writeRow);
}