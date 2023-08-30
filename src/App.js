import { Layout, Input, Button, List, message } from "antd";
import "./App.css";
import { useState } from "react";
import { getContractNFTs } from "./utils";
import NftCard from "./components/NftCard";
import ContractTrades from "./components/contractTrades";

const { Header, Content } = Layout;

function App() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false); //for search purpose
  const [nfts, setNfts] = useState([]); // to store returned value from search

  const handleSearch = async () => {
    if (searchText === "") {
      return;
    }

    setLoading(true);

    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflowY: "auto" }} //64 px is size of header, overflow auto helps to create scroll when too many things show up
      >
        <Input.Group>
          {/* search bar implementation */}
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary" onClick={handleSearch}>
            {" "}
            {/*search button*/}
            Search
          </Button>
          <ContractTrades tokenAddress={searchText} />
        </Input.Group>
        <List
          loading={loading}
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => <NftCard nft={nft} key={nft.token_id} />} // render datasource above
        />
      </Content>
    </Layout>
  );
}

export default App;
