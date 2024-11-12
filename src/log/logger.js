const consoleLog = (...args) => {
    let i = 0;
    let message = ''; 
    
    for(i = 0; i < args.length; i++) { 
        message = message + args[i] + ' , '; 
    }

    console.log(message) 
};

export default {
    consoleLog
}