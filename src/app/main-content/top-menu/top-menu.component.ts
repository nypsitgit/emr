import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styles: []
})
export class TopMenuComponent implements OnInit{

	types: any;
	selectedType: string;

	constructor(private route: ActivatedRoute, private router: Router){
	}




	ngOnInit(){
		this.types = [];
		this.types.push({ label: 'Biographic Data', value: 'genInfo'});
		this.types.push({ label: 'Psycho-Social & Economic', value: 'psychoSocial' });
		this.types.push({ label: 'Emergency Contact', value: 'emergency', });
		this.types.push({ label: 'Information Source', value: 'infoSource', });

	}

	selectOption(option: string){
		console.log('Option selected: ' + this.selectedType);
		/*this.router.navigateByUrl('#emergencyContact');*/
	}

}
