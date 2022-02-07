const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const { file } = require('googleapis/build/src/apis/file');
const http = require('http');


const CLIENT_ID = '290660825662-d58lshg9jbeo417p81kba3of7vdjmbf5.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04qaEMnxEwUFqCgYIARAAGAQSNwF-L9Ir17b02JePPjZ6_AHnbl-bZOimHMNPufxO8wYa9eGDxKfOVST9JIxcik00cSORkfSGsrM';


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

const filePath = path.join(__dirname, 'adhyan.jpg');

async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'adhyanchawlapic.jpg',
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'image/jpg',
                body: createReadStream(filePath)
            }
        });

        console.log(response.data);
    } catch(error) {
        console.log(error.message);
    }
}

async function generatePublicUrl() {
    try {
        const fileId = '1OAIpApxvzBUMXstkQw7RHME11vna0srK';
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });

        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
        console.log(result.data);
    } catch(error) {
        console.log(error.message);
    }
}

generatePublicUrl();


// const fileContent = fs.readFile('index.html', callback);


// function callback(err, html) {
//     if(!err) {
//         const server = http.createServer((req, res) => {
//             res.writeHead(200, {'Content-type': 'text/html'});
//             res.end(fileContent);
//         });
        
//         server.listen(80, '127.0.0.1', ()=>{
//             console.log('listening on port 80');
//         })
//     }
// }


