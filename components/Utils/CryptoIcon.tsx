import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import Logo00 from '../../assets/cryptos/00.svg';
import Logo1Inch from '../../assets/cryptos/1inch.svg';
import LogoAave from '../../assets/cryptos/aave.svg';
import LogoAbt from '../../assets/cryptos/abt.svg';
import LogoAch from '../../assets/cryptos/ach.svg';
import LogoAcs from '../../assets/cryptos/acs.svg';
import LogoAda from '../../assets/cryptos/ada.svg';
import LogoAergo from '../../assets/cryptos/aergo.svg';
import LogoAgld from '../../assets/cryptos/agld.svg';
import LogoAioz from '../../assets/cryptos/aioz.svg';
import LogoAlcx from '../../assets/cryptos/alcx.svg';
import LogoAlgo from '../../assets/cryptos/algo.svg';
import LogoAmp from '../../assets/cryptos/amp.svg';
import LogoAnkr from '../../assets/cryptos/ankr.svg';
import LogoArb from '../../assets/cryptos/arb.svg';
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
import ECrypto from '@/constants/cryptos.enum';

const CryptoIcon: Partial<Record<ECrypto, FC<SvgProps>>> = {
  [ECrypto['00']]: Logo00,
  [ECrypto['1inch']]: Logo1Inch,
  [ECrypto.aave]: LogoAave,
  [ECrypto.abt]: LogoAbt,
  [ECrypto.ach]: LogoAch,
  [ECrypto.acs]: LogoAcs,
  [ECrypto.ada]: LogoAda,
  [ECrypto.aergo]: LogoAergo,
  [ECrypto.agld]: LogoAgld,
  [ECrypto.aioz]: LogoAioz,
  [ECrypto.alcx]: LogoAlcx,
  [ECrypto.algo]: LogoAlgo,
  [ECrypto.amp]: LogoAmp,
  [ECrypto.ankr]: LogoAnkr,
  [ECrypto.arb]: LogoArb,
  [ECrypto.arpa]: LogoArpa,
  [ECrypto.asm]: LogoAsm,
  [ECrypto.atom]: LogoAtom,
  [ECrypto.auction]: LogoAuction,
  [ECrypto.avax]: LogoAvax,
  [ECrypto.axs]: LogoAxs,
  [ECrypto.badger]: LogoBadger,
  [ECrypto.bal]: LogoBal,
  [ECrypto.band]: LogoBand,
  [ECrypto.bat]: LogoBat,
  [ECrypto.bch]: LogoBch,
  [ECrypto.bnt]: LogoBnt,
  [ECrypto.bond]: LogoBond,
  [ECrypto.btc]: LogoBtc,
  [ECrypto.btrst]: LogoBtrst,
  [ECrypto.cgld]: LogoCgld,
  [ECrypto.chz]: LogoChz,
  [ECrypto.clv]: LogoClv,
  [ECrypto.comp]: LogoComp,
  [ECrypto.coti]: LogoCoti,
  [ECrypto.cro]: LogoCro,
  [ECrypto.crv]: LogoCrv,
  [ECrypto.ctsi]: LogoCtsi,
  [ECrypto.cvc]: LogoCvc,
  [ECrypto.dai]: LogoDai,
  [ECrypto.dash]: LogoDash,
  [ECrypto.ddx]: LogoDdx,
  [ECrypto.dnt]: LogoDnt,
  [ECrypto.doge]: LogoDoge,
  [ECrypto.dot]: LogoDot,
  [ECrypto.enj]: LogoEnj,
  [ECrypto.ens]: LogoEns,
  [ECrypto.eos]: LogoEos,
  [ECrypto.etc]: LogoEtc,
  [ECrypto.eth]: LogoEth,
  [ECrypto.farm]: LogoFarm,
  [ECrypto.fet]: LogoFet,
  [ECrypto.fil]: LogoFil,
  [ECrypto.forth]: LogoForth,
  [ECrypto.fx]: LogoFx,
  [ECrypto.gala]: LogoGala,
  [ECrypto.gnt]: LogoGnt,
  [ECrypto.grt]: LogoGrt,
  [ECrypto.gtc]: LogoGtc,
  [ECrypto.gyen]: LogoGyen,
  [ECrypto.icp]: LogoIcp,
  [ECrypto.iotx]: LogoIotx,
  [ECrypto.jasmy]: LogoJasmy,
  [ECrypto.keep]: LogoKeep,
  [ECrypto.knc]: LogoKnc,
  [ECrypto.krl]: LogoKrl,
  [ECrypto.lcx]: LogoLcx,
  [ECrypto.link]: LogoLink,
  [ECrypto.loom]: LogoLoom,
  [ECrypto.lpt]: LogoLpt,
  [ECrypto.lrc]: LogoLrc,
  [ECrypto.ltc]: LogoLtc,
  [ECrypto.mana]: LogoMana,
  [ECrypto.mask]: LogoMask,
  [ECrypto.matic]: LogoMatic,
  [ECrypto.mir]: LogoMir,
  [ECrypto.mkr]: LogoMkr,
  [ECrypto.mln]: LogoMln,
  [ECrypto.musd]: LogoMusd,
  [ECrypto.nkn]: LogoNkn,
  [ECrypto.nmr]: LogoNmr,
  [ECrypto.nu]: LogoNu,
  [ECrypto.ogn]: LogoOgn,
  [ECrypto.omg]: LogoOmg,
  [ECrypto.orn]: LogoOrn,
  [ECrypto.oxt]: LogoOxt,
  [ECrypto.pax]: LogoPax,
  [ECrypto.perp]: LogoPerp,
  [ECrypto.pla]: LogoPla,
  [ECrypto.poly]: LogoPoly,
  [ECrypto.powr]: LogoPowr,
  [ECrypto.qnt]: LogoQnt,
  [ECrypto.quick]: LogoQuick,
  [ECrypto.rad]: LogoRad,
  [ECrypto.rai]: LogoRai,
  [ECrypto.rari]: LogoRari,
  [ECrypto.ren]: LogoRen,
  [ECrypto.rep]: LogoRep,
  [ECrypto.req]: LogoReq,
  [ECrypto.rgt]: LogoRgt,
  [ECrypto.rlc]: LogoRlc,
  [ECrypto.rly]: LogoRly,
  [ECrypto.shib]: LogoShib,
  [ECrypto.skl]: LogoSkl,
  [ECrypto.snx]: LogoSnx,
  [ECrypto.sol]: LogoSol,
  [ECrypto.storj]: LogoStorj,
  [ECrypto.suku]: LogoSuku,
  [ECrypto.sushi]: LogoSushi,
  [ECrypto.tbtc]: LogoTbtc,
  [ECrypto.trac]: LogoTrac,
  [ECrypto.trb]: LogoTrb,
  [ECrypto.tribe]: LogoTribe,
  [ECrypto.tru]: LogoTru,
  [ECrypto.uma]: LogoUma,
  [ECrypto.uni]: LogoUni,
  [ECrypto.usdc]: LogoUsdc,
  [ECrypto.usdt]: LogoUsdt,
  [ECrypto.ust]: LogoUst,
  [ECrypto.vgx]: LogoVgx,
  [ECrypto.wbtc]: LogoWbtc,
  [ECrypto.wcfg]: LogoWcfg,
  [ECrypto.wluna]: LogoWluna,
  [ECrypto.xlm]: LogoXlm,
  [ECrypto.xrp]: LogoXrp,
  [ECrypto.xtz]: LogoXtz,
  [ECrypto.xyo]: LogoXyo,
  [ECrypto.yfi]: LogoYfi,
  [ECrypto.yfii]: LogoYfii,
  [ECrypto.zec]: LogoZec,
  [ECrypto.zen]: LogoZen,
  [ECrypto.zrx]: LogoZrx,
};

export default CryptoIcon;
