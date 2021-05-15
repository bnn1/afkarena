import Picker from 'react-datepicker';
import { IDatePickerProps } from 'types/types';

const DatePicker: React.FC<IDatePickerProps> = ({ className, clearDate, setDate }) => {
  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  console.log(`clearDate`, clearDate);
  return (
    <div className={className}>
      <Picker selected={clearDate} onChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;
