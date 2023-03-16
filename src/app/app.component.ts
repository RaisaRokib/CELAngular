import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Table';

  studentid:string='';
  name:string='';
  department:string='';
  cgpa:string='';

  public showstudent:any=[{studentid:this.studentid,name:this.name,department:this.department,cgpa:this.cgpa}]
  submit()
  {
    this.showstudent.push({studentid:this.studentid,name:this.name,department:this.department,cgpa:this.cgpa

    });
  }

}
