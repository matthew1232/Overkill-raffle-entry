const request = require('request-promise');
const random_name = require('node-random-name');

module.exports = async function(size, productDetails, JStoken){
    const profile = require('../../profile.json');
    let name = random_name().replace(/\s+/g, '');
    let r = getRandomInt(999);

    let catchall = name + r + '@' + profile.catchall;

    let dataString = `$------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="_wpcf7"\r\n\r\n${productDetails.productID}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="_wpcf7_version"\r\n\r\n${productDetails.formVersion}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="_wpcf7_locale"\r\n\r\nde_DE_formal\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="_wpcf7_unit_tag"\r\n\r\nwpcf7-f41686-p41683-o1\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="_wpcf7_container_post"\r\n\r\n${productDetails.productID}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="text-name"\r\n\r\n${profile.name}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="email-raffle"\r\n\r\n${catchall}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="menu-231"\r\n\r\n${size}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="tel-raffle"\r\n\r\n${profile.number}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="text-insta"\r\n\r\n${profile.insta}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="text-adress"\r\n\r\n${profile.address}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="text-city"\r\n\r\n${profile.city}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="text-zip"\r\n\r\n${profile.zip}\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="DSVGO"\r\n\r\nIch habe die <a href=https://www.overkillshop.com/de/kleingedrucktes/datenschutz;>Datenschutzerklärung</a> zur Kenntnis genommen und akzeptiert. Ich stimme zu, dass meine Formularangaben zur Kontaktaufnahme bzw. zur Bearbeitung meines Anliegens gespeichert werden.\r\n------WebKitFormBoundarygVerAOScLhulHIQn\r\nContent-Disposition: form-data; name="ct_checkjs_cf7"\r\n\r\n${JStoken}\r\n------WebKitFormBoundarygVerAOScLhulHIQn--\r\n`
    let body = await request.post({
        uri: `https://www.overkillblog.com/wp-json/contact-form-7/v1/contact-forms/${productDetails.productID}/feedback`,
        headers: {
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Origin': 'https://www.overkillblog.com',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarygVerAOScLhulHIQn',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'Connection': 'keep-alive'
        },
        body: dataString//`$------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="_wpcf7"\r\n\r\n${productDetails.productID}\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="_wpcf7_version"\r\n\r\n${productDetails.formVersion}\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="_wpcf7_locale"\r\n\r\nde_DE_formal\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="_wpcf7_unit_tag"\r\n\r\nwpcf7-f41686-p41683-o1\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="_wpcf7_container_post"\r\n\r\n41683\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="text-name"\r\n\r\nmatthew mulfinger\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="email-raffle"\r\n\r\nmatthew.mulfingers@gmail.com\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="menu-231"\r\n\r\nUS5.5 / EU38\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="tel-raffle"\r\n\r\n4086130974\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="text-insta"\r\n\r\nCook\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="text-adress"\r\n\r\nbbb 4025 casa grande way\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="text-city"\r\n\r\nSAN JOSE\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="text-zip"\r\n\r\n95118\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="DSVGO"\r\n\r\nIch habe die <a href=https://www.overkillshop.com/de/kleingedrucktes/datenschutz;>Datenschutzerklärung</a> zur Kenntnis genommen und akzeptiert. Ich stimme zu, dass meine Formularangaben zur Kontaktaufnahme bzw. zur Bearbeitung meines Anliegens gespeichert werden.\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90\r\nContent-Disposition: form-data; name="ct_checkjs_cf7"\r\n\r\n${JStoken}\r\n------WebKitFormBoundaryTIaXW0N4UnUO1J90--\r\n`    
    })
    .catch(err => {
        return console.log('Error entering. Status code: ' + err.statusCode);
    });

    global.counter++;
    if (JSON.parse(body).status == "mail_sent") {
        return console.log(`Successfully entered ${catchall}!!! (${global.counter}/${global.amountOfRaffles})`.green);
    }
    else return console.log(`Error entering raffle (${global.counter}/${global.amountOfRaffles})`);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
