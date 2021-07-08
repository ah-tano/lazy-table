export interface IEmployee {
  id: number;
  name: string;
  age: number;
  birthDate: string;
}

export interface IColumn {
  name: string,
  field: string,
  type: 'number' | 'text' | 'date'
}

export const columns: IColumn[] = [
  {
    name: 'Id',
    field: 'id',
    type: 'number'
  },
  {
    name: 'Name',
    field: 'name',
    type: 'text'
  },
  {
    name: 'Age',
    field: 'age',
    type: 'number'
  },
  {
    name: 'Date of Birth',
    field: 'birthDate',
    type: 'date'
  }
];

export const employees: IEmployee[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    age: 36,
    birthDate: '1985-02-19T00:00:00',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    age: 54,
    birthDate: '1967-02-13T00:00:00',
  },
  {
    id: 3,
    name: 'Asiya Javayant',
    age: 31,
    birthDate: '1990-10-05T21:00:00.000Z',
  },
  {
    id: 4,
    name: 'Bernardo Dominic',
    age: 39,
    birthDate: '1982-12-02T21:00:00.000Z',
  },
  {
    id: 5,
    name: 'Elwin Sharvill',
    age: 25,
    birthDate: '1996-01-26T22:00:00.000Z',
  },
  {
    id: 6,
    name: 'Ioni Bowcher',
    age: 27,
    birthDate: '1994-01-17T22:00:00.000Z',
  },
  {
    id: 7,
    name: 'Ivan Magalhaes',
    age: 20,
    birthDate: '2001-03-20T22:00:00.000',
  },
  {
    id: 8,
    name: 'Onyama Limba',
    age: 29,
    birthDate: '1992-05-12T21:00:00.000Z',
  },
  {
    id: 9,
    name: 'Stephen Shaw',
    age: 36,
    birthDate: '1985-08-02T20:00:00.000Z',
  },
  {
    id: 10,
    name: 'Xuxue Feng',
    age: 28,
    birthDate: '1993-08-08T21:00:00.000Z',
  },
  {
    id: 11,
    name: 'Leanne Graham',
    age: 36,
    birthDate: '1985-02-19T00:00:00',
  },
  {
    id: 12,
    name: 'Ervin Howell',
    age: 54,
    birthDate: '1967-02-13T00:00:00',
  },
  {
    id: 13,
    name: 'Asiya Javayant',
    age: 31,
    birthDate: '1990-10-05T21:00:00.000Z',
  },
  {
    id: 14,
    name: 'Bernardo Dominic',
    age: 39,
    birthDate: '1982-12-02T21:00:00.000Z',
  },
  {
    id: 15,
    name: 'Elwin Sharvill',
    age: 25,
    birthDate: '1996-01-26T22:00:00.000Z',
  }
];
