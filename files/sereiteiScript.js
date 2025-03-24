document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('fontSelect');
    const rankSelect = document.getElementById('rankSelect');
    const divisionSelect = document.getElementById('divisionSelect');
    const royalGuardSelect = document.getElementById('royalGuardSelect');
    const kenpachiCheckbox = document.getElementById('kenpachi');
    const preview = document.getElementById('preview');
    const divisionContainer = document.getElementById('divisionContainer');
    const royalGuardContainer = document.getElementById('royalGuardContainer');
    const kenpachiContainer = document.getElementById('kenpachiContainer');
    const nameInput = document.getElementById('nameInput');
    const htmlCodeContainer = document.getElementById('htmlCode');
    
    const rankDetails = {
        captain: {
            divisionVisible: true,
            royalGuardVisible: false,
            kenpachiVisible: true
        },
        lieutenant: {
            divisionVisible: true,
            royalGuardVisible: false,
            kenpachiVisible: false
        },
        royalGuard: {
            divisionVisible: false,
            royalGuardVisible: true,
            kenpachiVisible: false
        }
    };

    function updatePreview() {
        let selectedFont = fontSelect.value;
        let selectedRank = rankSelect.value;
        let selectedDivision = divisionSelect.value;
        let selectedRoyalGuard = royalGuardSelect.options[royalGuardSelect.selectedIndex].text;
        let kenpachiStatus = kenpachiCheckbox.checked;
        let userName = nameInput.value.trim(); 

        let previewText = '';
        let htmlCodeText = '';

        if (userName) {
            previewText += `${userName} | `;
            htmlCodeText += `<font color="#000000" face="${selectedFont}">${userName} | `;
        }

        if (selectedRank === 'royalGuard') {
            previewText += selectedRoyalGuard;
            htmlCodeText += selectedRoyalGuard;
        } else {
            previewText += `${selectedRank.charAt(0).toUpperCase() + selectedRank.slice(1)} of The ${selectedDivision} Division`;
            htmlCodeText += `${selectedRank.charAt(0).toUpperCase() + selectedRank.slice(1)} of The ${selectedDivision} Division`;
        }

        if (kenpachiStatus && selectedRank === 'captain') {
            previewText += " | Kenpachi";
            htmlCodeText += " | Kenpachi";
        }

        preview.style.fontFamily = selectedFont;
        preview.textContent = previewText;
        
        // Update the HTML code preview
        htmlCodeText += `</font>`;
        htmlCodeContainer.textContent = htmlCodeText;

        divisionContainer.style.display = rankDetails[selectedRank].divisionVisible ? 'block' : 'none';
        royalGuardContainer.style.display = rankDetails[selectedRank].royalGuardVisible ? 'block' : 'none';
        kenpachiContainer.style.display = rankDetails[selectedRank].kenpachiVisible ? 'block' : 'none';
    }

    rankSelect.addEventListener('change', updatePreview);
    fontSelect.addEventListener('change', updatePreview);
    divisionSelect.addEventListener('change', updatePreview);
    royalGuardSelect.addEventListener('change', updatePreview);
    kenpachiCheckbox.addEventListener('change', updatePreview);
    nameInput.addEventListener('input', updatePreview); 

    updatePreview();
});
