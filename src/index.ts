import {initServer} from './app'

async function init(){
    const app = await initServer()
    app.listen(8000,()=>{
        console.log('server is running on http://localhost:8000')
    })
}

init()