import { Container } from './styles'

export default function UserCard(userProfile: string, userName: string) {
  return (
    <Container>
        <img src={userProfile} alt="" />
        <h1>{userName}</h1>
    </Container>
  )
}
