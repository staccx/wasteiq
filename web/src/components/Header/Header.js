import React from "react"
import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"
import { SanityDocument } from "@staccx/sanity"
import { ThemeComponent, theming, State } from "@staccx/base"
import { FadeIn } from "@staccx/animations"
import HeaderMenuButton from "./Header.MenuBtn"
import { i18nInstance } from "@staccx/i18n"

const t = val => i18nInstance.convert(val)


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
            <State>
              {({ change, isOpen = false }) => {
                return (
                  <React.Fragment>
                    <ButtonContainer>
                      <HeaderMenuButton
                        onClick={() => change({ isOpen: !isOpen })}
                        isOpen={isOpen}
                      />
                    </ButtonContainer>

                    <MenuItems isOpen={isOpen}>
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
                            activeClassName="wiqSel"
                            exact
                            key={item._key}
                          >
                            {t(item.label)}
                          </StyledLink>
                        )
                      })}
                    </MenuItems>
                  </React.Fragment>
                )
              }}
            </State>
          )
        }}
      </SanityDocument>
    </Outer>
  )
}

const Outer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${theming.spacing("gridSmall")} 0;
`

const LogoLink = styled(Link)`
  display: block;
  max-width: 168px;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  @media (min-width: 1190px) {
    margin-left: -${theming.spacing.large};
  }
`

const ButtonContainer = styled.div`
  justify-self: flex-end;
`

const MenuItems = styled.div`
  @media only screen and (max-width: ${theming.wrapper("mediumMinusOne")}) {
    display: ${p => (p.isOpen ? "flex" : "none")};
    flex-basis: 100%;
    flex-direction: column;
    margin-top: ${theming.spacing.small};
    animation: ${FadeIn} 0.5s ease-out forwards 1;
  }

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    display: table;

    > *:not(:first-child) {
      margin-left: ${theming.spacing.medium};
    }
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;

  @media only screen and (min-width: ${theming.wrapper("medium")}) {
    transition: border 0.2s ease;

    &.wiqSel {
      border-bottom: 3px solid ${theming.color("apricot")};
      &:hover,
      &:active,
      &:focus {
        border-bottom: 3px solid ${theming.color("blue")};
      }
    }

    &:hover,
    &:active,
    &:focus {
      border-bottom: 3px solid ${theming.color("pink")};
      outline: none;
    }
  }

  @media only screen and (max-width: ${theming.wrapper("mediumMinusOne")}) {
    position: relative;
    padding: ${theming.spacing.small} ${theming.spacing.tiny};
    border-bottom: 1px solid ${theming.color.line};

    &:first-child {
      border-top: 1px solid ${theming.color.line};
    }

    &.wiqSel::before {
      content: ">";
      font-family: ${theming.fontFamily.heading};
      color: ${theming.color("apricot")};
      position: absolute;
      top: 50%;
      left: -${theming.spacing.small};
      transform: translateY(-50%);
      animation: ${FadeIn} 0.5s ease-out forwards 1;
    }
  }
`

export default Header
