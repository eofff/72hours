import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/dtos/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks?: Task[];

  addNewTaskForm = this.formBuilder.group({
    name: '',
  });

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
  }

  getHoursDeltaFromNow(task: Task): number {
    return Math.round(task.getHoursDelta(new Date()));
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks.filter((t: Task) => t.getSucceed() === false)
          .filter((t: Task) => t.getHoursDelta(new Date()) < 72);
      }
    })
  }

  addTask(): void {
    const newTaskName = this.addNewTaskForm.value.name;

    if (newTaskName.length > 3) {
      this.taskService.addTask(new Task(newTaskName, new Date()));
    }
  }

  finishTask(task: Task): void {
    this.taskService.finishTask(task);
  }

  removeTask(task: Task): void {
    this.taskService.removeTask(task);
  }

}
