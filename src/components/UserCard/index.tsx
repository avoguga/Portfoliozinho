import { Container, UserProfile, UserName } from './styles'

export default function UserCard({userProfile, userName}: any) {
  return (
    <Container>
        <UserName>{userName}</UserName>
        <UserProfile src={userProfile} alt="User profile" />
    </Container>
  )
}
