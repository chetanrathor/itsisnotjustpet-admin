import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/interface/response/user';
import { ApiService } from 'src/app/services/api.service';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users :any
  constructor(private api:ApiService,private get:GetService) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.get.getallusers(1)
    console.log(this.users);
    
  }
}
