//implementação de função para logs

function logger(type){
    if(type==='tiny'){
        return (req,res,next)=>{
            console.log("Emulação de um log curto.");
        }
    }
    if(type==='detailed'){
        return (req,res,next)=>{
            console.log("Emulação de um log long.");
        }
    }

}

export default logger;