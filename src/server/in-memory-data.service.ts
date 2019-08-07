import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id: 41,
        fioData: 'Кузьмин Адольф Максович',
        ageData: 14,
        balance: 1234,
        charmData: 'badGuy',
      },
      {
        id: 40,
        fioData: 'Шилов Мартин Николаевич',
        ageData: 20,
        balance: 4321,
        charmData: 'badGuy',
      },
      {
        id: 42,
        fioData: 'Агафонов Демьян Гордеевич',
        ageData: 41,
        balance: 3213,
        charmData: 'badGuy',
      },
      {
        id: 39,
        fioData: 'Новиков Лавр Рудольфович',
        ageData: 23,
        balance: 1123,
        charmData: 'goodGuy',
      },
      {
        id: 34,
        fioData: 'Исаков Клим Юрьевич',
        ageData: 54,
        balance: 4312,
        charmData: 'goodGuy',
      },
      {
        id: 43,
        fioData: 'Ширяева Диана Евсеевна',
        ageData: 25,
        balance: 1222,
        charmData: 'goodGuy',
      },
      {
        id: 44,
        fioData: 'Фомичёва Георгина Кирилловна',
        ageData: 34,
        balance: 33331,
        charmData: 'goodGuy',
      },
      {
        id: 45,
        fioData: 'Соболева Аида Эдуардовна',
        ageData: 'Старый',
        balance: 1234,
        charmData: 'goodGuy',
      },
      {
        id: 46,
        fioData: 'Никитина Инга Степановна',
        ageData: 'еще младенец',
        balance: 5432,
        charmData: 'goodGuy',
      },
      {
        id: 47,
        fioData: 'Королёва Гелианна Макаровна',
        ageData: 53,
        balance: 2345,
        charmData: 'goodGuy',
      }
    ];
    return { members };
  }
}
