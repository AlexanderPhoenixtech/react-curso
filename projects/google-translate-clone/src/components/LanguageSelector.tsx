import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from "../constants"
import { type FromLanguage, SectionType, type Language } from "../types.d"

type Props =
  | {type:SectionType.From, value:FromLanguage, onChange:(language:FromLanguage)=>void}
  | {type:SectionType.To, value:Language, onChange:(language:Language)=>void}

export const LanguageSelector =({onChange,type,value}:Props)=>{
  const handleChange =(event:React.ChangeEvent<HTMLSelectElement>)=>{
    onChange(event.target.value as Language )
  }

  return(
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value} >
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPORTED_LANGUAGES).map(([key,literal])=>(
        <option key={key} value={key}>
          {literal}
        </option>
      ))}

    </Form.Select>
  )
}