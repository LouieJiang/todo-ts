import TodoEvent from "./js/TodoEvent"
import TodeEvent from "./js/TodoEvent"
import { ITodoData } from "./js/typings"

(doc=>{
  const oInput:HTMLInputElement = document.querySelector('input')
  const oAddBtn:HTMLElement = document.querySelector('button')
  const oTodeList:HTMLElement = document.querySelector('.todo-list')

  const todoData:ITodoData[]=[
    {
      id:1,
      content:'123',
      completed: true,
    },
    {
      id:2,
      content:'234',
      completed:true,
    },
    {
      id:3,
      content:'345',
      completed:true,
    },
  ]

  const todoEvent:TodeEvent = new TodoEvent(todoData,oTodeList)

  const init = ():void=>{
    bindEvent();
  }

  function bindEvent():void {
    oAddBtn.addEventListener('click',handleAddBtnClick,false)
    oTodeList.addEventListener('click',handleListClick,false)
  }

  function handleAddBtnClick():void {
    const val:string = oInput.value.trim()
    if(val.length){
      const ret = todoEvent.addTodo({
        id:4,
        content:val,
        completed:false
      })
      if(ret && ret === 1001){
        alert('已存在')
        return
      }
    }
    
    
    console.log("todoData",todoData);
    
  }

  function handleListClick(e:MouseEvent):void {
    const tar = e.target as HTMLElement 
    const tagName = tar.tagName.toLowerCase()
    console.log("tagName",tagName);
    
    if(tagName==='input'){
      console.log("tar.dataset.id",tar.dataset.id);
      
      todoEvent.toggleComlete(tar,Number(tar.dataset.id))
    }

    if(tagName==='button'){
      todoEvent.removeTodo(tar,Number(tar.dataset.id))
    }
    
  }

  init()
})(document)

