import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {

  public user$: Observable<any> = this.authSrv.afAuth.user;

  constructor(private authSrv: AuthService) { }

  public onSendEmail() {
    this.authSrv.sendVerificationEmail();
  }

}
