import { Component,  OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from './app.component';
import {MenuItem} from 'primeng/primeng';

@Component({
	selector: 'app-topbar',
	styleUrls: [ './app-topbar.css' ],
	template: `

		<div class="topbar clearfix">
			<div class="topbar-left">
				<div class="logo"></div>
			</div>


			<div class="topbar-right">

				<!--Overlay menu button-->
				<a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
					<i></i>
				</a>

<!-- 3-bar menu shown when app window is resized smaller-->
				<a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
					<i class="material-icons">menu</i>
				</a>



				<!-- Menu items, if app.profileMode ==='top is at top-->
				<ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">

					<!--User Profile button-->
	<!--				
					<li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
					    [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

						<a href="#" (click)="app.onTopbarItemClick($event,profile)">
							<div class="profile-image"></div>
							<span class="topbar-item-name">Jane Williams</span>
						</a>

						<ul class="ultima-menu animated fadeInDown">
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">person</i>
									<span>Profile</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">security</i>
									<span>Privacy</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">settings_applications</i>
									<span>Settings</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">power_settings_new</i>
									<span>Logout</span>
								</a>
							</li>
						</ul>
					</li>
	-->
					<!-- Settings menu items-->
<!--					
					<li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
						<a href="#" (click)="app.onTopbarItemClick($event,settings)">
							<i class="topbar-icon material-icons">settings</i>
							<span class="topbar-item-name">Settings</span>
						</a>
						<ul class="ultima-menu animated fadeInDown">
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">palette</i> &lt;!&ndash; icon &ndash;&gt;
									<span>Change Theme</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">exposure_neg_1</i>
									<span>Favorites</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">lock</i>
									<span>Lock Screen</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">wallpaper</i>
									<span>Wallpaper</span>
								</a>
							</li>
						</ul>
					</li>
-->

					
					<!--Switch to horizontal view-->
					<li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === horizontalMsg}">
						<!--<a href="#" (click)="app.onTopbarItemClick($event,horizontalMsg)">
							<i class="topbar-icon material-icons animated swing">border_horizontal</i>
						</a>-->

						<a href="#" (click)="app.changeToHorizontalMenu();">
							<i class="topbar-icon material-icons animated swing">border_horizontal</i>
						</a>
					</li>

<!--
					
					&lt;!&ndash; Messages menu items &ndash;&gt;
					<li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
						<a href="#" (click)="app.onTopbarItemClick($event,messages)">
							<i class="topbar-icon material-icons animated swing">message</i>
							<span class="topbar-badge animated rubberBand">3</span>
							<span class="topbar-item-name">Messages</span>
						</a>
						<ul class="ultima-menu animated fadeInDown">
							<li role="menuitem">
								<a href="#" class="topbar-message">
									<img src="assets/layout/images/avatar1.png" width="35"/>
									<span>Temperature taken</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#" class="topbar-message">
									<img src="assets/layout/images/avatar2.png" width="35"/>
									<span>Call to discuss patient</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#" class="topbar-message">
									<img src="assets/layout/images/avatar3.png" width="35"/>
									<span>Make the bed</span>
								</a>
							</li>
							
						</ul>
					</li>
					&lt;!&ndash; Notification menu items&ndash;&gt;
					<li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
						<a href="#" (click)="app.onTopbarItemClick($event,notifications)">
							<i class="topbar-icon material-icons">timer</i>
							<span class="topbar-badge animated rubberBand">4</span>
							<span class="topbar-item-name">Notifications</span>
						</a>
						<ul class="ultima-menu animated fadeInDown">
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">bug_report</i>
									<span>Admin medicine at 2pm</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">event</i>
									<span>Meeting today at 3pm</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">file_download</i>
									<span>Change drip</span>
								</a>
							</li>
							<li role="menuitem">
								<a href="#">
									<i class="material-icons">flight</i>
									<span>Book flight</span>
								</a>
							</li>
						</ul>
					</li>
-->

					<!--Face Icon-->
<!--
					
					<li #facemsg [ngClass]="{'active-top-menu':app.activeTopbarItem === facemsg}">
						<a href="#" (click)="app.onTopbarItemClick($event,facemsg)">
							<i class="topbar-icon material-icons">face</i>
							 <span class="topbar-badge animated rubberBand">XX</span>
							 <span class="topbar-item-name">Notifications</span>
						</a>
					</li>
-->


					<!-- Search -->
				<!--	<li #search class="search-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === search}"
					    (click)="app.onTopbarItemClick($event,search)">
					    <span class="md-inputfield">
						   <input type="text" pInputText>
						   <label>Search</label>
						   <i class="topbar-icon material-icons">search</i>
					    </span>
					</li>-->
				</ul>

				<!--<div class="ui-g">
					<div class="ui-g-4"><span class="patientInfo">Wong Ah Ying</span></div>
					<div class="ui-g-4"><span class="patientInfo">S1234567A</span></div>
					<div class="ui-g-4"><span class="patientInfo">65</span></div>
				</div>-->
			</div>
		</div>

	
		<div class="patient-bar">
			Wong Ah Ying | S1234567F | Female | 160cm | 51kg
		</div>

	`
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