import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const frame = css`
  display: flex;
  box-sizing: border-box;
  border: 2px solid #747474;
  border-radius: 3%;
  padding: 30px;
  width: 1000px;
  height: 650px;
  background-color: #000000;
`;

export const frameContainer = css`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #f3f5f7;
  overflow: hidden;
  /* 벗어난 녀석 round 안으로 들어오게 */

  /* & > div {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  } */
`;


///////////////////////////////<< Loading >>/////////////////////////////

export const loadingBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: #00000066;
`;


/////////////////////////<< LeftSideBar >> ////////////////////
export const sideBarLayout = css`
  display: flex;
  width: 100%;
  height: 100%;
  
`;

export const sideBarContainer = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100%;
  background-color: #ffffff;

  & > h1 {
    margin: 20px;
    font-size: 20px;
    text-align: center;
    text-shadow: 0 0 20px #00000099;
    cursor: default;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: scale(110%);
    }
  }

  & > ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    flex-grow: 1;


    & > a {
      text-decoration: none;
      color: #222222;

      
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    padding: 10px;
    
    & > a {
      text-decoration: none;
      color: #222222;
      font-weight: 500;
      text-shadow: 0 0 10px #000000;
    }
  }
  
`;

export const menuListItem = (isSelected) => css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 15px;
  width: 100%;
  height: 35px;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  text-shadow: 0 0 ${isSelected ? "10px 10px" : "0"} #0000000f inset;

  &:hover {
    text-shadow: 0 0 15px #00000066;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 100%;
    font-size: 20px;
  }
`;

export const profileImg = (url) => css`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  overflow: hidden;
  background-image: url(${url});
  background-position: center;
  background-size: cover;
`;