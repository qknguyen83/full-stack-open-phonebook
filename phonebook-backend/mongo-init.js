db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('people');

db.people.insert({ name: 'Arto Hellas', number: '123-123-123' });
db.people.insert({ name: 'Matti Luukkainen', number: '111-222-333' });
db.people.insert({ name: 'Venla Ruuska', number: '123-456-789' });
