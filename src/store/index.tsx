
import { makeAutoObservable, action } from 'mobx'
import Mainstore from './modules/mainstore'
 
class Store{
maindata;
constructor(){
  makeAutoObservable(this)
  this.maindata=new Mainstore()
}
}
const store=new Store()
export default store