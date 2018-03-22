import { Component, OnInit } from '@angular/core';
import {Version, Project, ProjectList} from '../models/project';
import {version} from 'punycode';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  projectList: ProjectList
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {

    //console.log(this.dataService.getProjectList())
    this.dataService.getProjectList().subscribe(heroes => this.projectList = heroes);
  }

  ngOnInit() {
  }

   // version1 = new Version(1,"This is a dummy abstract")
   // version2 = new Version(2,"This is a dummy abstract")
   // project =  new Project(1,"Predicting Survival in patients with brain tumor",["Aditeya Pandey","Michelle Borkin"],"This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",[this.version1,this.version2]);
   // project1 = new Project(2,"Abstract Glyphs improve categorization accuracy",["Aditeya Pandey","Michelle Borkin"],"This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",[this.version1,this.version2]);
   //
   // projectList= new ProjectList([this.project,this.project1])

  naviagteToProject(id){
    console.log(id)
    // let link = [{
    //   outlets: {
    //     details: ['project', '1']
    //   }
    // }];
    this.router.navigate(['/project',id])
  }


}
