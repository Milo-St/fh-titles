document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const espadaRankSelect = document.getElementById('espadaRankSelect');
    const fantasiaSelect = document.getElementById('fantasiaSelect');
    const primordialesSelect = document.getElementById('primordialesSelect');
    const preview = document.getElementById('preview');
    const espadaContainer = document.getElementById('espadaContainer');
    const fantasiaContainer = document.getElementById('fantasiaContainer');
    const primordialesContainer = document.getElementById('primordialesContainer');
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
        ceroEspada: "#3554ff",
        espada: "#a70000",
        fantasia: "#b8a2f0",
        primordiales: "#606f97",
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let googleFont = fontMap[selectedFont] || selectedFont;
        let selectedRank = rankSelect.value;
        let selectedEspadaRank = espadaRankSelect.value;
        let selectedFantasia = fantasiaSelect.value;
        let selectedPrimordiales = primordialesSelect.value;
        let userName = nameInput.value.trim();
    
        let previewText = "";
        let htmlCodeText = "";
    
        if (selectedRank === "fantasia") {
            textColor = rankColors.fantasia;
            previewText = `Espada De Fantasia ${selectedFantasia}`;
        } 
        else if (selectedRank === "espada") {
            if (selectedEspadaRank === "Cero") {
                textColor = rankColors.ceroEspada;
                previewText = `An Espada Above All, Cero Espada`;
            } else {
                textColor = rankColors.espada;
                previewText = `${selectedEspadaRank} Espada`;
            }
        } 
        else if (selectedRank === "primordiales") {
            textColor = rankColors.primordiales;
            previewText = `The ${selectedPrimordiales}`;
        }
    
        if (userName) {
            previewText = `${userName} | ${previewText}`;
        }
    
        preview.style.fontFamily = `'${googleFont}', sans-serif`;
        preview.style.color = textColor;
        preview.innerHTML = previewText;
    
        htmlCodeText = `<font color="${textColor}" face="${googleFont}">${previewText}</font>`;
        htmlCodeContainer.textContent = htmlCodeText;
    
        espadaContainer.style.display = selectedRank === "espada" ? "block" : "none";
        fantasiaContainer.style.display = selectedRank === "fantasia" ? "block" : "none";
        primordialesContainer.style.display = selectedRank === "primordiales" ? "block" : "none";
    }
    
    rankSelect.addEventListener("change", updatePreview);
    fontSelect.addEventListener("change", updatePreview);
    espadaRankSelect.addEventListener("change", updatePreview);
    fantasiaSelect.addEventListener("change", updatePreview);
    primordialesSelect.addEventListener("change", updatePreview);
    nameInput.addEventListener("input", updatePreview);

    updatePreview();
});
