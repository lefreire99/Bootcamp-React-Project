const initialState = [];

export function actionsReducer(tasks, action) {
    switch (action.type) {
      case 'next': {
        return nextAction(tasks, {index: action.index, data: action.data})
      }
      case 'back': {
        return backAction(tasks, {index: action.index, data: action.data})
      }
      case 'current_data':{
        return tasks;
      }
      case 'clearall': {
        return initialState;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}

function nextAction(tasks, task){
    let copy ={...tasks}
    const prueba = tasks.shows.map((e,index) => {
        if(index==task.index)
            return true;
        else
            return false;
    })
    
    copy.shows = prueba;
    if(task.index==1){
        copy.general_form.cliente=task.data
    }else if(task.index==2){
        copy.general_form.vehiculo=task.data
    }else if(task.index==3){
        copy.general_form.servicios=task.data
    }
    return copy;
}

function backAction(tasks, task){
    let copy ={...tasks}
    const prueba = tasks.shows.map((e,index) => {
        if(index==task.index)
            return true;
        else
            return false;
    })
    copy.shows = prueba;
    return copy;
}