const request = require('request-promise');

module.exports = async function(nonce){
    let body = await request.post({
        uri: 'https://www.overkillblog.com/wp-admin/admin-ajax.php',
        headers: {
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Origin': 'https://www.overkillblog.com',
            'Accept-Language': 'en-US,en;q=0.9',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: `action=apbct_js_keys__get&_ajax_nonce=${nonce}`
    })
    .catch(err => {
        return console.log('Error getting JS token');
    })

    return JSON.parse(body).js_key;
};
