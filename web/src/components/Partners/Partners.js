import React from "react"

import { Layout, Heading, Paragraph, Divider } from "@staccx/base"
import { SanityQuery, SanityImage } from "@staccx/sanity"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const ImageContainer = styled.div`
  text-align: center;
`

const Partners = ({ heading, lede, partners = [], buttons }) => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"small"}>
          {heading && (
            <Heading variant="lined" level={2}>
              {heading}
            </Heading>
          )}
          {lede && <Paragraph>{lede}</Paragraph>}
          {buttons && <ButtonGroup buttons={buttons} />}
          {partners && partners.length > 0 && <Divider />}
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