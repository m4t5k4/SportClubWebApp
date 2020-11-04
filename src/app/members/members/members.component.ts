import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MemberService } from '../member.service';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Observable<Member[]>;
  selectedMember: Member = null;
  chosenMember: Member = null;
  constructor(private _memberService: MemberService) {
    //this.members = this._memberService.getMembers();
    // First 2 members
    this.members = this._memberService.getMembers()
      .pipe(
        map(res => {
          return res.slice(0,2);
        }),
        tap(t => console.log(t))
      );
  }
  addMember () {
    let memberToAdd = new Member(0, "Ronny Ronnies", new Date("1976-10-05T00:00:00.000Z"), "Zeppedreef 12");
    this._memberService.addMember(memberToAdd).subscribe();
  }

  updateMember () {
    let memberToUpdate = new Member(1, "Steven Stevens", new Date("1973-04-12T00:00:00.000Z"), "Stevendreef 12");
    this._memberService.updateMember(1, memberToUpdate).subscribe();
  }

  deleteMember () {
    this._memberService.deleteMember(2).subscribe();
  }

  showDetailMember (m: Member) {
    this.selectedMember = m;
  }

  onChooseMember (member: Member) {
    this.chosenMember = member;
  }
  
  ngOnInit(): void {
  }

}
