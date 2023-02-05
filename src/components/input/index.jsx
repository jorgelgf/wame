import * as S from './styles'

export default function Input ({text, onChange}){
    return <S.Container>
<S.InputItem placeholder={text} onChange={onChange}/>

    </S.Container>
}