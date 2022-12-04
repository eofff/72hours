import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/dtos/task';

@Component({
  selector: 'app-successed',
  templateUrl: './successed.component.html',
  styleUrls: ['./successed.component.scss']
})
export class SuccessedComponent implements OnInit {
  tasks?: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks.filter((t: Task) => t.getSucceed() === true);
      }
    })
  }

}
