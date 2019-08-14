import {Injectable} from '@angular/core';
import {PageDetails} from '../../../model/PageDetails';
import {UsersModel} from '../../../model/UsersModel';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users = [
    {
      id: 100,
      fioData: 'Кузьмин Адольф Максович',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
    },
    {
      id: 2,
      fioData: 'Шилов Мартин Николаевич',
      ageData: 20,
      balance: 4321,
      charmData: 'badGuy',
    },
    {
      id: 3,
      fioData: 'Агафонов Демьян Гордеевич',
      ageData: 41,
      balance: 3213,
      charmData: 'badGuy',
    },
    {
      id: 4,
      fioData: 'Новиков Лавр Рудольфович',
      ageData: 23,
      balance: 1123,
      charmData: 'goodGuy',
    },
    {
      id: 5,
      fioData: 'Исаков Клим Юрьевич',
      ageData: 54,
      balance: 4312,
      charmData: 'goodGuy',
    },
    {
      id: 6,
      fioData: 'Ширяева Диана Евсеевна',
      ageData: 25,
      balance: 1222,
      charmData: 'goodGuy',
    },
    {
      id: 7,
      fioData: 'Фомичёва Георгина Кирилловна',
      ageData: 34,
      balance: 33331,
      charmData: 'goodGuy',
    },
    {
      id: 8,
      fioData: 'Соболева Аида Эдуардовна',
      ageData: 'Старый',
      balance: 1234,
      charmData: 'goodGuy',
    },
    {
      id: 9,
      fioData: 'Никитина Инга Степановна',
      ageData: 'еще младенец',
      balance: 5432,
      charmData: 'goodGuy',
    },
    {
      id: 10,
      fioData: 'Королёва Гелианна Макаровна',
      ageData: 53,
      balance: 2345,
      charmData: 'goodGuy',
    }
  ];

  public getEditData(userId: number): UsersModel {

    let user;
    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].id === userId) {
        user = this.users[i];
        console.log(('b' + 'a' + + 'a' + 'a').toLowerCase() + user.id);
      }
    }

    return user;
  }

  public getSortedData(pageDetails: PageDetails) {
    console.log(pageDetails.sortName);
  }

  public getDeleteId(pageDetails: PageDetails) {
    console.log(pageDetails.id);
  }

  public getAll() {
    return this.users;
  }
}
