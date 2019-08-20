import {UsersModel} from '../../../model/UsersModel';
import {PageDetails} from '../../../model/PageDetails';


export class UserService {

  public users: UsersModel[] = [
    {
      id: 100123,
      fioData: 'йцук ен Рон',
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
      id: 10013,
      fioData: 'Айцук ен Дзен',
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
      fioData: 'йцук ен Янь',
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
      fioData: 'йцук ен Ин',
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
      fioData: 'йцук ен Вон',
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
      fioData: 'йцук ен Шин',
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
      id: 91,
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
      id: 92,
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
      id: 93,
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
      id: 94,
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
      id: 95,
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
      id: 96,
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
      id: 97,
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
      fioData: 'йцук ен Ким',
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


    for (let i = 0; i < this.users.length; i++) {
      if (updatedUser.id === this.users[i].id) {
        this.users[i] = updatedUser;
        return this.users;
      }
    }
  }

  // изменяем данные
  public getEditData(userId: number): UsersModel {

    let user;
    this.users.forEach(userArray => {
      if (userId === userArray.id) {
        user = userArray;
      }
    });
    return user;
  }
  // передаем цифру элементов для пагинатора
  public getFilteredLength(pageFilter: PageDetails): number {
    const filteredData: UsersModel[] = [];
    if (pageFilter.filter !== '') {
      this.users.forEach(users => {
        if ((users.fioData).toLowerCase().includes((pageFilter.filter))) {
          filteredData.push(users);
        }
      });
      return filteredData.length;
    } else {
      return this.users.length;
    }
  }
  // main method
  public getSortedData(pageFilter: PageDetails): UsersModel[] {
    // проверка фильтрации
    const filteredData: UsersModel[] = [];
    if (pageFilter.filter !== '') {
      this.users.forEach(users => {
        if ((users.fioData).toLowerCase().includes((pageFilter.filter))) {
          if (users) {
            filteredData.push(users);
          }
        }
      });
    }
    if (pageFilter.filter === '') {
      this.users.forEach(users => {
        filteredData.push(users);
      });
    }
    const dataSort: UsersModel[] = [];
    // если пустой фильтр
    if (pageFilter.sortName === undefined || pageFilter.sortName === '') {
      for (let i = 0; i < filteredData.length; i++) {
        dataSort[i] = filteredData[i];
      }
    }
    // сортировка по fioData
    if (pageFilter.sortName === 'asc') {
      for (let i = 0; i < filteredData.length; i++) {
        dataSort[i] = filteredData[i];
      }
      const sortedArray: any[] = dataSort.sort((n1: any, n2: any) => {
        if (pageFilter.sortActive === 'fioData') {
          n1 = n1.fioData;
          n2 = n2.fioData;
        }
        if (pageFilter.sortActive === 'ageData') {
          n1 = n1.ageData;
          n2 = n2.ageData;
        }
        if (pageFilter.sortActive === 'balance') {
          n1 = n1.balance;
          n2 = n2.balance;
        }
        if (n1 > n2) {
          return 1;
        }
        if (n1 < n2) {
          return -1;
        }
        return 0;
      });
    }
    // без сортировки по fioData
    if (pageFilter.sortName === 'desc') {
      for (let i = 0; i < filteredData.length; i++) {
        dataSort[i] = filteredData[i];
      }
      const sortedArray: UsersModel[] = dataSort.sort((n1: any, n2: any) => {
        if (pageFilter.sortActive === 'fioData') {
          n1 = n1.fioData;
          n2 = n2.fioData;
        }
        if (pageFilter.sortActive === 'ageData') {
          n1 = n1.ageData;
          n2 = n2.ageData;
        }
        if (pageFilter.sortActive === 'balance') {
          n1 = n1.balance;
          n2 = n2.balance;
        }
        if (n1 > n2) {
          return -1;
        }
        if (n1 < n2) {
          return 1;
        }
        return 0;
      });
    }
    console.log(dataSort.length, pageFilter.offset);
    const sortedData: UsersModel[] = [];
    if (dataSort.length !== 0) {
      if (dataSort.length < pageFilter.offset + 5) {
        for (let i = pageFilter.offset; i < dataSort.length; i++) {
          const filtered: UsersModel[] = [];
          filtered[i] = dataSort[i];
        }
        for (let i = pageFilter.offset; i < dataSort.length; i++) {
          sortedData.push(dataSort[i]);
        }
      } else {
        for (let i = pageFilter.offset; i < dataSort.length; i++) {
          const filtered: UsersModel[] = [];
          filtered[i] = dataSort[i];
        }
        for (let i = pageFilter.offset; i < pageFilter.limit; i++) {
          sortedData.push(dataSort[i]);
        }
      }
    } else {
      for (let i = pageFilter.offset; i < pageFilter.limit; i++) {
        sortedData.push(this.users[i]);
      }
      console.log(sortedData);
    }
    console.log(sortedData);
    return sortedData;
  }

  public removeUser(id: number) {

    this.users = this.users.filter(x => x.id !== id);
  }

  getNewUser(result: UsersModel) {
    this.users.unshift(result);
  }

  // передаем длину массива
  public getLength(): number {
    return this.users.length;
  }


}
