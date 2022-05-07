import styled from "@styled";

export const StarRatingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  .star {
    cursor: pointer;
    width: 15px;
    height: 15px;
    background-color: grey;
    clip-path: polygon(50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%);

    &:not(:last-child) {
      margin-right: 3px;
    }
  }

  .star.selected {
    background-color: #ff7004;
  }
`
