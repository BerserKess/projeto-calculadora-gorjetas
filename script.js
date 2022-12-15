function calculateTip(event) {
    event.preventDefault();

    //   armazenar valores do formulario
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;
    console.log(bill, serviceQuality, numOfPeople);
    // verificar se os valores foram preenchidos
    if ((bill == '') | (serviceQuality == 0)) {
        alert('Por favor, preencha os valores');
        return;
    }
    //   verificar a quantidade de pessoas para mostrar o cada;
    if ((numOfPeople == '') | (numOfPeople <= 1)) {
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }
    // realiza a conta da gorjeta e mostra a div com o resultado
    let total = (bill * serviceQuality) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;

    document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

// quando o formulario for submetido vai chamar a função calculateTip
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
