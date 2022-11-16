export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.walletAdd || !body.twitterHandle) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Address or handle not entered' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.walletAdd} ${body.twitterHandle}` })
  }