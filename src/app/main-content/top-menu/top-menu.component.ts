import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';
import { BiographyMenuService } from '../../patient/biography-menu-service';
import { ContentMenu } from '../../domain/ContentMenu';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit{

	types: any;
	selectedType: string;
	topMenuItems: string[];
	contentMenu: ContentMenu[];
	contentModule: string;

	constructor(private bioMenuService: BiographyMenuService, private route: ActivatedRoute, private router: Router){
		//this.topMenuItems = ["Biographic Data", "Psycho-Social & Economic", "Emergency Contact", "Information Source"
	}

	ngOnInit(){
		this.types = [];
		this.types.push({ label: 'Biographic Data', value: 'genInfo'});
		this.types.push({ label: 'Psycho-Social & Economic', value: 'psychoSocial' });
		this.types.push({ label: 'Emergency Contact', value: 'emergency', });
		this.types.push({ label: 'Information Source', value: 'infoSource', });

		this.bioMenuService.getContentMenu().then(contentMenu => this.contentMenu = contentMenu);
		this.contentModule = "Biographical Data";

	}

	selectOption(option: string){
		console.log('Option selected: ' + this.selectedType);
		/*this.router.navigateByUrl('#emergencyContact');*/
	}

}
