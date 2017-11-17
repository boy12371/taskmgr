import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { TaskListComponent } from './components/task-list';
import { TaskItemComponent } from './components/task-item';
import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './containers/task-home';
import { TaskListHeaderComponent } from './components/task-list-header';
import { NewTaskComponent } from './components/new-task';
import { NewTaskListComponent } from './components/new-task-list';
import { CopyTaskComponent } from './components/copy-task';
import { QuickTaskComponent } from './components/quick-task';
import { TaskHistoryItemComponent } from './components/task-history-item';
import { TaskFilterNavComponent } from './components/task-filter-nav';
import { ProjectMenuNavComponent } from './components/project-menu-nav';
import { TaskListDialogComponent } from './components/task-list-dialog';
import { TaskListDialogItemComponent } from './components/task-list-dialog-item';
import { TaskHistoryDialogComponent } from './components/task-history-dialog';
import { TaskHistoryDialogItemComponent } from './components/task-history-dialog-item';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    SharedModule,
    ChartModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskHomeComponent,
    TaskListHeaderComponent,
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent,
    QuickTaskComponent,
    TaskHistoryItemComponent,
    TaskFilterNavComponent,
    ProjectMenuNavComponent,
    TaskListDialogComponent,
    TaskListDialogItemComponent,
    TaskHistoryDialogComponent,
    TaskHistoryDialogItemComponent,
  ],
  entryComponents: [
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent,
    TaskListDialogComponent,
    TaskHistoryDialogComponent,
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ]
})
export class TaskModule {
}
