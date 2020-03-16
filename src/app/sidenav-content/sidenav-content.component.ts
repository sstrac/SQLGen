import { Component, Input } from '@angular/core';
import { Entity } from '../shared/entity.interface';

@Component({
    selector: 'sidenav-content',
    templateUrl: 'sidenav-content.component.html'
})
export class SidenavContentComponent{
    @Input() tableKeys: Entity[]
}