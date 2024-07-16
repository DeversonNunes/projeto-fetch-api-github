
import { baseUrl} from "../variables.js"

 async function getUser(userName) {
     const response = await fetch (`${baseUrl}/${userName}`)
     console.log(response)
    return  await response.json()
 }

export { getUser }