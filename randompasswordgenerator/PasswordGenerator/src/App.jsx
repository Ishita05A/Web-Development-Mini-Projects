import { useCallback, useEffect, useState ,useRef} from "react"


function App() {
    const [length, setLength] = useState(8)

  
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+<>?/"
    for (let i = 1; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ch)
    }
    setPassword(pass)


  }, [length,numberAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,characterAllowed,numberAllowed,passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full mx-auto bg-gray-800 text-orange-500 text-center rounded-lg max-w-md px-4 py-4 my-8">
        <h1 className="text-white">Password Generator</h1>
        <div className=" flex  mb-4  rounded-lg overflow-hidden ">
          <input type="text" value={password} ref={passwordRef} className="outline-none px-3 py-1 w-full" placeholder="password" readOnly />
          <button onClick={copyPasswordToClipboard} className="bg-blue-600 text-white py-0.5 px-2">Copy</button>
        </div>
        <div className="flex"><div><input type="range"
         min={6} 
         max={100} 
         value={length}
          className="cursor-pointer" 
          onChange={(e) => { setLength(e.target.value) }} />
          <label >Length : {length}</label>
        </div>
        <div>
          <input type="checkbox" className="mx-3 py-2" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} /><label >Numbers</label>
          </div>
          <div>
          <input type="checkbox" className="mx-3 py-2" defaultChecked={characterAllowed} id="inputCharacter" onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }} /><label >Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
