function rollDice() {
    const numOfDice = parseInt(document.getElementById('numOfDice').value);
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const ToHit = parseInt(document.getElementById('ToHit').value);
    const ToWound = parseInt(document.getElementById('ToWound').value);
    const values = [];
    const images = [];
    let hitValues = [];
    let hitImages = [];
    let woundValues = [];
    let woundImages = [];
    let hitCount = 0;
    let woundCount = 0;

    function rollSingleDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // สุ่มลูกเต๋าทั้งหมดและคำนวณ hitCount
    for (let i = 0; i < numOfDice; i++) {
        const value = rollSingleDie();
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice ${value}">`);
        
        if (value >= ToHit) {
            hitValues.push(value);  // เก็บค่าที่ผ่าน To Hit สำหรับการแสดงผล
            hitImages.push(`<img src="${value}.png" alt="Dice ${value}">`);
            hitCount++;
        }
    }

    // สุ่มลูกเต๋าใหม่ตาม hitCount และคำนวณ woundCount
    for (let i = 0; i < hitCount; i++) {
        const woundValue = rollSingleDie();
        woundValues.push(woundValue);

        if (woundValue >= ToWound) {
            woundCount++;
            woundImages.push(`<img src="${woundValue}.png" alt="Dice ${woundValue}">`);
        }
    }

    // แสดงผลลัพธ์
    diceResult.innerHTML = 
        `Dice of To Hit: ${values.join(', ')}<br>
        To Hit: ${hitCount}<br>
        Dice of To Wound: ${woundValues.join(', ')}<br>
        To Wound: ${woundCount}`;
    
    diceImages.innerHTML = 
        `Images of To Hit:<br>${hitImages.join('')}<br>
        Images of To Wound:<br>${woundImages.join('')}`;
}
