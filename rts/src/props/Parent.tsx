import {Child} from './Child' 

const Parent = () => {
    return <Child color = "red" onClick={() => console.log("CLICKKKKKK!!")} />
};

export default Parent;