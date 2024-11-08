
import { makeAutoObservable } from 'mobx'
class Mainstore{
  name: string='yangjinglin';
  age: number=22;
 
  // 计算属性
  get sum() {
    return 2024-this.age
  };
  // actions 方法，专门来修改 store 中数据的值可以选择在这里标记也可以选择在
  updatename(step) {
    this.name= step
  };
  updateage (step) {
    this.age= step
  };
  constructor(){
    makeAutoObservable(this)
  }
}
export default Mainstore