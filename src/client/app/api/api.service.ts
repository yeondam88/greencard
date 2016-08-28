import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    public requests: number = 0;
    public requestsEmitter = new EventEmitter<number>();
    private url: string;

    constructor (private http: Http){
        if ('<%= ENV %>' === 'prod') { this.url = "/rest/"; }
        else { this.url = "http://localhost/rest/"; }
    }

    login(credential: any){
        let body = JSON.stringify({'credential': credential});
        return this.http.post(this.url + 'login', body)
            .map(res => <any> res.json())
    }

    adminLogin(credential: any){
        let body = JSON.stringify({'credential': credential});
        return this.http.post(this.url + 'admin/login', body)
            .map(res => <any> res.json())
    }

    getCountries(){
        return this.http.get(this.url + 'countries')
            .map(res => <any[]> res.json())
    }

    putCountries(denied: any[]){
        let body = JSON.stringify({'denied': denied})
        return  this.http.put(this.url + 'countries', body)
            .map(res => <any[]> res.json())
    }

    getApplications(){
        return this.http.get(this.url + 'applications')
            .map(res => <any[]> res.json())
    }

    getApplication(id: string){
        return this.http.get(this.url + 'applications' + '/' + id)
            .map(res => <any[]> res.json())
    }

    getFamily(id: string){
        return this.http.get(this.url + 'applications' + '/' + id + '/family')
            .map(res => <any[]> res.json())
    }

    postApplication(application: any){
        let body = JSON.stringify({'application': application});
        return this.http.post(this.url + 'applications', body)
            .map(res => <any> res.json())
    }

    getNews(){
        return this.http.get(this.url + 'news')
            .map(res => <any[]> res.json())
    }

    getLatestNews(){
        return this.http.get(this.url + 'news/latest')
            .map(res => <any[]> res.json())
    }

    getArticle(id: string){
        return this.http.get(this.url + 'news' + '/' + id)
            .map(res => <any[]> res.json())
    }

    postArticle(article: any){
        let body = JSON.stringify({'article': article});
        return this.http.post(this.url + 'news', body)
            .map(res => <any> res.json())
    }

    putArticle(article: any){
        let body = JSON.stringify({'article': article});
        return this.http.put(this.url + 'news' + '/' + article.id, body)
            .map(res => <any> res.json())
    }
}