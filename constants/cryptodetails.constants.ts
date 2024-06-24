import ECrypto from "./cryptos.enum"

const CryptoDetails: Record<ECrypto, {
  color: string,
  description: string,
  website: string,
}> = {
  [ECrypto["00"]]: {
    color: '#000000',
    description: '00 is the ERC-20 utility token of the P00LS platform and ecosystem, which supports the distribution and trading of social tokens. Legendary footballer Ronaldinho recently launched his social token, RON, on the P00LS platform. 00 tokens are used to govern the zerozero DAO and access premium P00LS features.',
    website: 'https://www.p00ls.io/',
  },
  [ECrypto["1inch"]]: {
    color: '#1B314F',
    description: '1INCH is an Ethereum token that powers 1inch, a decentralized exchange that aims to offer the “best rates by discovering the most efficient swapping routes across all leading DEXes.” Decentralized exchanges (a.k.a. DEXes) like 1inch enable users to transact tokens without an intermediary. 1inch aggregates token prices across decentralized exchanges in order to find the best prices for users.',
    website: 'https://1inch.exchange/',
  },
  [ECrypto.aave]: {
    color: '#B6509E',
    description: 'Aave (AAVE) is an Ethereum token that powers Aave, a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow cryptocurrencies in exchange for paying a variable interest rate.',
    website: 'https://aave.com/',
  },
  [ECrypto.abt]: {
    color: '#3DB1AD',
    description: 'ABT is an Ethereum token that functions as payment in the Arcblock ecosystem. Arcblock is a platform for building and deploying decentralized applications using a combination of blockchain technology and cloud computing.',
    website: 'https://www.arcblock.io/en/',
  },
  [ECrypto.ach]: {
    color: '#2E3567',
    description: 'ACH is an Ethereum token that powers Alchemy Pay, a platform that enables payments using a wide variety of fiat and cryptocurrencies. Fees are paid using the ACH token and users can earn ACH rewards for purchases.',
    website: 'https://www.alchemytech.io/',
  },
  [ECrypto.acs]: {
    color: '#6591FF',
    description: 'ACS is the Solana SPL utility token of Access Protocol, a monetization platform for digital content creators. ACS tokens can be staked in order to access various digital publications.',
    website: 'https://www.accessprotocol.co/',
  },
  [ECrypto.ada]: {
    color: '#0D1E30',
    description: 'Cardano (ADA) is a blockchain platform built on a proof-of-stake consensus protocol (called Ouroboros) that validates transactions without high energy costs. Development on Cardano uses the Haskell programming language, which is described as enabling Cardano “to pursue evidence-based development for unparalleled security and stability.” The blockchain’s native token, ADA, is named after the 19th century mathematician, Ada Lovelace.',
    website: 'https://cardano.org/',
  },
  [ECrypto.aergo]: {
    color: '#9CB9F2',
    description: 'AERGO is an Ethereum token for the Aergo protocol, which aims to allow enterprises and developers to design, build, and deploy blockchain applications on public or private networks. AERGO tokens can be used for deploying smart contracts, staking, and for paying for other services on the Aergo platform.',
    website: 'https://www.aergo.io/',
  },
  [ECrypto.aero]: {
    color: '#0052FF',
    description: 'Aerodrome Finance is an automated market maker and liquidity hub on Base. Aerodrome Finance was launched as a fork of Velodrome Finance. Holders of AERO, the protocol’s utility token, can vote-escrow their tokens. Once tokens are locked, the holder can participate in governance to earn a portion of protocol trading fees.',
    website: 'https://aerodrome.finance/',
  },
  [ECrypto.agld]: {
    color: '#000000',
    description: 'Adventure Gold (AGLD) is an Ethereum token that was airdropped to owners of Loot Project NFTs. Loot is a project that generated randomized adventure gear stored on-chain that can serve as the foundation for games built in the future. AGLD can potentially be used as an in-game currency for similar games and projects eventually built on top of the Loot Project.',
    website: 'https://www.lootproject.com/',
  },
  [ECrypto.aioz]: {
    color: '#35D687',
    description: 'AIOZ is an Ethereum token that powers Aioz Network, a Layer 1 blockchain enabling Ethereum and Cosmos interoperability. Aioz Network aims to enable instant finality and low transaction fees for applications such as file storage, live streaming, content delivery, and more. AIOZ can be earned by staking directly on the network and can be used to pay for apps and items on Aioz Network.',
    website: 'https://aioz.network/',
  },
  [ECrypto.akt]: {
    color: '#FF414C',
    description: 'Akash is a blockchain network that supports a decentralized compute marketplace. Akash allows users to lease computing resources from the network’s providers. AKT is the network’s utility token and can be used to secure the network through staking. AKT can also be used to participate in network governance. AKT tokens can be used to vote on proposals related to the network’s development and grant allocations.',
    website: 'https://akash.network/',
  },
  [ECrypto.alcx]: {
    color: '#F5C09A',
    description: 'ALCX is an Ethereum token that governs Alchemix Finance, a protocol that lets users open collateral-backed loans that are paid off automatically using yield generated by the collateral. ALCX can be used to propose and vote on changes to the protocol.',
    website: 'https://alchemix.fi/',
  },
  [ECrypto.aleph]: {
    color: '#0054FF',
    description: 'ALEPH is an Ethereum token that is the currency of Aleph.im, a cross-blockchain layer-2 network specifically focused on decentralized applications and their related infrastructure (storage, computing servers, security). ALEPH is used to pay for storage, computing and synchronization fees.',
    website: 'https://aleph.im/',
  },
  [ECrypto.algo]: {
    color: '#000000',
    description: 'Algorand is a cryptocurrency and blockchain protocol that aims to be simultaneously scalable, secure, and decentralized. It uses a consensus algorithm called pure proof-of-stake.',
    website: 'https://www.algorand.com/',
  },
  [ECrypto.alice]: {
    color: '#EA8397',
    description: 'ALICE is an Ethereum token that powers My Neighbor Alice, a blockchain-based multiplayer game that lets players build virtual homes, farms, and more. ALICE can be earned through in-game participation, staking, platform governance, and can be used to purchase in-game items.',
    website: 'https://www.myneighboralice.com/',
  },
  [ECrypto.amp]: {
    color: '#E42E95',
    description: 'Amp is an Ethereum token that aims to “collateralize payments on the Flexa Network, making them instant and secure.” If a BTC or ETH payment fails due to unconfirmed or long transaction times “the Amp collateral can instead be liquidated to cover losses” while the vendor receives payment in fiat, potentially providing greater assurances to both parties.',
    website: 'https://amptoken.org/',
  },
  [ECrypto.ankr]: {
    color: '#579BF0',
    description: 'Ankr (ANKR) is an Ethereum token that powers Ankr, a distributed computing platform that aims to make it easy and affordable for developers to deploy and use a variety of blockchains. The ANKR token can be used to pay for services on Ankr, such as node deployment, and also acts as an incentive for network participants.',
    website: 'https://www.ankr.com/',
  },
  [ECrypto.ant]: {
    color: '#00B3EC',
    description: 'ANT is the ERC-20 governance token of Aragon, a DAO tooling platform. Aragon provides developers with the infrastructure needed to create a decentralized autonomous organization.',
    website: 'https://aragon.org/',
  },
  [ECrypto.ape]: {
    color: '#0442BE',
    description: 'ApeCoin (APE) is an ERC-20 token used within the APE ecosystem. ApeCoin is the ecosystem’s governance token, allowing ApeCoin holders to participate in ApeCoin DAO. ApeCoin will also be used to access games, merchandise, events, and services.',
    website: 'https://apecoin.com/',
  },
  [ECrypto.api3]: {
    color: '#000000',
    description: 'API3 is an Ethereum token that powers the API3 project, which aims to connect traditional APIs with the blockchain ecosystem. API3 token is used to govern the API3 DAO (decentralized autonomous organization) and to vote on project upgrades.',
    website: 'https://api3.org/',
  },
  [ECrypto.apt]: {
    color: '#6AD5AA',
    description: 'APTOS is the native token of Aptos, a layer-1 blockchain network created by Aptos Labs. In order to maximize the network’s security and scalability, Aptos utilizes the Move programming language, which was created as part of Meta’s effort to launch the Libra blockchain.',
    website: 'https://aptoslabs.com/',
  },
  [ECrypto.arb]: {
    color: '#28A0F0',
    description: 'ARB is the utility token of Arbitrum, an Ethereum layer-2 network. ARB functions as the governance token of the Arbitrum DAO, as holders may create and vote on governance proposals.',
    website: 'https://arbitrum.io/',
  },
  [ECrypto.arkm]: {
    color: '#000000',
    description: 'Arkham is a blockchain intelligence platform that provides entity-level insights through onchain data analysis. Arkham aims to deanonymize blockchain transactions made by exchanges, whales, funds, and other entities by tagging their address and associated onchain activity. ARKM is the utility token of Arkham and can be used to participate in governance. ARKM can also be used to fund bounties posted on Arkham’s Intel Exchange.',
    website: 'https://www.arkhamintelligence.com/',
  },
  [ECrypto.arpa]: {
    color: '#263145',
    description: 'ARPA is an Ethereum token that powers ARPA Chain, a computation network that enables privacy-preserving smart contracts, data storage, and scalable off-chain transactions. The ARPA token can be used to pay for data and computation in addition to governing the future of the network.',
    website: 'https://arpachain.io/',
  },
  [ECrypto.asm]: {
    color: '#0085FE',
    description: 'ASM is an Ethereum token that powers Assemble, a platform where users and merchants can aggregate, manage, and spend reward points. On Assemble, point providers and retailers can run special events or promotions, providing benefits like discounts for ASM holders.',
    website: 'https://assembleprotocol.io/',
  },
  [ECrypto.ast]: {
    color: '#2B71FF',
    description: 'AST is an Ethereum token for AirSwap, a decentralized peer-to-peer trading network. Airswap aims to make buying and selling of tokens secure, simple and without fees. The AST token primarily functions as a means for market makers to set markets on AirSwap.',
    website: 'https://www.airswap.io/',
  },
  [ECrypto.ata]: {
    color: '#D06415',
    description: 'ATA is an Ethereum token that powers Automata, a suite of privacy solutions for decentralized applications. Automata solutions include Witness (a private voting solution for DAOs), Conveyor (enabling MEV prevention for dapps), and Librarian (enabling privacy for data query and indexing on public blockchains). In the future, Automata plans to transition to a “Nominated Proof of Stake” network where ATA will be used for staking, paying transaction fees, and voting on the future of the network.',
    website: 'https://www.ata.network/',
  },
  [ECrypto.atom]: {
    color: '#2F3148',
    description: 'Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to "create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way." Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.',
    website: 'https://cosmos.network/',
  },
  [ECrypto.auction]: {
    color: '#212121',
    description: 'AUCTION is an Ethereum token that powers Bounce, a decentralized auction protocol for token and NFT sales. AUCTION supports incentives on the protocol, provides benefits and governance rights for holders, and is used to pay for certified listings.',
    website: 'https://bounce.finance/',
  },
  [ECrypto.audio]: {
    color: '#D01FCE',
    description: 'Audius is a decentralized music streaming protocol, which was created to help artists receive a higher portion of streaming revenue compared to traditional streaming services. AUDIO tokens are staked by node operators in order to secure the network, while artists stake AUDIO tokens to access the protocol’s services. AUDIO also functions as the protocol’s governance token.',
    website: 'https://audius.co/',
  },
  [ECrypto.aurora]: {
    color: '#8FD360',
    description: 'AURORA is the ERC-20 governance token of Aurora, an Ethereum-compatible scaling solution built on the NEAR Protocol. Developers can easily deploy their existing decentralized applications on Aurora, allowing users to take advantage of low-cost, high-speed transactions enabled by the NEAR Protocol’s scaling capabilities.',
    website: 'https://aurora.dev/',
  },
  [ECrypto.avax]: {
    color: '#E84142',
    description: 'Avalanche describes itself as an open, programmable smart contracts platform for decentralized applications. AVAX is used to pay transaction fees and can be staked to secure the network. Avalanche is compatible with Solidity, Ethereum’s programming language, and can be used to deploy custom private or public blockchains as “subnets.”',
    website: 'https://www.avax.network/',
  },
  [ECrypto.avt]: {
    color: '#5100FF',
    description: 'AVT is an Ethereum token that powers Aventus, a scaling solution for Ethereum that aims to provide faster and cheaper transactions. Transaction processors stake AVT in order to secure the network and are then rewarded with network fees. Aventus also plans to allow AVT holders to vote for upgrades.',
    website: 'https://www.aventus.io/',
  },
  [ECrypto.axl]: {
    color: '#019EF7',
    description: 'Axelar is an interoperability solution, and provides the infrastructure needed for seamless and secure cross-chain communication among decentralized applications.',
    website: 'https://axelar.network/',
  },
  [ECrypto.axs]: {
    color: '#0055D5',
    description: 'AXS is an Ethereum token that powers Axie Infinity, a blockchain-based game where players can battle, collect, and build a digital kingdom for their pets. AXS holders can claim rewards for staking their tokens, playing the game, and participating in key governance votes.',
    website: 'https://axieinfinity.com/',
  },
  [ECrypto.badger]: {
    color: '#F1A23F',
    description: 'BADGER is an Ethereum token that powers Badger DAO, a decentralized autonomous organization (DAO) focused on bringing Bitcoin into the decentralized finance (DeFi) ecosystem on Ethereum and other blockchains. BADGER is primarily used to govern the direction of Badger DAO and its products.',
    website: 'https://badger.com/',
  },
  [ECrypto.bal]: {
    color: '#1E1E1E',
    description: 'Balancer (BAL) is an Ethereum token that powers the Balancer protocol, an automated market maker that lets anyone create or add liquidity to trading pools while earning customizable trading fees. Balancer pools can have up to 8 tokens and each token can be individually weighted within the pool, such that one token can make up as little as 2% of the total.',
    website: 'https://balancer.finance/',
  },
  [ECrypto.band]: {
    color: '#516BFF',
    description: 'Band is a cryptocurrency that describes itself as “a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.” Band allows blockchains to access data, such as stock prices and weather, that are available via API. Note: Coinbase only supports the Band token running on Ethereum (ERC-20).',
    website: 'https://bandprotocol.com/',
  },
  [ECrypto.bat]: {
    color: '#FF5000',
    description: 'BAT is an Ethereum token that powers Brave Software\'s blockchain-based digital advertising platform. Internet users who browse the web using Brave\'s free web browser (available at Brave.com) can choose to replace the ads they see with ads on Brave\'s ad network. Users then receive BAT from advertisers as compensation for their attention.',
    website: 'https://basicattentiontoken.org/',
  },
  [ECrypto.bch]: {
    color: '#8DC351',
    description: 'Bitcoin Cash is a fork of Bitcoin that seeks to add more transaction capacity to the network in order to be useful for everyday transactions.',
    website: 'http://bch.info/',
  },
  [ECrypto.bico]: {
    color: '#EC4300',
    description: 'BICO is an Ethereum token powering Biconomy, a protocol that aims to seamlessly connect users to any decentralized application across multiple chains for relatively low fees. BICO can be used to pay for network fees and to vote on protocol upgrades.',
    website: 'https://www.biconomy.io/',
  },
  [ECrypto.bigtime]: {
    color: '#FFC533',
    description: 'Big Time is a multiplayer action RPG game developed by Big Time Studios. Big Time’s player-owned economy includes NFTs and the BIGTIME utility token. BIGTIME tokens can be used to craft ‘Cosmetic’ NFTs. BIGTIME tokens can also be used to enter exclusive zones called ‘Prestige Portals’.',
    website: 'https://bigtime.gg/',
  },
  [ECrypto.bit]: {
    color: '#C1FF3C',
    description: 'BIT is an Ethereum token that governs BitDAO, a protocol designed to support builders of decentralized technologies. BitDAO plans to provide grants for development of decentralized technologies including DeFi apps, governance protocols, layer 1 or layer 2 blockchains, privacy, and NFTs. Proposals, treasury allocations, and protocol changes can be voted upon by BIT token holders. Note: Coinbase only supports BIT on the Ethereum blockchain (ERC-20).',
    website: 'https://www.bitdao.io/',
  },
  [ECrypto.blur]: {
    color: '#FF8700',
    description: 'BLUR is the ERC-20 governance token of Blur.io, an NFT marketplace. Blur.io provides NFT traders with an aggregator among other advanced trading tools.',
    website: 'https://blur.io/',
  },
  [ECrypto.blz]: {
    color: '#1CD8D2',
    description: 'BLZ is the token powering the Bluzelle platform and decentralized storage network. BLZ can be used to pay for transactions, storage, staking, and voting on the future of the network. Note: Coinbase currently only supports BLZ running on the Ethereum blockchain (ERC-20).',
    website: 'https://bluzelle.com/',
  },
  [ECrypto.bnt]: {
    color: '#000E2B',
    description: 'Bancor Network Token (BNT) is an Ethereum token that powers the Bancor protocol. The protocol describes itself as “a fully on-chain liquidity protocol that can be implemented on any smart contract-enabled blockchain.”',
    website: 'https://bancor.network/',
  },
  [ECrypto.boba]: {
    color: '#CDFF00',
    description: 'BOBA is an Ethereum token that governs Boba DAO and can also be staked for rewards on the Boba Network. Boba Network is a Layer 2 Ethereum scaling and augmenting solution that lowers gas fees, enhances the capabilities of smart contracts and improves transaction throughput.',
    website: 'https://boba.network/',
  },
  [ECrypto.bond]: {
    color: '#FF4339',
    description: 'BOND is an Ethereum token that governs BarnBridge, a protocol that enables users to hedge against DeFi yield sensitivity and price volatility. Its first application, SMART Yield, allows users to choose between risk profiles for lending on DeFi protocols such as Aave and Compound. By using SMART Yield, senior bond investors can receive fixed rates at potentially lower risk while junior bond investors can receive higher rates at higher risk.',
    website: 'https://barnbridge.com/',
  },
  [ECrypto.bonk]: {
    color: '#F8A506',
    description: 'BONK is the self-described “dog coin of the people”. BONK was initially airdropped to select Solana wallet addresses in December 2022, and has rapidly grown in popularity. BONK is currently the most held dog-themed cryptocurrency on the Solana blockchain.',
    website: 'https://bonkcoin.com/',
  },
  [ECrypto.btc]: {
    color: '#F7931B',
    description: 'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.',
    website: 'https://bitcoin.org/',
  },
  [ECrypto.btrst]: {
    color: '#0E0E11',
    description: 'BTRST is an Ethereum token that powers Braintrust, a decentralized talent network connecting freelancers with organizations. BTRST is used to govern the network and also as an incentive to refer new users.',
    website: 'https://www.usebraintrust.com/',
  },
  [ECrypto.busd]: {
    color: '#FCD535',
    description: 'Binance USD (BUSD) is a stablecoin running on Ethereum. For stablecoins like BUSD, the company behind the protocol is responsible for holding reserves that fully back each token. The companies behind BUSD, Binance and Paxos, claim that each BUSD token is backed by and corresponds to one dollar held in traditional bank accounts. Note: Coinbase only supports BUSD on the Ethereum blockchain (ERC-20).',
    website: 'https://www.binance.com/en/busd',
  },
  [ECrypto.c98]: {
    color: '#D9B432',
    description: 'C98 is an Ethereum token that powers Coin98, a DeFi platform for swapping tokens, staking, lending, and more. C98 is used to pay for transactions on Coin98, can be staked to incentivize liquidity, and can be used to vote on the future of the platform. Note: Coinbase only supports C98 on the Ethereum blockchain (ERC-20).',
    website: 'https://www.coin98.com/',
  },
  [ECrypto.cbeth]: {
    color: '#0052FF',
    description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token that represents ETH staked through Coinbase. Coinbase customers can wrap their locked staked ETH to receive cbETH, which is an asset that can be traded, moved on-chain, and used in DeFi and other dapps. cbETH is known as a liquid staking token because it allows holders to get the benefits of staking without lockups or unbonding periods.',
    website: 'https://www.coinbase.com/price/coinbase-wrapped-staked-eth',
  },
  [ECrypto.celr]: {
    color: '#000000',
    description: 'CELR is an Ethereum token that powers the Celer Network, a layer-2 scaling platform to build fast, easy-to-use, low-cost and secure blockchain applications at internet scale. The CELR token can be used to pay the service fee and transaction fee to off-chain service providers.',
    website: 'https://celer.network/',
  },
  [ECrypto.cgld]: {
    color: '#FBCC5C',
    description: 'Celo is the core utility, reserve, staking, and governance asset for the Celo platform. The platform aims to make financial tools borderless, easy to use, and accessible for anyone with a mobile phone.',
    website: 'https://celo.org/',
  },
  [ECrypto.chz]: {
    color: '#B02728',
    description: 'Chiliz (CHZ) is an Ethereum token that powers Socios.com, a platform that lets users trade tokens to show their support for professional sports teams. The tokens on Socios.com — called Fan Tokens — make users eligible for rewards and promotions and can also be used to influence team decisions by popular voting on the Chiliz blockchain.',
    website: 'https://www.chiliz.com/',
  },
  [ECrypto.clv]: {
    color: '#42C37B',
    description: 'Clover Finance is a blockchain infrastructure platform that’s focused on cross-chain compatibility for DeFi applications. The CLV token is used to pay for Clover transactions and to vote for network upgrades. Clover also aims to enable interoperability between Bitcoin and other blockchains. Note: Coinbase currently supports CLV running on Ethereum (ERC-20).',
    website: 'https://clover.finance/',
  },
  [ECrypto.comp]: {
    color: '#01D396',
    description: 'Compound (COMP) is an Ethereum token that enables community governance of the Compound protocol. The protocol is a series of decentralized interest rate markets that allow users to supply and borrow Ethereum tokens at variable interest rates. COMP token holders and their delegates can also debate, propose, and vote on changes to the protocol.',
    website: 'https://compound.finance/',
  },
  [ECrypto.corechain]: {
    color: '#FF9211',
    description: 'Core Chain is a Bitcoin-powered, EVM-compatible layer one blockchain that combines Delegated Proof of Work (DPoW) and Delegated Proof of Stake (DPoS). Core Chain uses Bitcoin miners to secure its smart contracts by providing them with supplemental income in the form of CORECHAIN tokens. CORECHAIN is the utility and governance token of the Core network. CORECHAIN can be staked on the Core network, used for gas, or used to participate in Core network governance.',
    website: 'https://coredao.org/',
  },
  [ECrypto.coti]: {
    color: '#229FD0',
    description: 'COTI is a token that powers Coti, a project that describes itself as a “DAG (directed acyclic graph) protocol optimized for creating decentralized payment networks and stable coins.” Coti uses Trustchain, a decentralized ledger that can process over 100,000 transactions per second, to power online and offline payments, loyalty payments, stablecoins, and more. Note: Coinbase currently only supports COTI running on the Ethereum blockchain (ERC-20).',
    website: 'https://coti.io/',
  },
  [ECrypto.coval]: {
    color: '#262A3C',
    description: 'COVAL is an Ethereum token that powers Emblem, a platform where users can create custom combinations of ETH, ERC-20, and NFT tokens into a single, tradable token called a Vault. COVAL can be used to create Vaults and is issued as a reward to liquidity providers.',
    website: 'https://circuitsofvalue.com/',
  },
  [ECrypto.cro]: {
    color: '#103F68',
    description: 'Crypto.com Chain is an Ethereum token that powers Crypto.com Pay, a service that aims to allow users to pay for goods and services with cryptocurrency while receiving cashback rewards.',
    website: 'https://crypto.org/',
  },
  [ECrypto.crpt]: {
    color: '#0285FD',
    description: 'CRPT is an Ethereum token that powers Crypterium, a wallet that aims to combine traditional financial services and cryptocurrency. When users conduct crypto-to-fiat transactions, a 0.5% gas fee in CRPT is charged and then burned at the end of each month.',
    website: 'https://crypterium.com/',
  },
  [ECrypto.crv]: {
    color: '#721BFF',
    description: 'Curve (CRV) is an Ethereum token that powers Curve.fi, a decentralized exchange and automated market maker protocol. The protocol is designed to make it easy to swap between similar ERC-20 tokens, primarily stablecoins (like USDC and DAI) and Ethereum-based Bitcoin tokens (like WBTC and renBTC). In order to minimize impermanent loss, the protocol only hosts pools of similar assets. This means you can provide USDC-DAI-USDT liquidity on Curve, but not, for example, USDC-WBTC. The CRV token can be locked for various periods of time (up to 4 years) in order to vote on governance and claim protocol fees as a reward.',
    website: 'https://resources.curve.fi/',
  },
  [ECrypto.ctsi]: {
    color: '#1A1B1D',
    description: 'CTSI is a utility token that powers the Cartesi network, which aims to solve blockchain scalability and high fees using a technology called Optimistic Rollups. CTSI can be used for staking and fees for processing data on the network. Notably, Cartesi enables smart contract creation using mainstream programming languages.',
    website: 'https://cartesi.io/',
  },
  [ECrypto.ctx]: {
    color: '#50D313',
    description: 'CTX is an Ethereum token that governs Cryptex Finance, a platform that issues a token (called TCAP) that tracks the total market capitalization of the crypto market. CTX can be used to vote for upgrades to the Cryptex protocol.',
    website: 'https://cryptex.finance/',
  },
  [ECrypto.cvc]: {
    color: '#3AB03E',
    description: 'Civic (CVC) is an Ethereum token used to power Civic’s identity verification protocol. Users who verify their information through Civic can then securely share both their info and the verification with service providers, reducing the need to constantly re-verify their identity. In return for this convenience, service providers may provide users and verifiers with CVC.',
    website: 'https://www.civic.com/',
  },
  [ECrypto.cvx]: {
    color: '#1682FE',
    description: 'CVX is the ERC-20 utility token of Convex Finance, which permits Curve Finance liquidity providers to earn boosted rewards. CVX tokens function as Convex Finance’s governance token, and can be locked in exchange for a portion of the platform\'s earnings.',
    website: 'https://www.convexfinance.com/',
  },
  [ECrypto.dai]: {
    color: '#F3B732',
    description: 'Dai (DAI) is a decentralized stablecoin running on Ethereum (ETH) that attempts to maintain a value of $1.00 USD. Unlike centralized stablecoins, Dai isn\'t backed by US dollars in a bank account. Instead, it’s backed by collateral on the Maker platform. Note: if the Dai credit system is upgraded or shutdown, Dai holders may need to convert their Dai to Ethereum through the Maker platform. Read more at makerdao.com/whitepaper.',
    website: 'https://www.makerdao.com/',
  },
  [ECrypto.dar]: {
    color: '#000000',
    description: 'DAR is an Ethereum token that powers Mines of Dalarnia, a play-to-earn game with mechanics including mining, multiplayer combat, and collecting resources. DAR can be used to upgrade items, trade on the in-game NFT marketplace, and to vote on the future of the platform.',
    website: 'https://www.minesofdalarnia.com/',
  },
  [ECrypto.dash]: {
    color: '#018CE7',
    description: 'Dash is a cryptocurrency with optional speed and privacy features. Its unique network architecture consists of both regular miners and privileged machines called Masternodes.',
    website: 'https://www.dash.org/',
  },
  [ECrypto.ddx]: {
    color: '#EF88AA',
    description: 'DDX is an Ethereum token that powers DerivaDEX, a decentralized exchange for derivative contracts. The DDX token allows users to participate in the governance and operation of the exchange.',
    website: 'https://derivadex.com/',
  },
  [ECrypto.deso]: {
    color: '#FFDA59',
    description: 'DESO is the native cryptocurrency powering the Decentralized Social blockchain, a platform designed to support a wide variety of decentralized social media applications. DESO can be used to purchase “social tokens” and NFTs, and to create profiles and posts for Decentralized Social applications.',
    website: 'https://www.deso.com/',
  },
  [ECrypto.dext]: {
    color: '#00B8D8',
    description: 'DEXT is an Ethereum token used to access subscription tiers and benefit from unlocking all of the features of the DEXTools ecosystem. DEXTools is an app for traders that offers information about all the decentralized markets.',
    website: 'https://www.dextools.io/app/en/pairs',
  },
  [ECrypto.dia]: {
    color: '#C8FDD3',
    description: 'DIA is an Ethereum token that governs Decentralized Information Asset (DIA), an open source Web3 data and oracle platform. This platform allows smart contracts to connect to external data sources, such as DeFi market data and centralized APIs. DIA can be used to propose and vote on platform upgrades.',
    website: 'https://www.diadata.org/',
  },
  [ECrypto.dimo]: {
    color: '#96EBE4',
    description: 'DIMO is the utility token of ‘Digital Infrastructure for Moving Objects’, a platform that aims to revolutionize the vehicle data market. Through the use of hardware devices, vehicle owners can collect and monetize their data by selling it directly to data consumers. DIMO tokens are paid to data providers and also function as the platform’s governance token.',
    website: 'https://dimo.zone/',
  },
  [ECrypto.dnt]: {
    color: '#2D398F',
    description: 'District0x is an Ethereum token that powers a network of decentralized marketplaces and communities called districts. The token is required for application to the District Registry and is used to signal support or disapproval for proposals made by network participants.',
    website: 'https://district0x.io/',
  },
  [ECrypto.doge]: {
    color: '#C4A634',
    description: 'Dogecoin (DOGE) was created in 2013 as a lighthearted alternative to traditional cryptocurrencies like Bitcoin. The Dogecoin name and Shiba Inu logo are based on a meme. Unlike Bitcoin, which is designed to be scarce, Dogecoin is intentionally abundant — 10,000 new coins are mined every minute and there is no maximum supply.',
    website: 'https://dogecoin.com/',
  },
  [ECrypto.dot]: {
    color: '#E6007A',
    description: 'Polkadot is a protocol that enables cross-blockchain transfers of any type of data or asset. By uniting multiple blockchains, Polkadot aims to achieve high degrees of security and scalability. DOT serves as the protocol’s governance token and can be used for staking to secure the network or to connect (“bond”) new chains.',
    website: 'https://polkadot.network/',
  },
  [ECrypto.drep]: {
    color: '#FBD42C',
    description: 'DREP is an Ethereum token used in the DREP ecosystem. DREP is committed to building “connectors” and “toolkits” based on blockchain technology, providing solutions that combine ease of use, flexibility and frictionless integration. DREP strives to tackle three particular issues: 1) inadequate public chain performance and poor developer experience; 2) segregated public chain ecosystems and small user bases; and 3) a mismatch between blockchain technology and enterprise needs.',
    website: 'https://www.drep.org/',
  },
  [ECrypto.dyp]: {
    color: '#DB2728',
    description: 'Dypius is a powerful, decentralized ecosystem with a focus on scalability, security, and global adoption through next-gen infrastructure. Dypius offers a variety of products and services that cater to both beginners and advanced users in the digital space, including yield farming, staking, DeFi tools, NFTs, and Metaverse.',
    website: 'https://www.dypius.com/',
  },
  [ECrypto.egld]: {
    color: '#23F7DD',
    description: 'MultiversX is a highly scalable, secure, and decentralized blockchain network created to enable radically new applications for users, businesses, society, and the new metaverse frontier. The EGLD Token is the native token powering the MultiversX Network, and its utility comprises all core network functionalities such as staking, governance, transactions, smart contracts, and validator rewards.',
    website: 'https://multiversx.com/',
  },
  [ECrypto.ela]: {
    color: '#8530F1',
    description: 'ELA is an Ethereum token for the Elastos ecosystem, a blockchain-powered Internet in which you have complete control of your digital assets. It can be used for any activity on the system such as investing in digital assets, trading, or paying fees.',
    website: 'https://www.elastos.org/',
  },
  [ECrypto.enj]: {
    color: '#614DBE',
    description: 'Enjin Coin (ENJ) is an Ethereum token that aims to “make it easy for individuals, businesses, and brands to use non-fungible tokens (NFTs).” ENJ is used to directly back the value of NFTs minted within the Enjin ecosystem.',
    website: 'https://enjin.io/',
  },
  [ECrypto.ens]: {
    color: '#5284FF',
    description: 'ENS is an Ethereum token that governs the Ethereum Name Service, a protocol for human-readable crypto addresses and decentralized domain names. ENS will be used to propose and vote for changes to the protocol.',
    website: 'https://ens.domains/',
  },
  [ECrypto.eos]: {
    color: '#000000',
    description: 'EOS is a cryptocurrency designed to support large-scale applications. There are no fees to send or receive EOS. Instead, the protocol rewards the entities that run the network periodically with new EOS, effectively substituting inflation for transaction fees.',
    website: 'https://eos.io/',
  },
  [ECrypto.ern]: {
    color: '#22ACE6',
    description: 'Ethernity Chain is a licensed and authenticated NFT platform. Ethernity Chain is a community-oriented platform that seeks to offer limited edition authenticated NFTs (aNFTs). The platform also aims to provide trading cards created by famous artists and endorsed by notable figures. Users can get these aNFTs through auctions or direct sales. Besides, the platform aims to build an entire aNFT library and reward its creators and the community. ',
    website: 'https://ethernity.io/',
  },
  [ECrypto.etc]: {
    color: '#328432',
    description: 'Ethereum Classic is a cryptocurrency with a special focus on immutability, popularly expressed as “code is law.”',
    website: 'https://ethereumclassic.org/',
  },
  [ECrypto.eth]: {
    color: '#627EEB',
    description: 'Ethereum is a decentralized computing platform that uses ETH (also called Ether) to pay transaction fees (or “gas”). Developers can use Ethereum to run decentralized applications (dApps) and issue new crypto assets, known as Ethereum tokens.',
    website: 'https://ethereum.org/',
  },
  [ECrypto.eurc]: {
    color: '#2775CA',
    description: 'EURC is an ERC-20 stablecoin that is pegged on a 1:1 basis to the euro. EURC is issued by Circle and 100% backed by euros held in euro-denominated banking accounts.',
    website: 'https://www.circle.com/en/',
  },
  [ECrypto.euroc]: {
    color: '#2775CA',
    description: 'EUROC is an ERC-20 stablecoin that is pegged on a 1:1 basis to the euro. EUROC is issued by Circle and 100% backed by euros held in euro-denominated banking accounts.',
    website: 'https://www.circle.com/en/',
  },
  [ECrypto.farm]: {
    color: '#FECF00',
    description: 'FARM is an Ethereum token that powers Harvest Finance, a yield optimizer that moves funds around the decentralized finance (DeFi) ecosystem in an effort to generate yields. FARM can be used for staking and yield farming on Harvest Finance.',
    website: 'https://harvest.finance/',
  },
  [ECrypto.fet]: {
    color: '#1D2743',
    description: 'FET is an Ethereum token that powers Fetch.ai, a decentralized machine learning platform for applications such as asset trading, gig economy work, and energy grid optimization. Fetch.ai’s first decentralized finance application helps Uniswap users automate trading according to predefined conditions.',
    website: 'https://fetch.ai/',
  },
  [ECrypto.fida]: {
    color: '#6363E1',
    description: 'FIDA is a Solana token that governs Bonfida, a product that aims to build a user interface, API, and data analytics for the Serum decentralized exchange. In addition, Bonfida aims to build solutions for a decentralized name service and a platform for NFT exchange on Solana. FIDA can be used to vote on the future of the protocol.',
    website: 'https://bonfida.org/en',
  },
  [ECrypto.fil]: {
    color: '#42C1CA',
    description: 'Filecoin (FIL) is a cryptocurrency that powers the Filecoin network, a decentralized peer-to-peer file storage network that aims to let anyone store, retrieve, and host digital information. FIL tokens are used as payment for these services and as an economic incentive to ensure files are stored reliably over time.',
    website: 'https://filecoin.io/',
  },
  [ECrypto.fis]: {
    color: '#00F3AB',
    description: 'FIS is an Ethereum token that powers StaFi, a cross-chain protocol for trading staked assets as derivatives (also called “liquid staking”). Users can stake proof of stake assets via StaFi to receive “rTokens” (for example, staking 1 XTZ on StaFi might generate 1 rXTZ), which can be freely traded and redeemed for a corresponding amount of the locked and staked asset. FIS is used for staking and minting rTokens, and for paying transaction fees on the network.',
    website: 'https://www.stafi.io/',
  },
  [ECrypto.flow]: {
    color: '#00EF8B',
    description: 'FLOW is a cryptocurrency that powers Flow, a layer one blockchain and smart contract platform. FLOW can be used to pay for transactions, vote on the future of the network, and staked by validators to secure the network.',
    website: 'https://flow.com/',
  },
  [ECrypto.flr]: {
    color: '#E62058',
    description: 'FLR is the native token of Flare, an EVM-compatible blockchain network. FLR tokens are used to pay for network transaction fees. FLR tokens are also used to secure the network through staking, and allow holders to participate in governance.',
    website: 'https://flare.network/',
  },
  [ECrypto.fort]: {
    color: '#2DFD88',
    description: 'FORT is an ERC-20 token in the Ethereum network. To ensure the accuracy and integrity of the data provided by the network, Forta adopts a work token model, where node runners must stake FORT tokens in order to broadcast real-time security and operational data to the network, and anyone may stake FORT tokens in order to signal detection bot quality in the network.',
    website: 'https://forta.org/',
  },
  [ECrypto.forth]: {
    color: '#4712B0',
    description: 'FORTH is a cryptocurrency that powers Ampleforth, a protocol that automatically adjusts the supply of its native token, AMPL, in response to demand. FORTH is Ampleforth’s governance token. FORTH holders can vote on proposed changes to the Ampleforth protocol or delegate their votes to representatives who vote on their behalf.',
    website: 'https://www.ampleforth.org/',
  },
  [ECrypto.fox]: {
    color: '#386FF9',
    description: 'FOX is an Ethereum token that governs ShapeShift, a decentralized exchange. By participating in the ShapeShift DAO (decentralized autonomous organization), FOX holders can vote on future asset integrations, products, and fee structures for the platform.',
    website: 'https://shapeshift.com/',
  },
  [ECrypto.fx]: {
    color: '#F7D509',
    description: 'FX is an Ethereum token that powers Function X, which comprises a core blockchain, cross-chain protocol, and platform for decentralized applications. FX can be used to pay for services such as smart contract creation and data storage, to vote for network upgrades, and for staking on the network.',
    website: 'https://functionx.io/',
  },
  [ECrypto.gal]: {
    color: '#0057FF',
    description: 'GAL is an Ethereum-based ERC-20 token that powers Galxe’s credential data network. Galxe is a collaborative credential infrastructure enabling brands and developers to engage communities and build robust products in Web3.',
    website: 'https://galxe.com/',
  },
  [ECrypto.gala]: {
    color: '#000000',
    description: 'GALA is an Ethereum token that powers Gala Games, a platform for blockchain gaming. GALA is used as the medium of exchange between Gala Games participants. For example, it can be used to pay for in-game items.',
    website: 'https://app.gala.games/',
  },
  [ECrypto.gfi]: {
    color: '#C2AB68',
    description: 'GFI is an Ethereum token that governs Goldfinch, a decentralized credit protocol for extending loans to real-world businesses. Goldfinch aims to make DeFi lending more accessible by enabling loans that can use both on and off chain collateral.',
    website: 'https://goldfinch.finance/',
  },
  [ECrypto.ghst]: {
    color: '#FA34F3',
    description: 'GHST is the ERC-20 utility token of the Aavegotchi gaming protocol. GHST tokens can be staked and used to trade non-fungible tokens including Aavegotchi avatars.',
    website: 'https://www.aavegotchi.com/',
  },
  [ECrypto.glm]: {
    color: '#181EA9',
    description: 'GLM is an Ethereum token that allows users to pay or receive payment for resources via the Golem protocol. The protocol aims to allow participants in the network to loan out their computer’s spare processing power to others.',
    website: 'https://www.golem.network/',
  },
  [ECrypto.gmt]: {
    color: '#56FF97',
    description: 'GMT is a Solana token that governs STEPN, a lifestyle app that encourages users to “move-to-earn.” STEPN users with NFT sneakers can earn GMT by walking or running outdoors. GMT can be used to pay for digital items and upgrades as well as staking and voting on future changes to the platform.',
    website: 'https://www.stepn.com/',
  },
  [ECrypto.gno]: {
    color: '#181EA9',
    description: 'Gnosis Chain is an EVM compatible, community owned network that prioritizes credible neutrality and resiliency, open to everyone without privilege or prejudice. Gnosis Chain is secured by over 100k validators around the world.',
    website: 'https://www.gnosis.io/',
  },
  [ECrypto.gnt]: {
    color: '#001D57',
    description: 'Golem is an Ethereum token that allows users to pay or receive payment for resources via the Golem protocol. The protocol aims to allow participants in the network to loan out their computer’s spare processing power to others.',
    website: 'https://golem.network/',
  },
  [ECrypto.gods]: {
    color: '#2499B3',
    description: 'GODS is an Ethereum token that powers Gods Unchained, a blockchain-based trading card game. GODS can be used to craft NFTs and other digital items within Gods Unchained as well as vote on the future of the platform.',
    website: 'https://godsunchained.com/',
  },
  [ECrypto.grt]: {
    color: '#6747ED',
    description: 'The Graph (GRT) is an Ethereum token that powers The Graph, a decentralized protocol for indexing and querying data from blockchains. Just as Google indexes the web, The Graph indexes blockchain data from networks like Ethereum and Filecoin. This data is grouped into open APIs called subgraphs that anyone can query.',
    website: 'https://thegraph.com/',
  },
  [ECrypto.gst]: {
    color: '#ABA3B1',
    description: 'GST is a Solana token that powers STEPN, a Web3 lifestyle app that encourages users to “move-to-earn.” STEPN users with NFT sneakers can earn GST by walking or running outdoors, or by “renting” out their NFT sneakers to other users. GST can be used to pay for digital items and upgrades.',
    website: 'https://www.stepn.com/',
  },
  [ECrypto.gtc]: {
    color: '#02E2AC',
    description: 'Gitcoin (GTC) is an Ethereum token that enables community governance of the Gitcoin platform. The platform is designed to fund and coordinate open source development by novel means such as quadratic funding. As of June 2021, Gitcoin has facilitated over $21 million in grants and bounties for open source developers.',
    website: 'https://gitcoin.co/',
  },
  [ECrypto.gusd]: {
    color: '#26DDF9',
    description: 'GUSD is a stablecoin running on Ethereum that attempts to maintain a value of US $1.00. The supply of GUSD is collateralized by US dollars held at State Street Bank. Users can buy and redeem GUSD through the Gemini cryptocurrency exchange.',
    website: 'https://www.gemini.com/dollar',
  },
  [ECrypto.gyen]: {
    color: '#005BAC',
    description: 'GYEN is a stablecoin running on Ethereum that’s intended to maintain a value of one Japanese Yen. The company behind GYEN, GMO-Z.com Trust Company, claims to hold reserves that fully back each GYEN.',
    website: 'https://stablecoin.z.com/gyen/',
  },
  [ECrypto.hbar]: {
    color: '#0A0B0D',
    description: 'HBAR is the native token of Hedera, an enterprise-grade public network. The network utilizes Hashgraph, which is an alternative type of distributed ledger to blockchain. HBAR tokens are used to pay for transaction gas fees on the network.',
    website: 'https://hedera.com/',
  },
  [ECrypto.hft]: {
    color: '#005BAC',
    description: 'HFT is the ERC-20 governance token of the Hashflow protocol, which features a decentralized exchange that supports MEV-protected, bridgeless cross-chain token swaps with zero slippage. The protocol also includes a unique, gamified governance platform known as \'The Hashverse\'.',
    website: 'https://www.hashflow.com/',
  },
  [ECrypto.high]: {
    color: '#4683FB',
    description: 'HIGH is an Ethereum token that powers Highstreet, a metaverse and multiplayer online game incorporating shopping, gaming, NFTs, and traditional brands. Users can play-to-earn HIGH by completing quests, socializing, and shopping for NFTs. HIGH can be used to access special events and areas in-game, purchase items, and vote on the direction of the platform.',
    website: 'https://www.highstreet.market/',
  },
  [ECrypto.hnt]: {
    color: '#474DFF',
    description: 'HNT is the utility token of the Helium network. By leveraging LoRaWAN devices and 5G hotspots, the Helium network provides decentralized wireless infrastructure. HNT tokens are used to access the Helium network\'s wireless connectivity, as HNT tokens can be burned for \'Data Credits\'. HNT tokens also ‘back’ other governance tokens within the Helium ecosystem such as MOBILE and IOT.',
    website: 'https://www.helium.com/',
  },
  [ECrypto.honey]: {
    color: '#5574DE',
    description: 'Hivemapper is a decentralized mapping network that aggregates road-level imagery and data. Vehicles equipped with Hivemapper dashcams contribute to building the network’s map. HONEY is the utility token of the Hivemapper Network. HONEY is rewarded to network contributors, and used by consumers to pay for access to the network’s mapping data.',
    website: 'https://www.hivemapper.com/explorer',
  },
  [ECrypto.hopr]: {
    color: '#00006C',
    description: 'HOPR is an Ethereum token that powers the HOPR protocol, a multifaceted project developing technology for digital privacy, layer-zero data transfer, and decentralized governance. The HOPR token has three main functions: pay, stake, and vote.',
    website: 'https://hoprnet.org/',
  },
  [ECrypto.icp]: {
    color: '#29ABE2',
    description: 'Internet Computer (ICP) is a utility token that allows users to participate in and govern the Internet Computer blockchain network. The network aims to help developers create websites, enterprise IT systems, internet services, and DeFi applications by "installing their code directly on the public Internet." ICP can also be staked or "converted into cycles" that can be used to power computation for dApps and traditional applications.',
    website: 'https://dfinity.org/',
  },
  [ECrypto.idex]: {
    color: '#7A4CDD',
    description: 'IDEX is an Ethereum token that powers the IDEX decentralized exchange, which combines an order book and automated market maker (AMM). IDEX holders can stake tokens in order to help secure the protocol and earn rewards.',
    website: 'https://idex.io/',
  },
  [ECrypto.ilv]: {
    color: '#352C58',
    description: 'ILV is an ERC-20 token that powers the Illuvium game. In Illuvium, players are immersed in a 3D open world to explore and capture deity-like beasts called Illuvials. The ILV token allows holders to partake in yield farming, staking and governance of the Illuvium DAO.',
    website: 'https://illuvium.io/',
  },
  [ECrypto.imx]: {
    color: '#17B5CB',
    description: 'IMX is an Ethereum token that powers Immutable X, a scaling solution for NFTs that aims to enable near-instant, low fee transactions. IMX can be used for staking on Immutable X, voting on the future of the protocol, and paying transaction fees.',
    website: 'https://www.immutable.com/',
  },
  [ECrypto.index]: {
    color: '#0A0B0D',
    description: 'INDEX is an Ethereum token that governs Index Cooperative, a protocol for creating custom crypto indexes and structured products. INDEX can be used to vote on the future of the protocol and can be earned by providing liquidity to Index Cooperative products. Note: Coinbase only supports INDEX on the Ethereum blockchain (ERC-20).',
    website: 'https://indexcoop.com/',
  },
  [ECrypto.inj]: {
    color: '#2ABAFF',
    description: 'Injective is an open, interoperable blockchain optimized for DeFi applications. Injective is smart contracts-enabled and utilizes a Tendermint PoS consensus mechanism. INJ is the native token that enables community members to participate in governance, validation, burn auctions and more.',
    website: 'https://injective.com/',
  },
  [ECrypto.inv]: {
    color: '#201D3D',
    description: 'INV is an Ethereum token that powers Inverse Finance, a decentralized platform for lending, borrowing, and creating synthetic assets. INV is used to govern Inverse Finance products and can be used to vote for future upgrades.',
    website: 'https://www.inverse.finance/',
  },
  [ECrypto.iotx]: {
    color: '#30D5A5',
    description: 'IOTX is an Ethereum token that powers IoTeX, a platform that aims to connect IoT devices (such as cameras and sensors) and decentralized applications. IOTX can be used to pay for transactions, for staking and governance, and to register new devices on the IoTeX network.',
    website: 'https://iotex.io/',
  },
  [ECrypto.jasmy]: {
    color: '#F7941C',
    description: 'JASMY is an Ethereum token that powers Jasmy, an organization that develops IoT (“Internet of Things”) platforms. Rather than coordinating networks of devices and data through centralized servers, Jasmy aims to decentralize the process via edge computing and storing data on IPFS, a decentralized storage network. JASMY can be used to transfer tokens between devices and payment for network services.',
    website: 'https://www.jasmy.co.jp',
  },
  [ECrypto.jto]: {
    color: '#0A0B0D',
    description: 'Jito Network is a liquid staking protocol on Solana. Protocol users can stake SOL and receive JitoSOL in return. Beyond staking rewards, Jito Network’s liquid staking token also captures MEV rewards. JTO is the governance token of the Jito Network. JTO can be used to vote on proposals regarding stake pool fees, treasury management, delegation strategies, and more.',
    website: 'https://www.jito.network/',
  },
  [ECrypto.jup]: {
    color: '#009046',
    description: 'JUP is an Ethereum token for the Jupiter Project, which aims to make blockchain accessible and safe for everyone. Jupiter’s military-grade encryption helps ensure that user data is private and secure. Through our elite encryption capabilities, Jupiter can power secure dApps on public and private networks.',
    website: 'https://jup.io/',
  },
  [ECrypto.karrat]: {
    color: '#EBBB58',
    description: 'The KARRAT Protocol is a decentralized gaming infrastructure layer and aims to cultivate a community-driven environment that propels the next wave of gaming and entertainment innovation. The gaming studio that built My Pet Hooligan, AMGI Studios, is an early ecosystem participant within the KARRAT Protocol. KARRAT tokens govern the KARRAT Protocol. KARRAT tokens can be used to participate in the protocol’s governance process which spans onchain and offchain voting.',
    website: 'https://www.karratcoin.com/',
  },
  [ECrypto.kava]: {
    color: '#FF433E',
    description: 'KAVA is the native token of Kava, a blockchain network built with the Cosmos SDK. Kava also features Ethereum compatibility through the Kava EVM, providing users and developers with a highly scalable and interoperable network.',
    website: 'https://www.kava.io/',
  },
  [ECrypto.keep]: {
    color: '#000000',
    description: 'KEEP is an Ethereum token that powers the Keep Network, a platform that aims to bridge public blockchains and private data. One of Keep Network’s first products is an Ethereum token that represents 1 Bitcoin, called tBTC. Keep Network enables users to deposit Bitcoin and redeem tokenized tBTC, which can then be used in the Ethereum ecosystem without centralized intermediaries.',
    website: 'https://keep.network/',
  },
  [ECrypto.knc]: {
    color: '#31CB9E',
    description: 'KNC is an Ethereum token used for paying fees on the Kyber Network, a protocol that aims to make swapping digital assets and cryptocurrencies simple and efficient.',
    website: 'https://kyber.network/',
  },
  [ECrypto.krl]: {
    color: '#822077',
    description: 'KRL is an Ethereum token that powers Kryll, a platform for automated trading strategies. Kryll users can browse, create, and backtest trading strategies while using KRL to pay for their activity on the platform.',
    website: 'https://kryll.io/',
  },
  [ECrypto.ksm]: {
    color: '#000000',
    description: 'KSM is a cryptocurrency that powers Kusama, a protocol that enables cross-blockchain transfers of any type of data or asset. By uniting multiple blockchains, Kusama aims to achieve high degrees of security and scalability. KSM serves as the protocol’s governance token and can be used for staking to secure the network or to connect (“bond”) new chains. Kusama acts as a "canary" or experimental network for Polkadot (a separate protocol that shares the same codebase) in which developers can more quickly test new programs that can be deployed on both.',
    website: 'https://kusama.network/',
  },
  [ECrypto.lcx]: {
    color: '#1D357C',
    description: 'LCX is an Ethereum token used to pay for fees on LCX Exchange, a centralized exchange for security tokens, token sales, and cryptocurrencies. LCX is also used to power other LCX products such as the LCX Terminal, which lets users trade across multiple exchanges, and the DeFi Terminal, which offers advanced charting and limit orders built on top of Uniswap.',
    website: 'https://www.lcx.com/',
  },
  [ECrypto.ldo]: {
    color: '#F69988',
    description: 'LDO is the governance token of Lido, a liquid staking protocol. Lido supports liquid staking on multiple blockchain networks including Ethereum and Solana. LDO tokens are used to govern the Lido DAO, which oversees Lido’s development.',
    website: 'https://lido.fi/',
  },
  [ECrypto.link]: {
    color: '#2A5ADA',
    description: 'Chainlink (LINK) is an Ethereum token that powers the Chainlink decentralized oracle network. This network allows smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems.',
    website: 'https://chain.link/',
  },
  [ECrypto.lit]: {
    color: '#2AE38D',
    description: 'LIT is the native token of the Litentry parachain network. Litentry is a Decentralized Identity Aggregator, supporting on-chain identity verification and management for decentralized applications and their users.',
    website: 'https://www.litentry.com/',
  },
  [ECrypto.loka]: {
    color: '#116CFE',
    description: 'LOKA is an Ethereum token that powers the League of Kingdoms MMO strategy game where gamers fight for the dominion of land. Players can build their own kingdom and armies to defeat or ally with other kingdoms and monsters. The LOKA token enables governance rights, additional utility with the League of Kingdom\'s community, and access to exclusive NFT rewards.',
    website: 'https://www.leagueofkingdoms.com/',
  },
  [ECrypto.loom]: {
    color: '#48BEFE',
    description: 'Loom Network (LOOM) is an Ethereum token that powers a network of delegated proof of stake sidechains (a system that Loom dubs “EOS on Ethereum”). This allows for highly-scalable games and user-facing dApps backed by the security of Ethereum.',
    website: 'https://loomx.io/',
  },
  [ECrypto.lpt]: {
    color: '#40D094',
    description: 'LPT is an Ethereum token that powers the Livepeer network, a platform for decentralized video streaming. LPT is required to perform the work of transcoding and distributing video on the network while also incentivizing peers to ensure that the network is cost-effective and secure.',
    website: 'https://livepeer.org/primer',
  },
  [ECrypto.lqty]: {
    color: '#1542CD',
    description: 'LQTY is an Ethereum token that powers the Liquity protocol, a decentralized borrowing platform for 0% interest loans using ETH as collateral. Loans are paid out in a stablecoin called LUSD, and LQTY holders can stake their token to earn a portion of fees generated by opening and closing loans.',
    website: 'https://www.liquity.org/',
  },
  [ECrypto.lrc]: {
    color: '#2AB5F6',
    description: 'Loopring is an Ethereum token that describes itself as “an open-sourced, audited, and non-custodial exchange protocol.” It aims to allow anyone to build non-custodial, order book-based exchanges on Ethereum by leveraging zero-knowledge proofs.',
    website: 'https://loopring.org/',
  },
  [ECrypto.lseth]: {
    color: '#DDE582',
    description: 'LsETH is an ERC-20 token that represents ETH staked through Liquid Collective’s liquid staking protocol. The protocol aims to offer deep liquidity, while utilizing an enterprise-grade validator set.',
    website: 'https://liquidcollective.io/',
  },
  [ECrypto.ltc]: {
    color: '#BFBBBB',
    description: 'Litecoin is a cryptocurrency that uses a faster payment confirmation schedule and a different cryptographic algorithm than Bitcoin.',
    website: 'https://litecoin.org/',
  },
  [ECrypto.magic]: {
    color: '#CB3A31',
    description: 'MAGIC is the utility token of Treasure, a decentralized gaming ecosystem built on Arbitrum. MAGIC tokens are used in gameplay, to participate in governance, to buy and sell NFTs on the Treasure marketplace, and can also be staked.',
    website: 'https://treasure.lol/',
  },
  [ECrypto.mana]: {
    color: '#FF2C55',
    description: 'Decentraland (MANA) is an Ethereum token that powers the Decentraland virtual reality platform. MANA can be used to pay for virtual plots of land in Decentraland as well as in-world goods and services.',
    website: 'https://decentraland.org/',
  },
  [ECrypto.mask]: {
    color: '#1C68F3',
    description: 'Mask Network enables users of popular social media platforms to send cryptocurrency, interact with decentralized applications, and share encrypted content. MASK token holders can vote on ecosystem initiatives via a decentralized autonomous organization called MaskDAO.',
    website: 'https://mask.io/',
  },
  [ECrypto.math]: {
    color: '#0A0B0D',
    description: 'MATH is an Ethereum token for MathWallet, a multi-platform (mobile/desktop/extension/hardware) universal crypto wallet that enables storage of all BTC, ETH, Polkadot, Filecoin, EOS, Solana, BinanceChain, Cosmos tokens. MathWallet also features cross-chain token exchanges and a multi-chain DApp store.',
    website: 'https://mathwallet.org/en-us/',
  },
  [ECrypto.matic]: {
    color: '#8247E5',
    description: 'Polygon was formerly called Matic Network. Polygon (MATIC) is an Ethereum token that powers the Polygon Network, a scaling solution for Ethereum. Polygon aims to provide faster and cheaper transactions on Ethereum using Layer 2 sidechains, which are blockchains that run alongside the Ethereum main chain. Users can deposit Ethereum tokens to a Polygon smart contract, interact with them within Polygon, and then later withdraw them back to the Ethereum main chain. The MATIC token is used to pay transaction fees and participate in proof-of-stake consensus.',
    website: 'https://polygon.technology/',
  },
  [ECrypto.mco2]: {
    color: '#E3F65B',
    description: 'MCO2 is an Ethereum token for carbon credits. The project’s goal is to combat climate change. Burning one MCO2 token on the Moss Carbon Credit platform is equivalent to offsetting one ton of CO2 footprint, which is made possible by purchasing and protecting land in the Amazon rainforest. Note: Coinbase currently only supports MCO2 running on the Ethereum blockchain (ERC-20).',
    website: 'https://moss.earth/en',
  },
  [ECrypto.mdt]: {
    color: '#4187F7',
    description: 'MDT is an Ethereum token that powers the Measurable Data Token ecosystem for anonymously sharing and monetizing consumer data. MDT is used as a medium of exchange between users sharing their data and businesses accessing it.',
    website: 'https://mdt.io/',
  },
  [ECrypto.media]: {
    color: '#000000',
    description: 'MEDIA is a Solana token for the Media Network, a new protocol that foregoes traditional centralized CDN approaches and opts for a self-governed, open-source solution. Users can monetize spare bandwidth resources and earn MEDIA in exchange for their contributions.',
    website: 'https://www.media.network/',
  },
  [ECrypto.metis]: {
    color: '#00D2FF',
    description: 'METIS is an Ethereum token and operates as the internal currency for staking and payments in the Metis crypto ecosystem. Users can pay for goods and services offered through Decentralized Autonomous Companies (DACs) built on the Metis protocol. METIS tokens also play a role in reducing spam and ensure trust between developers and users alike.',
    website: 'https://www.metis.io/',
  },
  [ECrypto.mina]: {
    color: '#EA6B48',
    description: 'MINA is a cryptocurrency that powers Mina Protocol, a layer one blockchain that aims to be lightweight, privacy-preserving, and easily verifiable. Developers on Mina can build privacy-preserving smart contracts and decentralized applications based on zero-knowledge proofs. MINA is used to set up new accounts and pay for transactions. MINA holders can also stake directly on the network to validate transactions and process computation.',
    website: 'https://minaprotocol.com/',
  },
  [ECrypto.mir]: {
    color: '#232C45',
    description: 'MIR is an Ethereum token that governs the Mirror Protocol which “allows the creation of fungible assets, that track the price of real world assets.” The project aims to enable 24/7 equities trading by minting “synthetic” versions of the real thing. MIR tokens can be used to propose and vote on important changes to the protocol.',
    website: 'https://mirror.finance/',
  },
  [ECrypto.mkr]: {
    color: '#1AAB9B',
    description: 'Maker is an Ethereum token that describes itself as “a utility token, governance token, and recapitalization resource of the Maker system.” The purpose of the Maker system is to generate another Ethereum token, called Dai, that seeks to trade on exchanges at a value of exactly US$1.00.',
    website: 'https://makerdao.com/',
  },
  [ECrypto.mln]: {
    color: '#3B82F6',
    description: 'MLN is an Ethereum token that powers Enzyme (formerly known as Melon Protocol), a protocol that aims to facilitate on-chain asset management for the DeFi ecosystem. MLN allows users to build, share, and explore DeFi investment strategies (called “vaults”) while filtering by historical performance and risk profiles. MLN is used to pay for various functions throughout the vault creation process and investment lifecycle.',
    website: 'https://enzyme.finance/',
  },
  [ECrypto.mnde]: {
    color: '#308D8A',
    description: 'MNDE is the governance token of Marinade.Finance, a liquid and native staking protocol on Solana. Users lock MNDE in Realms SPL governance to participate in voting, control the DAO treasury, and can direct stake to validators using locked MNDE. The Marinade DAO oversees various aspects of Marinade.Finance’s development, including the staking delegation strategy.',
    website: 'https://marinade.finance/',
  },
  [ECrypto.mobile]: {
    color: '#469DF2',
    description: 'Helium Mobile provides cellular service through its decentralized wireless infrastructure. MOBILE is the governance token of the MOBILE subDAO which oversees the development of the network. MOBILE tokens are also rewarded to those contributing cellular service to the network.',
    website: 'https://docs.helium.com/',
  },
  [ECrypto.mona]: {
    color: '#000000',
    description: 'MONA is an Ethereum token used for the DIGITALAX platform. It is intrinsically incorporated throughout the protocol\'s architecture, serving to further incentivize utility and application in the Player-Creator economy. MONA is the gas that ties together a triad of interdependence between Players, Developers and Designers in a world that is merging the digital and real.',
    website: 'https://www.digitalax.xyz/',
  },
  [ECrypto.mpl]: {
    color: '#FF8801',
    description: 'MPL is an Ethereum token that powers Maple, a protocol that enables undercollateralized loans for institutional borrowers. MPL can be use to participate in governance, earn fees, and stake to lending pools.',
    website: 'https://maple.finance/',
  },
  [ECrypto.msol]: {
    color: '#4B8B89',
    description: 'mSOL tokens represent SOL tokens staked using the Marinade.Finance liquid staking protocol. Marinade.Finance users receive mSOL tokens that accrue staking rewards upon staking SOL tokens. Since mSOL tokens are liquid, they can be used to participate in DeFi across the Solana ecosystem.',
    website: 'https://enzyme.finance/',
  },
  [ECrypto.mtl]: {
    color: '#4400E2',
    description: 'MTL is an Ethereum token that powers the Metal\'s products and ecosystem. Metal DAO is a payment processing application that provides its users with the facility to convert their fiat currencies into cryptocurrencies and vice-versa.',
    website: 'https://www.metalpay.com/',
  },
  [ECrypto.multi]: {
    color: '#734CE2',
    description: 'Multichain is a cross-chain router protocol governed by the MULTI token. Multichain supports seamless cross-chain token swaps across many blockchain networks. In order to participate in governance, MULTI tokens must be staked in exchange for a veMULTI NFT.',
    website: 'https://multichain.org/',
  },
  [ECrypto.musd]: {
    color: '#000000',
    description: 'MUSD is a decentralized stablecoin running on Ethereum that attempts to maintain a value of US$1.00. Unlike centralized stablecoins, MUSD isn’t backed by US dollars in a bank account. Instead, it’s backed by an array of other stablecoins deposited as collateral on the mStable protocol.',
    website: 'https://mstable.org/',
  },
  [ECrypto.muse]: {
    color: '#6ADAD7',
    description: 'MUSE is an Ethereum token and serves as the governance token of nft20.io. NFT20 is a permissionless p2p protocol to tokenize NFTs and make them tradable on decentralized exchanges such as UniSwap or Sushiswap.',
    website: 'https://nft20.io/',
  },
  [ECrypto.mxc]: {
    color: '#6300FF',
    description: 'MXC is the ERC-20 utility token of the MXProtocol, a decentralized data network which utilizes low-power wide area network technology. MXC functions as a governance token, and also underpins transactions among MXProtocol participants.',
    website: 'https://www.mxc.org/',
  },
  [ECrypto.nct]: {
    color: '#6D3AEC',
    description: 'NCT is an Ethereum token that powers PolySwarm, a community and network for detecting malware. NCT rewards are distributed to users who provide relevant cybersecurity data while NCT is used to access insights provided by the network.',
    website: 'https://polyswarm.io/',
  },
  [ECrypto.near]: {
    color: '#24272A',
    description: 'NEAR is the native token of the NEAR Protocol, a highly scalable blockchain network that provides a developer-friendly, decentralized application platform. NEAR tokens are used to pay network fees and can be staked to enhance network security.',
    website: 'https://near.org/',
  },
  [ECrypto.neon]: {
    color: '#DF42AB',
    description: 'Neon EVM, the first parallelized EVM on Solana, allows developers to seamlessly deploy Ethereum dapps to Solana. This allows Ethereum dapp developers to benefit from Solana’s low gas fees and high throughput without having to make any code changes. NEON is the utility token of Neon EVM. NEON tokens can be used to pay for Neon EVM gas fees. NEON tokens can also be used to participate in decentralized governance.',
    website: 'https://neonevm.org/',
  },
  [ECrypto.nest]: {
    color: '#000000',
    description: 'NEST is an Ethereum token that powers the NEST Protocol, a price prediction platform that aims to improve the crypto market. NEST is used to meet liquidity needs for the platform.',
    website: 'https://www.nestprotocol.org/',
  },
  [ECrypto.nkn]: {
    color: '#253A7E',
    description: 'New Kind of Network (NKN) is a public blockchain that aims to use economic incentives to motivate Internet users to share network connections and utilize unused bandwidth. NKN aims to be a network for building decentralized applications in a way that enhances peer-to-peer data transmission and connectivity.',
    website: 'https://nkn.org/',
  },
  [ECrypto.nmr]: {
    color: '#000000',
    description: 'Numeraire is an Ethereum token that powers Numerai, a San Francisco-based hedge fund that crowdsources artificial intelligence to make investments in major stock markets around the world. Numeraire (NMR) holders can stake their NMR tokens every week on specific predictions. Successful predictions are rewarded with more NMR.',
    website: 'https://numer.ai/',
  },
  [ECrypto.nu]: {
    color: '#1D64FA',
    description: 'NuCypher (NU) is an Ethereum token that can be staked to run a node on the NuCypher network. NuCypher describes itself as a threshold cryptography network that provides data privacy and key management for decentralized applications and protocols.',
    website: 'https://www.nucypher.com/',
  },
  [ECrypto.ocean]: {
    color: '#121212',
    description: 'Ocean Protocol supports blockchain-based trading data between data consumers and individuals. OCEAN tokens function as Ocean Protocol’s governance token.',
    website: 'https://oceanprotocol.com/',
  },
  [ECrypto.ogn]: {
    color: '#2087FB',
    description: 'Origin Token (OGN) is an Ethereum token that powers the Origin platform, which aims to power decentralized and peer-to-peer marketplaces. OGN can be used for staking, governance, and advertising on the Origin platform.',
    website: 'https://www.originprotocol.com/',
  },
  [ECrypto.omg]: {
    color: '#101010',
    description: 'The OMG Network (formerly OmiseGO) is a value transfer network for Ethereum and any ERC-20 token. It describes itself as the first production-grade layer-2 Ethereum scaling solution and aims to let people move money and a variety of digital values on the blockchain faster, cheaper, and without compromising on security.',
    website: 'https://omg.network/',
  },
  [ECrypto.ondo]: {
    color: '#4F38F7',
    description: 'Ondo Finance was created to bring institutional-grade financial products onchain, including tokens backed by U.S. Treasuries. Flux Finance is a decentralized lending platform that supports Ondo Finance’s tokenized U.S. Treasuries. ONDO is used to govern the Ondo DAO and the Flux Finance protocol.',
    website: 'https://ondo.finance/',
  },
  [ECrypto.ooki]: {
    color: '#F6BE4E',
    description: 'OOKI is an Ethereum token that powers the Ooki Protocol, a decentralized finance protocol that supports lending, borrowing, and margin trading. OOKI tokens can be staked in order to earn a portion of fees generated by the protocol, such as trading, borrowing, and lending fees. OOKI also functions as the protocol\'s governance token.',
    website: 'https://omg.network/',
  },
  [ECrypto.op]: {
    color: '#FF0420',
    description: 'Optimism is a layer two protocol and smart contract platform that aims to enable low-cost and near-instantaneous Ethereum transactions. The OP cryptocurrency powers the Token House, which will be a division of the Optimism Collective alongside the Citizens\' House. The Collective governs network parameters, treasury disbursements, and protocol upgrades.',
    website: 'https://www.optimism.io/',
  },
  [ECrypto.orca]: {
    color: '#FFD15C',
    description: 'ORCA is a Solana token that governs the Orca decentralized exchange. Orca aims to enable low-fee, near-instant token swaps using an automated market maker (AMM) model. On the exchange, users supply tokens to “liquidity pools” and algorithms set market prices based on supply and demand. ORCA can be used to vote on the future of the protocol.',
    website: 'https://www.orca.so/',
  },
  [ECrypto.orn]: {
    color: '#313151',
    description: 'ORN is an Ethereum token that powers Orion Protocol, which aims to aggregate liquidity from centralized and decentralized exchanges into one platform. ORN can be used to receive discounted trading fees, for staking, and to access advanced features within the Orion Protocol.',
    website: 'https://www.orionprotocol.io/orn',
  },
  [ECrypto.osmo]: {
    color: '#492CE1',
    description: 'OSMO is the native token of Osmosis, a Layer 1 App Chain DeFi protocol within the Cosmos ecosystem. With the OSMO token, users can pay gas fees, vote on governance proposals, and stake to contribute to network security. The Osmosis app chain offers various DeFi products including traditional AMMs, Concentrated Liquidity, Lending and Perpetual markets, and Liquidity Vaults. Osmosis is connected to over 80+ sovereign app chains within the Cosmos ecosystem, as well as networks like Bitcoin, Ethereum, Polkadot, Avalanche, and Solana.',
    website: 'https://osmosis.zone/',
  },
  [ECrypto.oxt]: {
    color: '#5E45BA',
    description: 'Orchid (OXT) is an Ethereum token that powers the Orchid network, a peer-to-peer privacy tool that includes a decentralized VPN and other features designed to give users more control over their Internet connection. OXT can be used to pay for bandwidth or staked by bandwidth providers in order to operate a node.',
    website: 'https://www.orchid.com/',
  },
  [ECrypto.pax]: {
    color: '#0293D6',
    description: 'The Paxos Standard Token is a stablecoin running on Ethereum. For stablecoins like PAX, the company behind the protocol is responsible for holding reserves that fully back each token. The company behind PAX, Paxos Trust Company, claims to hold reserves that fully back each PAX.',
    website: 'https://paxos.com/',
  },
  [ECrypto.perp]: {
    color: '#3CEAAA',
    description: 'PERP is an Ethereum token that powers Perpetual Protocol, a decentralized exchange for perpetual contracts. Using perpetual contracts, users can open leveraged long or short trading positions for a variety of assets.',
    website: 'https://www.perp.fi/',
  },
  [ECrypto.pla]: {
    color: '#02D6B4',
    description: 'PLA is an Ethereum token that powers PlayDapp, a blockchain gaming platform and non-fungible token (NFT) marketplace. PLA acts as the primary token for processing transactions on PlayDapp. Game developers can also receive PLA when users make in-game purchases.',
    website: 'https://playdapp.io/',
  },
  [ECrypto.plu]: {
    color: '#D8BC71',
    description: 'PLU is a loyalty rewards token awarded to users of the Plutus Visa Debit Card. The Plutus Card provides a minimum of 3% cashback in the form of PLU. PLU can be staked to earn higher crypto cashback rates (up to 8%) and additional Perks (e.g. Netflix, Spotify, Prime), or swapped for fiat.',
    website: 'https://plutus.it/',
  },
  [ECrypto.png]: {
    color: '#FFC800',
    description: 'PNG is the utility token of the Pangolin DEX, which initially launched on Avalanche. In 2022, Pangolin announced plans to feature multi-chain support, including the Flare Network and NEAR Protocol. PNG governs the Pangolin DAO and can be staked to receive a portion of trading fees generated by the DEX.',
    website: 'https://www.pangolin.exchange/',
  },
  [ECrypto.pols]: {
    color: '#FF3465',
    description: 'POLS is the token powering Polkastarter, a platform for cross-blockchain fundraising based on Polkadot. POLS can be used to pay for transactions on the platform and can also be used to vote on and propose upgrades. Note: Coinbase currently only supports POLS running on the Ethereum blockchain (ERC-20).',
    website: 'https://polkastarter.com/',
  },
  [ECrypto.poly]: {
    color: '#1348E4',
    description: 'POLY is an Ethereum token that aims to facilitate digital securities trading on the Polymath platform. By creating a compliance-focused standard (ST-20) to issue and manage security tokens, Polymath seeks to tokenize and support the trading of traditional and new classes of assets.',
    website: 'https://polymath.network/',
  },
  [ECrypto.pond]: {
    color: '#2DBFEA',
    description: 'POND is an Ethereum token that powers Marlin, a protocol aimed at scaling peer-to-peer networks by improving communication between nodes. POND can be used to delegate to Marlin nodes and is used as a reward for operating the relay network correctly. On the network, 1 million POND can also be used to mint 1 MPOND in order to enable voting on the future of the network.',
    website: 'https://www.marlin.org/',
  },
  [ECrypto.powr]: {
    color: '#6BEFAD',
    description: 'POWR is an Ethereum token that powers the Powerledger platform, which aims to enable peer-to-peer energy trading. POWR is required to participate in Powerledger and helps secure its various products, including energy trading, clean energy tracking, and verification.',
    website: 'https://powerledger.io/',
  },
  [ECrypto.prime]: {
    color: '#DEF141',
    description: 'PRIME powers the Echelon ecosystem, a scalable blockchain gaming platform that inspires builders to create and players to participate. Parallel TCG, the first game on Echelon, offers experiences that are exclusively accessible with PRIME. Players can win the token through gameplay, and builders can earn it by creating PRIME-gated game experiences.',
    website: 'https://echelon.io/',
  },
  [ECrypto.pro]: {
    color: '#38A6FA',
    description: 'PRO is an Ethereum token that powers Propy, a platform for international real estate transactions. The PRO token is used to pay for platform fees such as for modifying and creating title and deed contracts.',
    website: 'https://propy.com/home/',
  },
  [ECrypto.prq]: {
    color: '#265BC0',
    description: 'PRQ is an Ethereum token for Parsiq, an automation platform which serves as “the glue” between blockchain applications and real-world applications. It does this by facilitating the creation of workflows and notifications between common blockchains and off-chain systems.',
    website: 'https://www.parsiq.net/',
  },
  [ECrypto.pundix]: {
    color: '#F7D409',
    description: 'PUNDIX is the Pundi X ecosystem\'s ERC-20 utility token. Pundi X’s cryptocurrency payment platform enables merchants to accept cryptocurrency as a payment method using XPOS devices. PUNDIX tokens are used to pay for services within the Pundi X ecosystem and can be delegated to Pundi X Chain validators.',
    website: 'https://pundix.com/',
  },
  [ECrypto.pyr]: {
    color: '#F69E23',
    description: 'PYR is the ERC-20 utility token of Vulcan Forged, a web3 game studio. Vulcan Forged has launched an NFT marketplace and more than ten games, including an MMORPG game called VulcanVerse.',
    website: 'https://vulcanforged.com/',
  },
  [ECrypto.pyusd]: {
    color: '#007CE3',
    description: 'PayPal USD (PYUSD) is a stablecoin pegged to the U.S. dollar. PYUSD is redeemable on a 1:1 basis for U.S. dollars and collateralized by U.S. dollars held in cash or cash equivalents.',
    website: 'https://www.paypal.com/us/home',
  },
  [ECrypto.qi]: {
    color: '#4FAFE7',
    description: 'QI is the governance token of Benqi, a DeFi protocol on Avalanche. Benqi features liquid staking support using tokenized staked AVAX. Benqi also features a liquidity market that allows users to lend and borrow tokens.',
    website: 'https://benqi.fi/',
  },
  [ECrypto.qnt]: {
    color: '#EF4F1F',
    description: 'QNT is an Ethereum token that is used to power Quant Network’s Overledger brand of enterprise software solutions, which aim to connect public blockchains and private networks. Quant Network allows the creation of so-called mDapps that enable decentralized applications to operate on multiple blockchains at once.',
    website: 'https://www.quant.network/',
  },
  [ECrypto.quick]: {
    color: '#418AC9',
    description: 'QUICK is an Ethereum token that powers QuickSwap, a decentralized exchange that runs on the Polygon Network in order to provide faster and cheaper transactions on Ethereum. QUICK can be used to create and vote on proposals governing QuickSwap and can be staked to earn a portion of trading fees.',
    website: 'https://quickswap.exchange/',
  },
  [ECrypto.rad]: {
    color: '#53D855',
    description: 'RAD is an Ethereum token that powers Radicle, a project that describes itself as an “open-source, community-led, and self-sustaining network for software collaboration.” The RAD token can enable reduced or zero fees when interacting with Radicle smart contracts in addition to governance through voting and proposals.',
    website: 'https://radicle.xyz/',
  },
  [ECrypto.rai]: {
    color: '#1FC8A7',
    description: 'RAI is an Ethereum token that aims to maintain a stable value. The RAI-USD exchange rate is determined by supply and demand while the protocol that issues RAI tries to stabilize its price by constantly de- or re-valuing it. The supply and demand mechanic plays out between two parties: SAFE users (those who generate RAI with their ETH) and RAI holders (those who hold, speculate on or use RAI in other protocols and apps).',
    website: 'https://reflexer.finance/',
  },
  [ECrypto.rare]: {
    color: '#000000',
    description: 'RARE is an Ethereum token that governs the SuperRare DAO, which oversees key platform parameters, allocates funds from the Community Treasury, and votes on proposed improvements to the network and protocol. The RARE token allows the SuperRare platform to be community-owned with diverse curatorial voices.',
    website: 'https://superrare.com/',
  },
  [ECrypto.rari]: {
    color: '#FEDA03',
    description: 'RARI is an Ethereum token that powers Rarible, a community-owned marketplace for creating, selling, or collecting NFTs. RARI can be earned by using the platform and can be used to curate content and vote on platform upgrades.',
    website: 'https://rarible.com/',
  },
  [ECrypto.rbn]: {
    color: '#FC0A54',
    description: 'RBN is an Ethereum token that governs Ribbon Finance, a decentralized finance protocol designed to generate yield by combining options, futures, and fixed income to improve a portfolio\'s risk-return profile. RBN is the protocol’s governance token and can be used to vote on the future of the platform.',
    website: 'https://www.ribbon.finance/',
  },
  [ECrypto.ren]: {
    color: '#001E3D',
    description: 'Ren (REN) is an Ethereum token that powers Ren’s open protocol for transferring cryptocurrencies between blockchains. Ren aims to bring popular assets like Bitcoin and Zcash to blockchains including Ethereum, making it possible for these assets to participate in a multi-chain decentralized finance ecosystem.',
    website: 'https://renproject.io/',
  },
  [ECrypto.render]: {
    color: '#CF1011',
    description: 'The Render Network is a decentralized GPU rendering platform that enables distributed graphics processing. The Render Network connects users looking to render images and video with those who have idle graphics processing power. RENDER tokens are rewarded to node operators and can be used to participate in protocol governance.',
    website: 'https://rendernetwork.com/',
  },
  [ECrypto.rep]: {
    color: '#612A52',
    description: 'Augur’s Reputation token (REP) is an Ethereum token designed for reporting and disputing the outcome of events on online prediction markets. Reporters are rewarded for reporting the outcome of events correctly.',
    website: 'https://www.augur.net/',
  },
  [ECrypto.req]: {
    color: '#00E6A0',
    description: 'REQ is an Ethereum token that powers the Request Network, a protocol for creating and requesting payments. Transactions on Request Network are immutably recorded and requests are processed without an intermediary.',
    website: 'https://request.network/en/',
  },
  [ECrypto.rgt]: {
    color: '#000000',
    description: 'RGT is an Ethereum token that powers Rari Capital, a decentralized protocol for lending and borrowing. The Rari Governance Token is used for fee discounts and protocol governance.',
    website: 'https://rari.capital/',
  },
  [ECrypto.rlc]: {
    color: '#FFD800',
    description: 'RLC is an Ethereum token for the iExec cloud platform in which users can monetize and rent computing power and data. iExec enables developers to power applications on what is described as “a decentralized marketplace for cloud resources."',
    website: 'https://iex.ec/',
  },
  [ECrypto.rly]: {
    color: '#FF8A03',
    description: 'RLY is an Ethereum token that powers the Rally network. Rally enables creators and online communities to launch their own cryptocurrencies. By creating these so-called “social tokens,” fans can gain access to benefits like unreleased content or merch, while creators can unlock new forms of revenue.',
    website: 'https://rally.io/',
  },
  [ECrypto.rndr]: {
    color: '#CF1011',
    description: 'The Render Network is a decentralized GPU rendering platform that enables distributed graphics processing. The Render Network connects users looking to render images and video with those who have idle graphics processing power. RENDER tokens are rewarded to node operators and can be used to participate in protocol governance.',
    website: 'https://rendernetwork.com/',
  },
  [ECrypto.ronin]: {
    color: '#004DE5',
    description: 'Ronin is a low-cost and highly efficient network purpose-built for onchain gaming. Ronin was developed by Sky Mavis, the creator of Axie Infinity, and allows developers to launch games with player-owned economies. RONIN is the utility token of the Ronin ecosystem. RONIN can be used to pay for gas fees and engage in network governance. RONIN can also be used to secure the network through staking.',
    website: 'https://roninchain.com/',
  },
  [ECrypto.rose]: {
    color: '#0293F6',
    description: 'ROSE is a cryptocurrency that powers Oasis Protocol, a layer one blockchain that aims to be privacy-preserving and scalable. Oasis Protocol enables fast transaction speeds and the creation of private smart contracts. The ROSE token is used to pay for transaction fees and for staking to validate Oasis Protocol’s proof of stake blockchain.',
    website: 'https://oasisprotocol.org/',    
  },
  [ECrypto.rpl]: {
    color: '#FF9774',
    description: 'RPL is the ERC-20 utility token of Rocket Pool, a liquid staking protocol on the Ethereum blockchain. RPL tokens are used to govern the PDAO and can be staked by node operators.',
    website: 'https://rocketpool.net/',
  },
  [ECrypto.safe]: {
    color: '#00AEEF',
    description: 'Safe provides developers with an open-source and modular account abstraction stack. Safe also functions as a multi-sig wallet service provider to users and organizations. These wallets require permissions from multiple stakeholders to approve transactions from the address. Safe supports multi-sig wallets on several EVM networks, including Ethereum, Arbitrum, and Base. SAFE is the governance token of the SafeDAO. SAFE tokens can be used to vote on proposals related to Safe’s development.',
    website: 'https://safe.global/',
  },
  [ECrypto.sand]: {
    color: '#FF8A03',
    description: 'SAND is an Ethereum token that powers The Sandbox, a multiplayer metaverse where players can create, monetize, and participate in blockchain-based gaming experiences. In The Sandbox, game designers can create custom 3D NFTs that can be used across the ecosystem. SAND can be used to buy and sell NFTs and other in-game items, and can also be used to vote on the future of the platform.',
    website: 'https://www.sandbox.game/',
  },
  [ECrypto.seam]: {
    color: '#0A0B0D',
    description: 'Seamless Protocol is a decentralized lending and borrowing platform native to Base. Users can supply and borrow cbETH, ETH, and USDbC. SEAM is Seamless Protocol’s governance token as holders can participate in protocol governance throughout its various stages. In order for a governance proposal to be approved, it must pass an initial offchain vote followed by final vote executed onchain.',
    website: 'https://www.seamlessprotocol.com/',
  },
  [ECrypto.sei]: {
    color: '#9C0910',
    description: 'SEI is the native token of the Sei blockchain network. Sei was designed to provide developers with the infrastructure needed to build efficient and secure decentralized exchanges. SEI tokens can be used to pay network gas fees and participate in governance. SEI tokens can also be staked to secure the network.',
    website: 'https://www.sei.io/',
  },
  [ECrypto.shdw]: {
    color: '#11FA98',
    description: 'The Shadow ecosystem is a decentralized physical infrastructure network developed by GenesysGo. Shadow’s infrastructure layers include a decentralized data storage layer called Shadow Drive. SHDW tokens are used to pay for data storage on Shadow Drive.',
    website: 'https://www.shdwdrive.com/',
  },
  [ECrypto.shib]: {
    color: '#1C2951',
    description: 'Shiba Inu (SHIB) is a token that aspires to be an Ethereum-based alternative to Dogecoin (DOGE), the popular memecoin. Unlike Bitcoin, which is designed to be scarce, SHIB is intentionally abundant — with a circulating supply of one quadrillion. The Shiba Inu Token ecosystem supports projects such as an NFT art incubator and the development of a decentralized exchange called Shibaswap.',
    website: 'https://shibatoken.com/',
  },
  [ECrypto.shping]: {
    color: '#FE3357',
    description: 'SHPING is an Ethereum token that powers Shping, an application for comparing, reviewing, and tracking consumer products. Brands can use Shping Coin to reward customers for watching videos, writing reviews, and scanning receipts.',
    website: 'https://shping.com/',
  },
  [ECrypto.skl]: {
    color: '#000000',
    description: 'SKALE (SKL) is an Ethereum token that powers the Skale Network, which describes itself as “an Ethereum-compatible network with a leaderless consensus designed to run on an uncapped number of independent nodes.” Nodes on the Skale Network provide resources to multiple decentralized elastic blockchains. The SKL token grants a right to participate as a network validator, stake as a delegator, or access a share of the network’s resources as a developer.',
    website: 'https://skale.network/',
  },
  [ECrypto.snt]: {
    color: '#5B6DEE',
    description: 'SNT is an Ethereum token that powers Status Network, a secure messaging app, crypto wallet, and web3 browser. SNT is used to reward network validators and is required for certain actions such as registering user names, and voting on the future of the network.',
    website: 'https://status.app/',
  },
  [ECrypto.snx]: {
    color: '#090220',
    description: 'Synthetix Network Token(SNX) is an Ethereum token that powers Synthetix, a decentralised synthetic asset issuance protocol. Synthetic assets are minted when token holders stake their SNX as collateral using Mintr, a decentralised application for interacting with the Synthetix contracts. The protocol currently supports synthetic fiat currencies, cryptocurrencies, and commodities.',
    website: 'https://www.synthetix.io/',
  },
  [ECrypto.sol]: {
    color: '#00FFBD',
    description: 'Solana is a decentralized computing platform that uses SOL to pay for transactions. Solana aims to improve blockchain scalability by using a combination of proof of stake consensus and so-called proof of history. As a result, Solana claims to be able to support 50,000 transactions per second without sacrificing decentralization.',
    website: 'https://solana.com/',
  },
  [ECrypto.spa]: {
    color: '#31C1BF',
    description: 'SPA is the governance token of the Sperax ecosystem. Sperax is a DeFi protocol built on Arbitrum that mints Sperax USD - a stablecoin featuring ‘auto-yield’ generation. SPA tokens must be staked in order to participate in the Sperax DAO. Sperax ecosystem is governed by community of SPA stakers or veSPA holders, who make up Sperax DAO.',
    website: 'https://sperax.io/',
  },
  [ECrypto.spell]: {
    color: '#211A45',
    description: 'SPELL is an Ethereum token that governs Abracadabra.money, a platform that lets users deposit collateral in the form of interest-bearing crypto assets (such as yvYFI, yvUSDT, yvUSDC, xSUSHI) in order to mint MIM, a stablecoin that attempts to maintain a value of US$1.00. SPELL can be staked to earn sSPELL, which grants governance rights and other rewards.',
    website: 'https://abracadabra.money/',
  },
  [ECrypto.stg]: {
    color: '#0A0B0C',
    description: 'STG is an Ethereum token that powers the Stargate Finance ecosystem. Stargate Finance is a cross-chain bridge solution built on LayerZero that makes cross-chain token trading easy, simple, and seamless between various blockchains. The STG token is used to reward liquidity providers for funding Stargate Protocol operations, and to lock and receive the Stargate Protocol governance token (veSTG).',
    website: 'https://stargate.finance/',
  },
  [ECrypto.storj]: {
    color: '#2683FF',
    description: 'Storj (STORJ) is an Ethereum token that powers a decentralized cloud storage network for developers called Storj DCS (Decentralized Cloud Storage). After a customer uploads a file to Storj DCS, pieces of each file are distributed to a global network of independent nodes. When someone requests the file, it is then recompiled securely and made available for download. This means that anyone can store files on Storj DCS without having to trust a centralized data center. Developers can purchase cloud storage services with STORJ. Network participants earn STORJ in return for providing unused hard drive space and bandwidth to the network.',
    website: 'https://storj.io/',
  },
  [ECrypto.strk]: {
    color: '#29296E',
    description: 'Starknet is a zk-rollup Ethereum scaling solution. STRK is the utility token of Starknet as STRK is used to pay for network transaction fees. STRK tokens can also be used to participate in Starknet governance. Lastly, STRK tokens are used to secure the network as they can be staked. Coinbase only supports STRK as an Ethereum ERC-20 token.',
    website: 'https://www.starknet.io/',
  },
  [ECrypto.stx]: {
    color: '#FC6432',
    description: 'STX is the native token of the Stacks network, which aims to enable DeFi, NFTs, apps, and smart contracts for Bitcoin. STX is used to pay transaction fees and can be locked directly on the network to earn BTC rewards.',
    website: 'https://www.stacks.co/',
  },
  [ECrypto.sui]: {
    color: '#81BAEB',
    description: 'SUI is the native token of the Sui blockchain network. Sui is a permissionless smart contract platform that uses the Move programming language. SUI tokens can be used to govern the network, pay for gas fees, and participate in staking.',
    website: 'https://sui.io/',
  },
  [ECrypto.suku]: {
    color: '#000000',
    description: 'SUKU is an Ethereum token that powers the SUKU Platform, a blockchain-based ecosystem that aims to make supply chains more transparent. SUKU tokens can be used for platform governance and to reward users and SUKU node operators. SUKU Platform is also developing applications for DeFi lending and NFT marketplaces.',
    website: 'https://www.suku.world/',
  },
  [ECrypto.super]: {
    color: '#79F49A',
    description: 'SUPER is an Ethereum token that powers SuperVerse, a marketplace and platform for issuing NFTs. On SuperVerse, users can stake SUPER to earn points that can be redeemed for NFTs. SUPER can also be used to vote on the future direction of SuperVerse.',
    website: 'https://superverse.co/',
  },
  [ECrypto.sushi]: {
    color: '#F056A3',
    description: 'SushiSwap (SUSHI) is an Ethereum token that powers SushiSwap, a decentralized cryptocurrency exchange and automated market maker built on Ethereum. Holders of SUSHI can participate in community governance and stake their tokens to receive a portion of SushiSwap’s transaction fees.',
    website: 'https://sushi.com/',
  },
  [ECrypto.swftc]: {
    color: '#B98318',
    description: 'SWFTC is an Ethereum token that powers the SWFT blockchain, a cross-chain wallet, exchange and payments platform that allows users to swap, trade, pay with and share hundreds of cryptocurrencies. SWFTC is used as a blockchain asset to pay transaction fees and provides token holders a 50% discount on it.',
    website: 'https://www.swft.pro/',
  },
  [ECrypto.sylo]: {
    color: '#DF643A',
    description: 'SYLO is an Ethereum token for the Sylo Network, a decentralized communication infrastructure created by many independent users running Sylo Node software on their own computers and servers. By running a Sylo Node and activating their Seeker, users earn SYLO in exchange for their device providing communication services to the network.',
    website: 'https://www.sylo.io/',
  },
  [ECrypto.syn]: {
    color: '#D745FF',
    description: 'SYN is an Ethereum token that powers Synapse, a protocol for bridging and swapping assets across chains, earning yield, and more. SYN can be used to vote on the future of the protocol, and can be awarded to network liquidity providers. Synapse also plans to develop a proof of stake blockchain called Synapse Chain in which validators can stake SYN to help secure the network.',
    website: 'https://synapseprotocol.com/',
  },
  [ECrypto.t]: {
    color: '#754BE5',
    description: 'T is the ERC-20 utility token of the Threshold Network, which offers a variety of threshold cryptography services, including tBTC, a decentralized Bitcoin bridge. T tokens are staked by node operators, and also function as a governance token.',
    website: 'https://threshold.network/',
  },
  [ECrypto.tbtc]: {
    color: '#000000',
    description: 'tBTC is an Ethereum token that’s intended to represent Bitcoin (BTC) on the Ethereum blockchain. It is not Bitcoin, but rather a separate ERC-20 token that’s designed to track Bitcoin’s value. tBTC is powered by the Keep Network. Keep Network enables users to deposit Bitcoin and redeem tokenized tBTC, which can then be used across the Ethereum ecosystem.',
    website: 'https://keep.network/',
  },
  [ECrypto.tia]: {
    color: '#7130F0',
    description: 'Celestia is a modular data availability network built with the Cosmos SDK. Celestia’s unique architecture offers developers a platform to build highly scalable decentralized applications and rollups. As Celestia directly provides the data availability and consensus layer, and Optimint provides the settlement layer, developers only have to focus on building the execution layer. TIA is the native token of Celestia, and can be used for gas fee payment, network governance, and staking participation.',
    website: 'https://celestia.org/',
  },
  [ECrypto.time]: {
    color: '#6C85F7',
    description: 'TIME is an Ethereum token used in the Chrono.tech ecosystem. Chrono.tech provides blockchain-based solutions for recruitment, HR and payment processes, reducing the barriers to accessing work and transferring funds securely in the global labor marketplace. The TIME token can be used within its suite of products.',
    website: 'https://chrono.tech/',
  },
  [ECrypto.tnsr]: {
    color: '#111314',
    description: 'The Tensor Protocol is an autonomous protocol on Solana that NFT marketplaces can use to access deep liquidity and connect their users with other NFT traders. Tensor.trade, the leading NFT marketplace on Solana, is built on the Tensor Protocol. TNSR is the governance token of the Tensor Protocol. TNSR holders can vote on proposals pertaining to the protocol’s development, including the use of the community treasury.',
    website: 'https://www.tensor.trade/',
  },
  [ECrypto.tone]: {
    color: '#4A8FC8',
    description: 'TONE is an Ethereum token that powers the TE-Food platform, an end-to-end food traceability solution on the blockchain. TE-Food\'s products helps companies with any level of technological readiness to join and track their products, and also integrates service providers for the contracting, management, and clearing of services in its ecosystem.',
    website: 'https://te-food.com/',
  },
  [ECrypto.trac]: {
    color: '#6344DF',
    description: 'TRAC is an Ethereum token that powers OriginTrail, which describes itself as a “decentralized knowledge graph.” OriginTrail is used to discover, manage, and store data for everything from supply chain tracking to verifying art, diplomas, and business certifications. TRAC token is used to pay for data processing and storage on the network.',
    website: 'https://origintrail.io/',
  },
  [ECrypto.trb]: {
    color: '#000000',
    description: 'Tellor is a decentralized oracle network that allows smart contracts on Ethereum to securely connect to external data sources. TRB (a.k.a. “Tributes”) is an Ethereum token that powers the Tellor network and incentivizes honest reporting of external data.',
    website: 'https://tellor.io/',
  },
  [ECrypto.tribe]: {
    color: '#178DD0',
    description: 'TRIBE is an Ethereum token that governs Fei Protocol, which issues a separate, decentralized stablecoin called FEI that attempts to maintain a value of US$1.00. TRIBE can be used to vote for Fei Protocol upgrades and to adjust FEI stablecoin monetary policy.',
    website: 'https://fei.money/',
  },
  [ECrypto.tru]: {
    color: '#1A5AFF',
    description: 'TRU is an Ethereum token that powers TrueFi, a decentralized finance protocol for uncollateralized lending using on-chain credit scores. TRU can be used for staking (i.e. to approve or reject new loans) and governance on the TrueFi protocol.',
    website: 'https://truefi.io/',
  },
  [ECrypto.tvk]: {
    color: '#9247FF',
    description: 'TVK is the utility token of the Virtua metaverse, which features a hyper-realistic planet known as Virtua Prime. TVK can be used to purchase land on Virtua Prime. TVK can also be staked to join the ‘Virtua Prestige Club’ that provides members with benefits such as NFT airdrops and extra platform features.',
    website: 'https://virtua.com/',
  },
  [ECrypto.uma]: {
    color: '#FF4A49',
    description: 'UMA is an Ethereum token that describes itself as “an open-source protocol that allows developers to design and create their own financial contracts and synthetic assets.” The protocol’s name comes from the team’s goal of creating universal market access (UMA).',
    website: 'https://umaproject.org/',
  },
  [ECrypto.unfi]: {
    color: '#38F997',
    description: 'UNFI is an Ethereum token that powers the Unifi Protocol, a platform for creating cross-chain DeFi (decentralized finance) applications. On Unifi Protocol, UNFI can be used to propose and vote on protocol upgrades and can also be staked to earn rewards. Note: Coinbase currently only supports UNFI running on the Ethereum blockchain (ERC-20).',
    website: 'https://unifiprotocol.com/',
  },
  [ECrypto.uni]: {
    color: '#FF007A',
    description: 'Uniswap (UNI) is an Ethereum token that powers Uniswap, an automated liquidity provider that’s designed to make it easy to exchange Ethereum (ERC-20) tokens. There is no orderbook or central facilitator on Uniswap. Instead, tokens are exchanged through liquidity pools that are defined by smart contracts.',
    website: 'https://uniswap.org/',
  },
  [ECrypto.upi]: {
    color: '#FD774E',
    description: 'UPI is an Ethereum token that powers Pawtocol, a platform for collecting and monetizing data about pets. Users can gain health insights on their pets using an IoT-enabled sensor and can earn UPI by anonymously sharing that data with the Pawtocol network.',
    website: 'https://pawtocol.com/',
  },
  [ECrypto.usdc]: {
    color: '#2775C9',
    description: 'USD Coin (USDC) is a stablecoin fully backed by the US dollar and developed by the CENTRE consortium. Coinbase customers with US dollar accounts may exchange 1 USDC for US$1.00 (and vice versa) on Coinbase in jurisdictions where USDC support is available. The graph above reflects USDC’s current and historical redemption value of US$1.00, which may not match the price of USDC on other exchanges. USDC is an Ethereum token and is the only fiat-backed stablecoin currently supported by Coinbase. Note: Coinbase only supports USDC running on Ethereum (ERC-20).',
    website: 'https://www.coinbase.com/usdc/',
  },
  [ECrypto.usdt]: {
    color: '#27A17C',
    description: 'Tether (USDT) is an Ethereum token that is pegged to the value of a U.S. dollar (also known as a stablecoin). Tether’s issuer claims that USDT is backed by bank reserves and loans which match or exceed the value of USDT in circulation. Important note: at this time, Coinbase only supports USDT on the Ethereum blockchain (ERC-20). Do not send USDT on any other blockchain to Coinbase.',
    website: 'https://tether.to/',
  },
  [ECrypto.ust]: {
    color: '#5493F7',
    description: 'TerraUSD is a decentralized stablecoin running on Ethereum that attempts to maintain a value of US$1.00. Unlike centralized stablecoins, UST isn’t backed by US dollars in a bank account. Instead, in order to mint 1 TerraUSD, US$1.00 worth of TerraUSD’s reserve asset (LUNA) must be burned.',
    website: 'https://www.terra.money/',
  },
  [ECrypto.vgx]: {
    color: '#585DF6',
    description: 'VGX is an Ethereum token that’s used to reward and incentivize use of the Voyager centralized exchange. On Voyager, VGX holders can earn staking rewards, receive cashback on trades, and more.',
    website: 'https://www.investvoyager.com/vgx',
  },
  [ECrypto.wbtc]: {
    color: '#1F1B2C',
    description: 'Wrapped Bitcoin (WBTC) is an Ethereum token that is intended to represent Bitcoin (BTC) on the Ethereum blockchain. It is not Bitcoin, but rather a separate ERC-20 token that’s designed to track Bitcoin’s value. WBTC was created to allow Bitcoin holders to participate in decentralized finance (“DeFi”) apps that are popular on Ethereum. Through a WBTC partner, 1 Bitcoin can be exchanged for 1 Wrapped Bitcoin, and vice-versa. The BTC that backs WBTC is verifiable through a “proof of reserve” system that verifies the 1:1 backing between minted WBTC tokens and Bitcoin stored by custodians. WBTC is maintained by a group called the WBTC DAO that consists of over 30 members. It was originally started by BitGo, Ren, and Kyber.',
    website: 'https://wbtc.network/',
  },
  [ECrypto.wcfg]: {
    color: '#000000',
    description: 'Wrapped Centrifuge (WCFG) is an Ethereum token that’s intended to represent Centrifuge (CFG) on the Ethereum blockchain. WCFG is not CFG, but rather a separate ERC-20 token that’s designed to track CFG’s price. CFG is the native asset of the Polkadot-based Centrifuge Chain and can be used for staking and on-chain governance.',
    website: 'https://centrifuge.io/',
  },
  [ECrypto.wluna]: {
    color: '#F9D85E',
    description: 'Wrapped Luna (WLUNA) is an Ethereum token that’s intended to represent Terra (LUNA) on the Ethereum blockchain. It is not LUNA, but rather a separate ERC-20 token that’s designed to track LUNA’s value. WLUNA was created to allow LUNA holders to trade, hold, and participate in decentralized finance (“DeFi”) apps on Ethereum. Through a WLUNA partner, 1 LUNA can be exchanged for 1 WLUNA, and vice-versa.',
    website: 'https://www.terra.money/',
  },
  [ECrypto.xcn]: {
    color: '#161A1F',
    description: 'Onyx Protocol is an infrastructure for a multi-asset, shared, and cryptographically secure ledger. Onyx refers to a blockchain-based technology protocol that aims to develop and run a smarter and internally connected economy, with a mission to create cryptographic ledgers capable of improving existing financial products and services.',
    website: 'https://onyx.org/',
  },
  [ECrypto.xlm]: {
    color: '#000000',
    description: 'Stellar’s cryptocurrency, the Stellar Lumen (XLM), powers the Stellar payment network. Stellar aims to connect banks, payment systems, and individuals quickly and reliably.',
    website: 'https://www.stellar.org/',
  },
  [ECrypto.xmon]: {
    color: '#62B9A4',
    description: 'XMON is the utility token of the 0xmons NFT collection. XMON tokens can be staked to receive a portion of the revenue that the 0xmons NFT collection generates through encoding fees and secondary market trading fees.',
    website: 'https://0xmons.xyz/',
  },
  [ECrypto.xrp]: {
    color: '#24292F',
    description: 'In light of the SEC’s action against Ripple Labs, Inc., trading in XRP has been suspended as of January 19, 2021. XRP is the cryptocurrency used by the Ripple payment network. Built for enterprise use, XRP aims to be a fast, cost-efficient cryptocurrency for cross-border payments.',
    website: 'https://ripple.com/xrp/',
  },
  [ECrypto.xtz]: {
    color: '#A6E000',
    description: 'Tezos is a cryptocurrency and decentralized computing platform. Its features include proof of stake consensus, formal verification (which lets developers verify the correctness of their code), and the ability to let stakeholders vote on changes to the protocol. Tezos\'s block creation process is called "baking" — Tezos holders who stake their tokens can receive Tezos tokens as a reward for creating and verifying blocks.',
    website: 'https://www.tezos.com/',
  },
  [ECrypto.xyo]: {
    color: '#7A8DA8',
    description: 'XYO is an Ethereum token that powers XYO Network, a decentralized network of devices that anonymously collect and validate geospatial data. On the XYO World platform, XYO tokens can be traded for and staked against unique ERC-721 tokens representing real-world locations.',
    website: 'https://xyo.network/',
  },
  [ECrypto.yfi]: {
    color: '#006AE2',
    description: 'Yearn.finance (YFI) is an Ethereum token that governs the Yearn.finance platform. The platform is a yield optimizer that moves funds around the decentralized finance (“defi”) ecosystem in an effort to generate a high return.',
    website: 'https://yearn.finance/',
  },
  [ECrypto.yfii]: {
    color: '#FA2978',
    description: 'DFI.Money (YFII) is an Ethereum token that governs the DFI.Money platform. The platform is a fork of Yearn.finance and acts as a yield optimizer for tokens deposited to the platform.',
    website: 'https://dfi.money/',
  },
  [ECrypto.zec]: {
    color: '#ECB244',
    description: 'Zcash is a cryptocurrency that offers two types of addresses: transparent addresses that are publicly visible on the Zcash blockchain and shielded addresses that are more private. Coinbase customers can receive Zcash from both transparent and shielded addresses and send Zcash to transparent addresses. Sending to shielded addresses is not supported at this time.',
    website: 'https://z.cash/',
  },
  [ECrypto.zen]: {
    color: '#20CBA3',
    description: 'Horizen is a blockchain ecosystem that enables privacy-preserving decentralized applications. Using ZEN as its native asset, Horizen has both a main blockchain and a sidechain platform that enables developers to build custom private or public blockchains and decentralized applications.',
    website: 'https://www.horizen.io/',
  },
  [ECrypto.zeta]: {
    color: '#1D4A3A',
    description: 'ZetaChain is a blockchain built on the Cosmos SDK focused on enabling interoperability among all blockchains. To achieve this, ZetaChain features omnichain smart contracts, cross-chain message passing, and hyper-connected nodes. ZETA is the utility token of ZetaChain. ZETA can be used to pay for transaction fees, participate in the network’s consensus mechanism, and engage in governance. Coinbase supports ZETA as an Ethereum ERC-20 token',
    website: 'https://www.zetachain.com/',
  },
  [ECrypto.zrx]: {
    color: '#302C2B',
    description: 'ZRX is an Ethereum token that is used to power the 0x protocol. The protocol itself is designed to allow Ethereum tokens to be traded at a low cost directly from your wallet.',
    website: 'https://0x.org/',
  },
};

export default CryptoDetails;
