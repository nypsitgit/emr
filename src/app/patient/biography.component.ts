import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
    templateUrl: './biography.html'
})
export class BiographyComponent implements OnInit{

	tabMenuItems: MenuItem[];
	breadcrumbItems: MenuItem[];
	types: any[];

	ngOnInit(){
		this.breadcrumbItems = [];
		this.breadcrumbItems.push({label:'Patient'});
		this.breadcrumbItems.push({label:'Biographic Data'});


		this.types = [];
		this.types.push({ label: 'Biographic Data', value: 'genInfo', url: '#first' });
		this.types.push({ label: 'Psycho-Social & Economic', value: 'psychoSocial', url: '#second' });
		this.types.push({ label: 'Emergency Contact', value: 'emergency', url: '#third' });
		this.types.push({ label: 'Information Source', value: 'infoSource', url: '#second' });

		this.tabMenuItems = [
			{label: 'Biographic Data', command: (event) => { this.menuClick();}},
			{label: 'Psycho-Social & Economic', url: '#scroll-pos'},
			{label: 'Emergency Contact',  url: '#scroll-pos'},
			{label: 'Information Source',},
		];
	}


	menuClick(){
		console.log("Menu clicked")
	}
}