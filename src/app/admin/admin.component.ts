import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, cityOfOrigin: string, description: string, age: number, cityDistrict: string) {
    const newMember: Member = new Member(name, cityOfOrigin, description, parseInt(age, 10), cityDistrict);
    this.memberService.addMember(newMember);
  }

}
