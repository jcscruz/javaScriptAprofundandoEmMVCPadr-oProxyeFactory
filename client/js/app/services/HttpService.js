class HttpService{

    get(url){

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/retrasada')
            
            xhr.onreadystatechange = () =>{
                if(xhr.readyState == 4){
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))                    
                            
                    }else{
                        console.log("Erro ao obter negociações do servidor.")
                        reject('Erro na importação das negociações da retrasada')
                    }
                }        
            }
            xhr.send()
        })

    }
}