export default defineEventHandler(async (event) => {

// handle query params
// const { name } = getQuery(event)


// // handle post data
// const { age } = await readBody(event)

// api call with private key
const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_wIgsZooE2yq5PfcUEQvxkSQBLZDzmG8KrkvRU6AJ&currencies=EUR%2CUSD%2CCAD&base_currency=AUD')





  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

return data

})
