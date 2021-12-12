import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';


declare var $: any;

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.css'],
})
export class VivoComponent implements OnInit {

  misVideos:any[]=[];
  videoId:string="";

  constructor(private _youtube:YoutubeService) {

    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      this.misVideos = resp.items;
      console.log(this.misVideos);

    });
  }

  ngOnInit() {
  }

  detalleVideo(a:string){
   this.videoId=a;
   console.log(this.videoId);
   $('#exampleModal').modal();
  }

  cerrarModal(){
    this.videoId="";
    $('#exampleModal').modal('hide');
  }
}



