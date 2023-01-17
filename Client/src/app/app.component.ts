import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from 
'@syncfusion/ej2-angular-spreadsheet';
import {InventoryList} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = InventoryList;

  public onSave(args:any){
    args.customParams = {customParams: 'format:CSV'}
  }

  public btnClick(){
    this.ssObj?.save({
      url:"https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save",
      fileName:"SaveData",
      saveType:"Pdf"
    })
  }

  public onCreate(){
    this.ssObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');

    fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx")
    .then((response)=>{
      response.blob().then((fileBlob)=>{
        let file = new File([fileBlob],"sample.xlsx");
        this.ssObj?.open({file: file});
      })
    })
  }
}
