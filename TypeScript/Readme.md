# TypeScript
Provides with static type checking, describes the shape of an object hence provides better code understanding and documentation, makes code refactoring easy.

```npx create-react-app <name> --template typescript```
or 
using vite
```npm vite@latest <name>``` and select react / typescript

_typescript have an extension of .tsx or .ts unlike react .js or .jsx_

## Basic Type Declaration

We can use both type and interfaces to declare a type. Basically declaring a type or interface is similar to creating a schema. We need to specify what type our argument is.
We use *type* when creating an app and *interface* when creating library
```TSX
    type IncomingProps = {
        name : string
        type:{
            gender:string,
            age:number
        }
        entity:{
            race:string,
            area:string
        }[]
        // array of objects
    }

    export default Greet = (props : IncomingProps) => {
        return (
            <>
                <h1>Welcome {props.name}</h1>
                <h2>Your gender is {props.type.gender}</h2>
                <h2>Your age is {props.type.age}</h2>
                <h2>Your entity is {props.entity.map(en=><h1>{en.race + ',' + en.area}</h1>)}</h2>

            </>
        )
    }
```
Here we are declaring the incoming props in Greet as `props : <TypeOfProps>`
and that TypeOfProps is the IncomingProps here which is an object since props drilled to a child is an object data type.

