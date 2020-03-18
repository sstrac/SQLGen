import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidenav-content',
    templateUrl: 'sidenav-content.component.html'
})
export class SidenavContentComponent{
    @Input() tableKeys
}