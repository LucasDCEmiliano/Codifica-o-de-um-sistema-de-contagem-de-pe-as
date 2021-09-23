//Sistema Contagem de Peças

var readlineSync = require('readline-sync')
var peca1 = 0
var peca2 = 0
var opc 
var opcPeca = 0

console.log ("Inicio Sistema");
console.log ("Escolha opcao desejada!")

do{
 opc = parseInt(readlineSync.question("escolha a opcao: \n\n"+
                                    "0 - Encerra o programa\n"+
                                    "1 - Acrescenta uma peca\n"+
                                    "2 - Apresentar quantidade total de pecas\n\n"))

    switch(opc){
        case 0:
            console.log("\n Você escolheu encerrar o Sistema!\n")
            break
        case 1:
            opcPeca = parseInt(readlineSync.question("Qual peca deseja acrescentar 1 ou 2 \n"))
                if(opcPeca == 1){
                    peca1 = peca1 +1
                    break
                }else if (opcPeca == 2){
                        peca2 = peca2 + 1
                        break
                }else{
                        console.log("Opção invalida!")
                        break
                    }
        case 2:
            console.log ("Total de Peca 1 =" + peca1 + "\n")
            console.log ("Total de Peca 2 =" + peca2 + "\n")
            console.log ("Total geral de pecas = " + peca1+peca2 + "\n" )
            break
        default:     
            console.log ("Opção Invalida. Escolha entre 0 e 2. \n")
    }            
        

}while(opc !=0)

