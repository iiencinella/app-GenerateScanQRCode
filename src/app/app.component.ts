import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-GenerateScanQRCode';

  //Generating QR Code

  elementTypeG = NgxQrcodeElementTypes.URL;
  correctionLevelG = NgxQrcodeErrorCorrectionLevels.HIGH;
  valueG = 'Hola Mundo!';

  //Reading QR Code
  scanSuccessHandle(e: any) {
    console.log(e);
  }
}
