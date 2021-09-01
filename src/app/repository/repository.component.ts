import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../get-profile/profile.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  constructor(private service: ProfileService) { }

  submitInput(){
    this.service.getRepoData().subscribe(repos => {
      this.repos = repos;
    }, error => {

    });
    this.repos = '';
  }
  ngOnInit(): void {
  }

}
