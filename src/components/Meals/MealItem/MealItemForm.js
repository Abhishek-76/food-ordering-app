import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm =props=>{
    return(
    <from className={classes.form}>
        <Input lable="Amount " input={{
            id: 'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button> + ADD</button>
    </from>
    );
};
export default MealItemForm;