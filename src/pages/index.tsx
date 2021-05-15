import { GetStaticProps, NextPage } from 'next';
import { useEffect, useReducer } from 'react';

import mongoose from 'mongoose';
import StageSchema from 'schema/stage.schema';

import { initialState, stageReducer } from 'reducers/stageReducer';

import MainLayout from 'layouts/MainLayout';
import Form from 'components/Form';
import Stages from 'components/Stages';
import Stage from 'components/Stages/Stage';
import Rewards from 'components/Rewards';

import { StyledToastify } from 'components/Toastify/styles/Toastify.styled';
import { StyledDatePicker } from 'components/Form/styles/DatePicker.styled';

const HomePage: NextPage<{ stages: string[] }> = ({ stages }) => {
  // getting state
  const [
    {
      filteredStages,
      inputValue,
      searchStage,
      stageData,
      loading,
      shouldShowStages,
      shouldShowRewards,
      clearDate
    },
    dispatch
  ] = useReducer(stageReducer, initialState);

  useEffect(() => {
    if (inputValue) {
      dispatch({ type: 'SET_SHOULD_SHOW_STAGES', shouldShowStages: true });
    } else {
      dispatch({ type: 'SET_SHOULD_SHOW_STAGES', shouldShowStages: false });
    }
  }, [inputValue]);

  useEffect(() => {
    if (stageData.rewards) {
      dispatch({ type: 'SET_SHOULD_SHOW_REWARDS', shouldShowRewards: true });
    } else {
      dispatch({ type: 'SET_SHOULD_SHOW_REWARDS', shouldShowRewards: false });
    }
  }, [stageData]);

  // show stages that match user input
  useEffect(() => {
    if (searchStage.trim().length !== 0) {
      const filteredStages = stages
        .filter((stage) => stage.includes(searchStage))
        .slice(0, 120);

      dispatch({ type: 'SET_FILTERED_STAGES', filteredStages });
    } else {
      dispatch({ type: 'SET_FILTERED_STAGES', filteredStages: [] });
    }
  }, [searchStage]);

  const formProps = {
    dispatch,
    inputValue,
    loading,
    searchStage,
    stageData
  };
  const stagesProps = { stages: filteredStages, Stage, loading, dispatch };
  const rewardsProps = { stageData, dispatch, clearDate };

  return (
    <MainLayout>
      <Form {...formProps} />
      {shouldShowStages && <Stages {...stagesProps} />}
      {shouldShowRewards && <Rewards {...rewardsProps} />}
      <StyledToastify />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI as string, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
      });
    }

    const response = await StageSchema.find().sort({ index: 1 });
    const stages = response.map((stage) => stage.stage);

    return {
      props: {
        stages
      }
    };
  } catch (err) {
    console.error(err);
  }

  return {
    props: {}
  };
};

export default HomePage;
