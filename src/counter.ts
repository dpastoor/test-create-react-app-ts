import { observable, action } from 'mobx';

export default class ObservableCounter {
   @observable count: number; 
   constructor(init: number = 0) {
       this.count = init;
   }
   @action increment() {
       this.count += 1;
   }
   @action decrement() {
       this.count -= 1;
   }
}