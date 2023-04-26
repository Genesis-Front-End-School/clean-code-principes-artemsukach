### Single Responsibility Principle
SRP вимагає, щоб кожен клас відповідав за щось одне. Для прикладу в бібліотеці Node.js багато класів слідують цьому принципу. Ось один із них:

fs - модуль Node.js, який забезпечує функції для роботи з файловою системою. Він має різні методи для створення, читання, запису та видалення файлів. Кожен метод виконує якусь конкретну роботу. Наприклад, метод fs.writeFile() відповідає за запис даних в файл.

### Liskov Substitution Principle
"Підкласи мають бути заміною суперкласів". Приклад з React.JS:

React.Component - це батьківський клас для всіх компонентів React. Це означає, що будь-який компонент, який успадковується від цього класу, може бути замінений будь-де в додатку, де використовується React.Component.

Або приклад з Node.js:

Класи Readable та Writable є нащадками класу EventEmitter, і можуть використовуватися замість нього.

### GOF патерн Decorator

Дозволяє додати нову функціональність без зміни коду.

У React бібліотеці react-redux є Higher-Order Components, які додають функціональність до наявних компонентів. Наприклад connect - використовується для з'єднання компонента з Redux store.

```javascript
import { connect } from 'react-redux';

const Text = ({ text }) => (
  <p>{text}</p>
);

const mapStateToProps = state => ({
  text: state.text
});

export default connect(
  mapStateToProps,
)(Text);

```

### Interface Segregation

Принцип Interface Segregation заснований на ідеї, що клієнти не повинні залежати від інтерфейсів, які вони не використовують. Це означає, що великі інтерфейси повинні бути розділені на менші та більш вузьконаправлені.

Приклад з бібліотеки 'axios':

У axios є instance, який описує методи для виконання HTTP-запитів. Але він дуже великий та містить методи, які не завжди потрібні клієнтам. 

```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.com',
});

apiClient.get('/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

У цьому прикладі використовується instance для виконання HTTP-запиту методом get(). Тобто клієнт отримує доступ лише до методів, які необхідні для виконання запитів.