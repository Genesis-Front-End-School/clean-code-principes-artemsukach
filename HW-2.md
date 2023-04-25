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
