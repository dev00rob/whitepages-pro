import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class ReversePhoneService {
    // a proper url:     https://proapi.whitepages.com/3.0/phone?phone=2061115201&api_key=API_KEY
    baseUrl: string = "https://proapi.whitepages.com/3.0/phone?phone=";
    phoneNumber: string = "8587366420";
    urlTail: string = "&api_key=a585214ad08640e09240e4cffbd26e7f";
    

  constructor(private http: HttpClient) {}
  
//   ngOnInit():void {
//       getData();
//   }
  
  getData (){
    //   console.log(this.baseUrl + this.phoneNumber + this.urlTail);
    return this.http.get(this.baseUrl + this.phoneNumber + this.urlTail);
    //  return this.http.get("https://proapi.whitepages.com/3.0/phone?phone=8587366420&api_key=a585214ad08640e09240e4cffbd26e7f");
  }

}
