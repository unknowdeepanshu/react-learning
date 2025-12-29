function CustomRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    mainContainer.appendChild(domElement)
}

function CustomRender1(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.childern
    for(const porp in reactElement.props){
        if(porp==='childern') continue
        console.log('hi1')
        domElement.setAttribute(porp,reactElement.props[porp])
    }
    console.log('h1')
    mainContainer.appendChild(domElement)

}
const reactElement ={
    type:'h1',
    props:{
        
    },
    childern:'Click me to visit google.this is only p tag'

}

const reactElement1 ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'Click me to visit google'

}
const mainContainer=document.querySelector('#root')

CustomRender1(reactElement,mainContainer)