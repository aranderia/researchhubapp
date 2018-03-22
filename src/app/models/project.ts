/**
 * Created by aditeyapandey on 2/12/18.
 */
export class Version{
  constructor(
    public versionno:number,
    public githubLink:string,
    public dockerHublink:string,
    public amiid:string,
    public abstract: string
  ) {  }

}

export class Project {

  constructor(
    public projectid: number,
    public projectName: string,
    public projectLink:string,
    public authors: string[],
    public paperLink:string,
    public abstract: string,
    public quSandbox:boolean,
    public githubLink:string,
    public dockerHublink:string
  ) {  }

}

export class ProjectList{
  constructor(
  public projectList:Project[]
  ){}
}
