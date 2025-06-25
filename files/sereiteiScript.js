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
    // const royalFamilyCaptainCheckbox = document.getElementById('royalFamilyCaptain');
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
        // let royalFamilyCaptainStatus = royalFamilyCaptainCheckbox.checked;
        let userName = nameInput.value.trim();
        let selectedVizCaptainDivision = '';
        let selectedVizLieutenantDivision = '';

        const vizCaptainDivisionSelect = document.getElementById('vizCaptainDivisionSelect');
        const vizLieutenantDivisionSelect = document.getElementById('vizLieutenantDivisionSelect');

        if (vizCaptainCheckbox && vizCaptainCheckbox.checked && vizCaptainDivisionSelect) {
            selectedVizCaptainDivision = vizCaptainDivisionSelect.value;
        }
        if (vizLieutenantCheckbox && vizLieutenantCheckbox.checked && vizLieutenantDivisionSelect) {
            selectedVizLieutenantDivision = vizLieutenantDivisionSelect.value;
        }

        let previewText = '';
        let htmlCodeText = '';
        let textColor = "#ffffff"; 

        if (userName) {
            previewText += `${userName} | `;
        }

        if (generation > 99) {
            generationInput.value = 99;
            generation = 99;
            updatePreview();
        }

        if (selectedRank === 'royalFamily') {
            textColor = rankColors.royalFamily;
            previewText += `Gen ${generation}<br/> Head of The ${selectedClan} clan`;
        }
        else if (selectedRank === 'royalGuard') {
            textColor = rankColors.royalGuard;
            previewText += selectedRoyalGuard;
        } 
        else if (selectedRank === 'vizard') {
            if (vizCaptainStatus) {
                textColor = rankColors.vizardCaptain;
                previewText += `🎭${selectedVizardRank}🎭 <br/> Captain of The ${selectedVizCaptainDivision} Division`;
            } else if (vizLieutenantStatus) {
                textColor = rankColors.vizard;
                previewText += `🎭${selectedVizardRank}🎭 <br/> Lieutenant of The ${selectedVizLieutenantDivision} Division`;
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

        // Show/hide containers
        royalGuardContainer.style.display = selectedRank === 'royalGuard' ? 'block' : 'none';
        vizardRankContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';
        royalFamilyContainer.style.display = selectedRank === 'royalFamily' ? 'block' : 'none';
        kenpachiContainer.style.display = selectedRank === 'captain' ? 'block' : 'none';
        vizCaptainContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';
        vizLieutenantContainer.style.display = selectedRank === 'vizard' ? 'block' : 'none';
        // Only show divisionContainer for regular Captain/Lieutenant (not Vizard Captain/Lieutenant)
        if ((selectedRank === 'captain' || selectedRank === 'lieutenant') && (!vizCaptainCheckbox.checked && !vizLieutenantCheckbox.checked)) {
            divisionContainer.style.display = 'block';
        } else {
            divisionContainer.style.display = 'none';
        }

        if (selectedRank === 'captain') {
            kenpachiCheckbox.disabled = false; 
        } else {
            kenpachiCheckbox.checked = false; 
            kenpachiCheckbox.disabled = true;
        }
        if (selectedRank === 'royalFamily') {
            royalFamilyCaptainCheckbox.disabled = false;
        } else {
            royalFamilyCaptainCheckbox.checked = false;
            royalFamilyCaptainCheckbox.disabled = true;
        }
        if (selectedRank === 'vizard') {
            vizCaptainCheckbox.disabled = false;
            vizLieutenantCheckbox.disabled = false;
        } else {
            vizCaptainCheckbox.checked = false;
            vizCaptainCheckbox.disabled = true;
            vizLieutenantCheckbox.checked = false;
            vizLieutenantCheckbox.disabled = true;
        }

        // Always update Vizard division selectors/labels after any change
        updateVizardDivisionSelectors();
    }

    function updateVizardDivisionSelectors() {
        const vizCaptainDivisionContainer = document.getElementById('vizCaptainDivisionContainer');
        const vizLieutenantDivisionContainer = document.getElementById('vizLieutenantDivisionContainer');

        if (vizCaptainCheckbox.checked) {
            if (vizCaptainDivisionContainer) {
                vizCaptainDivisionContainer.style.display = 'block';
            }
            if (vizLieutenantDivisionContainer) {
                vizLieutenantDivisionContainer.style.display = 'none';
            }
        } else if (vizLieutenantCheckbox.checked) {
            if (vizLieutenantDivisionContainer) {
                vizLieutenantDivisionContainer.style.display = 'block';
            }
            if (vizCaptainDivisionContainer) {
                vizCaptainDivisionContainer.style.display = 'none';
            }
        } else {
            if (vizCaptainDivisionContainer) {
                vizCaptainDivisionContainer.style.display = 'none';
            }
            if (vizLieutenantDivisionContainer) {
                vizLieutenantDivisionContainer.style.display = 'none';
            }
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
    vizCaptainCheckbox.addEventListener('change', function() {
        if (this.checked) {
            vizLieutenantCheckbox.checked = false;
        }
        updateVizardDivisionSelectors();
        updatePreview();
    });
    vizLieutenantCheckbox.addEventListener('change', function() {
        if (this.checked) {
            vizCaptainCheckbox.checked = false;
        }
        updateVizardDivisionSelectors();
        updatePreview();
    });
    // royalFamilyCaptainCheckbox.addEventListener('change', updatePreview);
    nameInput.addEventListener('input', updatePreview);
    document.getElementById('vizCaptainDivisionSelect').addEventListener('change', updatePreview);
    document.getElementById('vizLieutenantDivisionSelect').addEventListener('change', updatePreview);

    updateVizardDivisionSelectors();
    updatePreview();
});