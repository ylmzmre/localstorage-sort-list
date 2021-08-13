export default class DataList {
  public id: number;
  public name: string;
  public link: string;
  public like: number;
  public time: any;

  constructor(myObj: any) {
    Object.assign(this, myObj);
  }
}
