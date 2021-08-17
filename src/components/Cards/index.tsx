import { StyleCard } from './style'

interface IUrl {
  url: string,
  name: string
}
export default function Card ({ url, name }: IUrl) {
  return (
    <StyleCard>
      <p><a href={ url }>{ name }</a></p>
    </StyleCard>
  )
}
