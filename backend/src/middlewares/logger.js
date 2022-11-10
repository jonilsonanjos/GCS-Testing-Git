//implementação de função para logs

function logger(type){
    if(type==='tiny'){
        return (req,res,next)=>{
            console.log("Emulação de um log curto.");
            next();
        }
    }
    if(type==='detailed'){
        return (req,res,next)=>{
            console.log("Emulação de um log long.");
            next();
        }
    }

}

export default logger;