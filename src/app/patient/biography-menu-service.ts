import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentMenu } from '../domain/ContentMenu';

@Injectable()
export class BiographyMenuService{

	constructor(private http: Http){
	}

	getContentMenu(){
		return this.http.get('assets/data/BiographyMenu.json')
		.toPromise()
		.then(res => <ContentMenu[]> res.json().data)
		.then(data =>{
			return data;
		});
	}
}