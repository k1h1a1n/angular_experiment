
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SavePospInput } from '../../models/entry';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pospForm!: FormGroup;
  savePospInput: SavePospInput = new SavePospInput();
  constructor(
    private formBuilder: FormBuilder,
    private entryService : EntryService
  ) { 
    this.pospForm = this.formBuilder.group({
      firstname: new FormControl('' , [Validators.required]),
      middlename: new FormControl('' , [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      add1: new FormControl('', [Validators.required]),
      add2: new FormControl('', [Validators.required]),
      add3: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      branch: new FormControl(),
      division: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      fundtype: new FormControl("2"),
      gender: new FormControl('M'),
      stdcode: new FormControl('',[]),
      landline: new FormControl('', []),
      email1: new FormControl('', []),
      marrdate: new FormControl('', []),
      docode: new FormControl('', []),
      provid: new FormControl('', [Validators.required]),
      pospcode:new FormControl('' , [Validators.required])      
    });
  }
  get controller(): { [key: string]: AbstractControl } {
    return this.pospForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(formData:any){
    console.log('entered')
    if (this.pospForm.invalid) {
      this.pospForm.markAllAsTouched();
      return;
    }
    this.savePospInput.FirstName = formData.firstname;
    this.savePospInput.MiddleName = formData.middlename;
    this.savePospInput.LastName = formData.lastname;
    this.savePospInput.CompName = formData.companyname;
    this.savePospInput.Pincode = formData.pincode;
    this.savePospInput.City = formData.city;
    this.savePospInput.Add1 = formData.add1;
    this.savePospInput.Add2 = formData.add2;
    this.savePospInput.Add3 = formData.add3;
    this.savePospInput.Mobile1 = formData.mobile;
    this.savePospInput.EmailId1 = formData.email;
    this.savePospInput.Branch = formData.branch;
    this.savePospInput.Division = formData.division;
    // dob
    let dob : Date | string;
    dob = new Date(formData.dob).toISOString();
    this.savePospInput.DOB = dob;
    //dob
    this.savePospInput.CustType = formData.fundtype;
    this.savePospInput.Gender = formData.gender;
    this.savePospInput.STDCode = formData.stdcode;
    this.savePospInput.LandLine = formData.landline;
    this.savePospInput.EmailId2 = formData.email1;
    //marr date
    let marrdate : Date | string;
    marrdate = new Date(formData.marrdate).toISOString();
    this.savePospInput.MarrDate = marrdate;
    //marr date
    this.savePospInput.DOCode = formData.docode;
    this.savePospInput.SerProvID = formData.provid;
    this.savePospInput.POSPCode = formData.pospcode;
    console.log(this.savePospInput , 'input');
    this.entryService.savePosp(this.savePospInput).subscribe(result => {
      if(result.type == 'success'){
        alert('Saved Successfully')
      }
      else{
        alert('something went wrong')
      }
    })
  }
}
