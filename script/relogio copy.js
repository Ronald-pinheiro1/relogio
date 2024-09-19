let res = document.querySelector('p#resp');
let alarme = document.querySelector('p#alarme');
let sal = document.getElementById('saldacao');
let data = document.getElementById('data');

const num = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

const N60 = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta", "trinta e um", "trinta e dois", "trinta e três", "trinta e quatro", "trinta e cinco", "trinta e seis", "trinta e sete", "trinta e oito", "trinta e nove", "quarenta", "quarenta e um", "quarenta e dois", "quarenta e três", "quarenta e quatro", "quarenta e cinco", "quarenta e seis", "quarenta e sete", "quarenta e oito", "quarenta e nove", "cinquenta", "cinquenta e um", "cinquenta e dois", "cinquenta e três", "cinquenta e quatro", "cinquenta e cinco", "cinquenta e seis", "cinquenta e sete", "cinquenta e oito", "cinquenta e nove", "sessenta"];

const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function updateDateTime() {
    let rel = new Date();
    let hor = rel.getHours();
    let min = rel.getMinutes();
    let seg = rel.getSeconds();

    // Saldação do dia
    function SaldacaodoDia(h) {
        let saldacao = 'Bom dia, Visitante! Vamos dar uma olhadinha no tempo?';

        if (h >= 0 && h < 5) saldacao = 'É de madrugada visitante, vamos dormir!';
        else if (h >= 12 && h < 18) saldacao = "Boa tarde, Visitante! Vamos dar uma olhadinha no tempo?";
        else if (h >= 18) saldacao = 'Boa noite, Visitante! Vamos dar uma olhadinha no tempo?';

        sal.innerHTML = `<strong>${saldacao}</strong>`;
    }

    SaldacaodoDia(hor);

    // Calendário (semana, mês, dia e ano)
    function calendario() {
        data.innerHTML = `<i>Hoje é ${semana[rel.getDay()]}, ${rel.getDate()} ${meses[rel.getMonth()]} de ${rel.getFullYear()}</i>`;
    }
    calendario();

    // Contador (relógio)
    function relogio() {
        hor = hor.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        seg = seg.toString().padStart(2, '0');

        res.innerHTML = `<span>${hor}</span>:<span>${min}</span>:<span>${seg}</span>`;
    }
    relogio();

    // Contador por extenso
    function Relogioporextenso() {
        alarme.innerHTML = `${N60[rel.getHours()]} horas, ${N60[rel.getMinutes()]} minutos e  ${N60[rel.getSeconds()]} segundos`;
    }
    Relogioporextenso();
}

setInterval(updateDateTime, 1000);
updateDateTime();






