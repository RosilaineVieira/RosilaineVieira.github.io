// Function to check form validation
function checkForm() {
    let nome = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let telefone = document.forms["myForm"]["phone"].value;
    let servico = document.forms["myForm"]["service"].value;

    if (nome == "" || email == "" || telefone == "" || servico == "") {
        alert("Todos os campos devem ser preenchidos");
        return false;
    }
}
// Function to validate the phone number
function isValidPhone(tel) {
    let re = /^(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{4}[-.x\s]?[0-9]{4}$/gm;
        return re.test(tel);
    };

// Function to format the phone number
function formatarTelefone(telefone){
    let novoNumero = '';
    for (let i=0;i<telefone.length;i++){
        if ((i==2)||(i==5)){
            novoNumero += '-';
        }else{
            novoNumero+=telefone[i];
            }
        }
        return novoNumero;
    };