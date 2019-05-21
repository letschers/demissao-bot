console.log('Its working');

var Twit = require('twit');
var keys = require('./keys');

var T = new Twit(keys);


setInterval (tweet(), 1000*30);
//setInterval(tweet(), 1000*60*60*24);
// 1000*60*60*24 = 1 day

function tweet() {
    var date = new Date();

    var number = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var finalDate = new Date('07/15/2019');
    var todayDate = new Date(month + 1 + '/' + number + '/' + year);
    
    const diffTime = Math.abs(finalDate.getTime() - todayDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    var rand = Math.floor(Math.random()*100);
    var tweetText = {
        //status: "Faltam " + diffDays + " para o Nathan sair do emprego"
        status: "Teste " + rand
    }

    function tweeted(err, data, response) {
        if (err) {
            console.log('error');
        } else {
            console.log('It worked');
        }
    }

    T.post('statuses/update', tweetText, tweeted);
}
