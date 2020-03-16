import { Component, Input } from '@angular/core';
import { Entity } from '../shared/table';

@Component({
    selector: 'sidenav-content',
    templateUrl: 'sidenav-content.component.html'
})
export class SidenavContentComponent{
    @Input() tableKeys: Entity[]
}