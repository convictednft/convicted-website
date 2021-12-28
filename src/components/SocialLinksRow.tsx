import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import DiscordImage from '../images/social/discord.png'
// @ts-ignore
import TelegramImage from '../images/social/telegram.png'
// @ts-ignore
import TwitterImage from '../images/social/twitter.png'
// @ts-ignore
import GithubImage from '../images/social/github.png'
// @ts-ignore
import FacebookImage from '../images/social/facebook.png'
import { DISCORD_LINK, FACEBOOK_LINK, GITHUB_LINK, TELEGRAM_LINK, TWITTER_LINK } from '../constants'

const Container = styled.div`
  display: flex;
`

const SocialLink = styled.a<{ last?: boolean }>`
  margin-right: ${({ last }) => last ? '0' : '1rem'};
`

const SocialImage = styled.img`
  width: 2.375rem;
  height: 2.375rem;
`

const SocialLinksRow = () => {
  return (
    <Container>
      <SocialLink href={DISCORD_LINK} target="_blank">
        <SocialImage src={DiscordImage} />
      </SocialLink>
      <SocialLink href={TWITTER_LINK} target="_blank">
        <SocialImage src={TwitterImage} />
      </SocialLink>
      <SocialLink href={TELEGRAM_LINK} target="_blank">
        <SocialImage src={TelegramImage} />
      </SocialLink>
      <SocialLink href={FACEBOOK_LINK} target="_blank">
        <SocialImage src={FacebookImage} />
      </SocialLink>
      <SocialLink href={GITHUB_LINK} target="_blank" last>
        <SocialImage src={GithubImage} />
      </SocialLink>
    </Container>
  )
}

export default SocialLinksRow
