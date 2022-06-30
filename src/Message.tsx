import  React from 'react'

interface UserMessage{
    name:string;
    message: string;
}

const Message = ( props: UserMessage): any =>{
    return (
          <p>{props.message}{props.name}</p>
    )
}

export default Message; 