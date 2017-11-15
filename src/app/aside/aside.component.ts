import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public images: string[];
  public index: number;
  public urlImage1: string;
  public urlImage2: string;
  constructor()
   {
     this.index = 0;
    this.images = [
     

      "http://www.sarid.org.il/image/users/82703/ftp/my_files/PIRSUM/HASHMALIA/_%D7%A1%D7%9C%D7%98800%D7%9E%D7%92%D7%A9.jpg?id=8248584",
      "http://www.10dakot.co.il/wp-content/uploads/2017/02/%E2%80%8F%E2%80%8FDSC_0020-%D7%A2%D7%95%D7%AA%D7%A7.jpg",
      "https://www.hashulchan.co.il/wp-content/uploads/2015/11/500_65028.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCfbT9UZBEPJjbKgYu0H-cGikMBHx79dkgvOf860xCQov8M6Znw",

      "https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps2808_UH153291C05_01_3b_WEB.jpg",
      "https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Pumpkin-Torte_EXPS_SDON17_28516_B06_28_5b.jpg",
      "https://www.lifeloveandsugar.com/wp-content/uploads/2015/03/Bananas_Foster_Layer_Cake4.jpg",
      "https://s-media-cache-ak0.pinimg.com/originals/a7/b1/0d/a7b10da405769b461694a7cb5f0c8597.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vdomSjk966BHZoLkbyECsS0O8rr0RthOfxXTuP_6rvY3Tygy",
      "http://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/cake_7006.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXG3IE8bzGrvasZTbY1P28zdjL6dxGLnorwbxBIYLGIzKMmfjEQ"
    ];
    this.urlImage1 = this.image;
    this.urlImage2 = this.image;
    setInterval(() => {
      this.urlImage1 = this.image;
      this.urlImage2 = this.image;
    }, 10000)
    }

    public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }

  ngOnInit() {
  }

}

