import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SanityDocument } from "@staccx/sanity"
import { Layout, LayoutItem, Box, ThemeComponent, theming } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"

const t = val => i18nInstance.convert(val)

const Footer = () => {
  return (
    <Box variant={"footer"} as={"footer"}>
      <Layout
        rowGap={"small"}
        paddingTop={"gridSmall"}
        paddingBottom={"gridSmall"}
        variant={"page"}
      >
        <LayoutItem area={"main"}>
          <FooterContent>
            <LogoLink to={"/"}>
              <ThemeComponent tagName={"Logo"} inverted />
            </LogoLink>

            <SanityDocument
              id={"611a7937-1cdd-4701-8ee0-b516344cf838"}
              pick={"menuItems[]{link->{path},...}"}
            >
              {({ document }) => {
                if (!document) {
                  return null
                }

                return (
                  <div>
                    <MenuItems>
                      {document.menuItems.map(item => {
                        if (item._type === "menuItemOutbound") {
                          return (
                            <StyledLink href={item.link} key={item._key} as="a">
                              {t(item.label)}
                            </StyledLink>
                          )
                        }
                        return (
                          <StyledLink
                            to={item.link.path.current}
                            key={item._key}
                          >
                            {t(item.label)}
                          </StyledLink>
                        )
                      })}
                    </MenuItems>
                  </div>
                )
              }}
            </SanityDocument>
          </FooterContent>
        </LayoutItem>
      </Layout>
    </Box>
  )
}

const LogoLink = styled(Link)`
  display: block;
  max-width: 168px;
`

const MenuItems = styled.div`
  display: table;

  > *:not(:first-child) {
    margin-left: ${theming.spacing.medium};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theming.color.white};

  &:hover,
  &:active,
  &:focus {
    border-bottom: 3px solid ${theming.color("pink")};
  }
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theming.spacing("gridSmall")} 0;
`

export default Footer
