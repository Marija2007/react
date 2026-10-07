import React from "react";
import {Age} from './components/Age';
import {Adress} from './components/Adress';

export function App() {
  const user1 = {ime: 'Filip', prezime: 'Petrovski', adresa: 'Skopje', godini: 25};
  const user2 = {ime: 'Ana', prezime: 'Stojanovska', adresa: 'Bitola', godini: 16};
  const user3 = {ime: 'Marko', prezime: 'Nikolovski', adresa: 'Skopje', godini: 17};
  const user4 = {ime: 'Elena', prezime: 'Jovanovska', adresa: 'Ohrid', godini: 30};

  const users = [user1, user2, user3, user4];

  return (
    <div id="app">
      <h1>Users</h1>
      <Age users={users}/>
      <hr/>
      <Adress users={users}/>
    </div>
  )
}
