import { Component, OnInit } from '@angular/core';
import { Iservices } from 'src/Models/iservices';
import { TheservicesService } from 'src/Services/theservices.service';
@Component({
  selector: 'app-adminservice',
  templateUrl: './adminservice.component.html',
  styleUrls: ['./adminservice.component.scss']
})
export class AdminserviceComponent implements OnInit {
  list:Iservices[];
  model:Iservices={description:"",icon:"",titleName:""};
  updateModel:Iservices={description:"",icon:"",titleName:""};
 
  isAdded:boolean=false;
  isUpdated:boolean=false;
  showToUpdate:boolean=false;
  errorMessage:string;

  constructor(private service:TheservicesService) { 
    this.list = [];
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.getAllServices();
  }
  showForm(id:number){
    this.showToUpdate = !this.showToUpdate;
    this.list.forEach((item)=>{
      console.log("========================"+id);
      if(item.id==id){
          this.updateModel.id = item.id;
          this.updateModel.icon = item.icon;
          this.updateModel.description = item.description;
          this.updateModel.titleName = item.titleName;
          console.log("========================"+item.id+item.description+item.titleName);
      }
      console.log("========================"+id);
    });
  }
  getAllServices(){
    this.service.getAll().subscribe(
      data=>{
        this.list = data;
      },
      error=>{
        this.errorMessage = error.message;
      }
    );
    console.log("=================All Services========================");
    console.log(this.list);
  }
  update(id:number){
   this.service.update(id,this.updateModel).subscribe(
    data=>{
      this.isUpdated = true;
    }
   );
  }
  delService(id:any){
   this.service.delete(id).subscribe(
    data=>{
      console.log("_________________deleted_____________________");
    },
    error=>{
      console.log("_________________Error_____________________");
 
    }
   );
  }
  add(){
   this.service.add(this.model).subscribe(
    data=>{
      this.isAdded = true;
    }
   );
  }


}
