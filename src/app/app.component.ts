import {ActivatedRoute, Router} from '@angular/router';
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService
	) {
		
	}

	ngOnInit() {
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');

		const browserLang = this.translate.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}
