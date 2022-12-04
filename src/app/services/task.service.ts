import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from '../dtos/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject: Subject<Task[]> = new Subject<Task[]>();

  constructor() {
    this.tasks = [
      new Task("kek1", new Date()),
      new Task("kek2", new Date()),
    ]
    this.tasksSubject.next(this.tasks);

    setTimeout(() => this.tasksSubject.next(this.tasks), 100);
    setInterval(() => this.tasksSubject.next(this.tasks), 5000);
  }

  public getTasks() : Subject<Task[]> {
    return this.tasksSubject;
  }

  public addTask(task: Task) : void {
    this.tasks.push(task);

    this.tasksSubject.next(this.tasks);
  }

  public finishTask(task: Task) : void {
    let buff = this.tasks.find((t: Task) => t.getName() === task.getName()
      && t.getCreatedTime().getTime() === task.getCreatedTime().getTime());
    
    buff?.setSucceed(true);

    this.tasksSubject.next(this.tasks);
  }

  public removeTask(task: Task) : void {
    this.tasks = this.tasks.filter((t: Task) => t.getName() !== task.getName()
      || t.getCreatedTime().getTime() !== task.getCreatedTime().getTime());

    this.tasksSubject.next(this.tasks);
  }
}
