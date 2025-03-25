document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const divisionSelect = document.getElementById('divisionSelect');
    const royalGuardSelect = document.getElementById('royalGuardSelect');
    const vizardRankSelect = document.getElementById('vizardRankSelect');
    const clanNameSelect = document.getElementById('clanNameSelect');
    const generationInput = document.getElementById('generationInput');
    const kenpachiCheckbox = document.getElementById('kenpachi');
    const vizCaptainCheckbox = document.getElementById('vizCaptain');
    const vizLieutenantCheckbox = document.getElementById('vizLieutenant');
    const royalFamilyCaptainCheckbox = document.getElementById('royalFamilyCaptain');
    const preview = document.getElementById('preview');
    const divisionContainer = document.getElementById('divisionContainer');
    const royalGuardContainer = document.getElementById('royalGuardContainer');
    const vizardRankContainer = document.getElementById('vizardRankContainer');
    const royalFamilyContainer = document.getElementById('royalFamilyContainer');
    const kenpachiContainer = document.getElementById('kenpachiContainer');
    const vizCaptainContainer = document.getElementById('vizCaptainContainer');
    const vizLieutenantContainer = document.getElementById('vizLieutenantContainer');
    const nameInput = document.getElementById('nameInput');
    const htmlCodeContainer = document.getElementById('htmlCode');

    const fontMap = {
        "Roboto": "Roboto",
        "RobotoCondensed": "Roboto Condensed",
        "RobotoMono": "Roboto Mono",
        "Oswald": "Oswald",
        "Merriweather": "Merriweather",
        "Ubuntu": "Ubuntu",
        "Nunito": "Nunito",
        "IndieFlower": "Indie Flower",
        "Bangers": "Bangers",
        "AmaticSC": "Amatic SC",
        "PermanentMarker": "Permanent Marker",
        "PatrickHand": "Patrick Hand",
        "Jura": "Jura",
        "JosefinSans": "Josefin Sans",
        "GrenzeGotisch": "Grenze Gotisch",
        "FredokaOne": "Fredoka One",
        "Fondamento": "Fondamento",
        "DejaVuMono": "DejaVu Sans Mono",
        "Creepster": "Creepster",
        "Kalam": "Kalam",
        "LuckiestGuy": "Luckiest Guy",
        "TitilliumWeb": "Titillium Web",
        "SpecialElite": "Special Elite",
        "Sarpanch": "Sarpanch",
        "SourceSansPro": "Source Sans Pro",
        "EBGaramond": "EB Garamond",
        "BodoniModa": "Bodoni Moda",
        "Cinzel": "Cinzel",
        "CinzelDecorative": "Cinzel Decorative"
    };

    const rankColors = {
        royalFamily: "#a9fefe",
        royalGuard: "#640000",
        captainKenpachi: "#ff6a13",
        captain: "#62bdfe",
        lieutenant: "#3a76a1",
        vizard: "#fe5858",
        vizardCaptain: "#524cb1"
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let googleFont = fontMap[selectedFont] || selectedFont;
        let selectedRank = rankSelect.value;
        let selectedDivision = divisionSelect.value;
        let selectedRoyalGuard = royalGuardSelect.options[royalGuardSelect.selectedIndex].text;
        let selectedVizardRank = vizardRankSelect.options[vizardRankSelect.selectedIndex].text;
        let selectedClan = clanNameSelect.options[clanNameSelect.selectedIndex].text;
        let generation = generationInput.value;
        let kenpachiStatus = kenpachiCheckbox.checked;
        let vizCaptainStatus = vizCaptainCheckbox.checked;
        let vizLieutenantStatus = vizLieutenantCheckbox.checked;
        let royalFamilyCaptainStatus = royalFamilyCaptainCheckbox.checked;
        let userName = nameInput.value.trim();

        let previewText = '';
        let htmlCodeText = '';
        let textColor = "#ffffff"; 

        if (userName) {
            previewText += `${userName} | `;
        }

        if (selectedRank === 'royalFamily') {
            textColor = rankColors.royalFamily;
            if (royalFamilyCaptainStatus) {
                previewText += `${selectedClan} Head <br/> Captain of The ${selectedDivision} Division`;
            } else {
                previewText += `Gen ${generation}<br/> Head of The ${selectedClan} clan`;
            }
        }
        
        else if (selectedRank === 'royalGuard') {
            textColor = rankColors.royalGuard;
            previewText += selectedRoyalGuard;
        } 
        else if (selectedRank === 'vizard') {
            if (vizCaptainStatus) {
                textColor = rankColors.vizardCaptain;
                previewText += `🎭${selectedVizardRank}🎭 <br/> Captain of The ${selectedDivision} Division`;
            } else if (vizLieutenantStatus) {
                textColor = rankColors.vizard;
                previewText += `🎭${selectedVizardRank}🎭 <br/> Lieutenant of The ${selectedDivision} Division`;
            } else {
                textColor = rankColors.vizard;
                previewText += `🎭${selectedVizardRank}🎭`;
            }
        } 
        else if (selectedRank === 'captain') {
            textColor = kenpachiStatus ? rankColors.captainKenpachi : rankColors.captain;
            previewText += `Captain of The ${selectedDivision} Division`;
            if (kenpachiStatus) {
                previewText += " | Kenpachi";
            }
        } 
        else if (selectedRank === 'lieutenant') {
            textColor = rankColors.lieutenant;
            previewText += `Lieutenant of The ${selectedDivision} Division`;
        }

        preview.style.fontFamily = `'${googleFont}', sans-serif`;
        preview.style.color = textColor;
        preview.innerHTML = previewText;

        htmlCodeText = `<font color="${textColor}" face="${selectedFont}">${previewText}</font>`;
        htmlCodeContainer.textContent = htmlCodeText;

        divisionContainer.style.display = (selectedRank === 'captain' || selectedRank === 'lieutenant' || vizCaptainStatus || vizLieutenantStatus || royalFamilyCaptainStatus) ? 'block' : 'none';
        royalGuardContainer.style.display = selectedRank === 'royalGuard' ? 'block' : 'none';
        vizardRankContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';
        royalFamilyContainer.style.display = selectedRank === 'royalFamily' ? 'block' : 'none';
        kenpachiContainer.style.display = selectedRank === 'captain' ? 'block' : 'none';
        vizCaptainContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';
        vizLieutenantContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';

        if (vizCaptainStatus || vizLieutenantStatus || royalFamilyCaptainStatus || selectedRank === 'royalFamily') {
            kenpachiCheckbox.checked = false;
            kenpachiCheckbox.disabled = true;
        } else {
            kenpachiCheckbox.disabled = false;
        }
    }

    rankSelect.addEventListener('change', updatePreview);
    fontSelect.addEventListener('change', updatePreview);
    divisionSelect.addEventListener('change', updatePreview);
    royalGuardSelect.addEventListener('change', updatePreview);
    vizardRankSelect.addEventListener('change', updatePreview);
    clanNameSelect.addEventListener('change', updatePreview);
    generationInput.addEventListener('input', updatePreview);
    kenpachiCheckbox.addEventListener('change', updatePreview);
    vizCaptainCheckbox.addEventListener('change', updatePreview);
    vizLieutenantCheckbox.addEventListener('change', updatePreview);
    royalFamilyCaptainCheckbox.addEventListener('change', updatePreview);
    nameInput.addEventListener('input', updatePreview);

    updatePreview();
});
