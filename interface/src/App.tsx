import React from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import styled from 'styled-components';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
// import logo from './logo.svg';
// import './App.css';

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const WalletWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #f0f0f0;
`;

const App: React.FC = () => {
  const { connected } = useWallet();
  return (
    <WindowWrapper>
      <WalletWrapper>
        <WalletSelector />
      </WalletWrapper>
      <h1>{connected ? 'Wallet is Connected' : 'Please connect your wallet to continue'}</h1>
    </WindowWrapper>
  );
}

export default App;
