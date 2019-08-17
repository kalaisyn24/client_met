import {UsersModel} from '../../../model/UsersModel';
import {PageDetails} from '../../../model/PageDetails';


export class UserService {

  public users: UsersModel[] = [
    {
      id: 100,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1001,
      fioData: 'айцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1002,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1003,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1004,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1005,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1006,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1007,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 1008,
      fioData: 'йцук ен',
      ageData: 14,
      balance: 1234,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 2,
      fioData: 'йцук ен',
      ageData: 20,
      balance: 4321,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 3,
      fioData: 'йцук ен',
      ageData: 41,
      balance: 3213,
      charmData: 'badGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 4,
      fioData: 'Новиков Лавр Рудольфович',
      ageData: 23,
      balance: 1123,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 5,
      fioData: 'Исаков Клим Юрьевич',
      ageData: 54,
      balance: 4312,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 6,
      fioData: 'Ширяева Диана Евсеевна',
      ageData: 25,
      balance: 1222,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 7,
      fioData: 'Фомичёва Георгина Кирилловна',
      ageData: 34,
      balance: 33331,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 8,
      fioData: 'Соболева Аида Эдуардовна',
      ageData: 123,
      balance: 1234,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 9,
      fioData: 'Никитина Инга Степановна',
      ageData: 3123,
      balance: 5432,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
    {
      id: 10,
      fioData: 'йцук ен',
      ageData: 53,
      balance: 2345,
      charmData: 'goodGuy',
      registrationAddress: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      addressOfResidence: {
        street: 'Рыскулова',
        home: '75',
        flat: '57'
      },
      phone: {
        mobile: 77470507282,
        home: 789789,
        work: 978987,
        mobile2: 78978978978978978
      }
    },
  ];

  updateUsers(updatedUser: UsersModel) {

    console.log('[users]:  ', this.users);

    for (let i = 0; i < this.users.length; i++) {
      if (updatedUser.id === this.users[i].id) {
        this.users[i] = updatedUser;
        console.log('[users2]:  ', this.users);
        return this.users;
      }
    }
  }
  // изменяем данные
  public getEditData(userId: number): UsersModel {

    let user;
    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].id === userId) {
        user = this.users[i];
        console.log(('b' + 'a' + +'a' + 'a').toLowerCase() + user.id);
      }
    }
    return user;
  }
  public  getFilteredLength(pageFilter: PageDetails): number {
    const filteredData: UsersModel[] = [];
    if (pageFilter.filter !== '') {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        if ((this.users[i].fioData).toLowerCase().includes((pageFilter.filter))) {
          filteredData.push(this.users[i]);

        }
      }
      return filteredData.length;
      console.log(this.users.length);
    } else {
      return this.users.length;
    }
  }
  public getSortedData(pageFilter: PageDetails): UsersModel[] {
    const dataSort: UsersModel[] = [];
    if (pageFilter.sortName === undefined || pageFilter.sortName === '' ) {
      for (let i = 0; i < this.users.length; i++) {
        dataSort[i] = this.users[i];
      }
    }
    // сортировка по fioData
    if (pageFilter.sortName === 'asc' && pageFilter.sortActive === 'fioData') {
      for (let i = 0; i < this.users.length; i++) {
        dataSort[i] = this.users[i];
      }
      const sortedArray: any[] = dataSort.sort((n1, n2) => {
      if (n1.fioData > n2.fioData) {
        return 1;
      }

      if (n1.fioData < n2.fioData) {
        return -1;
      }

      return 0;
    });
    }
    // unсортировка по fioData
    if (pageFilter.sortName === 'desc' && pageFilter.sortActive === 'fioData') {
      for (let i = 0; i < this.users.length; i++) {
        dataSort[i] = this.users[i];
      }
      const sortedArray: any[] = dataSort.sort((n1, n2) => {
        if (n1.fioData > n2.fioData) {
          return -1;
        }

        if (n1.fioData < n2.fioData) {
          return 1;
        }

        return 0;
      });
    }
    // проверка фильтрации
    const filteredData: UsersModel[] = [];
    if (pageFilter.filter !== '') {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        if ((this.users[i].fioData).toLowerCase().includes((pageFilter.filter))) {
          filteredData.push(dataSort[i]);
        }
      }
    }
    const sortedData: UsersModel[] = [];
    if (filteredData.length !== 0) {
      for (let i = pageFilter.offset; i < filteredData.length; i++) {
        const filtered: UsersModel[] = [];
        filtered[i] = filteredData[i];
      }
      for (let i = pageFilter.offset; i < pageFilter.limit; i++) {
        sortedData.push(filteredData[i]);
      }
    } else {
      for (let i = pageFilter.offset; i < pageFilter.limit; i++) {
        sortedData.push(dataSort[i]);
      }
    }

    console.log(sortedData);
    return sortedData;
  }

  public removeUser(id: number) {

    this.users = this.users.filter(x => x.id !== id);
  }
  getNewUser(result: UsersModel)  {
    this.users.unshift(result);
  }

  // передаем длину массива
  public getLength(): number {
    return this.users.length;
  }


}
