import { NextApiRequest, NextApiResponse } from "next";
import {google} from 'googleapis';

// const sheets = google.sheets('v4');

type SheetForm = {
    walletAdd: string
    twitterHandle: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if (req.method !== 'POST'){
        return res.status(405).send({message: 'Only POST requests are allowed'})
    }

    const body = req.body as SheetForm

    try{

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        console.log('authenticated')

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:B1',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values: [[body.walletAdd, body.twitterHandle]]
            },
            auth: auth
        });

        return res.status(200).json({
            data: response.data
        })

    }catch(e){
        return res.status(500).send({message: 'Please check fields and resubmit.'})
    }
}

// async function main () {
//     const authClient = await authorize();
//     const request = {
//       // The ID of the spreadsheet to update.
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,  // TODO: Update placeholder value.
  
//       // The A1 notation of a range to search for a logical table of data.
//       // Values are appended after the last row of the table.
//       range: 'A1:B1',  // TODO: Update placeholder value.
  
//       // How the input data should be interpreted.
//       valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.
  
//       // How the input data should be inserted.
//       insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
  
//       resource: {
//         values: [[walletAdd, twitterHandle]]
//         // TODO: Add desired properties to the request body.
//       },
  
//       auth: authClient,
//     };
  
//     try {
//       const response = (await sheets.spreadsheets.values.append(request)).data;
//       // TODO: Change code below to process the `response` object:
//       console.log(JSON.stringify(response, null, 2));
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   main();
  
//   async function authorize() {
//     // TODO: Change placeholder below to generate authentication credentials. See
//     // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
//     //
//     // Authorize using one of the following scopes:
//     //   'https://www.googleapis.com/auth/drive'
//     //   'https://www.googleapis.com/auth/drive.file'
//     //   'https://www.googleapis.com/auth/spreadsheets'
//     let authClient = null;
  
//     if (authClient == null) {
//       throw Error('authentication failed');
//     }
  
//     return authClient;
//   }