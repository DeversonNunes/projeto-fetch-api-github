import { baseUrl,eventsQuantity } from "/src/scripts/variables.js"

//  async function userEvents(userName) {
//      const response = await fetch (`${baseUrl}/${userName}/events?per-page=${eventsQuantity}`)
//     return  await response.json()
//  }

// export { userEvents }
async function userEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json();
};

export { userEvents }