import React from "react"

import { Layout, theming } from "@staccx/base"
import { SanityQuery, SanityImage } from "@staccx/sanity"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import Heading from "../Heading/Heading"
import Lede from "../Lede/Lede"

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

const PartnersWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
`

const Partners = ({ heading, lede, partners = [], buttons }) => {
  return (
    <Layout as={"article"}>
      <PartnersWrapper>
        <header>
          <Layout rowGap={"medium"}>
            {heading && (
              <Heading variant="lined" level={2}>
                {heading}
              </Heading>
            )}
            {lede && <Lede>{lede}</Lede>}
            {buttons && <ButtonGroup buttons={buttons} />}
          </Layout>
          <SanityQuery
            id={"partners-block"}
            query={buildPartnerQuery(partners)}
          >
            {({ result = [] }) => {
              return result.map(({ _id, partnerLogo }) => (
                <ImageContainer key={_id}>
                  <SanityImage image={partnerLogo} />
                </ImageContainer>
              ))
            }}
          </SanityQuery>
        </header>
      </PartnersWrapper>
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
