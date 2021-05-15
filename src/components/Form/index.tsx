import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

import { IFormProps } from 'types/types';
import { getNumberFormat, getStageData } from 'utils';

import { StyledInputForm } from './styles/InputForm.styled';
import { useState } from 'react';
import { StyledDatePicker } from './styles/DatePicker.styled';

const InputForm: React.FC<IFormProps> = (props) => {
  const { dispatch, inputValue, searchStage, stageData, loading } = props;

  const [clearDate, setClearDate] = useState(new Date());

  const handleStageChange = (values: NumberFormatValues) => {
    const { value, formattedValue } = values;

    dispatch({ type: 'SET_INPUT_VALUE', inputValue: value.trim() });
    dispatch({ type: 'SET_SEARCH_STAGE', searchStage: formattedValue.trim() });
  };

  const handleSubmitUserInput = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('happen');
    if (searchStage === stageData.stage) {
      dispatch({ type: 'SET_FILTERED_STAGES', filteredStages: [] });

      return;
    }

    if (loading) {
      toast('Loading, please wait.');

      return;
    }

    if (inputValue.length < 3) {
      toast('Please enter valid stage.', {
        type: 'warning'
      });

      return;
    }

    getStageData(searchStage, dispatch);
    dispatch({ type: 'SET_FILTERED_STAGES', filteredStages: [] });
  };

  const handleTimeChange = (values: NumberFormatValues) => {
    const { formattedValue, value } = values;

    const hh = Number(formattedValue.slice(0, 2));
    const mm = hh * 60 + Number(formattedValue.slice(3));
    const ss = mm * 60;

    if (value.length === 4) {
      dispatch({ type: 'SET_CLEAR_DATE', clearDate: ss * 1000 + Number(clearDate) });
    }
  };

  const validateDateInput = (values: NumberFormatValues) => {
    const { formattedValue } = values;

    const hh = Number(formattedValue.slice(0, 2));
    const mm = Number(formattedValue.slice(3));

    if (hh > 23 || mm > 59) {
      return false;
    }

    return true;
  };

  // format user input depending on user input length
  const format = getNumberFormat(inputValue.toString().length);

  const StageInputElementWithProps = (
    <NumberFormat
      value={inputValue}
      onValueChange={handleStageChange}
      isNumericString
      format={format}
      id='stageInput'
    />
  );

  const TimeInputElementWithProps = (
    <NumberFormat
      format='##:##'
      placeholder='hh:mm'
      id='dateInput'
      isAllowed={validateDateInput}
      onValueChange={handleTimeChange}
    />
  );

  const DatePickerWithProps = (
    <StyledDatePicker clearDate={clearDate} setDate={setClearDate} />
  );

  return (
    <StyledInputForm onSubmit={handleSubmitUserInput}>
      <div>
        <label htmlFor='stageInput'>Enter last passed stage:</label>
        {StageInputElementWithProps}
      </div>
      <div>
        <label htmlFor='dateInput'>Enter stage clear time:</label>
        <div className='date-picker'>
          {DatePickerWithProps}
          {TimeInputElementWithProps}
        </div>
      </div>
      <input type='submit' hidden />
    </StyledInputForm>
  );
};

export default InputForm;
