import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
 
  public recordSave: any;
  public newRecord: any;

  public province: any;
  public canton: any;
  public district: any;

  public provinceId: any;
  public cantonId: any;
  public districtId: any;

  constructor(
    private _registerService: RegisterService
  ){
      this.getProvince();
      this.canton = false;
      this.district = false;

      this.newRecord = {
        "name": "",
        "lastName": "",
        "phoneNumber": "",
        "email": "",
        "province": "",
        "canton": "",
        "distric": "",
      }
   }

  ngOnInit(): void {
  }

  getProvince(){
    this.province = false;
    this._registerService.getProvince().subscribe(
      result => {
        this.province = result.Object;
        console.log(this.province);
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  onClickCancel(form){
    form.reset();
  }

  getCanton(idProvincia){
    
    this._registerService.getCanton(this.newRecord.province).subscribe(
      result => {
        this.canton = result.Object;
        console.log(this.canton);
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  getDisctric(){

    this._registerService.getDistric(this.newRecord.canton).subscribe(
      result => {
        this.district = result.Object;
        console.log(this.district);        
      },
      err => {
        console.log(<any>err);
      }
    )
  }
  
  onSubmit(form){
    console.log(this.newRecord)
    this._registerService.saveUser(this.newRecord).subscribe(
      response => {
        this.recordSave = response;
        console.log(<any>response);
        form.reset();
        alert("Registro guradado con exito.");
      
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  provinceChangeAction(selectedProvince){
    this.canton = null;
    console.log(this.provinceId);
    this.getCanton(selectedProvince);       
  }

  cantonChanged(selectedCanton){
    this.district = null;
    this.getDisctric();    
  }
  districtChanged(){    
    console.log(this.newRecord);
  }
}
