document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const archonSelect = document.getElementById('archonRankSelect');
    const monarchSelect = document.getElementById('monarchSelect');
    const viscountSelect = document.getElementById('viscountSelect');
    const preview = document.getElementById('preview');
    const archonContainer = document.getElementById('archonContainer');
    const monarchContainer = document.getElementById('monarchContainer');
    const viscountContainer = document.getElementById('viscountContainer');
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
        monarch: "#ff350e",
        archon: "#000080",
        viscount: "#b4b6b1",
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let googleFont = fontMap[selectedFont] || selectedFont;
        let selectedRank = rankSelect.value;
        let selectedArchonRank = archonSelect.value;
        let selectedMonarch = monarchSelect.value;
        let selectedViscount = viscountSelect.value;
        let userName = nameInput.value.trim();
    
        let previewText = "";
        let htmlCodeText = "";
    
        if (selectedRank === "monarch") {
            textColor = rankColors.monarch;
            previewText = `${selectedMonarch}`;
        } 
        else if (selectedRank === "archon") {
                textColor = rankColors.archon;
                previewText = `${selectedArchonRank}`;
            
        } 
        else if (selectedRank === "viscount") {
            textColor = rankColors.viscount;
            previewText = `${selectedViscount}`;
        }
    
        if (userName) {
            previewText = `${userName} | ${previewText}`;
        }
    
        preview.style.fontFamily = `'${googleFont}', sans-serif`;
        preview.style.color = textColor;
        preview.innerHTML = previewText;
    
        htmlCodeText = `<font color="${textColor}" face="${selectedFont}">${previewText}</font>`;
        htmlCodeContainer.textContent = htmlCodeText;
    
        archonContainer.style.display = selectedRank === "archon" ? "block" : "none";
        monarchContainer.style.display = selectedRank === "monarch" ? "block" : "none";
        viscountContainer.style.display = selectedRank === "viscount" ? "block" : "none";
    }
    
    rankSelect.addEventListener("change", updatePreview);
    fontSelect.addEventListener("change", updatePreview);
    archonSelect.addEventListener("change", updatePreview);
    monarchSelect.addEventListener("change", updatePreview);
    viscountSelect.addEventListener("change", updatePreview);
    nameInput.addEventListener("input", updatePreview);

    updatePreview();
});
