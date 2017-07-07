import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styles: []
})
export class MainComponent implements OnInit{

	private url = '/mainPage/(topMenu-outlet:topMenuPath//content-outlet:contentPath)';
	private topMenuOutlet = 'topMenu-outlet';
	private contentOutlet = 'content-outlet';

	constructor(private router: Router){
	}

	ngOnInit(){
		//this.url = '/mainPage/(topMenu-outlet:topMenuPath//' + 'content-outlet:contentPath' + ')';
		this.url = '/mainPage/(topMenu-outlet:topMenuPath//' + 'biography-outlet:biography' + ')';
		//this.router.navigateByUrl('/mainPage/(topMenu-outlet:topMenuPath//biography-outlet:biography)');
		this.router.navigateByUrl(this.url);
	}

}
