import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="row">
      <div class="col-1 pl-2">
        <ui-avatar size="md"
                   *ngIf="message.user" [image]="message.user.avatar">
        </ui-avatar>
        <ui-avatar size="md"
                   *ngIf="!message.user" text="?">
        </ui-avatar>
      </div>
      <div class="col ml-3">
        <div>
          <strong>{{message.user && message.user.name || 'Anonymous' }}</strong>
        </div>
        <div class="my-3">
          {{message.message}}
        </div>
      </div>
      <div class="col-2 text-nowrap">
        <div class="float-right">
          <small class="text-muted my-4 ml-2">
            {{message.created | date: 'short' }}
          </small>
          <a class="text-danger ml-2"
             *ngIf="user && message.user && message.user.id === user.id"
             (click)="deleteMessage(message.id)">
            <i class="fa fa-trash"></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MessageComponent {
  @Input() public message;
  @Input() public user;
  @Output() action = new EventEmitter()
  deleteMessage(id) {
    this.action.emit({ type: 'DELETE', payload: id })
  }
}