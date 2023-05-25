import { Component ,  Input,  OnInit  } from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;

  array=[1 ,2 ,3 ,4 ,5];

  isodate ="2023-05-25T05:12:00"

  amount = 199

  ticket= 56.3456789

  birthday = new Date(2006, 1 , 1)



  ngOnInit(): void {
    console.log(this.title)

  }


}
