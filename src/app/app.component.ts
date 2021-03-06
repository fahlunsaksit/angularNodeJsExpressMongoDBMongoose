import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularNodeJsExpressMongoDBMongoose';

  mDataArray : any[] = []
  
  constructor(private http: HttpClient){};

  ngOnInit(): void {
    this.getFeedback();
  }

  onSubmit(data){
    // alert(JSON.stringify(data));
    // let postData = {username:data.email,feedback:data.feedback}
      this.http.post<any>('http://localhost:2200/api',data).subscribe(result=>{
        // alert(JSON.stringify(result));
        alert(JSON.stringify(result));
        this.getFeedback();
      });
  }

  getFeedback(){
    this.http.get<any>('http://localhost:2200/api').subscribe(result=>{
      // alert(JSON.stringify(result));
      // alert(JSON.stringify(result));
        this.mDataArray = result.data;
    });

  }
  
}
