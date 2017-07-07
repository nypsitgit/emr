import { Component,  OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from './app.component';
import {MenuItem} from 'primeng/primeng';

@Component({
	selector: 'app-topbar',
	styleUrls: [ './app-topbar.css' ],
	templateUrl: './app.topbar.html',
})
export class AppTopBar implements OnInit{

	breadcrumbItems: MenuItem[];

	constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent){
	}

	ngOnInit(){
		this.breadcrumbItems = [];
		this.breadcrumbItems.push({label:'Patient'});
		this.breadcrumbItems.push({label:'Biographic Data'});
	}
}