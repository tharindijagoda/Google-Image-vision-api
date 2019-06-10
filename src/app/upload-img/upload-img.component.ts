import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpApiService } from '../http-api.service';
import { AppModelService } from '../app-model.service';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

    public imageAnalysisReport: any;
    public showAnalysisReport: boolean;
    constructor(
        private httpApiService: HttpApiService,
        private router: Router,
        private appModelService: AppModelService
    ) { }

  ngOnInit() {
    this.showAnalysisReport = false;
  }

  /**
   * When user select an image, this method gets called and fetch image related
   * details from Goole Image Vision API.
   * @param event event object which contains file related information.
   */
  onFileChange(event: any) {
    const apiKey = 'include the api key here';
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
    const body: any = {
      requests: [
          {
              image: {
                  content: null
              },
              features: [
                  {
                      type: 'TYPE_UNSPECIFIED',
                      maxResults: 50
                  },
                  {
                      type: 'LANDMARK_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'FACE_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'LOGO_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'LABEL_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'DOCUMENT_TEXT_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'SAFE_SEARCH_DETECTION',
                      maxResults: 50
                  },
                  {
                      type: 'IMAGE_PROPERTIES',
                      maxResults: 50
                  },
                  {
                      type: 'CROP_HINTS',
                      maxResults: 50
                  },
                  {
                      type: 'WEB_DETECTION',
                      maxResults: 50
                  }
              ],
              imageContext: {
                  cropHintsParams: {
                      aspectRatios: [
                          0.8,
                          1,
                          1.2
                      ]
                  }
              }
          }
      ]
    };

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.appModelService.imgName = reader.result;
      const image64Base = reader.result.split(',')[1];
      body.requests[0].image.content = image64Base;
      this.httpApiService.postImage(url, body)
      .subscribe((res: any) => {
        if (res.hasOwnProperty('type') && res.type.toLowerCase() === 'error') {
          console.log('API throwing an error, please check request object or network connection.');
        } else {
            console.log('res ==>', res);
          this.appModelService.imageAnalysisReport = res;
          this.router.navigate(['/img-details'], { skipLocationChange: true });
        }
      });
    };

    reader.readAsDataURL(file);
  }
}
