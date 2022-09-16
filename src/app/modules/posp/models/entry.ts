export class SavePospInput {
    FirstName! : string;
    MiddleName!: string;
    LastName!: string;
    CompName! : string;
    Pincode! : string;
    City! :string;
    Add1! : string;
    Add2!: string;
    Add3! : string;
    Mobile1!: string;
    EmailId1! : string;
    Branch! : string;
    Division! : string;
    DOB! : string;
    CustType! : string;
    Gender! : string;
    STDCode! : string;
    LandLine! : string;
    EmailId2! : string;
    MarrDate! : string;
    DOCode! : string;
    SerProvID! : string;
    POSPCode! : string; 
}

export class SavePospOutput {
    type!:string;
    message!:string;
    code!:number;
    subcode!:number;
}