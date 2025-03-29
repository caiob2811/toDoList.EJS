// console.log(module.export = 'Jesus é rei') // próprio objeto
// module.exports = getDate; ou
exports.getDate = getDate; //exportando e recebe a função. getDate() é pra pegar a função, do jeito que está é passivo.

function getDate () {
    
    let today = new Date();
    
    let options = {
        weekday: 'short',
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
    };
    
    let day = today.toLocaleDateString('pt-br', options)

    return day
}
