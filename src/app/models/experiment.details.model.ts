/**
 * Created by aditeyapandey on 5/12/17.
 */

export class Experiment {
  id: number
  number_training_trials:number
  number_test_trials:number

  constructor()
  {
    this.number_training_trials=100;
    this.number_test_trials=100
  }

  getTrainingTrials()
  {
    return this.number_training_trials
  }
  getTestTrials()
  {
    return this.number_test_trials;
  }
  setTrainingTrials(value:number)
  {
    this.number_training_trials=value;
  }
  setTestTrials(value:number)
  {
    this.number_test_trials=value;
  }


}