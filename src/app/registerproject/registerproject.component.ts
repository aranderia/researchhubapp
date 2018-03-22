import { Component, OnInit } from '@angular/core';
import {Version,Project,ProjectList} from "../models/project"
import {DataService} from "../data.service"
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-registerproject',
  templateUrl: './registerproject.component.html',
  styleUrls: ['./registerproject.component.css']
})
export class RegisterprojectComponent implements OnInit {

  showSecondAuthor=false;
  showThirdAuthor=false;
  icon1="glyphicon glyphicon-plus"
  projectName="";
  author1="";
  author2="";
  author3="";
  author4="";
  author5="";
  author={1:this.author1,2:this.author2,3:this.author3,4:this.author4,5:this.author5}
  projectLink="";
  paperLink=""
  abstract="";
  githubLink="";
  dockerhubLink="";
  amiid:string
  public publishonQuSandbox:boolean
  authorList=[]
  github


  //Authors Counter
  totalAuthors=1;

  constructor(public dataService:DataService,private router: Router, private route: ActivatedRoute) {
    this.publishonQuSandbox=false;

  }

  ngOnInit() {
  }

  addAuthor(element){
    this.icon1="glyphicon glyphicon-minus"
    if(element==2){
      this.showSecondAuthor=true;

    }
    if(element==3){
    this.showThirdAuthor=true
    }
    this.totalAuthors=this.totalAuthors+1

  }
  removeAuthor(){


    if(this.totalAuthors==2){
      this.showSecondAuthor=false;
      this.totalAuthors=this.totalAuthors-1
    }
    if(this.totalAuthors==3){
      this.showThirdAuthor=false;
      this.totalAuthors=this.totalAuthors-1
    }


  }
  registerProject(input){

    this.author={1:this.author1,2:this.author2,3:this.author3,4:this.author4,5:this.author5}
    for(let i=1;i<=this.totalAuthors;i++){
      this.authorList.push(this.author[i])
    }


    console.log(this.authorList)

    let project =  new Project(3,this.projectName,this.projectLink,this.authorList,this.paperLink,this.abstract,this.publishonQuSandbox,this.githubLink,this.dockerhubLink);


   if(!input){
     this.dataService.addnewProject(project);
     alert("Project Added Successfully!")
     this.router.navigate(['/homepage'])

   }

  }
}
