import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SanityDocument } from "@staccx/sanity"
import { ThemeComponent, theming } from "@staccx/base"

const Header = () => {
  return (
    <Outer>
      <LogoLink to={"/"}>
        <ThemeComponent tagName={"Logo"} />
      </LogoLink>
      <SanityDocument
        id={"094f74ea-cf50-4b87-9ca7-34580eb0287e"}
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
                        {item.label}
                      </StyledLink>
                    )
                  }
                  return (
                    <StyledLink to={item.link.path.current} key={item._key}>
                      {item.label}
                    </StyledLink>
                  )
                })}
              </MenuItems>
            </div>
          )
        }}
      </SanityDocument>
    </Outer>
  )
}

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theming.spacing("gridSmall")} 0;
`

const LogoLink = styled(Link)`
  display: block;
  max-width: 168px;

  @media (min-width: 1190px) {
    margin-left: -${theming.spacing.large};
  }
`

const MenuItems = styled.div`
  display: table;

  > *:not(:first-child) {
    margin-left: ${theming.spacing.medium};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 3px solid ${theming.color("pink")};
  }
`

export default Header
