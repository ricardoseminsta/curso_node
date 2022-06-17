import validator from "validator";

let name: string = "ricardo";

if(validator.isLowercase(name)) {
    console.log("é toda miniscula");
} else {
    console.log("não é toda miniscula");
    
}