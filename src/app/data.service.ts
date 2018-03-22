import { Injectable } from '@angular/core';
import {Version,Project,ProjectList} from "./models/project"
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Http} from "@angular/http";

@Injectable()
export class DataService {

  private apiURL="http://www.google.com"
  data: any={}

  constructor(private http:Http) {
  this.postData()
  //this.loginValidation({username:"aditeya",password:"password"})
  }

  version1 = new Version(1,"This is a dummy abstract","","","")
  version2 = new Version(2,"This is a dummy abstract","","","")
  project =  new Project(1,"Predicting Survival in patients with brain tumor","https://drive.google.com/open?id=0BwnGj5qD7BpXeUEtYnU4WV92TTQ",["Supraja Krishnan","Aditeya Pandey","Micha Schwab"],"https://drive.google.com/file/d/1trYiXdkESfu9cWiwygksNeiAbUETPIxF/preview","This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",true,"","");
  project1 = new Project(2,"Abstract Glyphs improve categorization accuracy","https://drive.google.com/open?id=0BwnGj5qD7BpXeUEtYnU4WV92TTQ",["Aditeya Pandey","Michelle Borkin"],"https://drive.google.com/file/d/0BwnGj5qD7BpXMml5cmxEb0VURk0/preview","This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",true,'','');


  projects={1:this.project,2:this.project1}

  projectList= new ProjectList([this.project,this.project1])

  addnewProject(project):void{
    let currentProjects=this.projectList.projectList
    currentProjects.push(project)
    this.projectList=new ProjectList(currentProjects)
    this.projects[3]=project
  }

  getProjectList():Observable<ProjectList>{
    return of(this.projectList)
  }

  postData(){
    console.log("executing")

    this.http.get('http://127.0.0.1:8081/2').subscribe(data => {
      console.log(data.json());
    });
  }

  getProjectById(id){

    return this.projects[id]

  }

  loginValidation(loginDetails:any) {

   return this.http.get("http://127.0.0.1:8081/login/"+JSON.stringify(loginDetails)).map((res) => res.json());

  }
  //
  // otherMethod(loginDetails:any){
  //   let test
  //   this.loginValidation(loginDetails).subscribe(data => return data)
  // }

//this.http.get(this.apiURL).catch(this.handleError)

    //this.http.get(this.apiURL).map(response => console.log(response))

    //return this.http.get(this.apiURL).map(response => response.json())

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for development purposes only
  //   return Promise.reject(error.message || error);
  // }

  // getData(): Observable<any>{
  //   console.log("calling it")
  //   return this.http.get(this.apiURL).map(response => response.json())
  // }
  //
  // getContacts(){
  //   this.getData().subscribe(data=>{
  //     console.log(data)
  //   })
  //}


}
