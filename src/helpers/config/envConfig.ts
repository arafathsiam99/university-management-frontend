export const getBaseUrl = ():string =>{
    return process.env.NEXT_PUBLIC_API || "http://localhost:3030/api/v1"
}