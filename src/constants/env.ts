 const getEnv = (key:string, defaultValue?:string):string=>{
    const value = process.env[key] || defaultValue
    if(value === undefined){
        throw new Error(` the ${key} value in the .env file`)
    }
    return value
 }

 
 export const PORT = getEnv("PORT")
 export const NODE_ENV = getEnv("NODE_ENV")
 export const MONGO_URI = getEnv("MONGO_URI")
 