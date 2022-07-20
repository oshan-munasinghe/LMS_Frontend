import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 _fb="http://www.fb.com/oshan.malith.5"
 _insta="https://www.instagram.com/oshan_malith"
 _linkedin="https://www.linkedin.com/in/oshan-malith/"
 _github="https://github.com/oshan-munasinghe"
 _reddit="https://www.reddit.com/user/Malith_3t-/"

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  facebook()  {window.open(this._fb,'_blank')}
  instagram(){window.open(this._insta,'_blank')}
  linkedin(){window.open(this._linkedin,'_blank')}
  github(){window.open(this._github,'_blank')}
  reddit(){window.open(this._reddit,'_blank')}

}
