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
    const loadedTasks: string | null = localStorage.getItem("tasks");

    if (loadedTasks) {
      const dataTasks = JSON.parse(loadedTasks) as Task[];

      this.tasks = dataTasks.map((v: any) => new Task(v.name, new Date(v.created), v.isSucceed));

      console.log(this.tasks[1])
    }

    this.tasksSubject.next(this.tasks);

    // TODO: check this moment
    setTimeout(() => this.tasksSubject.next(this.tasks), 300);

    this.tasksSubject.subscribe((tasks: Task[]) => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
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
