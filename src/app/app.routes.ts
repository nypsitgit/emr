import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemo } from './demo/view/dashboarddemo';
import { SampleDemo } from './demo/view/sampledemo';
import { FormsDemo } from './demo/view/formsdemo';
import { DataDemo } from './demo/view/datademo';
import { PanelsDemo } from './demo/view/panelsdemo';
import { OverlaysDemo } from './demo/view/overlaysdemo';
import { MenusDemo } from './demo/view/menusdemo';
import { MessagesDemo } from './demo/view/messagesdemo';
import { MiscDemo } from './demo/view/miscdemo';
import { EmptyDemo } from './demo/view/emptydemo';
import { ChartsDemo } from './demo/view/chartsdemo';
import { FileDemo } from './demo/view/filedemo';
import { UtilsDemo } from './demo/view/utilsdemo';
import { Documentation } from './demo/view/documentation';
import { BiographyComponent } from './patient/biography.component';
import { MainComponent } from './main-content/main.component';
import { ContentComponent } from './main-content/content/content.component';
import { TopMenuComponent } from './main-content/top-menu/top-menu.component';


export const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'dashboard', component: MainComponent },
	{ path: 'sample', component: SampleDemo },
	{ path: 'forms', component: FormsDemo },
	{ path: 'data', component: DataDemo },
	{ path: 'panels', component: PanelsDemo },
	{ path: 'overlays', component: OverlaysDemo },
	{ path: 'menus', component: MenusDemo },
	{ path: 'messages', component: MessagesDemo },
	{ path: 'misc', component: MiscDemo },
	{ path: 'empty', component: EmptyDemo },
	{ path: 'charts', component: ChartsDemo },
	{ path: 'file', component: FileDemo },
	{ path: 'utils', component: UtilsDemo },
	{ path: 'documentation', component: Documentation },
	{ path: 'biography', component: BiographyComponent },
	{ path: 'mainPage', component: MainComponent,
		children: [
			{ path: 'topMenuPath', component: TopMenuComponent, outlet: 'topMenu-outlet' },
			{ path: 'contentPath', component: ContentComponent, outlet: 'content-outlet' },
			{ path: 'biography', component: BiographyComponent, outlet: 'biography-outlet' }
		]
	}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
