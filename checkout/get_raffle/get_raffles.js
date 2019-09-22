const cheerio = require('cheerio');
const request = require('request-promise');

module.exports = async function(){
    let raffleArray = [];
    let raffle_count = 0;

    let body = await request({
        uri: 'https://www.overkillblog.com/category/stories/blocker/neu/sneaker/',
        headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
        }
    })
    .catch(err => {
        return console.log('Error scraping raffle pages. Status code: ' + err.statusCode);
    });

    let $ = cheerio.load(body);

    $('.entry-title').each(function(i, element){
        if (!$(this).text().includes('ONLINE RAFFLE') || $(this).text().includes('DONE')) return;

        raffleArray.push({
            name: $(this).text(),
            url: $(this).find('a').attr('href'),
            index: raffle_count
        });
        raffle_count++;
    });

    return raffleArray;
};
