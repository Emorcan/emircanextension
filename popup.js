document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "Damlaya damlaya göl olur.",
        "Taş yerinde ağırdır.",
        "Zararın neresinden dönülse kârdır.",
        "Bir elin nesi var, iki elin sesi var.",
        "Acele ile menzil alınmaz.",
        "Acılı başta akıl olmaz.",
        "Acırsan Taraklı’nın öküzüne acı.",
        "Ak akçe kara gün içindir.",
        "Akrabanın akrabaya ettiğini akrep etmez.",
        "Alan el olma veren el ol.",
        "Ali evlendi Güllü gelin oldu.",
        "Ali evlendi Güllü gelin oldu.",
        "Ali evlendi Güllü gelin oldu.",
        "Aşadan yer yakdı, yukadan gün yakdı.",
        "Ayağını yorganına göre uzat.",
        "Az veren candan, çok veren maldan.",
        "Beyler buyruğu yoksula kan ağlatır.",
        "Bin bilsen de bir bilene danış.",
        "Bin dost az, bir düşman çoktur.",
        "Bir elin nesi var iki elin sesi var.",
        "Can çıkar huy çıkmaz.",
        "Çok yaşayan değil, çok gezen bilir.",
        "Damlaya damlaya göl olur.",
        "Davulun sesi uzaktan goygun gelir.",
        "Dert, saklayanda kalır.",
        "Dövendeki öküze burunduruk takılmaz.",
        "Düğün arpasıyla at beslenmez.",
        "Düğün evinde kız, yaylada öküz beğenilmez.",
        "Dünya ahret gardaşım osun.",
        "Ekmek mayadan kız anadan olur.",
        "Ekmek olmadan, yemek olmaz.",
        "El elden üstündür.",
        "Elden gelen üğün omamış, o da vaktinde bulunmamış.",
        "Gece gözüyle bez, genç gözüyle kız alma.",
        "Güzün ekilen darıdan, kocasından geç kalkan hanımdan hayır gelmez.",
        "Mudurnu’nun kızı, Göynük’ün boğazı, Taraklı’nın namazı, Geyve’nin bey namazı meşhurdur.",
        "Mutluluk evine giden yol, ızdırap bahçesinden geçer.",
        "Zenginin keyfi gelene kadar fakirin canı çıkarmış."

        // Daha fazla atasözü ekleyebilirsiniz.
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});