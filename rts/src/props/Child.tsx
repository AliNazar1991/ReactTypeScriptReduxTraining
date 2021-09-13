import React from 'react'
interface ChildProps {
    color: string;
    onClick: () => void;
}

// 1st example of exporting a child react component
export const Child = ({color, onClick}: ChildProps) => {
    return <div>{color}
    <button onClick={onClick}>click me</button>
    </div>
};

//2nd example of exporting a child react component - Function component
// FC = Function component, you can also write React.FunctionComponent, but FC is an abbreviation
// This way of declaring a function also takes into account for childrens prop
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>{color}
        <button onClick={onClick}>click me</button>
        </div>
}

