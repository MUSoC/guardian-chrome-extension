var words = [/5hit/gi, /a_s_s/gi, /a55/gi, /\sanal\s/gi, /\sanus\s/gi, /ar5e/gi, /\sarrse\s/gi, /\sarse\s/gi, /arsehole/gi, /\sass\s/gi, /\sasses\s/gi, /asshole/gi, /assholes/gi, /asswhole/gi, /b!tch/gi, /b00bs/gi, /b17ch/gi, /b1tch/gi, /bastard/gi, /bi+ch/gi, /biatch/gi, /bimbos/gi, /bitch/gi, /bitcher/gi, /bitchers/gi, /bitches/gi, /bitchin/gi, /bitching/gi, /blow job/gi,/blowjob/gi,/blowjobs/gi,/boner/gi,/boob/gi, /boobs/gi, /breasts/gi, /bugger\s/gi, /bum\s/gi,/butt\s/gi ,/busty\s/gi, /c0ck/gi, /cock\s/gi, /cocks\s/gi, /cunt\s/gi, /cunts\s/gi, /d1ck/gi, /damn\s/gi, /dick\s/gi, /dickhead/gi, /dildo/gi, /dildos/gi, /dink/gi, /dlck/gi, /doosh/gi, /duche/gi, /dyke/gi, /ejaculate/gi, /ejaculated/gi, /ejaculates/gi, /ejaculating/gi, /ejaculation/gi, /ejakulate/gi, /erotic/gi, /f u c k/gi, /f u c k e r/gi, /f_u_c_k/gi, /fagging/gi, /faggitt/gi, /faggot/gi, /faggs/gi, /fagot/gi, /fagots/gi, /fatass/gi, /fcuk/gi, /fcuker/gi, /fcuking/gi, /feck/gi, /fecker/gi, /fook/gi, /fooker/gi, /fuck/gi, /fucka/gi, /fuck-ass/gi, /fuck-bitch/gi, /fucked/gi, /fucker/gi, /fuckers/gi, /fuckhead/gi, /fuckheads/gi, /fuckin/gi, /fucking/gi, /fuckings/gi, /fuckingshitmotherfucker/gi, /fuckme/gi, /fucks/gi, /fuk/gi, /fuker/gi, /fukker/gi, /fukkin/gi, /fuks/gi, /god damn/gi, /god-dam/gi, /goddamn/gi, /goddamned/gi, /god-damned/gi, /hoar/gi, /hoare/gi, /hoer/gi, /homo/gi, /homoerotic/gi, /hore/gi, /horniest/gi, /horny/gi, /jackoff/gi, /jack-off/gi, /jerk/gi, /jerk-off/gi, /jizz/gi, /kawk/gi, /kock/gi, /lust/gi, /lusting/gi, /m0f0/gi, /m0fo/gi, /m45terbate/gi, /ma5terb8/gi, /ma5terbate/gi, /masterbat*/gi, /masterbate/gi, /master-bate/gi, /masterbation/gi, /masterbations/gi, /masturbate/gi, /mof0/gi, /mofo/gi, /mo-fo/gi, /mothafuck/gi, /mothafucka/gi, /mothafuckas/gi, /mothafuckaz/gi, /mothafucked/gi , /mothafucker/gi, /mothafuckers/gi, /mothafuckin/gi, /mothafucking/gi, /mothafuckings/gi, /mothafucks/gi, /mother fucker/gi, /mother fucker/gi, /motherfuck/gi, /motherfucked/gi, /motherfucker/gi, /motherfuckers/gi, /motherfuckin/gi, /motherfucking/gi, /motherfuckings/gi, /motherfuckka/gi, /motherfucks/gi, /mutherfucker/gi, /n1gga/gi, /n1gger/gi, /nigg3r/gi, /nigg4h/gi, /nigga/gi, /niggah/gi, /niggas/gi, /niggaz/gi, /nigger/gi, /niggers/gi, /orgasim/gi, /orgasims/gi, /orgasm/gi, /orgasms/gi, /p0rn/gi, /pawn\s/gi, /pecker\s/gi, /penis/gi, /phuck/gi, /phuk/gi, /phuked/gi, /phuking\s/gi, /phukked\s/gi, /phukking\s/gi, /phuks\s/gi, /phuq/gi,/pimp/gi, /pimpis/gi, /piss\s/gi, /pissed/gi, /pisses/gi, /pissin/gi, /pissing/gi, /pissoff/gi, /porn/gi, /porno/gi,/prostitute/gi, /pornography/gi, /pornos/gi, /prick/gi, /pricks/gi, /pube/gi, /pusse/gi, /pussi/gi, /pussies/gi, /pussy/gi, /pussys/gi, /queer/gi, /retard/gi, /rimming/gi, /s hit/gi, /s.o.b./gi, /s_h_i_t/gi, /scroat/gi, /scrote/gi, /scrotum/gi, /sex/gi, /sh!+/gi, /sh!t/gi, /sh1t/gi, /shag\s/gi, /shagger/gi, /shaggin\s/gi, /shagging\s/gi, /shit\s/gi, /shithead/gi, /shiting/gi, /shitings/gi, /shits\s/gi, /shitter\s/gi, /shitters\s/gi, /shitting\s/gi, /shitty\s/gi, /skank/gi, /slut\s/gi, /sluts/gi, /son-of-a-bitch/gi, /spunk\s/gi, /teets\s/gi, /teez\s/gi, /testical\s/gi, /turd\s/gi, /twat\s/gi, /twathead/gi, /twatty/gi, /v1gra/gi, /vagina/gi, /viagra/gi, /whoar\s/gi, /whore\s/gi, /wtf/gi];
for (var k = 0; k < words.length; k++) {
    var content = document.getElementsByTagName('*');
    for (var i = 0; i < content.length; i++) {
        var element = content[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var bodyText = node.nodeValue;

                var removedWord = bodyText.replace(words[k], ' OOPS');

                if (removedWord !== bodyText) {
                    element.replaceChild(document.createTextNode(removedWord), node);
                }
            }
        }
    }
}

  window.onload =function() {
    var count = 0;
   var images = document.getElementsByTagName('img'); 
function disp(){
 for(var i = 0; i < 10 && i < images.length; i++) {
  app.models.predict("e9576d86d2004ed1a38ba0cf39ecb4b1",images[i].src).then(
 function(response) {
                            
                            var nsfw = response.outputs[0].data.concepts[0].value; 
               if(0.50>nsfw){
                      document.getElementsByTagName('img')[i].style.visibility = 'hidden';
                      console.log(nsfw); 
                        console.log("evaluated");     
               }
                   else {
                    console.log("no");
                   }
                 
               });
 }
}
var handler = setInterval(function(){
     if(count >= images.length){
      clearInterval(handler); 
      return;
    } 
    else {
      disp(); 
      count = count + 10;
       }
     }, 3000);}