import React from "react"

import { Layout, theming, Paragraph, Heading } from "@staccx/base"
import { SanityQuery, SanityImage } from "@staccx/sanity"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import CenterContent from "../CenterContent/CenterContent"

const ImageContainer = styled.div`
  margin: 0 1em 0;
  background-color: ${theming.color("bg")};
  img {
    padding-top: 10px;
    width: 100%;
    max-width: 180px;
    filter: grayscale(100%);
    mix-blend-mode: color-burn;
  }
`
const PartnersWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap:  wrap;
  justify-content:  center;

  margin: auto;

  }
`

const Partners = ({ heading, lede, partners = [], buttons }) => {
  return (
    <Layout as={"article"}>
      <header>
        <CenterContent>
          <Layout rowGap={"medium"}>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph variant="lede">{lede}</Paragraph>}
          </Layout>
        </CenterContent>
      </header>
      <PartnersWrapper>
        <SanityQuery id={"partners-block"} query={buildPartnerQuery(partners)}>
          {({ result = [] }) => {
            return result.map(({ _id, partnerLogo }) => (
              <ImageContainer key={_id}>
                <SanityImage image={partnerLogo} />
              </ImageContainer>
            ))
          }}
        </SanityQuery>
      </PartnersWrapper>
      {buttons && (
        <CenterContent>
          <ButtonGroup buttons={buttons} />
        </CenterContent>
      )}
    </Layout>
  )
}

const buildPartnerQuery = partners => {
  const query = `*[_id in [${partners
    .map(({ _ref }) => `'${_ref}'`)
    .join(",")}]]{_id, name, partnerLogo}`
  return query
}

export default Partners
