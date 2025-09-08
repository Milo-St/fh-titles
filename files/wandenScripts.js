document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const sternRankSelect = document.getElementById('sternRankSelect');
    const schutzSelect = document.getElementById('schutzSelect');
    const komSelect = document.getElementById('komSelect');
    const jagSelect = document.getElementById('jagSelect');
    const wachRank = document.getElementById('wachRank')
    const preview = document.getElementById('preview');
    const sternContainer = document.getElementById('sternContainer');
    const schutzContainer = document.getElementById('schutzContainer');
    const komContainer = document.getElementById('komContainer');
    const jagContainer = document.getElementById('jagContainer');
    const wachContainer = document.getElementById('wachContainer');
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
        sternritter: "#8d01f6",
        vassal: "#3c5dd9",
        schutzstaffel: "#f5fc68",
        apexKom: "#ca0003",
        kommandant: "#077028",
        jagdarmee: "#24ad80",
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let googleFont = fontMap[selectedFont] || selectedFont;
        let selectedRank = rankSelect.value;
        let selectedSternRank = sternRankSelect.value;
        let selectedSchutz = schutzSelect.value;
        let selectedJag = jagSelect.value;
        let selectedKom = komSelect.value;
        let selectedWach = wachRank.value.trim();
        let userName = nameInput.value.trim();
    
        let previewText = "";
        let htmlCodeText = "";
    
        if (selectedRank === "schutzstaffel") {
            textColor = rankColors.schutzstaffel;
            previewText = `${selectedSchutz}`;
        } 
        else if (selectedRank === "sternritter") {
                textColor = rankColors.sternritter;
                previewText = `${selectedSternRank}`;
        } 
        else if (selectedRank === "kommandant") {
            if (selectedKom === "Der Freischütz") {
                textColor = rankColors.apexKom;
                previewText = `${selectedKom}`;
            }
            else {
                textColor = rankColors.kommandant;
                previewText = `${selectedKom}`;
            }
        }
        else if (selectedRank === "jagdarmee") {
            textColor = rankColors.jagdarmee;
            previewText = `${selectedJag}`;
        }
        else if (selectedRank === "vassal") {
            textColor = rankColors.vassal;
            previewText = `Vassal - ${selectedWach}`;
        }
    
        if (userName) {
            previewText = `${userName} | ${previewText}`;
        }
    
        preview.style.fontFamily = `'${googleFont}', sans-serif`;
        preview.style.color = textColor;
        preview.innerHTML = previewText;
    
        htmlCodeText = `<font color="${textColor}" face="${selectedFont}">${previewText}</font>`;
        htmlCodeContainer.textContent = htmlCodeText;
    
        sternContainer.style.display = selectedRank === "sternritter" ? "block" : "none";
        schutzContainer.style.display = selectedRank === "schutzstaffel" ? "block" : "none";
        komContainer.style.display = selectedRank === "kommandant" ? "block" : "none";
        jagContainer.style.display = selectedRank === "jagdarmee" ? "block" : "none";
        wachContainer.style.display = selectedRank === "vassal" ? "block" : "none";
    }
    
    rankSelect.addEventListener("change", updatePreview);
    fontSelect.addEventListener("change", updatePreview);
    sternRankSelect.addEventListener("change", updatePreview);
    schutzSelect.addEventListener("change", updatePreview);
    komSelect.addEventListener("change", updatePreview);
    jagSelect.addEventListener("change", updatePreview);
    wachRank.addEventListener("input", updatePreview);
    nameInput.addEventListener("input", updatePreview);

    updatePreview();
});
