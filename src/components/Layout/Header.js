import { Fragment } from 'react'; //to wrap around the jsx 
import HeaderCartButton from './HeaderCartButton';
import meals from '../../assets/meals.jpeg';
import classes from './Header.module.css';


const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={meals} alt="A table full of food!"/>
    </div>
  </Fragment>
};
// classes['main-image'] -> no dot notation because of the dash 
export default Header;