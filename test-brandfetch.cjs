const https = require('https');

function checkBrandfetch(domain) {
    const url = `https://asset.brandfetch.io/${domain}/icon`;
    https.get(url, (res) => {
        console.log(`${domain}: ${res.statusCode} - ${res.headers['content-type']}`);
    }).on('error', (e) => {
        console.error(e);
    });
}

checkBrandfetch('capcut.com');
checkBrandfetch('alightmotion.com');
checkBrandfetch('adobe.com');
