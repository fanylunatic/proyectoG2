import { Component, OnInit, Input } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import * as jQuery from 'jquery';

var code:string;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  countryCode:string = "mx";
  constructor(private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  getCountry(): string
  {
    jQuery.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=9e9b13512b364200989faa64432a44f8", function(data){
      code = data.country_code;
      code = code.toLowerCase();
    });
    return code;
  }
}
