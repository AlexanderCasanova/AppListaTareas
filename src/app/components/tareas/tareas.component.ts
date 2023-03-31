import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  user={
    id_user:1
  }
  data: any;
  constructor(private task:TareasService){
  let data;
  }

  ngOnInit(){
    this.task.getTask(this.user).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }
}
