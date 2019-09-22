const request = require('request-promise');
const cheerio = require('cheerio');

module.exports = async function(productlink){
    let sizeArray = [];
    let body = await request({
        uri: productlink,
        headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
        }
    })
    .catch(err => {
        return console.log('Error scraping product. Status code: ' + err.statusCode);
    });

    let $ = cheerio.load(body);
    let productID = $('input[name="_wpcf7"]').val();
    let formVersion = $('input[name="_wpcf7_version"]').val();
    let checkJSToken = $('input[name="ct_checkjs_cf7"]').attr('id');
    let tokenNonce = body.split('"_ajax_nonce":"')[1].split('"')[0];

    $('select').children('option').each(function(i, element){
        if (i == 0) return;
        sizeArray.push({
            index: i,
            value: $(this).val(),
        });
    });

    return {
        sizes: sizeArray,
        productID: productID,
        formVersion: formVersion,
        nonce: tokenNonce
    };
};
