document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const custodesRankSelect = document.getElementById('custodesRankSelect');
    const dominusSelect = document.getElementById('dominusSelect');
    const venireSelect = document.getElementById('venireSelect');
    const manifestationSelect = document.getElementById('manifestationSelect');
    const preview = document.getElementById('preview');
    const custodesContainer = document.getElementById('custodesContainer');
    const dominusContainer = document.getElementById('dominusContainer');
    const manifestationContainer = document.getElementById('manifestationContainer');
    const venireContainer = document.getElementById('venireContainer');
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
        dominus: "#a669e0",
        gladius: "#0feab5",
        custodes: "#da4b4b",
        venire: "#f0c464",
        ginjo: "#c0bf92",
        tsukishima: "#d3ff41",
        giriko: "#e8ff05",
        chad: "#2c0101",
        jackie: "#292727",
        riruka: "#3c2374",
        yukio: "#30ff9b",
        orihime: "#ffa557",
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let googleFont = fontMap[selectedFont] || selectedFont;
        let selectedRank = rankSelect.value;
        let selectedCustodesRank = custodesRankSelect.value;
        let selectedDominus = dominusSelect.value;
        let selectedVenire = venireSelect.value;
        let selectedManifestation = manifestationSelect.value;
        let userName = nameInput.value.trim();
    
        let previewText = "";
        let htmlCodeText = "";
    
        if (selectedRank === "dominus") {
            if (selectedDominus === "[主の剣] Gladius Domini") {
                textColor = rankColors.gladius;
                previewText = `${selectedDominus}`
            } else {
                textColor = rankColors.dominus;
                previewText = `${selectedDominus}`;
            }
        } 

        else if (selectedRank === "custodes") {

            if (selectedCustodesRank === "[主の剣] Gladius Domini") {
                textColor = rankColors.gladius;
                previewText = `${selectedCustodesRank}`
            } else {
                textColor = rankColors.custodes;
                previewText = `${selectedCustodesRank}`;
            }
        }

        else if (selectedRank === "venire") {
            textColor = rankColors.venire;
            previewText = `${selectedVenire}`;
        }

        else if (selectedRank === "manifestation") {
            if (selectedManifestation === "<br/>001 | Kūgo Ginjō") {
                textColor = rankColors.ginjo;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>002 | Tsukishima Shūkurō") {
                textColor = rankColors.tsukishima;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>004 | Giriko Kutsuzawa") {
                textColor = rankColors.giriko;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === '<br/>007 | Yasutora "Chad" Sado') {
                textColor = rankColors.chad;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>006 | Jackie Tristan") {
                textColor = rankColors.jackie;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>003 | Riruka Dokugamine") {
                textColor = rankColors.riruka;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>005 | Yukio Hans Vorarlberna") {
                textColor = rankColors.yukio;
                previewText = `${selectedManifestation}`;
            } else if (selectedManifestation === "<br/>008 | Orihime Inoue") {
                textColor = rankColors.orihime;
                previewText = `${selectedManifestation}`;
            }
        } 
    
        if (userName && selectedRank === "manifestation") {
            previewText = `${userName} ${previewText}`;
        }
        else if (userName && selectedRank === "dominus") {
            if (selectedDominus === "Dominus Terrae") {
                previewText = `[ 地球の主 ] ${userName} | ${selectedDominus}`;
            } 
            else if (selectedDominus === "Dominus Stellarum") {
                previewText = `[ 星の主 ] ${userName} | ${selectedDominus}`;
            }
            else if (selectedDominus === "Dominus Ventus") {
                previewText = `[ 風の主 ] ${userName} | ${selectedDominus}`;
            }
            else if (selectedDominus === "Dominus Maria") {
                previewText = `[ 海の主 ] ${userName} | ${selectedDominus}`;
            }
            else if (selectedDominus === "Dominus Cineris") {
                previewText = `[ 灰の主 ] ${userName} | ${selectedDominus}`;
            }
        }
        
        
        else if (userName) {
            previewText = `${userName} | ${previewText}`;
        }
    
        preview.style.fontFamily = `'${googleFont}', sans-serif`;
        preview.style.color = textColor;
        preview.innerHTML = previewText;
    
        htmlCodeText = `<font color="${textColor}" face="${selectedFont}">${previewText}</font>`;
        htmlCodeContainer.textContent = htmlCodeText;
    
        custodesContainer.style.display = selectedRank === "custodes" ? "block" : "none";
        dominusContainer.style.display = selectedRank === "dominus" ? "block" : "none";
        venireContainer.style.display = selectedRank === "venire" ? "block" : "none";
        manifestationContainer.style.display = selectedRank === "manifestation" ? "block" : "none";
    }
    
    rankSelect.addEventListener("change", updatePreview);
    fontSelect.addEventListener("change", updatePreview);
    custodesRankSelect.addEventListener("change", updatePreview);
    dominusSelect.addEventListener("change", updatePreview);
    venireSelect.addEventListener("change", updatePreview);
    manifestationSelect.addEventListener("change", updatePreview);
    nameInput.addEventListener("input", updatePreview);

    updatePreview();
});
