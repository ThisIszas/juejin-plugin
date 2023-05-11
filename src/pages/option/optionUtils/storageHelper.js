export function setStorage(key, obj){
    let currentConfigs = localStorage.getItem('pluginConfigs');
    if(!currentConfigs){
        currentConfigs = {};
    }
    currentConfigs[key] = JSON.stringify(obj);

    localStorage.setItem('pluginConfigs', JSON.stringify(currentConfigs));
}

export function getStorage(key){
    let currentConfigs = localStorage.getItem('pluginConfigs');
    if(!currentConfigs){
        return undefined;
    }
    currentConfigs = JSON.parse(currentConfigs);
    
    let targetConfig = currentConfigs[key];
    if(targetConfig){
        return JSON.parse(targetConfig);
    }
    else{
        return undefined;
    }
}