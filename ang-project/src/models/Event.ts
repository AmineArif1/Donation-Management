export class Event {
    id: number;
    name: string;
    description: string;
    date: string;
    image: File;
    lieuEvent: string;
    constructor( name: string, description: string, date: string, lieuEvent:string,image: File) {
      this.name = name;
      this.description = description;
      this.date = date;
      this.image = image;
      this.lieuEvent=lieuEvent;
  
    }
  }