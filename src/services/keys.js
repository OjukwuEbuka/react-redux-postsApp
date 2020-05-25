module.exports = {
    proxy: (()=>{if(process.env.NODE_ENV == 'production'){
            return ""
        } else {
            return "http://localhost:5000"
        }
    })()
}