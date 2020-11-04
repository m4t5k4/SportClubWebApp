import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../members/models/member.model'

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>("https://localhost:44359/api/member")
  }
  addMember (member: Member) {
    return this.http.post<Member>("https://localhost:44359/api/member", member);
  }
  updateMember (memberID: number, member: Member) {
    return this.http.put<Member>("https://localhost:44359/api/member/" + memberID, member);
  }

  deleteMember (memberID: number) {
    return this.http.delete<Member>("https://localhost:44359/api/member/" + memberID);
  }
}
