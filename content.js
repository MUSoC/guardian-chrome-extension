var words = [/5hit/gi, /a_s_s/gi, /a55/gi, /\sanal\s/gi, /\sanus\s/gi, /ar5e/gi, /\sarrse\s/gi, /\sarse\s/gi, /arsehole/gi, /\sass\s/gi, /\sasses\s/gi, /asshole/gi, /assholes/gi, /asswhole/gi, /b!tch/gi, /b00bs/gi, /b17ch/gi, /b1tch/gi, /bastard/gi, /bi+ch/gi, /biatch/gi, /bimbos/gi, /bitch/gi, /bitcher/gi, /bitchers/gi, /bitches/gi, /bitchin/gi, /bitching/gi, /blow job/gi,/blowjob/gi,/blowjobs/gi,/\sboner\s/gi,/\sboob\s/gi, /\sboobs\s/gi, /breasts/gi, /\sbugger\s/gi, /\sbum\s/gi,/\sbutt\s/gi ,/\sbusty\s/gi, /c0ck/gi, /\scock\s/gi, /\scocks\s/gi, /\scunt\s/gi, /\scunts\s/gi, /d1ck/gi, /\sdamn\s/gi, /\sdick\s/gi, /dickhead/gi, /\sdildo\s/gi, /\sdildos\s/gi, /dink/gi, /dlck/gi, /doosh/gi, /duche/gi, /dyke/gi, /ejaculate/gi, /ejaculated/gi, /ejaculates/gi, /ejaculating/gi, /ejaculation/gi, /ejakulate/gi, /erotic/gi, /f u c k/gi, /f u c k e r/gi, /f_u_c_k/gi, /fagging/gi, /faggitt/gi, /faggot/gi, /faggs/gi, /fagot/gi, /fagots/gi, /fatass/gi, /fcuk/gi, /fcuker/gi, /fcuking/gi, /feck/gi, /fecker/gi, /\sfook\s/gi, /fooker/gi, /fuck/gi, /fucka/gi, /fuck-ass/gi, /fuck-bitch/gi, /fucked/gi, /fucker/gi, /fuckers/gi, /fuckhead/gi, /fuckheads/gi, /fuckin/gi, /fucking/gi, /fuckings/gi, /fuckingshitmotherfucker/gi, /fuckme/gi, /\sfucks\s/gi, /\sfuk\s/gi, /\sfuker\s/gi, /fukker/gi, /fukkin/gi, /\sfuks\s/gi, /god damn/gi, /god-dam/gi, /goddamn/gi, /goddamned/gi, /god-damned/gi, /\shoar\s/gi, /\shoare\s/gi, /\shoer\s/gi, /\shomo\s/gi, /\shomoerotic\s/gi, /\shore\s/gi, /horniest/gi, /\shorny/gi, /jackoff/gi, /jack-off/gi, /\sjerk\s/gi, /jerk-off/gi, /\sjizz\s/gi, /\skawk\s/gi, /\skock\s/gi, /\slust\s/gi, /\slusting\s/gi, /m0f0/gi, /m0fo/gi, /m45terbate/gi, /ma5terb8/gi, /ma5terbate/gi, /\smasterbat\s/gi, /\smasterbate\s/gi, /master-bate/gi, /\smasterbations\s/gi, /\smasterbations\s/gi, /\smasturbate\s/gi, /mof0/gi, /\smofo\s/gi, /mo-fo/gi, /mothafuck/gi, /mothafucka/gi, /mothafuckas/gi, /mothafuckaz/gi, /mothafucked/gi , /mothafucker/gi, /mothafuckers/gi, /mothafuckin/gi, /mothafucking/gi, /mothafuckings/gi, /mothafucks/gi, /mother fucker/gi, /mother fucker/gi, /motherfuck/gi, /motherfucked/gi, /motherfucker/gi, /motherfuckers/gi, /motherfuckin/gi, /motherfucking/gi, /motherfuckings/gi, /motherfuckka/gi, /motherfucks/gi, /mutherfucker/gi, /n1gga/gi, /n1gger/gi, /nigg3r/gi, /nigg4h/gi, /\snigga\s/gi, /niggah/gi, /\sniggas\s/gi, /\sniggaz\s/gi, /\snigger\s/gi, /\sniggers\s/gi, /\sorgasim\s/gi, /\sorgasims\s/gi, /\sorgasm\s/gi, /\sorgasms\s/gi, /p0rn/gi, /\spawn\s/gi, /\specker\s/gi, /\spenis\s/gi, /\sphuck\s/gi, /\sphuk\s/gi, /\sphuked\s/gi, /\sphuking\s/gi, /\sphukked\s/gi, /\sphukking\s/gi, /\sphuks\s/gi, /\sphuq\s/gi,/\spimp\s/gi, /\spimpis\s/gi, /\spiss\s/gi, /\spissed\s/gi, /\spisses\s/gi, /pissin/gi, /pissing/gi, /pissoff/gi, /porn/gi, /porno/gi,/prostitute/gi, /pornography/gi, /\spornos\s/gi, /\sprick\s/gi, /\spricks\s/gi, /\spube\s/gi, /\spusse\s/gi, /\spussi\s/gi, /\spussie\s/gi, /\spussy\s/gi, /\spussys\s/gi, /\squeer\s/gi, /\sretard\s/gi, /\srimming\s/gi, /s hit/gi, /s.o.b./gi, /s_h_i_t/gi, /\sscroat\s/gi, /\sscrote\s/gi, /\sscrotum\s/gi, /\ssex/gi, /sh!+/gi, /sh!t/gi, /sh1t/gi, /\sshag\s/gi, /\sshagger\s/gi, /\sshaggin\s/gi, /\sshagging\s/gi, /\sshit\s/gi, /shithead/gi, /\sshiting\s/gi, /\sshitings\s/gi, /\sshits\s/gi, /\sshitter\s/gi, /\sshitters\s/gi, /\sshitting\s/gi, /\sshitty\s/gi, /\sskank\s/gi, /\sslut\s/gi, /\ssluts\s/gi, /son-of-a-bitch/gi, /spunk\s/gi, /\steets\s/gi, /\steez\s/gi, /\stestical\s/gi, /\sturd\s/gi, /\stwat\s/gi, /twathead/gi, /\stwatty\s/gi, /v1gra/gi, /\svagina\s/gi, /\sviagra\s/gi, /\swhoar\s/gi, /\swhore\s/gi, /\swtf\s/gi];
for (var k = 0; k < words.length; k++) {
    var content = document.getElementsByTagName('*');
    for (var i = 0; i < content.length; i++) {
        var element = content[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var bodyText = node.nodeValue;

                var removedWord = bodyText.replace(words[k], ' OOPS ');

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