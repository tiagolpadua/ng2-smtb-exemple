import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-smtb-exemple';

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              {
                value: 'Antonette',
                title: 'Antonette'
              },
              {
                 value: 'Bret',
                  title: 'Bret'
                },
              {
                value: 'Samantha',
                title: 'Samantha',
              }],
          },
        },
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.http.get('/assets/data.json')
      .subscribe((data: string[]) => {
        console.log(data);
        this.settings.columns.username.editor.config.list = data.map(nome => ({value: nome, title: nome}));
        this.settings = Object.assign({}, this.settings );
      });
    }, 1000);
  }
}
