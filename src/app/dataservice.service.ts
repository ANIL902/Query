import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor(private http:HttpClient) { }

  getdata(){
    let apiURL="http://202.65.158.172:9097/floor/{loginid}/all/{orgid}";
    apiURL = apiURL.replace('{loginid}', '1').replace('{orgid}','1')
    return this.http.get(apiURL);
  }
  createdata(loginid){
    let url="http://202.65.158.172:9097/floor/{loginid}/create"
    url=url.replace('{loginid}','1')
    return this.http.post(url,loginid);
  }
  editdata(value){
    let puturl="http://202.65.158.172:9097/floor/{loginid}/update";
    puturl=puturl.replace('{loginid}','1')
    return this.http.put(puturl,value);
  }
  getQuery(Prefix,roomid){
    let URL="http://202.65.158.172:9097/service/{loginid}/validate/service-prefix/{levelid}?serviceprefix="+Prefix + '&roomid'+roomid;
    URL=URL.replace('{loginid}','1').replace('{levelid}','1')
    return this.http.get(URL)
  }
  // getQuery(service){
  //   let abc="http://202.65.158.172:9097/service/{loginid}/validate/service-prefix/{levelid}?serviceprefix="+service
  //   abc=abc.replace('{loginid}','1').replace('{levelid}','1')
  //   return this.http.get(abc)
  // }


}
