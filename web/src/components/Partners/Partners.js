import React from "react"

import { Layout, theming, Paragraph, Heading } from "@staccx/base"
import { SanityQuery, SanityImage } from "@staccx/sanity"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import CenterContent from "../CenterContent/CenterContent"

const ImageContainer = styled.div`
  text-align: center;
  background-color: ${theming.color("bg")};
  img {
    padding-top: 40px;
    width: 100%;
    max-width: 180px;
    filter: grayscale(100%);
    mix-blend-mode: color-burn;
  }
`

const Partners = ({ heading, lede, partners = [], buttons }) => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"medium"}>
          <CenterContent>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph variant="lede">{lede}</Paragraph>}
          </CenterContent>
        </Layout>
        <SanityQuery id={"partners-block"} query={buildPartnerQuery(partners)}>
          {({ result = [] }) => {
            return result.map(({ _id, partnerLogo }) => (
              <ImageContainer key={_id}>
                <SanityImage image={partnerLogo} />
              </ImageContainer>
            ))
          }}
        </SanityQuery>
        {buttons && (
          <CenterContent>
            <ButtonGroup buttons={buttons} />
          </CenterContent>
        )}
      </header>
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
