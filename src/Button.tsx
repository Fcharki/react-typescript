import { useState, useRef } from 'react';

// TODO :  using interface | type to pass props
// interface ButtonProps {
//     backgroundColor: string,
//     fontSize: number,
// }
// export const Button:React.FC<ButtonProps> = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <button className="text-center py-2 px-4 rounded-md"
//         onClick={() => setCount(count+1)}> count is {count}</button>
//     )
// }
// export type Colors = 'blue' | 'yellow' | 'green' | 'purple' | 'orange'; // ? instead of repeating ourselves, 
//                                                                     //? just create another type for colors


// // TODO : using types to pass props with optional '?' 
// type ButtonProps = {
//     backgroundColor: Colors,  //? union type
//     textColor?: Colors,
//     fontSize?: number, //? using '?' to make properties optional 
//     buttonPadding: [number, number, number, number], //? a more specific array=> forcing a given structure 
    
// }
// export const Button = ({ backgroundColor, fontSize, textColor, buttonPadding } : ButtonProps ) : JSX.Element => {
//     const [count, setCount] = useState<number>(0);
//     return (
//         <button 
//         className="text-center py-2 px-4 rounded-md"
//         style={{ 
//             backgroundColor: backgroundColor, 
//             fontSize: fontSize, 
//             color: textColor, 
//             padding: `${buttonPadding[0]}px
//                       ${buttonPadding[1]}px  
//                       ${buttonPadding[2]}px 
//                       ${buttonPadding[3]}px`,
                    
//             }}
//         onClick={() => setCount(count+1)}> count is {count}</button>
//     )
// }

// type Colors = 'blue' | 'yellow' | 'green' | 'purple' | 'orange'; // ? instead of repaeting ourselves, just 
//                                                                 // ?? create another type for colors
// // TODO : we can pass an object of attrs instead of individual attrs, like 'style' object below
// type ButtonProps = {
//                     style :
//                     { 
//                         backgroundColor: Colors,  //? union type
//                         textColor?: Colors,
//                         fontSize?: number, //? using '?' to make properties optional 
//                         buttonPadding: [number, number, number, number], //? a more specific array=> forcing a given structure 
//                     }
// }
// const Button = ({ style } : ButtonProps ) : JSX.Element => {
//     const [count, setCount] = useState<number>(0);
//     return (
//         <button 
//         className="text-center py-2 px-4 rounded-md"
//         style={style}
//         onClick={() => setCount(count+1)}> count is {count}</button>
//     )
// }

// TODO : USING React.CSSProperties TO ALLOW PASSING ANY TYPE OF CSS PROPERTY WITHOUT NEEDING TO DECLARE IT FIRST
// type ButtonProps = {
//                     style : React.CSSProperties
                 
// }
// export const Button = ({ style } : ButtonProps ) : JSX.Element => {
//     const [count, setCount] = useState<number>(0);
//     return (
//         <button 
//         className="text-center py-2 px-4 rounded-md"
//         style={style}
//         onClick={() => setCount(count+1)}> count is {count}</button>
//     )
// }

// TODO : 
// type ButtonProps = {
//     borderRadius : {
//         topLeft: number, 
//         topRight: number, 
//         bottomRight: number, 
//         bottomLeft: number, 
//     }
 
// }
// export const Button = ({ borderRadius } : ButtonProps ) : JSX.Element => {
// const [count, setCount] = useState<number>(0);
// return (
// <button 
// className="text-center py-2 px-4 rounded-md"
// onClick={() => setCount(count+1)}> count is {count}</button>
// )
// }

// TODO : using  RECORD TO SPECIFY KEYS AND VALUES TYPES

// type ButtonProps = {
//     borderRadius : Record<string, number>
 
// }
// export const Button = ({ borderRadius } : ButtonProps ) : JSX.Element => {
//     const [count, setCount] = useState<number>(0);
// return (
//     <button 
//             className="text-center py-2 px-4 rounded-md"
//             style={{borderRadius: `${borderRadius}px`}}
//             onClick={() => setCount(count+1)}> count is {count}
//     </button>
// )
// }


// TODO : allowing all type of children, could be strings, numbers, or even jsx !
// type ButtonProps = {
//     children : React.ReactNode; //* whatever type
//     }
// export const Button = ({ children } : ButtonProps) => {
//     return (
//     <button  className="text-center py-2 px-4 rounded-md">
//         { children }
//     </button>
//     )
//     }

// TODO : Forcing children to only accept jsx element, when passing another type, it throws an error
// type ButtonProps = {
//     children : JSX.Element;  //* only jsx accepted
//     }
// export const Button = ({ children } : ButtonProps) => {
//     return (
//     <button  className="text-center py-2 px-4 rounded-md">
//         { children }
//     </button>
//     )
//     }



// TODO : using interfaces VS using types
// interface IButtonProps { //? specifying this is an interface props by adding an 'I' in the name start
//     text: string,
//     count: number,
// }

// type TButtonProps = { //? specifying this is a type props by adding a 'T' in the name start
//     text: string,
//     count: number,
// }

// export const Button = ({ text, count }:TButtonProps) => {
//     return (
//     <button  className="text-center py-2 px-4 rounded-md">
//         Click ME
//     </button>
//     )
//     }

// TODO : USING TYPE TO PASS PROPS, BUT WE CAN'T  PASS ALL OF THESE BUTTON ATTR, THEY ARE A HUNDRED
// TODO : INSTEAD WE WILL BE USING A BUILT IN REACT TYPE FOR OUR COMPONENT, check BELOW
// type ButtonProps = {
//     type: 'submit' | 'reset' | 'button';
//     autoFocus? : boolean;
// };
// export const Button = ({ type, autoFocus } : ButtonProps) => {
//     return ( //? we cannot keep typing endless attrs!! we can use 'COMPONENTPROPS', but
//     <button  className="text-center py-2 px-4 rounded-md" type={type}  autoFocus={autoFocus}>
//         Click ME
//     </button>
//     )
//     }

// TODO : USING COMPONENTPROPS TO ALLOW PASSING NO MATTER WHAT ATTR TO BUTTONS 

//? Typescript explicitely asks if you want to use "ref" or not by specifying the type of 
//? the component props you want to use either with ref or without
// type TButtonProps = React.ComponentPropsWithoutRef<'button'>; //todo : you can use this when 'ref' is wanted
// type ButtonProps = React.ComponentPropsWithRef<'button'>; //todo : and this when 'ref' is not wanted

// //? using the spread operator with props just to say that you allow the rest of other buttons attr
// export const Button = ({ type, autoFocus,  ...props } : TButtonProps) => {
//     return (   //todo : you call it here at the end to say that this is where the rest or attr should be placed
//     <button  className="text-center py-2 px-4 rounded-md" type={type}  autoFocus={autoFocus} {...props}>
//         Click ME
//     </button>
//     )
//     }

// TODO : INTERSECT OTHER PROPS WITH BUTTON PROPS USING & ----- when using types
// type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
// {
//     variant?: "primary" | 'success';
// }; 
// export const Button = ({ type, autoFocus, variant, ...props } : ButtonProps) => {
//     return (   
//     <button  className="text-center py-2 px-4 rounded-md" type={type}  autoFocus={autoFocus} {...props}>
//         Click ME
//     </button>
//     )
//     }

// TODO : INTERSECT OTHER PROPS WITH BUTTON PROPS USING & ------Example-------
// type ButtonProps = {
//     type: 'submit' | 'reset' | 'button';
//     color: 'green' | 'purple';
// }

// type SuperButtonProps = ButtonProps & {
//     size: 'sm' | 'md' | 'lg';

// }
// export const Button = ({} : SuperButtonProps) => {
//     return (   
//     <button >
//         Click ME
//     </button>
//     )
// }

// TODO : EXTENDING INTERFACES TO MERGE PROPS ------- when using interfaces
// interface ButtonProps  {
//     type: 'submit' | 'reset' | 'button';
//     color: 'green' | 'purple';
// }

// interface SuperButtonProps extends ButtonProps  {
//     size: 'sm' | 'md' | 'lg';

// }
// export const Button = ({} : SuperButtonProps) => {
//     return (   
//     <button >
//         Click ME
//     </button>
//     )
// }

// TODO : EVENTS HANDLING
// export const Button = () => {
//     const handleClick = (event :  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         event.preventDefault();
//         console.log('Button  clicked !!');
        
//     }
//     return (   
//     <button onClick={handleClick}>
//         Click ME
//     </button>
//     )
// }

// TODO : HOOKS IN TS

//! USESTATE----------------HOOK----------------!!!-
// type User = {
//                 name: string;
//                 age: number;
//                 hasJob: boolean
//             }
// export const Button = () => {
//     const[counter, setCounter] = useState<number>(0); //todo:not necessary to pass type here, ts already knows it 
//     const[user, setUser]  = useState<User | null>(null ); //* todo: for object we need to create our own type
//     //todo:to make the obj accept the null as initial value, use union param, meaning it could be either obj or null
   
//     const name = user?.name; //? now to access the name, use the optional ? , otherwise, the app crushes 

//     const handleClick = (event :  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         event.preventDefault();
//         setCounter(counter + 1);
        
//     }
//     return (   
//     <button onClick={handleClick}>
//         Click ME : {counter}
//     </button>
//     )
//     }


//! USEREF------------------HOOK--------------!!!-
// export const Button = () => {
//     const ref = useRef<HTMLButtonElement>(null);
//     return (   
//         <button ref={ref}>
//             Click ME 
//         </button>
//     )  
// }

//TODO : TRICKS & TIPS ----------------------------------------------------------------------------------

//!1/ Making an array readonly and more specific
// const buttonTextOptions = [
//     'click me', 'click me again', 'click me one more time'
// ] as const;  //? this is a pure typescipt, making the array more specific and readonly(rigid)

// export const Button = () => {
//     const ref = useRef<HTMLButtonElement>(null);
//     return (   
//         <button ref={ref}>
//            {
//             buttonTextOptions.map((option)  =>{
//                 return option;
//             })   
//            }
//         </button>
//     )  
// }

//!2/ Reusing a type and assign it to another

// todo:the guest type will have same attr as user type except the name, so we omit in the guset type def

// type User = {
//     name:string;
//     age: number;
//     sessionId: string;
// }

// type Guest = Omit<User, 'name'>;

// export default function Button () {
//     return (   
//         <button>
//             Click Me
//         </button>
//     )  
// }


//Todo : typescript generics ------------------------------
//!3/ Generics

//?? we have initially this
// const convertToArray = (value : string ) : string[] => {
//     return [value.toUpperCase()];
// }

// convertToArray('hello');

// //?? we can use generics to do this, the input has the same type as the output
// const convertToArrays = <T,>(value : T ) : T[] => { //* ImPORTANT NOTe HERE, the ',' !!!!!!!!!!!!!!!!!!!!!!!
//     return [value];   //! using  the comma after the type T to specify that this is a value's type, 
                         //! otherwise jsx will think of it as an html element like div or others
// } 

// convertToArrays('hello');

// TODO : ALTERNATIVELY, WE CAN USE A FUNCTION : 
function convertToArray <T>(value: T) : T[] {  //? we are not using a comma here!!!
    return [value];
}

convertToArray('welcome');

// TODO : ADDING A VALUE AND A VALUE'S HISTORY, both having the same type
type ButtonProps<T> = {
    countValue: T;          //* the isolated value has to have the same type as the array of the valu            
    countHistory : T[];     //* making it possile to establsih a relationship between the two
};
export  function Button<T>({ countValue, countHistory } : ButtonProps<T>)  {
    return <button onClick={() => console.log({ countValue, countHistory })}>Click Me</button>
}

//!4/ Declaring Reusable types

//? declaring types in file 'index.d.ts', this is a declaration file, which  is only for third 
//? party libraries not an avg type you want to use! 
//todo : instead, use an avg ts file 'types.ts' where you define your types and export them for use,
// todo: check the example in the project  'lib/types.ts file'

// import { type Colors } from "./lib/types"; //? make sure to place a 'type' before the name of the imported type 
                                              // ? to explicitly explain that this is not imported for some library 

// type ButtonPropss = {
//     color: Colors;
// }
// export default function Buttton({ color } : ButtonPropss) {
//     return <button>Click Me!</button>
// }

// //!5 When fetching data from unknown resourec , or type of data returned not known, use 'unknow type '

// import { useEffect } from "react";
// export const Buttoni = () => {
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then((data: unknown) => {
//             console.log(data);
            
//              data.name.toUpperCase(); //? you cannot use this with unknown type, instaed use schema, maybe(zod?)
                                         //? or use the 'ts-reset' package
// })
//     })
// }

