import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, Routes, Route, Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { InfoData, PriceData } from "../model/CoinModel";
import { useQuery } from "react-query";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInfo, fetchCoinTicker } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

interface TabProps {
  readonly isActive: boolean;
}

const Tab = styled.span<TabProps>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor}
    a {
    display: block;
  }
`;

type RouteParams = {
  coinId: string;
};

interface nameState {
  name: string;
}

interface RouterState {
  state: nameState;
}

function Coin() {
  const { coinId } = useParams() as RouteParams;
  const { state } = useLocation() as RouterState;

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coind/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tikcerLoading, data: tickerData } = useQuery<PriceData>(
    ["ticker", coinId],
    () => fetchCoinTicker(coinId),
    {
      refetchInterval: 5000,
    }
  );

  const loading = infoLoading || tikcerLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{tickerData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickerData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickerData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch === null ? false : true}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null ? true : false}>
              <Link to={`/${coinId}/price`}>Prcie</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="/price" element={<Price />} />
            <Route path="/chart" element={<Chart coinId={coinId} />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
