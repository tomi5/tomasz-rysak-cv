/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';

export const CompetenceWrapper = styled.div`
    position: relative;
    padding: 5px 0px;
    text-align: left;

    &::before {
      content: "";
      position: absolute;
      top: 32px;
      bottom: 5px;
      left: -10px;
      width: 1px;
      background-color: #000;
    }
`;
export const CompetenceName = css`
    font-size: 10pt;
    font-weight: normal;
    text-align: left;
    padding-left: 7px;
    padding-bottom: 3px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: -13px;
      width: 7px;
      height: 7px;
      background-color: #000;
    }
`;
export const CompetenceDescr = css`
    font-size: 9pt;
    font-style: italic;
    text-align: left;
    padding-left: 25px;
    font-weight: normal;
    line-height: 1.3em;
`;
