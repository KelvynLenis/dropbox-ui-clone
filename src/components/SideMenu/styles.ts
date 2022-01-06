import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;

  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: var(--color-tertiary);

  @media (min-width: 1024px) {
      width: calc(100% / 3);
      box-shadow: -7px 0 5px -6px rba(0, 0, 0, 0.075);
  }

  @media (min-wdith: 1440px) {
      width: calc(480px + ((100 vw - 1440px) / 2));
  }

  transform: translateX(100%);
  transition: 0.5s transform cubid-bezier(0.5, 0, 0, 1);

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    &.scrollOpen{
      transform: translateX(0);
    }

    &.scrollOpen .action--close {
      display: none;
    }
  }
`;
