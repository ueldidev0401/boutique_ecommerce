import styled, { themeGet } from "@styled";
import { devices } from "@styled";

export const OrderSummaryDeliveredItem = styled.div`
  font-size: ${themeGet("fontSizes.standard")};

  h3,
  h4 {
    margin-bottom: 15px;
    font-weight: ${themeGet("fontWeights.subHeading")};
  }

  h3 {
    font-size: 18px;
    padding-bottom: 5px;
    border-bottom: 1px dashed ${themeGet("colors.borderLight")};
  }

  h4 {
    margin-bottom: 5px;
    font-size: ${themeGet("fontSizes.body")};
  }

  &:first-child {
    border-right: 1px solid ${themeGet("colors.borderLight")};
  }

  .summary {
    p {
      strong {
        min-width: 150px;
        display: inline-block;
        color: ${themeGet("colors.heading")};
      }

      span {
        margin-left: 10px;
      }

      &.status {
        span {
          padding: 2px 4px;
          font-size: 13px;
          border-radius: 2px;
          color: ${themeGet("colors.white")};
          font-weight: ${themeGet("fontWeights.subHeading")};
        }
      }
    }
  }

  P {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const OrderSummaryDelivered = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${OrderSummaryDeliveredItem} {
    flex-basis: 50%;
    padding: 25px 30px;

    ${devices.sm} {
      flex-basis: 100%;
      border-right: 0;

      &:first-child {
        border-bottom: 1px solid ${themeGet("colors.borderLight")};
      }
    }
  }
`;

export const OrderDetailsContentItem = styled.div`
  padding: 25px 30px;
  border-radius: ${themeGet("radii.sm")};
  background-color: ${themeGet("colors.white")};

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const OrderDetailsHeader = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 28px;
    font-weight: ${themeGet("fontWeights.subHeading")};
  }

  h6 {
    font-family: ${themeGet("fonts.body")};
    font-weight: ${themeGet("fontWeights.subHeading")};
  }
`;

export const OrderDetailsContent = styled.div`
  margin-top: 100px;
  padding: 50px 30px;
  background-color: ${themeGet("colors.offWhiteLight")};
`;

export const OrdersTable = styled.div`
  table {
    border-color: ${themeGet("colors.borderLight")} !important;
    thead {
      th {
        font-weight: ${themeGet("fontWeights.subHeading")};
      }
    }
    thead,
    tbody {
      td,
      th {
        white-space: nowrap;
        text-align: center !important;
        border-color: ${themeGet("colors.borderLight")} !important;
      }
    }
  }
`;
