interface InputProps{
  heading:string
  placeholder:string
  type?: string | "text"
}
export function Input(props:InputProps)
{
  return(
    <div className="flex gap-2 justify-between items-center m-2">
      <h1 className="text-lg ">{props.heading}</h1>
      <input className="p-1 border " type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}