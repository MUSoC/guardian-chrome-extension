//This fucntion gets access to he displayed text on the webpage and searches for profane words from the array
// The array contains 253 most frequently used abusive words
// This function replaces these words with the word oops

var words = [/5hit/gi, /a_s_s/gi, /a55/gi, / anal/gi, / anus/gi, /ar5e/gi, /arrse/gi, / arse/gi, /arsehole/gi, / ass/gi, / asses/gi, /asshole/gi, /assholes/gi, /asswhole/gi, /b!tch/gi, /b00bs/gi, /b17ch/gi, /b1tch/gi, /bastard/gi, /bi+ch/gi, /biatch/gi, /bimbos/gi, /bitch/gi, /bitcher/gi, /bitchers/gi, /bitches/gi, /bitchin/gi, /bitching/gi, /blow job/gi,/blowjob/gi,/blowjobs/gi,/boner/gi,/boob/gi, /boobs/gi, /breasts/gi, /bugger/gi, /bum/gi, /busty/gi, /butt/gi, /c0ck/gi, /cock/gi, /cocks/gi, /cunt/gi, /cunts/gi, /d1ck/gi, /damn/gi, /dick/gi, /dickhead/gi, /dildo/gi, /dildos/gi, /dink/gi, /dlck/gi, /doosh/gi, /duche/gi, /dyke/gi, /ejaculate/gi, /ejaculated/gi, /ejaculates/gi, /ejaculating/gi, /ejaculation/gi, /ejakulate/gi, /erotic/gi, /f u c k/gi, /f u c k e r/gi, /f_u_c_k/gi, /fagging/gi, /faggitt/gi, /faggot/gi, /faggs/gi, /fagot/gi, /fagots/gi, /fatass/gi, /fcuk/gi, /fcuker/gi, /fcuking/gi, /feck/gi, /fecker/gi, /fook/gi, /fooker/gi, /fuck/gi, /fucka/gi, /fuck-ass/gi, /fuck-bitch/gi, /fucked/gi, /fucker/gi, /fuckers/gi, /fuckhead/gi, /fuckheads/gi, /fuckin/gi, /fucking/gi, /fuckings/gi, /fuckingshitmotherfucker/gi, /fuckme/gi, /fucks/gi, /fuk/gi, /fuker/gi, /fukker/gi, /fukkin/gi, /fuks/gi, /god damn/gi, /god-dam/gi, /goddamn/gi, /goddamned/gi, /god-damned/gi, /hell/gi, /hoar/gi, /hoare/gi, /hoer/gi, /homo/gi, /homoerotic/gi, /hore/gi, /horniest/gi, /horny/gi, /jackoff/gi, /jack-off/gi, /jerk/gi, /jerk-off/gi, /jizz/gi, /kawk/gi, /kock/gi, /lust/gi, /lusting/gi, /m0f0/gi, /m0fo/gi, /m45terbate/gi, /ma5terb8/gi, /ma5terbate/gi, /masterbat*/gi, /masterbate/gi, /master-bate/gi, /masterbation/gi, /masterbations/gi, /masturbate/gi, /mof0/gi, /mofo/gi, /mo-fo/gi, /mothafuck/gi, /mothafucka/gi, /mothafuckas/gi, /mothafuckaz/gi, /mothafucked/gi , /mothafucker/gi, /mothafuckers/gi, /mothafuckin/gi, /mothafucking/gi, /mothafuckings/gi, /mothafucks/gi, /mother fucker/gi, /mother fucker/gi, /motherfuck/gi, /motherfucked/gi, /motherfucker/gi, /motherfuckers/gi, /motherfuckin/gi, /motherfucking/gi, /motherfuckings/gi, /motherfuckka/gi, /motherfucks/gi, /mutherfucker/gi, /n1gga/gi, /n1gger/gi, /nigg3r/gi, /nigg4h/gi, /nigga/gi, /niggah/gi, /niggas/gi, /niggaz/gi, /nigger/gi, /niggers/gi, /orgasim/gi, /orgasims/gi, /orgasm/gi, /orgasms/gi, /p0rn/gi, /pawn/gi, /pecker/gi, /penis/gi, /phuck/gi, /phuk/gi, /phuked/gi, /phuking/gi, /phukked/gi, /phukking/gi, /phuks/gi, /phuq/gi,/pimp/gi, /pimpis/gi, /piss/gi, /pissed/gi, /pisses/gi, /pissin/gi, /pissing/gi, /pissoff/gi, /porn/gi, /porno/gi,/prostitute/gi, /pornography/gi, /pornos/gi, /prick/gi, /pricks/gi, /pube/gi, /pusse/gi, /pussi/gi, /pussies/gi, /pussy/gi, /pussys/gi, /queer/gi, /retard/gi, /rimming/gi, /s hit/gi, /s.o.b./gi, /s_h_i_t/gi, /scroat/gi, /scrote/gi, /scrotum/gi, /sex/gi, /sh!+/gi, /sh!t/gi, /sh1t/gi, /shag/gi, /shagger/gi, /shaggin/gi, /shagging/gi, /shit/gi, /shithead/gi, /shiting/gi, /shitings/gi, /shits/gi, /shitter/gi, /shitters/gi, /shitting/gi, /shitty/gi, /skank/gi, /slut/gi, /sluts/gi, /son-of-a-bitch/gi, /spunk/gi, /teets/gi, /teez/gi, /testical/gi, /turd/gi, /twat/gi, /twathead/gi, /twatty/gi, /v1gra/gi, /vagina/gi, /viagra/gi, /whoar/gi, /whore/gi, /wtf/gi];
for (var k = 0; k < words.length; k++) {
    var content = document.getElementsByTagName('*');
    for (var i = 0; i < content.length; i++) {
        var element = content[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var bodyText = node.nodeValue;

                var removedWord = bodyText.replace(words[k], 'OOPS');

                if (removedWord !== bodyText) {
                    element.replaceChild(document.createTextNode(removedWord), node);
                }
            }
        }
    }
}