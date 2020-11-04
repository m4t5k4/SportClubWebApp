import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../models/member.model';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;
  @Output() chooseMember = new EventEmitter<Member>();
  constructor() { }

  choose (m: Member) {
    this.chooseMember.emit(m);
  }

  ngOnInit(): void {
  }

}
