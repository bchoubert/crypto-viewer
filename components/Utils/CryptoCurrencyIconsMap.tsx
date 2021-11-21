import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import Logo1Inch from '../../assets/cryptos/1inch.svg';
import LogoAave from '../../assets/cryptos/aave.svg';
import LogoAch from '../../assets/cryptos/ach.svg';
import LogoAda from '../../assets/cryptos/ada.svg';
import LogoAgld from '../../assets/cryptos/agld.svg';
import LogoAlcx from '../../assets/cryptos/alcx.svg';
import LogoAlgo from '../../assets/cryptos/algo.svg';
import LogoAmp from '../../assets/cryptos/amp.svg';
import LogoAnkr from '../../assets/cryptos/ankr.svg';
import LogoArpa from '../../assets/cryptos/arpa.svg';
import LogoAsm from '../../assets/cryptos/asm.svg';
import LogoAtom from '../../assets/cryptos/atom.svg';
import LogoAuction from '../../assets/cryptos/auction.svg';
import LogoAvax from '../../assets/cryptos/avax.svg';
import LogoAxs from '../../assets/cryptos/axs.svg';
import LogoBadger from '../../assets/cryptos/badger.svg';
import LogoBal from '../../assets/cryptos/bal.svg';
import LogoBand from '../../assets/cryptos/band.svg';
import LogoBat from '../../assets/cryptos/bat.svg';
import LogoBch from '../../assets/cryptos/bch.svg';
import LogoBnt from '../../assets/cryptos/bnt.svg';
import LogoBond from '../../assets/cryptos/bond.svg';
import LogoBtc from '../../assets/cryptos/btc.svg';
import LogoBtrst from '../../assets/cryptos/btrst.svg';
import LogoCgld from '../../assets/cryptos/cgld.svg';
import LogoChz from '../../assets/cryptos/chz.svg';
import LogoClv from '../../assets/cryptos/clv.svg';
import LogoComp from '../../assets/cryptos/comp.svg';
import LogoCoti from '../../assets/cryptos/coti.svg';
import LogoCro from '../../assets/cryptos/cro.svg';
import LogoCrv from '../../assets/cryptos/crv.svg';
import LogoCtsi from '../../assets/cryptos/ctsi.svg';
import LogoCvc from '../../assets/cryptos/cvc.svg';
import LogoDai from '../../assets/cryptos/dai.svg';
import LogoDash from '../../assets/cryptos/dash.svg';
import LogoDdx from '../../assets/cryptos/ddx.svg';
import LogoDnt from '../../assets/cryptos/dnt.svg';
import LogoDoge from '../../assets/cryptos/doge.svg';
import LogoDot from '../../assets/cryptos/dot.svg';
import LogoEnj from '../../assets/cryptos/enj.svg';
import LogoEns from '../../assets/cryptos/ens.svg';
import LogoEos from '../../assets/cryptos/eos.svg';
import LogoEtc from '../../assets/cryptos/etc.svg';
import LogoEth from '../../assets/cryptos/eth.svg';
import LogoFarm from '../../assets/cryptos/farm.svg';
import LogoFet from '../../assets/cryptos/fet.svg';
import LogoFil from '../../assets/cryptos/fil.svg';
import LogoForth from '../../assets/cryptos/forth.svg';
import LogoFx from '../../assets/cryptos/fx.svg';
import LogoGala from '../../assets/cryptos/gala.svg';
import LogoGnt from '../../assets/cryptos/gnt.svg';
import LogoGrt from '../../assets/cryptos/grt.svg';
import LogoGtc from '../../assets/cryptos/gtc.svg';
import LogoGyen from '../../assets/cryptos/gyen.svg';
import LogoIcp from '../../assets/cryptos/icp.svg';
import LogoIotx from '../../assets/cryptos/iotx.svg';
import LogoJasmy from '../../assets/cryptos/jasmy.svg';
import LogoKeep from '../../assets/cryptos/keep.svg';
import LogoKnc from '../../assets/cryptos/knc.svg';
import LogoKrl from '../../assets/cryptos/krl.svg';
import LogoLcx from '../../assets/cryptos/lcx.svg';
import LogoLink from '../../assets/cryptos/link.svg';
import LogoLoom from '../../assets/cryptos/loom.svg';
import LogoLpt from '../../assets/cryptos/lpt.svg';
import LogoLrc from '../../assets/cryptos/lrc.svg';
import LogoLtc from '../../assets/cryptos/ltc.svg';
import LogoMana from '../../assets/cryptos/mana.svg';
import LogoMask from '../../assets/cryptos/mask.svg';
import LogoMatic from '../../assets/cryptos/matic.svg';
import LogoMir from '../../assets/cryptos/mir.svg';
import LogoMkr from '../../assets/cryptos/mkr.svg';
import LogoMln from '../../assets/cryptos/mln.svg';
import LogoMusd from '../../assets/cryptos/musd.svg';
import LogoNkn from '../../assets/cryptos/nkn.svg';
import LogoNmr from '../../assets/cryptos/nmr.svg';
import LogoNu from '../../assets/cryptos/nu.svg';
import LogoOgn from '../../assets/cryptos/ogn.svg';
import LogoOmg from '../../assets/cryptos/omg.svg';
import LogoOrn from '../../assets/cryptos/orn.svg';
import LogoOxt from '../../assets/cryptos/oxt.svg';
import LogoPax from '../../assets/cryptos/pax.svg';
import LogoPerp from '../../assets/cryptos/perp.svg';
import LogoPla from '../../assets/cryptos/pla.svg';
import LogoPoly from '../../assets/cryptos/poly.svg';
import LogoPowr from '../../assets/cryptos/powr.svg';
import LogoQnt from '../../assets/cryptos/qnt.svg';
import LogoQuick from '../../assets/cryptos/quick.svg';
import LogoRad from '../../assets/cryptos/rad.svg';
import LogoRai from '../../assets/cryptos/rai.svg';
import LogoRari from '../../assets/cryptos/rari.svg';
import LogoRen from '../../assets/cryptos/ren.svg';
import LogoRep from '../../assets/cryptos/rep.svg';
import LogoReq from '../../assets/cryptos/req.svg';
import LogoRgt from '../../assets/cryptos/rgt.svg';
import LogoRlc from '../../assets/cryptos/rlc.svg';
import LogoRly from '../../assets/cryptos/rly.svg';
import LogoShib from '../../assets/cryptos/shib.svg';
import LogoSkl from '../../assets/cryptos/skl.svg';
import LogoSnx from '../../assets/cryptos/snx.svg';
import LogoSol from '../../assets/cryptos/sol.svg';
import LogoStorj from '../../assets/cryptos/storj.svg';
import LogoSuku from '../../assets/cryptos/suku.svg';
import LogoSushi from '../../assets/cryptos/sushi.svg';
import LogoTbtc from '../../assets/cryptos/tbtc.svg';
import LogoTrac from '../../assets/cryptos/trac.svg';
import LogoTrb from '../../assets/cryptos/trb.svg';
import LogoTribe from '../../assets/cryptos/tribe.svg';
import LogoTru from '../../assets/cryptos/tru.svg';
import LogoUma from '../../assets/cryptos/uma.svg';
import LogoUni from '../../assets/cryptos/uni.svg';
import LogoUsdc from '../../assets/cryptos/usdc.svg';
import LogoUsdt from '../../assets/cryptos/usdt.svg';
import LogoUst from '../../assets/cryptos/ust.svg';
import LogoVgx from '../../assets/cryptos/vgx.svg';
import LogoWbtc from '../../assets/cryptos/wbtc.svg';
import LogoWcfg from '../../assets/cryptos/wcfg.svg';
import LogoWluna from '../../assets/cryptos/wluna.svg';
import LogoXlm from '../../assets/cryptos/xlm.svg';
import LogoXrp from '../../assets/cryptos/xrp.svg';
import LogoXtz from '../../assets/cryptos/xtz.svg';
import LogoXyo from '../../assets/cryptos/xyo.svg';
import LogoYfi from '../../assets/cryptos/yfi.svg';
import LogoYfii from '../../assets/cryptos/yfii.svg';
import LogoZec from '../../assets/cryptos/zec.svg';
import LogoZen from '../../assets/cryptos/zen.svg';
import LogoZrx from '../../assets/cryptos/zrx.svg';

/* eslint-disable global-require */
const CryptoCurrenciesIconMap: Record<string, {
  icon: FC<SvgProps>,
  color: string,
  description: string,
  website: string,
}> = {
  '1inch': {
    icon: Logo1Inch,
    color: '#1B314F',
    description: '1INCH is an Ethereum token that powers 1inch, a decentralized exchange that aims to offer the “best rates by discovering the most efficient swapping routes across all leading DEXes.” Decentralized exchanges (a.k.a. DEXes) like 1inch enable users to transact tokens without an intermediary. 1inch aggregates token prices across decentralized exchanges in order to find the best prices for users.',
    website: 'https://1inch.exchange/',
  },
  aave: {
    icon: LogoAave,
    color: '#B6509E',
    description: 'Aave (AAVE) is an Ethereum token that powers Aave, a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow cryptocurrencies in exchange for paying a variable interest rate.',
    website: 'https://aave.com/',
  },
  ach: {
    icon: LogoAch,
    color: '#2E3567',
    description: 'ACH is an Ethereum token that powers Alchemy Pay, a platform that enables payments using a wide variety of fiat and cryptocurrencies. Fees are paid using the ACH token and users can earn ACH rewards for purchases.',
    website: 'https://www.alchemytech.io/',
  },
  ada: {
    icon: LogoAda,
    color: '#0D1E30',
    description: 'Cardano (ADA) is a blockchain platform built on a proof-of-stake consensus protocol (called Ouroboros) that validates transactions without high energy costs. Development on Cardano uses the Haskell programming language, which is described as enabling Cardano “to pursue evidence-based development for unparalleled security and stability.” The blockchain’s native token, ADA, is named after the 19th century mathematician, Ada Lovelace.',
    website: 'https://cardano.org/',
  },
  agld: {
    icon: LogoAgld,
    color: '#000000',
    description: 'Adventure Gold (AGLD) is an Ethereum token that was airdropped to owners of Loot Project NFTs. Loot is a project that generated randomized adventure gear stored on-chain that can serve as the foundation for games built in the future. AGLD can potentially be used as an in-game currency for similar games and projects eventually built on top of the Loot Project.',
    website: 'https://www.lootproject.com/',
  },
  alcx: {
    icon: LogoAlcx,
    color: '#F5C09A',
    description: 'ALCX is an Ethereum token that governs Alchemix Finance, a protocol that lets users open collateral-backed loans that are paid off automatically using yield generated by the collateral. ALCX can be used to propose and vote on changes to the protocol.',
    website: 'https://alchemix.fi/',
  },
  algo: {
    icon: LogoAlgo,
    color: '#000000',
    description: 'Algorand is a cryptocurrency and blockchain protocol that aims to be simultaneously scalable, secure, and decentralized. It uses a consensus algorithm called pure proof-of-stake.',
    website: 'https://www.algorand.com/',
  },
  amp: {
    icon: LogoAmp,
    color: '#E42E95',
    description: 'Amp is an Ethereum token that aims to “collateralize payments on the Flexa Network, making them instant and secure.” If a BTC or ETH payment fails due to unconfirmed or long transaction times “the Amp collateral can instead be liquidated to cover losses” while the vendor receives payment in fiat, potentially providing greater assurances to both parties.',
    website: 'https://amptoken.org/',
  },
  ankr: {
    icon: LogoAnkr,
    color: '#579BF0',
    description: 'Ankr (ANKR) is an Ethereum token that powers Ankr, a distributed computing platform that aims to make it easy and affordable for developers to deploy and use a variety of blockchains. The ANKR token can be used to pay for services on Ankr, such as node deployment, and also acts as an incentive for network participants.',
    website: 'https://www.ankr.com/',
  },
  arpa: {
    icon: LogoArpa,
    color: '#263145',
    description: 'ARPA is an Ethereum token that powers ARPA Chain, a computation network that enables privacy-preserving smart contracts, data storage, and scalable off-chain transactions. The ARPA token can be used to pay for data and computation in addition to governing the future of the network.',
    website: 'https://arpachain.io/',
  },
  asm: {
    icon: LogoAsm,
    color: '#0085FE',
    description: 'ASM is an Ethereum token that powers Assemble, a platform where users and merchants can aggregate, manage, and spend reward points. On Assemble, point providers and retailers can run special events or promotions, providing benefits like discounts for ASM holders.',
    website: 'https://assembleprotocol.io/',
  },
  atom: {
    icon: LogoAtom,
    color: '#2F3148',
    description: 'Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to "create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way." Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.',
    website: 'https://cosmos.network/',
  },
  auction: {
    icon: LogoAuction,
    color: '#212121',
    description: 'AUCTION is an Ethereum token that powers Bounce, a decentralized auction protocol for token and NFT sales. AUCTION supports incentives on the protocol, provides benefits and governance rights for holders, and is used to pay for certified listings.',
    website: 'https://bounce.finance/',
  },
  avax: {
    icon: LogoAvax,
    color: '#E84142',
    description: 'Avalanche describes itself as an open, programmable smart contracts platform for decentralized applications. AVAX is used to pay transaction fees and can be staked to secure the network. Avalanche is compatible with Solidity, Ethereum’s programming language, and can be used to deploy custom private or public blockchains as “subnets.”',
    website: 'https://www.avax.network/',
  },
  axs: {
    icon: LogoAxs,
    color: '#0055D5',
    description: 'AXS is an Ethereum token that powers Axie Infinity, a blockchain-based game where players can battle, collect, and build a digital kingdom for their pets. AXS holders can claim rewards for staking their tokens, playing the game, and participating in key governance votes.',
    website: 'https://axieinfinity.com/',
  },
  badger: {
    icon: LogoBadger,
    color: '#F1A23F',
    description: 'BADGER is an Ethereum token that powers Badger DAO, a decentralized autonomous organization (DAO) focused on bringing Bitcoin into the decentralized finance (DeFi) ecosystem on Ethereum and other blockchains. BADGER is primarily used to govern the direction of Badger DAO and its products.',
    website: 'https://badger.com/',
  },
  bal: {
    icon: LogoBal,
    color: '#1E1E1E',
    description: 'Balancer (BAL) is an Ethereum token that powers the Balancer protocol, an automated market maker that lets anyone create or add liquidity to trading pools while earning customizable trading fees. Balancer pools can have up to 8 tokens and each token can be individually weighted within the pool, such that one token can make up as little as 2% of the total.',
    website: 'https://balancer.finance/',
  },
  band: {
    icon: LogoBand,
    color: '#516BFF',
    description: 'Band is a cryptocurrency that describes itself as “a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.” Band allows blockchains to access data, such as stock prices and weather, that are available via API. Note: Coinbase only supports the Band token running on Ethereum (ERC-20).',
    website: 'https://bandprotocol.com/',
  },
  bat: {
    icon: LogoBat,
    color: '#FF5000',
    description: 'BAT is an Ethereum token that powers Brave Software\'s blockchain-based digital advertising platform. Internet users who browse the web using Brave\'s free web browser (available at Brave.com) can choose to replace the ads they see with ads on Brave\'s ad network. Users then receive BAT from advertisers as compensation for their attention.',
    website: 'https://basicattentiontoken.org/',
  },
  bch: {
    icon: LogoBch,
    color: '#8DC351',
    description: 'Bitcoin Cash is a fork of Bitcoin that seeks to add more transaction capacity to the network in order to be useful for everyday transactions.',
    website: 'http://bch.info/',
  },
  bnt: {
    icon: LogoBnt,
    color: '#000E2B',
    description: 'Bancor Network Token (BNT) is an Ethereum token that powers the Bancor protocol. The protocol describes itself as “a fully on-chain liquidity protocol that can be implemented on any smart contract-enabled blockchain.”',
    website: 'https://bancor.network/',
  },
  bond: {
    icon: LogoBond,
    color: '#FF4339',
    description: 'BOND is an Ethereum token that governs BarnBridge, a protocol that enables users to hedge against DeFi yield sensitivity and price volatility. Its first application, SMART Yield, allows users to choose between risk profiles for lending on DeFi protocols such as Aave and Compound. By using SMART Yield, senior bond investors can receive fixed rates at potentially lower risk while junior bond investors can receive higher rates at higher risk.',
    website: 'https://barnbridge.com/',
  },
  btc: {
    icon: LogoBtc,
    color: '#F7931B',
    description: 'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.',
    website: 'https://bitcoin.org/',
  },
  btrst: {
    icon: LogoBtrst,
    color: '#0E0E11',
    description: 'BTRST is an Ethereum token that powers Braintrust, a decentralized talent network connecting freelancers with organizations. BTRST is used to govern the network and also as an incentive to refer new users.',
    website: 'https://www.usebraintrust.com/',
  },
  cgld: {
    icon: LogoCgld,
    color: '#FBCC5C',
    description: 'Celo is the core utility, reserve, staking, and governance asset for the Celo platform. The platform aims to make financial tools borderless, easy to use, and accessible for anyone with a mobile phone.',
    website: 'https://celo.org/',
  },
  chz: {
    icon: LogoChz,
    color: '#B02728',
    description: 'Chiliz (CHZ) is an Ethereum token that powers Socios.com, a platform that lets users trade tokens to show their support for professional sports teams. The tokens on Socios.com — called Fan Tokens — make users eligible for rewards and promotions and can also be used to influence team decisions by popular voting on the Chiliz blockchain.',
    website: 'https://www.chiliz.com/',
  },
  clv: {
    icon: LogoClv,
    color: '#42C37B',
    description: 'Clover Finance is a blockchain infrastructure platform that’s focused on cross-chain compatibility for DeFi applications. The CLV token is used to pay for Clover transactions and to vote for network upgrades. Clover also aims to enable interoperability between Bitcoin and other blockchains. Note: Coinbase currently supports CLV running on Ethereum (ERC-20).',
    website: 'https://clover.finance/',
  },
  comp: {
    icon: LogoComp,
    color: '#01D396',
    description: 'Compound (COMP) is an Ethereum token that enables community governance of the Compound protocol. The protocol is a series of decentralized interest rate markets that allow users to supply and borrow Ethereum tokens at variable interest rates. COMP token holders and their delegates can also debate, propose, and vote on changes to the protocol.',
    website: 'https://compound.finance/',
  },
  coti: {
    icon: LogoCoti,
    color: '#229FD0',
    description: 'COTI is a token that powers Coti, a project that describes itself as a “DAG (directed acyclic graph) protocol optimized for creating decentralized payment networks and stable coins.” Coti uses Trustchain, a decentralized ledger that can process over 100,000 transactions per second, to power online and offline payments, loyalty payments, stablecoins, and more. Note: Coinbase currently only supports COTI running on the Ethereum blockchain (ERC-20).',
    website: 'https://coti.io/',
  },
  cro: {
    icon: LogoCro,
    color: '#103F68',
    description: 'Crypto.com Chain is an Ethereum token that powers Crypto.com Pay, a service that aims to allow users to pay for goods and services with cryptocurrency while receiving cashback rewards.',
    website: 'https://crypto.org/',
  },
  crv: {
    icon: LogoCrv,
    color: '#721BFF',
    description: 'Curve (CRV) is an Ethereum token that powers Curve.fi, a decentralized exchange and automated market maker protocol. The protocol is designed to make it easy to swap between similar ERC-20 tokens, primarily stablecoins (like USDC and DAI) and Ethereum-based Bitcoin tokens (like WBTC and renBTC). In order to minimize impermanent loss, the protocol only hosts pools of similar assets. This means you can provide USDC-DAI-USDT liquidity on Curve, but not, for example, USDC-WBTC. The CRV token can be locked for various periods of time (up to 4 years) in order to vote on governance and claim protocol fees as a reward.',
    website: 'https://resources.curve.fi/',
  },
  ctsi: {
    icon: LogoCtsi,
    color: '#1A1B1D',
    description: 'CTSI is a utility token that powers the Cartesi network, which aims to solve blockchain scalability and high fees using a technology called Optimistic Rollups. CTSI can be used for staking and fees for processing data on the network. Notably, Cartesi enables smart contract creation using mainstream programming languages.',
    website: 'https://cartesi.io/',
  },
  cvc: {
    icon: LogoCvc,
    color: '#3AB03E',
    description: 'Civic (CVC) is an Ethereum token used to power Civic’s identity verification protocol. Users who verify their information through Civic can then securely share both their info and the verification with service providers, reducing the need to constantly re-verify their identity. In return for this convenience, service providers may provide users and verifiers with CVC.',
    website: 'https://www.civic.com/',
  },
  dai: {
    icon: LogoDai,
    color: '#F3B732',
    description: 'Dai (DAI) is a decentralized stablecoin running on Ethereum (ETH) that attempts to maintain a value of $1.00 USD. Unlike centralized stablecoins, Dai isn\'t backed by US dollars in a bank account. Instead, it’s backed by collateral on the Maker platform. Note: if the Dai credit system is upgraded or shutdown, Dai holders may need to convert their Dai to Ethereum through the Maker platform. Read more at makerdao.com/whitepaper.',
    website: 'https://www.makerdao.com/',
  },
  dash: {
    icon: LogoDash,
    color: '#018CE7',
    description: 'Dash is a cryptocurrency with optional speed and privacy features. Its unique network architecture consists of both regular miners and privileged machines called Masternodes.',
    website: 'https://www.dash.org/',
  },
  ddx: {
    icon: LogoDdx,
    color: '#EF88AA',
    description: 'DDX is an Ethereum token that powers DerivaDEX, a decentralized exchange for derivative contracts. The DDX token allows users to participate in the governance and operation of the exchange.',
    website: 'https://derivadex.com/',
  },
  dnt: {
    icon: LogoDnt,
    color: '#2D398F',
    description: 'District0x is an Ethereum token that powers a network of decentralized marketplaces and communities called districts. The token is required for application to the District Registry and is used to signal support or disapproval for proposals made by network participants.',
    website: 'https://district0x.io/',
  },
  doge: {
    icon: LogoDoge,
    color: '#C4A634',
    description: 'Dogecoin (DOGE) was created in 2013 as a lighthearted alternative to traditional cryptocurrencies like Bitcoin. The Dogecoin name and Shiba Inu logo are based on a meme. Unlike Bitcoin, which is designed to be scarce, Dogecoin is intentionally abundant — 10,000 new coins are mined every minute and there is no maximum supply.',
    website: 'https://dogecoin.com/',
  },
  dot: {
    icon: LogoDot,
    color: '#E6007A',
    description: 'Polkadot is a protocol that enables cross-blockchain transfers of any type of data or asset. By uniting multiple blockchains, Polkadot aims to achieve high degrees of security and scalability. DOT serves as the protocol’s governance token and can be used for staking to secure the network or to connect (“bond”) new chains.',
    website: 'https://polkadot.network/',
  },
  enj: {
    icon: LogoEnj,
    color: '#614DBE',
    description: 'Enjin Coin (ENJ) is an Ethereum token that aims to “make it easy for individuals, businesses, and brands to use non-fungible tokens (NFTs).” ENJ is used to directly back the value of NFTs minted within the Enjin ecosystem.',
    website: 'https://enjin.io/',
  },
  ens: {
    icon: LogoEns,
    color: '#5284FF',
    description: 'ENS is an Ethereum token that governs the Ethereum Name Service, a protocol for human-readable crypto addresses and decentralized domain names. ENS will be used to propose and vote for changes to the protocol.',
    website: 'https://ens.domains/',
  },
  eos: {
    icon: LogoEos,
    color: '#000000',
    description: 'EOS is a cryptocurrency designed to support large-scale applications. There are no fees to send or receive EOS. Instead, the protocol rewards the entities that run the network periodically with new EOS, effectively substituting inflation for transaction fees.',
    website: 'https://eos.io/',
  },
  etc: {
    icon: LogoEtc,
    color: '#328432',
    description: 'Ethereum Classic is a cryptocurrency with a special focus on immutability, popularly expressed as “code is law.”',
    website: 'https://ethereumclassic.org/',
  },
  eth: {
    icon: LogoEth,
    color: '#627EEB',
    description: 'Ethereum is a decentralized computing platform that uses ETH (also called Ether) to pay transaction fees (or “gas”). Developers can use Ethereum to run decentralized applications (dApps) and issue new crypto assets, known as Ethereum tokens.',
    website: 'https://ethereum.org/',
  },
  farm: {
    icon: LogoFarm,
    color: '#FECF00',
    description: 'FARM is an Ethereum token that powers Harvest Finance, a yield optimizer that moves funds around the decentralized finance (DeFi) ecosystem in an effort to generate yields. FARM can be used for staking and yield farming on Harvest Finance.',
    website: 'https://harvest.finance/',
  },
  fet: {
    icon: LogoFet,
    color: '#1D2743',
    description: 'FET is an Ethereum token that powers Fetch.ai, a decentralized machine learning platform for applications such as asset trading, gig economy work, and energy grid optimization. Fetch.ai’s first decentralized finance application helps Uniswap users automate trading according to predefined conditions.',
    website: 'https://fetch.ai/',
  },
  fil: {
    icon: LogoFil,
    color: '#42C1CA',
    description: 'Filecoin (FIL) is a cryptocurrency that powers the Filecoin network, a decentralized peer-to-peer file storage network that aims to let anyone store, retrieve, and host digital information. FIL tokens are used as payment for these services and as an economic incentive to ensure files are stored reliably over time.',
    website: 'https://filecoin.io/',
  },
  forth: {
    icon: LogoForth,
    color: '#4712B0',
    description: 'FORTH is a cryptocurrency that powers Ampleforth, a protocol that automatically adjusts the supply of its native token, AMPL, in response to demand. FORTH is Ampleforth’s governance token. FORTH holders can vote on proposed changes to the Ampleforth protocol or delegate their votes to representatives who vote on their behalf.',
    website: 'https://www.ampleforth.org/',
  },
  fx: {
    icon: LogoFx,
    color: '#F7D509',
    description: 'FX is an Ethereum token that powers Function X, which comprises a core blockchain, cross-chain protocol, and platform for decentralized applications. FX can be used to pay for services such as smart contract creation and data storage, to vote for network upgrades, and for staking on the network.',
    website: 'https://functionx.io/',
  },
  gala: {
    icon: LogoGala,
    color: '#000000',
    description: 'GALA is an Ethereum token that powers Gala Games, a platform for blockchain gaming. GALA is used as the medium of exchange between Gala Games participants. For example, it can be used to pay for in-game items.',
    website: 'https://app.gala.games/',
  },
  gnt: {
    icon: LogoGnt,
    color: '#001D57',
    description: 'Golem is an Ethereum token that allows users to pay or receive payment for resources via the Golem protocol. The protocol aims to allow participants in the network to loan out their computer’s spare processing power to others.',
    website: 'https://golem.network/',
  },
  grt: {
    icon: LogoGrt,
    color: '#6747ED',
    description: 'The Graph (GRT) is an Ethereum token that powers The Graph, a decentralized protocol for indexing and querying data from blockchains. Just as Google indexes the web, The Graph indexes blockchain data from networks like Ethereum and Filecoin. This data is grouped into open APIs called subgraphs that anyone can query.',
    website: 'https://thegraph.com/',
  },
  gtc: {
    icon: LogoGtc,
    color: '#02E2AC',
    description: 'Gitcoin (GTC) is an Ethereum token that enables community governance of the Gitcoin platform. The platform is designed to fund and coordinate open source development by novel means such as quadratic funding. As of June 2021, Gitcoin has facilitated over $21 million in grants and bounties for open source developers.',
    website: 'https://gitcoin.co/',
  },
  gyen: {
    icon: LogoGyen,
    color: '#005BAC',
    description: 'GYEN is a stablecoin running on Ethereum that’s intended to maintain a value of one Japanese Yen. The company behind GYEN, GMO-Z.com Trust Company, claims to hold reserves that fully back each GYEN.',
    website: 'https://stablecoin.z.com/gyen/',
  },
  icp: {
    icon: LogoIcp,
    color: '#29ABE2',
    description: 'Internet Computer (ICP) is a utility token that allows users to participate in and govern the Internet Computer blockchain network. The network aims to help developers create websites, enterprise IT systems, internet services, and DeFi applications by "installing their code directly on the public Internet." ICP can also be staked or "converted into cycles" that can be used to power computation for dApps and traditional applications.',
    website: 'https://dfinity.org/',
  },
  iotx: {
    icon: LogoIotx,
    color: '#30D5A5',
    description: 'IOTX is an Ethereum token that powers IoTeX, a platform that aims to connect IoT devices (such as cameras and sensors) and decentralized applications. IOTX can be used to pay for transactions, for staking and governance, and to register new devices on the IoTeX network.',
    website: 'https://iotex.io/',
  },
  jasmy: {
    icon: LogoJasmy,
    color: '#F7941C',
    description: 'JASMY is an Ethereum token that powers Jasmy, an organization that develops IoT (“Internet of Things”) platforms. Rather than coordinating networks of devices and data through centralized servers, Jasmy aims to decentralize the process via edge computing and storing data on IPFS, a decentralized storage network. JASMY can be used to transfer tokens between devices and payment for network services.',
    website: 'https://www.jasmy.co.jp',
  },
  keep: {
    icon: LogoKeep,
    color: '#000000',
    description: 'KEEP is an Ethereum token that powers the Keep Network, a platform that aims to bridge public blockchains and private data. One of Keep Network’s first products is an Ethereum token that represents 1 Bitcoin, called tBTC. Keep Network enables users to deposit Bitcoin and redeem tokenized tBTC, which can then be used in the Ethereum ecosystem without centralized intermediaries.',
    website: 'https://keep.network/',
  },
  knc: {
    icon: LogoKnc,
    color: '#31CB9E',
    description: 'KNC is an Ethereum token used for paying fees on the Kyber Network, a protocol that aims to make swapping digital assets and cryptocurrencies simple and efficient.',
    website: 'https://kyber.network/',
  },
  krl: {
    icon: LogoKrl,
    color: '#822077',
    description: 'KRL is an Ethereum token that powers Kryll, a platform for automated trading strategies. Kryll users can browse, create, and backtest trading strategies while using KRL to pay for their activity on the platform.',
    website: 'https://kryll.io/',
  },
  lcx: {
    icon: LogoLcx,
    color: '#1D357C',
    description: 'LCX is an Ethereum token used to pay for fees on LCX Exchange, a centralized exchange for security tokens, token sales, and cryptocurrencies. LCX is also used to power other LCX products such as the LCX Terminal, which lets users trade across multiple exchanges, and the DeFi Terminal, which offers advanced charting and limit orders built on top of Uniswap.',
    website: 'https://www.lcx.com/',
  },
  link: {
    icon: LogoLink,
    color: '#2A5ADA',
    description: 'Chainlink (LINK) is an Ethereum token that powers the Chainlink decentralized oracle network. This network allows smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems.',
    website: 'https://chain.link/',
  },
  loom: {
    icon: LogoLoom,
    color: '#48BEFE',
    description: 'Loom Network (LOOM) is an Ethereum token that powers a network of delegated proof of stake sidechains (a system that Loom dubs “EOS on Ethereum”). This allows for highly-scalable games and user-facing dApps backed by the security of Ethereum.',
    website: 'https://loomx.io/',
  },
  lpt: {
    icon: LogoLpt,
    color: '#40D094',
    description: 'LPT is an Ethereum token that powers the Livepeer network, a platform for decentralized video streaming. LPT is required to perform the work of transcoding and distributing video on the network while also incentivizing peers to ensure that the network is cost-effective and secure.',
    website: 'https://livepeer.org/primer',
  },
  lrc: {
    icon: LogoLrc,
    color: '#2AB5F6',
    description: 'Loopring is an Ethereum token that describes itself as “an open-sourced, audited, and non-custodial exchange protocol.” It aims to allow anyone to build non-custodial, order book-based exchanges on Ethereum by leveraging zero-knowledge proofs.',
    website: 'https://loopring.org/',
  },
  ltc: {
    icon: LogoLtc,
    color: '#BFBBBB',
    description: 'Litecoin is a cryptocurrency that uses a faster payment confirmation schedule and a different cryptographic algorithm than Bitcoin.',
    website: 'https://litecoin.org/',
  },
  mana: {
    icon: LogoMana,
    color: '#FF2C55',
    description: 'Decentraland (MANA) is an Ethereum token that powers the Decentraland virtual reality platform. MANA can be used to pay for virtual plots of land in Decentraland as well as in-world goods and services.',
    website: 'https://decentraland.org/',
  },
  mask: {
    icon: LogoMask,
    color: '#1C68F3',
    description: 'Mask Network enables users of popular social media platforms to send cryptocurrency, interact with decentralized applications, and share encrypted content. MASK token holders can vote on ecosystem initiatives via a decentralized autonomous organization called MaskDAO.',
    website: 'https://mask.io/',
  },
  matic: {
    icon: LogoMatic,
    color: '#8247E5',
    description: 'Polygon was formerly called Matic Network. Polygon (MATIC) is an Ethereum token that powers the Polygon Network, a scaling solution for Ethereum. Polygon aims to provide faster and cheaper transactions on Ethereum using Layer 2 sidechains, which are blockchains that run alongside the Ethereum main chain. Users can deposit Ethereum tokens to a Polygon smart contract, interact with them within Polygon, and then later withdraw them back to the Ethereum main chain. The MATIC token is used to pay transaction fees and participate in proof-of-stake consensus.',
    website: 'https://polygon.technology/',
  },
  mir: {
    icon: LogoMir,
    color: '#232C45',
    description: 'MIR is an Ethereum token that governs the Mirror Protocol which “allows the creation of fungible assets, that track the price of real world assets.” The project aims to enable 24/7 equities trading by minting “synthetic” versions of the real thing. MIR tokens can be used to propose and vote on important changes to the protocol.',
    website: 'https://mirror.finance/',
  },
  mkr: {
    icon: LogoMkr,
    color: '#1AAB9B',
    description: 'Maker is an Ethereum token that describes itself as “a utility token, governance token, and recapitalization resource of the Maker system.” The purpose of the Maker system is to generate another Ethereum token, called Dai, that seeks to trade on exchanges at a value of exactly US$1.00.',
    website: 'https://makerdao.com/',
  },
  mln: {
    icon: LogoMln,
    color: '#3B82F6',
    description: 'MLN is an Ethereum token that powers Enzyme (formerly known as Melon Protocol), a protocol that aims to facilitate on-chain asset management for the DeFi ecosystem. MLN allows users to build, share, and explore DeFi investment strategies (called “vaults”) while filtering by historical performance and risk profiles. MLN is used to pay for various functions throughout the vault creation process and investment lifecycle.',
    website: 'https://enzyme.finance/',
  },
  musd: {
    icon: LogoMusd,
    color: '#000000',
    description: 'MUSD is a decentralized stablecoin running on Ethereum that attempts to maintain a value of US$1.00. Unlike centralized stablecoins, MUSD isn’t backed by US dollars in a bank account. Instead, it’s backed by an array of other stablecoins deposited as collateral on the mStable protocol.',
    website: 'https://mstable.org/',
  },
  nkn: {
    icon: LogoNkn,
    color: '#253A7E',
    description: 'New Kind of Network (NKN) is a public blockchain that aims to use economic incentives to motivate Internet users to share network connections and utilize unused bandwidth. NKN aims to be a network for building decentralized applications in a way that enhances peer-to-peer data transmission and connectivity.',
    website: 'https://nkn.org/',
  },
  nmr: {
    icon: LogoNmr,
    color: '#000000',
    description: 'Numeraire is an Ethereum token that powers Numerai, a San Francisco-based hedge fund that crowdsources artificial intelligence to make investments in major stock markets around the world. Numeraire (NMR) holders can stake their NMR tokens every week on specific predictions. Successful predictions are rewarded with more NMR.',
    website: 'https://numer.ai/',
  },
  nu: {
    icon: LogoNu,
    color: '#1D64FA',
    description: 'NuCypher (NU) is an Ethereum token that can be staked to run a node on the NuCypher network. NuCypher describes itself as a threshold cryptography network that provides data privacy and key management for decentralized applications and protocols.',
    website: 'https://www.nucypher.com/',
  },
  ogn: {
    icon: LogoOgn,
    color: '#2087FB',
    description: 'Origin Token (OGN) is an Ethereum token that powers the Origin platform, which aims to power decentralized and peer-to-peer marketplaces. OGN can be used for staking, governance, and advertising on the Origin platform.',
    website: 'https://www.originprotocol.com/',
  },
  omg: {
    icon: LogoOmg,
    color: '#101010',
    description: 'The OMG Network (formerly OmiseGO) is a value transfer network for Ethereum and any ERC-20 token. It describes itself as the first production-grade layer-2 Ethereum scaling solution and aims to let people move money and a variety of digital values on the blockchain faster, cheaper, and without compromising on security.',
    website: 'https://omg.network/',
  },
  orn: {
    icon: LogoOrn,
    color: '#313151',
    description: 'ORN is an Ethereum token that powers Orion Protocol, which aims to aggregate liquidity from centralized and decentralized exchanges into one platform. ORN can be used to receive discounted trading fees, for staking, and to access advanced features within the Orion Protocol.',
    website: 'https://www.orionprotocol.io/orn',
  },
  oxt: {
    icon: LogoOxt,
    color: '#5E45BA',
    description: 'Orchid (OXT) is an Ethereum token that powers the Orchid network, a peer-to-peer privacy tool that includes a decentralized VPN and other features designed to give users more control over their Internet connection. OXT can be used to pay for bandwidth or staked by bandwidth providers in order to operate a node.',
    website: 'https://www.orchid.com/',
  },
  pax: {
    icon: LogoPax,
    color: '#0293D6',
    description: 'The Paxos Standard Token is a stablecoin running on Ethereum. For stablecoins like PAX, the company behind the protocol is responsible for holding reserves that fully back each token. The company behind PAX, Paxos Trust Company, claims to hold reserves that fully back each PAX.',
    website: 'https://paxos.com/',
  },
  perp: {
    icon: LogoPerp,
    color: '#3CEAAA',
    description: 'PERP is an Ethereum token that powers Perpetual Protocol, a decentralized exchange for perpetual contracts. Using perpetual contracts, users can open leveraged long or short trading positions for a variety of assets.',
    website: 'https://www.perp.fi/',
  },
  pla: {
    icon: LogoPla,
    color: '#02D6B4',
    description: 'PLA is an Ethereum token that powers PlayDapp, a blockchain gaming platform and non-fungible token (NFT) marketplace. PLA acts as the primary token for processing transactions on PlayDapp. Game developers can also receive PLA when users make in-game purchases.',
    website: 'https://playdapp.io/',
  },
  poly: {
    icon: LogoPoly,
    color: '#1348E4',
    description: 'POLY is an Ethereum token that aims to facilitate digital securities trading on the Polymath platform. By creating a compliance-focused standard (ST-20) to issue and manage security tokens, Polymath seeks to tokenize and support the trading of traditional and new classes of assets.',
    website: 'https://polymath.network/',
  },
  powr: {
    icon: LogoPowr,
    color: '#6BEFAD',
    description: 'POWR is an Ethereum token that powers the Powerledger platform, which aims to enable peer-to-peer energy trading. POWR is required to participate in Powerledger and helps secure its various products, including energy trading, clean energy tracking, and verification.',
    website: 'https://powerledger.io/',
  },
  qnt: {
    icon: LogoQnt,
    color: '#EF4F1F',
    description: 'QNT is an Ethereum token that is used to power Quant Network’s Overledger brand of enterprise software solutions, which aim to connect public blockchains and private networks. Quant Network allows the creation of so-called mDapps that enable decentralized applications to operate on multiple blockchains at once.',
    website: 'https://www.quant.network/',
  },
  quick: {
    icon: LogoQuick,
    color: '#418AC9',
    description: 'QUICK is an Ethereum token that powers QuickSwap, a decentralized exchange that runs on the Polygon Network in order to provide faster and cheaper transactions on Ethereum. QUICK can be used to create and vote on proposals governing QuickSwap and can be staked to earn a portion of trading fees.',
    website: 'https://quickswap.exchange/',
  },
  rad: {
    icon: LogoRad,
    color: '#53D855',
    description: 'RAD is an Ethereum token that powers Radicle, a project that describes itself as an “open-source, community-led, and self-sustaining network for software collaboration.” The RAD token can enable reduced or zero fees when interacting with Radicle smart contracts in addition to governance through voting and proposals.',
    website: 'https://radicle.xyz/',
  },
  rai: {
    icon: LogoRai,
    color: '#1FC8A7',
    description: 'RAI is an Ethereum token that aims to maintain a stable value. The RAI-USD exchange rate is determined by supply and demand while the protocol that issues RAI tries to stabilize its price by constantly de- or re-valuing it. The supply and demand mechanic plays out between two parties: SAFE users (those who generate RAI with their ETH) and RAI holders (those who hold, speculate on or use RAI in other protocols and apps).',
    website: 'https://reflexer.finance/',
  },
  rari: {
    icon: LogoRari,
    color: '#FEDA03',
    description: 'RARI is an Ethereum token that powers Rarible, a community-owned marketplace for creating, selling, or collecting NFTs. RARI can be earned by using the platform and can be used to curate content and vote on platform upgrades.',
    website: 'https://rarible.com/',
  },
  ren: {
    icon: LogoRen,
    color: '#001E3D',
    description: 'Ren (REN) is an Ethereum token that powers Ren’s open protocol for transferring cryptocurrencies between blockchains. Ren aims to bring popular assets like Bitcoin and Zcash to blockchains including Ethereum, making it possible for these assets to participate in a multi-chain decentralized finance ecosystem.',
    website: 'https://renproject.io/',
  },
  rep: {
    icon: LogoRep,
    color: '#612A52',
    description: 'Augur’s Reputation token (REP) is an Ethereum token designed for reporting and disputing the outcome of events on online prediction markets. Reporters are rewarded for reporting the outcome of events correctly.',
    website: 'https://www.augur.net/',
  },
  req: {
    icon: LogoReq,
    color: '#00E6A0',
    description: 'REQ is an Ethereum token that powers the Request Network, a protocol for creating and requesting payments. Transactions on Request Network are immutably recorded and requests are processed without an intermediary.',
    website: 'https://request.network/en/',
  },
  rgt: {
    icon: LogoRgt,
    color: '#000000',
    description: 'RGT is an Ethereum token that powers Rari Capital, a decentralized protocol for lending and borrowing. The Rari Governance Token is used for fee discounts and protocol governance.',
    website: 'https://rari.capital/',
  },
  rlc: {
    icon: LogoRlc,
    color: '#FFD800',
    description: 'RLC is an Ethereum token for the iExec cloud platform in which users can monetize and rent computing power and data. iExec enables developers to power applications on what is described as “a decentralized marketplace for cloud resources."',
    website: 'https://iex.ec/',
  },
  rly: {
    icon: LogoRly,
    color: '#FF8A03',
    description: 'RLY is an Ethereum token that powers the Rally network. Rally enables creators and online communities to launch their own cryptocurrencies. By creating these so-called “social tokens,” fans can gain access to benefits like unreleased content or merch, while creators can unlock new forms of revenue.',
    website: 'https://rally.io/',
  },
  shib: {
    icon: LogoShib,
    color: '#1C2951',
    description: 'Shiba Inu (SHIB) is a token that aspires to be an Ethereum-based alternative to Dogecoin (DOGE), the popular memecoin. Unlike Bitcoin, which is designed to be scarce, SHIB is intentionally abundant — with a circulating supply of one quadrillion. The Shiba Inu Token ecosystem supports projects such as an NFT art incubator and the development of a decentralized exchange called Shibaswap.',
    website: 'https://shibatoken.com/',
  },
  skl: {
    icon: LogoSkl,
    color: '#000000',
    description: 'SKALE (SKL) is an Ethereum token that powers the Skale Network, which describes itself as “an Ethereum-compatible network with a leaderless consensus designed to run on an uncapped number of independent nodes.” Nodes on the Skale Network provide resources to multiple decentralized elastic blockchains. The SKL token grants a right to participate as a network validator, stake as a delegator, or access a share of the network’s resources as a developer.',
    website: 'https://skale.network/',
  },
  snx: {
    icon: LogoSnx,
    color: '#090220',
    description: 'Synthetix Network Token(SNX) is an Ethereum token that powers Synthetix, a decentralised synthetic asset issuance protocol. Synthetic assets are minted when token holders stake their SNX as collateral using Mintr, a decentralised application for interacting with the Synthetix contracts. The protocol currently supports synthetic fiat currencies, cryptocurrencies, and commodities.',
    website: 'https://www.synthetix.io/',
  },
  sol: {
    icon: LogoSol,
    color: '#00FFBD',
    description: 'Solana is a decentralized computing platform that uses SOL to pay for transactions. Solana aims to improve blockchain scalability by using a combination of proof of stake consensus and so-called proof of history. As a result, Solana claims to be able to support 50,000 transactions per second without sacrificing decentralization.',
    website: 'https://solana.com/',
  },
  storj: {
    icon: LogoStorj,
    color: '#2683FF',
    description: 'Storj (STORJ) is an Ethereum token that powers a decentralized cloud storage network for developers called Storj DCS (Decentralized Cloud Storage). After a customer uploads a file to Storj DCS, pieces of each file are distributed to a global network of independent nodes. When someone requests the file, it is then recompiled securely and made available for download. This means that anyone can store files on Storj DCS without having to trust a centralized data center. Developers can purchase cloud storage services with STORJ. Network participants earn STORJ in return for providing unused hard drive space and bandwidth to the network.',
    website: 'https://storj.io/',
  },
  suku: {
    icon: LogoSuku,
    color: '#000000',
    description: 'SUKU is an Ethereum token that powers the SUKU Platform, a blockchain-based ecosystem that aims to make supply chains more transparent. SUKU tokens can be used for platform governance and to reward users and SUKU node operators. SUKU Platform is also developing applications for DeFi lending and NFT marketplaces.',
    website: 'https://www.suku.world/',
  },
  sushi: {
    icon: LogoSushi,
    color: '#F056A3',
    description: 'SushiSwap (SUSHI) is an Ethereum token that powers SushiSwap, a decentralized cryptocurrency exchange and automated market maker built on Ethereum. Holders of SUSHI can participate in community governance and stake their tokens to receive a portion of SushiSwap’s transaction fees.',
    website: 'https://sushi.com/',
  },
  tbtc: {
    icon: LogoTbtc,
    color: '#000000',
    description: 'tBTC is an Ethereum token that’s intended to represent Bitcoin (BTC) on the Ethereum blockchain. It is not Bitcoin, but rather a separate ERC-20 token that’s designed to track Bitcoin’s value. tBTC is powered by the Keep Network. Keep Network enables users to deposit Bitcoin and redeem tokenized tBTC, which can then be used across the Ethereum ecosystem.',
    website: 'https://keep.network/',
  },
  trac: {
    icon: LogoTrac,
    color: '#6344DF',
    description: 'TRAC is an Ethereum token that powers OriginTrail, which describes itself as a “decentralized knowledge graph.” OriginTrail is used to discover, manage, and store data for everything from supply chain tracking to verifying art, diplomas, and business certifications. TRAC token is used to pay for data processing and storage on the network.',
    website: 'https://origintrail.io/',
  },
  trb: {
    icon: LogoTrb,
    color: '#000000',
    description: 'Tellor is a decentralized oracle network that allows smart contracts on Ethereum to securely connect to external data sources. TRB (a.k.a. “Tributes”) is an Ethereum token that powers the Tellor network and incentivizes honest reporting of external data.',
    website: 'https://tellor.io/',
  },
  tribe: {
    icon: LogoTribe,
    color: '#178DD0',
    description: 'TRIBE is an Ethereum token that governs Fei Protocol, which issues a separate, decentralized stablecoin called FEI that attempts to maintain a value of US$1.00. TRIBE can be used to vote for Fei Protocol upgrades and to adjust FEI stablecoin monetary policy.',
    website: 'https://fei.money/',
  },
  tru: {
    icon: LogoTru,
    color: '#1A5AFF',
    description: 'TRU is an Ethereum token that powers TrueFi, a decentralized finance protocol for uncollateralized lending using on-chain credit scores. TRU can be used for staking (i.e. to approve or reject new loans) and governance on the TrueFi protocol.',
    website: 'https://truefi.io/',
  },
  uma: {
    icon: LogoUma,
    color: '#FF4A49',
    description: 'UMA is an Ethereum token that describes itself as “an open-source protocol that allows developers to design and create their own financial contracts and synthetic assets.” The protocol’s name comes from the team’s goal of creating universal market access (UMA).',
    website: 'https://umaproject.org/',
  },
  uni: {
    icon: LogoUni,
    color: '#FF007A',
    description: 'Uniswap (UNI) is an Ethereum token that powers Uniswap, an automated liquidity provider that’s designed to make it easy to exchange Ethereum (ERC-20) tokens. There is no orderbook or central facilitator on Uniswap. Instead, tokens are exchanged through liquidity pools that are defined by smart contracts.',
    website: 'https://uniswap.org/',
  },
  usdc: {
    icon: LogoUsdc,
    color: '#2775C9',
    description: 'USD Coin (USDC) is a stablecoin fully backed by the US dollar and developed by the CENTRE consortium. Coinbase customers with US dollar accounts may exchange 1 USDC for US$1.00 (and vice versa) on Coinbase in jurisdictions where USDC support is available. The graph above reflects USDC’s current and historical redemption value of US$1.00, which may not match the price of USDC on other exchanges. USDC is an Ethereum token and is the only fiat-backed stablecoin currently supported by Coinbase. Note: Coinbase only supports USDC running on Ethereum (ERC-20).',
    website: 'https://www.coinbase.com/usdc/',
  },
  usdt: {
    icon: LogoUsdt,
    color: '#27A17C',
    description: 'Tether (USDT) is an Ethereum token that is pegged to the value of a U.S. dollar (also known as a stablecoin). Tether’s issuer claims that USDT is backed by bank reserves and loans which match or exceed the value of USDT in circulation. Important note: at this time, Coinbase only supports USDT on the Ethereum blockchain (ERC-20). Do not send USDT on any other blockchain to Coinbase.',
    website: 'https://tether.to/',
  },
  ust: {
    icon: LogoUst,
    color: '#5493F7',
    description: 'TerraUSD is a decentralized stablecoin running on Ethereum that attempts to maintain a value of US$1.00. Unlike centralized stablecoins, UST isn’t backed by US dollars in a bank account. Instead, in order to mint 1 TerraUSD, US$1.00 worth of TerraUSD’s reserve asset (LUNA) must be burned.',
    website: 'https://www.terra.money/',
  },
  vgx: {
    icon: LogoVgx,
    color: '#585DF6',
    description: 'VGX is an Ethereum token that’s used to reward and incentivize use of the Voyager centralized exchange. On Voyager, VGX holders can earn staking rewards, receive cashback on trades, and more.',
    website: 'https://www.investvoyager.com/vgx',
  },
  wbtc: {
    icon: LogoWbtc,
    color: '#1F1B2C',
    description: 'Wrapped Bitcoin (WBTC) is an Ethereum token that is intended to represent Bitcoin (BTC) on the Ethereum blockchain. It is not Bitcoin, but rather a separate ERC-20 token that’s designed to track Bitcoin’s value. WBTC was created to allow Bitcoin holders to participate in decentralized finance (“DeFi”) apps that are popular on Ethereum. Through a WBTC partner, 1 Bitcoin can be exchanged for 1 Wrapped Bitcoin, and vice-versa. The BTC that backs WBTC is verifiable through a “proof of reserve” system that verifies the 1:1 backing between minted WBTC tokens and Bitcoin stored by custodians. WBTC is maintained by a group called the WBTC DAO that consists of over 30 members. It was originally started by BitGo, Ren, and Kyber.',
    website: 'https://wbtc.network/',
  },
  wcfg: {
    icon: LogoWcfg,
    color: '#000000',
    description: 'Wrapped Centrifuge (WCFG) is an Ethereum token that’s intended to represent Centrifuge (CFG) on the Ethereum blockchain. WCFG is not CFG, but rather a separate ERC-20 token that’s designed to track CFG’s price. CFG is the native asset of the Polkadot-based Centrifuge Chain and can be used for staking and on-chain governance.',
    website: 'https://centrifuge.io/',
  },
  wluna: {
    icon: LogoWluna,
    color: '#F9D85E',
    description: 'Wrapped Luna (WLUNA) is an Ethereum token that’s intended to represent Terra (LUNA) on the Ethereum blockchain. It is not LUNA, but rather a separate ERC-20 token that’s designed to track LUNA’s value. WLUNA was created to allow LUNA holders to trade, hold, and participate in decentralized finance (“DeFi”) apps on Ethereum. Through a WLUNA partner, 1 LUNA can be exchanged for 1 WLUNA, and vice-versa.',
    website: 'https://www.terra.money/',
  },
  xlm: {
    icon: LogoXlm,
    color: '#000000',
    description: 'Stellar’s cryptocurrency, the Stellar Lumen (XLM), powers the Stellar payment network. Stellar aims to connect banks, payment systems, and individuals quickly and reliably.',
    website: 'https://www.stellar.org/',
  },
  xrp: {
    icon: LogoXrp,
    color: '#24292F',
    description: 'In light of the SEC’s action against Ripple Labs, Inc., trading in XRP has been suspended as of January 19, 2021. XRP is the cryptocurrency used by the Ripple payment network. Built for enterprise use, XRP aims to be a fast, cost-efficient cryptocurrency for cross-border payments.',
    website: 'https://ripple.com/xrp/',
  },
  xtz: {
    icon: LogoXtz,
    color: '#A6E000',
    description: 'Tezos is a cryptocurrency and decentralized computing platform. Its features include proof of stake consensus, formal verification (which lets developers verify the correctness of their code), and the ability to let stakeholders vote on changes to the protocol. Tezos\'s block creation process is called "baking" — Tezos holders who stake their tokens can receive Tezos tokens as a reward for creating and verifying blocks.',
    website: 'https://www.tezos.com/',
  },
  xyo: {
    icon: LogoXyo,
    color: '#7A8DA8',
    description: 'XYO is an Ethereum token that powers XYO Network, a decentralized network of devices that anonymously collect and validate geospatial data. On the XYO World platform, XYO tokens can be traded for and staked against unique ERC-721 tokens representing real-world locations.',
    website: 'https://xyo.network/',
  },
  yfi: {
    icon: LogoYfi,
    color: '#006AE2',
    description: 'Yearn.finance (YFI) is an Ethereum token that governs the Yearn.finance platform. The platform is a yield optimizer that moves funds around the decentralized finance (“defi”) ecosystem in an effort to generate a high return.',
    website: 'https://yearn.finance/',
  },
  yfii: {
    icon: LogoYfii,
    color: '#FA2978',
    description: 'DFI.Money (YFII) is an Ethereum token that governs the DFI.Money platform. The platform is a fork of Yearn.finance and acts as a yield optimizer for tokens deposited to the platform.',
    website: 'https://dfi.money/',
  },
  zec: {
    icon: LogoZec,
    color: '#ECB244',
    description: 'Zcash is a cryptocurrency that offers two types of addresses: transparent addresses that are publicly visible on the Zcash blockchain and shielded addresses that are more private. Coinbase customers can receive Zcash from both transparent and shielded addresses and send Zcash to transparent addresses. Sending to shielded addresses is not supported at this time.',
    website: 'https://z.cash/',
  },
  zen: {
    icon: LogoZen,
    color: '#20CBA3',
    description: 'Horizen is a blockchain ecosystem that enables privacy-preserving decentralized applications. Using ZEN as its native asset, Horizen has both a main blockchain and a sidechain platform that enables developers to build custom private or public blockchains and decentralized applications.',
    website: 'https://www.horizen.io/',
  },
  zrx: {
    icon: LogoZrx,
    color: '#302C2B',
    description: 'ZRX is an Ethereum token that is used to power the 0x protocol. The protocol itself is designed to allow Ethereum tokens to be traded at a low cost directly from your wallet.',
    website: 'https://0x.org/',
  },
};

export default CryptoCurrenciesIconMap;
