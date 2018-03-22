import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../data.service"
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  id: number;
  private sub: any;
  public project:any

  constructor(private route: ActivatedRoute,public dataService:DataService,public sanitizer: DomSanitizer) {


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log(this.id)
      this.project=this.dataService.getProjectById(this.id)
      console.log(this.project)

      // In a real app: dispatch action to load the details here.
    });
  }

  goGithub(){

  }
  goProjectHome(){
    window.open(this.project.projectLink,"_blank")
  }

}
