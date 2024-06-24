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
import LogoAero from '../../assets/cryptos/aero.svg';
import LogoAgld from '../../assets/cryptos/agld.svg';
import LogoAioz from '../../assets/cryptos/aioz.svg';
import LogoAkt from '../../assets/cryptos/akt.svg';
import LogoAlcx from '../../assets/cryptos/alcx.svg';
import LogoAleph from '../../assets/cryptos/aleph.svg';
import LogoAlgo from '../../assets/cryptos/algo.svg';
import LogoAlice from '../../assets/cryptos/alice.svg';
import LogoAmp from '../../assets/cryptos/amp.svg';
import LogoAnkr from '../../assets/cryptos/ankr.svg';
import LogoAnt from '../../assets/cryptos/ant.svg';
import LogoApe from '../../assets/cryptos/ape.svg';
import LogoApi3 from '../../assets/cryptos/api3.svg';
import LogoApt from '../../assets/cryptos/apt.svg';
import LogoArb from '../../assets/cryptos/arb.svg';
import LogoArkm from '../../assets/cryptos/arkm.svg';
import LogoArpa from '../../assets/cryptos/arpa.svg';
import LogoAsm from '../../assets/cryptos/asm.svg';
import LogoAst from '../../assets/cryptos/ast.svg';
import LogoAta from '../../assets/cryptos/ata.svg';
import LogoAtom from '../../assets/cryptos/atom.svg';
import LogoAuction from '../../assets/cryptos/auction.svg';
import LogoAudio from '../../assets/cryptos/audio.svg';
import LogoAurora from '../../assets/cryptos/aurora.svg';
import LogoAvax from '../../assets/cryptos/avax.svg';
import LogoAvt from '../../assets/cryptos/avt.svg';
import LogoAxl from '../../assets/cryptos/axl.svg';
import LogoAxs from '../../assets/cryptos/axs.svg';
import LogoBadger from '../../assets/cryptos/badger.svg';
import LogoBal from '../../assets/cryptos/bal.svg';
import LogoBand from '../../assets/cryptos/band.svg';
import LogoBat from '../../assets/cryptos/bat.svg';
import LogoBch from '../../assets/cryptos/bch.svg';
import LogoBico from '../../assets/cryptos/bico.svg';
import LogoBigtime from '../../assets/cryptos/bigtime.svg';
import LogoBit from '../../assets/cryptos/bit.svg';
import LogoBlur from '../../assets/cryptos/blur.svg';
import LogoBlz from '../../assets/cryptos/blz.svg';
import LogoBnt from '../../assets/cryptos/bnt.svg';
import LogoBoba from '../../assets/cryptos/boba.svg';
import LogoBond from '../../assets/cryptos/bond.svg';
import LogoBonk from '../../assets/cryptos/bonk.svg';
import LogoBtc from '../../assets/cryptos/btc.svg';
import LogoBtrst from '../../assets/cryptos/btrst.svg';
import LogoBusd from '../../assets/cryptos/busd.svg';
import LogoC98 from '../../assets/cryptos/c98.svg';
import LogoCbeth from '../../assets/cryptos/cbeth.svg';
import LogoCelr from '../../assets/cryptos/celr.svg';
import LogoCgld from '../../assets/cryptos/cgld.svg';
import LogoChz from '../../assets/cryptos/chz.svg';
import LogoClv from '../../assets/cryptos/clv.svg';
import LogoComp from '../../assets/cryptos/comp.svg';
import LogoCorechain from '../../assets/cryptos/corechain.svg';
import LogoCoti from '../../assets/cryptos/coti.svg';
import LogoCoval from '../../assets/cryptos/coval.svg';
import LogoCro from '../../assets/cryptos/cro.svg';
import LogoCrpt from '../../assets/cryptos/crpt.svg';
import LogoCrv from '../../assets/cryptos/crv.svg';
import LogoCtsi from '../../assets/cryptos/ctsi.svg';
import LogoCtx from '../../assets/cryptos/ctx.svg';
import LogoCvc from '../../assets/cryptos/cvc.svg';
import LogoCvx from '../../assets/cryptos/cvx.svg';
import LogoDai from '../../assets/cryptos/dai.svg';
import LogoDar from '../../assets/cryptos/dar.svg';
import LogoDash from '../../assets/cryptos/dash.svg';
import LogoDdx from '../../assets/cryptos/ddx.svg';
import LogoDeso from '../../assets/cryptos/deso.svg';
import LogoDext from '../../assets/cryptos/dext.svg';
import LogoDia from '../../assets/cryptos/dia.svg';
import LogoDimo from '../../assets/cryptos/dimo.svg';
import LogoDnt from '../../assets/cryptos/dnt.svg';
import LogoDoge from '../../assets/cryptos/doge.svg';
import LogoDot from '../../assets/cryptos/dot.svg';
import LogoDrep from '../../assets/cryptos/drep.svg';
import LogoDyp from '../../assets/cryptos/dyp.svg';
import LogoEgld from '../../assets/cryptos/egld.svg';
import LogoEla from '../../assets/cryptos/ela.svg';
import LogoEnj from '../../assets/cryptos/enj.svg';
import LogoEns from '../../assets/cryptos/ens.svg';
import LogoEos from '../../assets/cryptos/eos.svg';
import LogoErn from '../../assets/cryptos/ern.svg';
import LogoEtc from '../../assets/cryptos/etc.svg';
import LogoEth from '../../assets/cryptos/eth.svg';
import LogoEurc from '../../assets/cryptos/eurc.svg';
import LogoFarm from '../../assets/cryptos/farm.svg';
import LogoFet from '../../assets/cryptos/fet.svg';
import LogoFida from '../../assets/cryptos/fida.svg';
import LogoFil from '../../assets/cryptos/fil.svg';
import LogoFis from '../../assets/cryptos/fis.svg';
import LogoFlow from '../../assets/cryptos/flow.svg';
import LogoFlr from '../../assets/cryptos/flr.svg';
import LogoFort from '../../assets/cryptos/fort.svg';
import LogoForth from '../../assets/cryptos/forth.svg';
import LogoFox from '../../assets/cryptos/fox.svg';
import LogoFx from '../../assets/cryptos/fx.svg';
import LogoGal from '../../assets/cryptos/gal.svg';
import LogoGala from '../../assets/cryptos/gala.svg';
import LogoGfi from '../../assets/cryptos/gfi.svg';
import LogoGhst from '../../assets/cryptos/ghst.svg';
import LogoGlm from '../../assets/cryptos/glm.svg';
import LogoGmt from '../../assets/cryptos/gmt.svg';
import LogoGno from '../../assets/cryptos/gno.svg';
import LogoGnt from '../../assets/cryptos/gnt.svg';
import LogoGods from '../../assets/cryptos/gods.svg';
import LogoGrt from '../../assets/cryptos/grt.svg';
import LogoGst from '../../assets/cryptos/gst.svg';
import LogoGtc from '../../assets/cryptos/gtc.svg';
import LogoGusd from '../../assets/cryptos/gusd.svg';
import LogoGyen from '../../assets/cryptos/gyen.svg';
import LogoHbar from '../../assets/cryptos/hbar.svg';
import LogoHft from '../../assets/cryptos/hft.svg';
import LogoHigh from '../../assets/cryptos/high.svg';
import LogoHnt from '../../assets/cryptos/hnt.svg';
import LogoHoney from '../../assets/cryptos/honey.svg';
import LogoHopr from '../../assets/cryptos/hopr.svg';
import LogoIcp from '../../assets/cryptos/icp.svg';
import LogoIdex from '../../assets/cryptos/idex.svg';
import LogoIlv from '../../assets/cryptos/ilv.svg';
import LogoImx from '../../assets/cryptos/imx.svg';
import LogoIndex from '../../assets/cryptos/index.svg';
import LogoInj from '../../assets/cryptos/inj.svg';
import LogoInv from '../../assets/cryptos/inv.svg';
import LogoIotx from '../../assets/cryptos/iotx.svg';
import LogoJasmy from '../../assets/cryptos/jasmy.svg';
import LogoJto from '../../assets/cryptos/jto.svg';
import LogoJup from '../../assets/cryptos/jup.svg';
import LogoKarrat from '../../assets/cryptos/karrat.svg';
import LogoKava from '../../assets/cryptos/kava.svg';
import LogoKeep from '../../assets/cryptos/keep.svg';
import LogoKnc from '../../assets/cryptos/knc.svg';
import LogoKrl from '../../assets/cryptos/krl.svg';
import LogoKsm from '../../assets/cryptos/ksm.svg';
import LogoLcx from '../../assets/cryptos/lcx.svg';
import LogoLdo from '../../assets/cryptos/ldo.svg';
import LogoLink from '../../assets/cryptos/link.svg';
import LogoLit from '../../assets/cryptos/lit.svg';
import LogoLoka from '../../assets/cryptos/loka.svg';
import LogoLoom from '../../assets/cryptos/loom.svg';
import LogoLpt from '../../assets/cryptos/lpt.svg';
import LogoLqty from '../../assets/cryptos/lqty.svg';
import LogoLrc from '../../assets/cryptos/lrc.svg';
import LogoLseth from '../../assets/cryptos/lseth.svg';
import LogoLtc from '../../assets/cryptos/ltc.svg';
import LogoMagic from '../../assets/cryptos/magic.svg';
import LogoMana from '../../assets/cryptos/mana.svg';
import LogoMask from '../../assets/cryptos/mask.svg';
import LogoMath from '../../assets/cryptos/math.svg';
import LogoMatic from '../../assets/cryptos/matic.svg';
import LogoMco2 from '../../assets/cryptos/mco2.svg';
import LogoMdt from '../../assets/cryptos/mdt.svg';
import LogoMedia from '../../assets/cryptos/media.svg';
import LogoMetis from '../../assets/cryptos/metis.svg';
import LogoMina from '../../assets/cryptos/mina.svg';
import LogoMir from '../../assets/cryptos/mir.svg';
import LogoMkr from '../../assets/cryptos/mkr.svg';
import LogoMln from '../../assets/cryptos/mln.svg';
import LogoMnde from '../../assets/cryptos/mnde.svg';
import LogoMobile from '../../assets/cryptos/mobile.svg';
import LogoMona from '../../assets/cryptos/mona.svg';
import LogoMpl from '../../assets/cryptos/mpl.svg';
import LogoMsol from '../../assets/cryptos/msol.svg';
import LogoMtl from '../../assets/cryptos/mtl.svg';
import LogoMulti from '../../assets/cryptos/multi.svg';
import LogoMusd from '../../assets/cryptos/musd.svg';
import LogoMuse from '../../assets/cryptos/muse.svg';
import LogoMxc from '../../assets/cryptos/mxc.svg';
import LogoNct from '../../assets/cryptos/nct.svg';
import LogoNear from '../../assets/cryptos/near.svg';
import LogoNeon from '../../assets/cryptos/neon.svg';
import LogoNest from '../../assets/cryptos/nest.svg';
import LogoNkn from '../../assets/cryptos/nkn.svg';
import LogoNmr from '../../assets/cryptos/nmr.svg';
import LogoNu from '../../assets/cryptos/nu.svg';
import LogoOcean from '../../assets/cryptos/ocean.svg';
import LogoOgn from '../../assets/cryptos/ogn.svg';
import LogoOmg from '../../assets/cryptos/omg.svg';
import LogoOndo from '../../assets/cryptos/ondo.svg';
import LogoOoki from '../../assets/cryptos/ooki.svg';
import LogoOp from '../../assets/cryptos/op.svg';
import LogoOrca from '../../assets/cryptos/orca.svg';
import LogoOrn from '../../assets/cryptos/orn.svg';
import LogoOsmo from '../../assets/cryptos/osmo.svg';
import LogoOxt from '../../assets/cryptos/oxt.svg';
import LogoPax from '../../assets/cryptos/pax.svg';
import LogoPerp from '../../assets/cryptos/perp.svg';
import LogoPla from '../../assets/cryptos/pla.svg';
import LogoPlu from '../../assets/cryptos/plu.svg';
import LogoPng from '../../assets/cryptos/png.svg';
import LogoPols from '../../assets/cryptos/pols.svg';
import LogoPoly from '../../assets/cryptos/poly.svg';
import LogoPond from '../../assets/cryptos/pond.svg';
import LogoPowr from '../../assets/cryptos/powr.svg';
import LogoPrime from '../../assets/cryptos/prime.svg';
import LogoPro from '../../assets/cryptos/pro.svg';
import LogoPrq from '../../assets/cryptos/prq.svg';
import LogoPundix from '../../assets/cryptos/pundix.svg';
import LogoPyr from '../../assets/cryptos/pyr.svg';
import LogoPyusd from '../../assets/cryptos/pyusd.svg';
import LogoQi from '../../assets/cryptos/qi.svg';
import LogoQnt from '../../assets/cryptos/qnt.svg';
import LogoQuick from '../../assets/cryptos/quick.svg';
import LogoRad from '../../assets/cryptos/rad.svg';
import LogoRai from '../../assets/cryptos/rai.svg';
import LogoRare from '../../assets/cryptos/rare.svg';
import LogoRari from '../../assets/cryptos/rari.svg';
import LogoRbn from '../../assets/cryptos/rbn.svg';
import LogoRen from '../../assets/cryptos/ren.svg';
import LogoRender from '../../assets/cryptos/render.svg';
import LogoRep from '../../assets/cryptos/rep.svg';
import LogoReq from '../../assets/cryptos/req.svg';
import LogoRgt from '../../assets/cryptos/rgt.svg';
import LogoRlc from '../../assets/cryptos/rlc.svg';
import LogoRly from '../../assets/cryptos/rly.svg';
import LogoRndr from '../../assets/cryptos/rndr.svg';
import LogoRonin from '../../assets/cryptos/ronin.svg';
import LogoRose from '../../assets/cryptos/rose.svg';
import LogoRpl from '../../assets/cryptos/rpl.svg';
import LogoSafe from '../../assets/cryptos/safe.svg';
import LogoSand from '../../assets/cryptos/sand.svg';
import LogoSeam from '../../assets/cryptos/seam.svg';
import LogoSei from '../../assets/cryptos/sei.svg';
import LogoShdw from '../../assets/cryptos/shdw.svg';
import LogoShib from '../../assets/cryptos/shib.svg';
import LogoShping from '../../assets/cryptos/shping.svg';
import LogoSkl from '../../assets/cryptos/skl.svg';
import LogoSnt from '../../assets/cryptos/snt.svg';
import LogoSnx from '../../assets/cryptos/snx.svg';
import LogoSol from '../../assets/cryptos/sol.svg';
import LogoSpa from '../../assets/cryptos/spa.svg';
import LogoSpell from '../../assets/cryptos/spell.svg';
import LogoStg from '../../assets/cryptos/stg.svg';
import LogoStorj from '../../assets/cryptos/storj.svg';
import LogoStrk from '../../assets/cryptos/strk.svg';
import LogoStx from '../../assets/cryptos/stx.svg';
import LogoSui from '../../assets/cryptos/sui.svg';
import LogoSuku from '../../assets/cryptos/suku.svg';
import LogoSuper from '../../assets/cryptos/super.svg';
import LogoSushi from '../../assets/cryptos/sushi.svg';
import LogoSwftc from '../../assets/cryptos/swftc.svg';
import LogoSylo from '../../assets/cryptos/sylo.svg';
import LogoSyn from '../../assets/cryptos/syn.svg';
import LogoT from '../../assets/cryptos/t.svg';
import LogoTbtc from '../../assets/cryptos/tbtc.svg';
import LogoTia from '../../assets/cryptos/tia.svg';
import LogoTime from '../../assets/cryptos/time.svg';
import LogoTnsr from '../../assets/cryptos/tnsr.svg';
import LogoTone from '../../assets/cryptos/tone.svg';
import LogoTrac from '../../assets/cryptos/trac.svg';
import LogoTrb from '../../assets/cryptos/trb.svg';
import LogoTribe from '../../assets/cryptos/tribe.svg';
import LogoTru from '../../assets/cryptos/tru.svg';
import LogoTvk from '../../assets/cryptos/tvk.svg';
import LogoUma from '../../assets/cryptos/uma.svg';
import LogoUnfi from '../../assets/cryptos/unfi.svg';
import LogoUni from '../../assets/cryptos/uni.svg';
import LogoUpi from '../../assets/cryptos/upi.svg';
import LogoUsdc from '../../assets/cryptos/usdc.svg';
import LogoUsdt from '../../assets/cryptos/usdt.svg';
import LogoUst from '../../assets/cryptos/ust.svg';
import LogoVara from '../../assets/cryptos/vara.svg';
import LogoVelo from '../../assets/cryptos/velo.svg';
import LogoVet from '../../assets/cryptos/vet.svg';
import LogoVgx from '../../assets/cryptos/vgx.svg';
import LogoVoxel from '../../assets/cryptos/voxel.svg';
import LogoVtho from '../../assets/cryptos/vtho.svg';
import LogoWampl from '../../assets/cryptos/wampl.svg';
import LogoWaxl from '../../assets/cryptos/waxl.svg';
import LogoWbtc from '../../assets/cryptos/wbtc.svg';
import LogoWcfg from '../../assets/cryptos/wcfg.svg';
import LogoWluna from '../../assets/cryptos/wluna.svg';
import LogoXcn from '../../assets/cryptos/xcn.svg';
import LogoXlm from '../../assets/cryptos/xlm.svg';
import LogoXmon from '../../assets/cryptos/xmon.svg';
import LogoXrp from '../../assets/cryptos/xrp.svg';
import LogoXtz from '../../assets/cryptos/xtz.svg';
import LogoXyo from '../../assets/cryptos/xyo.svg';
import LogoYfi from '../../assets/cryptos/yfi.svg';
import LogoYfii from '../../assets/cryptos/yfii.svg';
import LogoZec from '../../assets/cryptos/zec.svg';
import LogoZen from '../../assets/cryptos/zen.svg';
import LogoZeta from '../../assets/cryptos/zeta.svg';
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
  [ECrypto.aero]: LogoAero,
  [ECrypto.aergo]: LogoAergo,
  [ECrypto.agld]: LogoAgld,
  [ECrypto.aioz]: LogoAioz,
  [ECrypto.akt]: LogoAkt,
  [ECrypto.alcx]: LogoAlcx,
  [ECrypto.aleph]: LogoAleph,
  [ECrypto.algo]: LogoAlgo,
  [ECrypto.alice]: LogoAlice,
  [ECrypto.amp]: LogoAmp,
  [ECrypto.ankr]: LogoAnkr,
  [ECrypto.ant]: LogoAnt,
  [ECrypto.ape]: LogoApe,
  [ECrypto.api3]: LogoApi3,
  [ECrypto.apt]: LogoApt,
  [ECrypto.arb]: LogoArb,
  [ECrypto.arkm]: LogoArkm,
  [ECrypto.arpa]: LogoArpa,
  [ECrypto.asm]: LogoAsm,
  [ECrypto.ast]: LogoAst,
  [ECrypto.ata]: LogoAta,
  [ECrypto.atom]: LogoAtom,
  [ECrypto.auction]: LogoAuction,
  [ECrypto.audio]: LogoAudio,
  [ECrypto.aurora]: LogoAurora,
  [ECrypto.avax]: LogoAvax,
  [ECrypto.avt]: LogoAvt,
  [ECrypto.axl]: LogoAxl,
  [ECrypto.axs]: LogoAxs,
  [ECrypto.badger]: LogoBadger,
  [ECrypto.bal]: LogoBal,
  [ECrypto.band]: LogoBand,
  [ECrypto.bat]: LogoBat,
  [ECrypto.bch]: LogoBch,
  [ECrypto.bico]: LogoBico,
  [ECrypto.bigtime]: LogoBigtime,
  [ECrypto.bit]: LogoBit,
  [ECrypto.blur]: LogoBlur,
  [ECrypto.blz]: LogoBlz,
  [ECrypto.bnt]: LogoBnt,
  [ECrypto.boba]: LogoBoba,
  [ECrypto.bond]: LogoBond,
  [ECrypto.bonk]: LogoBonk,
  [ECrypto.btc]: LogoBtc,
  [ECrypto.btrst]: LogoBtrst,
  [ECrypto.busd]: LogoBusd,
  [ECrypto.c98]: LogoC98,
  [ECrypto.cbeth]: LogoCbeth,
  [ECrypto.celr]: LogoCelr,
  [ECrypto.cgld]: LogoCgld,
  [ECrypto.chz]: LogoChz,
  [ECrypto.clv]: LogoClv,
  [ECrypto.comp]: LogoComp,
  [ECrypto.corechain]: LogoCorechain,
  [ECrypto.coti]: LogoCoti,
  [ECrypto.coval]: LogoCoval,
  [ECrypto.cro]: LogoCro,
  [ECrypto.crpt]: LogoCrpt,
  [ECrypto.crv]: LogoCrv,
  [ECrypto.ctsi]: LogoCtsi,
  [ECrypto.ctx]: LogoCtx,
  [ECrypto.cvc]: LogoCvc,
  [ECrypto.cvx]: LogoCvx,
  [ECrypto.dai]: LogoDai,
  [ECrypto.dar]: LogoDar,
  [ECrypto.dash]: LogoDash,
  [ECrypto.ddx]: LogoDdx,
  [ECrypto.deso]: LogoDeso,
  [ECrypto.dext]: LogoDext,
  [ECrypto.dia]: LogoDia,
  [ECrypto.dimo]: LogoDimo,
  [ECrypto.dnt]: LogoDnt,
  [ECrypto.doge]: LogoDoge,
  [ECrypto.dot]: LogoDot,
  [ECrypto.drep]: LogoDrep,
  [ECrypto.dyp]: LogoDyp,
  [ECrypto.egld]: LogoEgld,
  [ECrypto.ela]: LogoEla,
  [ECrypto.enj]: LogoEnj,
  [ECrypto.ens]: LogoEns,
  [ECrypto.eos]: LogoEos,
  [ECrypto.ern]: LogoErn,
  [ECrypto.etc]: LogoEtc,
  [ECrypto.eth]: LogoEth,
  [ECrypto.eurc]: LogoEurc,
  [ECrypto.farm]: LogoFarm,
  [ECrypto.fet]: LogoFet,
  [ECrypto.fida]: LogoFida,
  [ECrypto.fil]: LogoFil,
  [ECrypto.fis]: LogoFis,
  [ECrypto.flow]: LogoFlow,
  [ECrypto.flr]: LogoFlr,
  [ECrypto.fort]: LogoFort,
  [ECrypto.forth]: LogoForth,
  [ECrypto.fox]: LogoFox,
  [ECrypto.fx]: LogoFx,
  [ECrypto.gal]: LogoGal,
  [ECrypto.gala]: LogoGala,
  [ECrypto.gfi]: LogoGfi,
  [ECrypto.ghst]: LogoGhst,
  [ECrypto.glm]: LogoGlm,
  [ECrypto.gmt]: LogoGmt,
  [ECrypto.gno]: LogoGno,
  [ECrypto.gnt]: LogoGnt,
  [ECrypto.gods]: LogoGods,
  [ECrypto.grt]: LogoGrt,
  [ECrypto.gst]: LogoGst,
  [ECrypto.gtc]: LogoGtc,
  [ECrypto.gusd]: LogoGusd,
  [ECrypto.gyen]: LogoGyen,
  [ECrypto.hbar]: LogoHbar,
  [ECrypto.hft]: LogoHft,
  [ECrypto.high]: LogoHigh,
  [ECrypto.hnt]: LogoHnt,
  [ECrypto.honey]: LogoHoney,
  [ECrypto.hopr]: LogoHopr,
  [ECrypto.icp]: LogoIcp,
  [ECrypto.idex]: LogoIdex,
  [ECrypto.ilv]: LogoIlv,
  [ECrypto.imx]: LogoImx,
  [ECrypto.index]: LogoIndex,
  [ECrypto.inj]: LogoInj,
  [ECrypto.inv]: LogoInv,
  [ECrypto.iotx]: LogoIotx,
  [ECrypto.jasmy]: LogoJasmy,
  [ECrypto.jto]: LogoJto,
  [ECrypto.jup]: LogoJup,
  [ECrypto.karrat]: LogoKarrat,
  [ECrypto.kava]: LogoKava,
  [ECrypto.keep]: LogoKeep,
  [ECrypto.knc]: LogoKnc,
  [ECrypto.krl]: LogoKrl,
  [ECrypto.ksm]: LogoKsm,
  [ECrypto.lcx]: LogoLcx,
  [ECrypto.ldo]: LogoLdo,
  [ECrypto.link]: LogoLink,
  [ECrypto.lit]: LogoLit,
  [ECrypto.loka]: LogoLoka,
  [ECrypto.loom]: LogoLoom,
  [ECrypto.lpt]: LogoLpt,
  [ECrypto.lrc]: LogoLrc,
  [ECrypto.lqty]: LogoLqty,
  [ECrypto.lseth]: LogoLseth,
  [ECrypto.ltc]: LogoLtc,
  [ECrypto.magic]: LogoMagic,
  [ECrypto.mana]: LogoMana,
  [ECrypto.mask]: LogoMask,
  [ECrypto.math]: LogoMath,
  [ECrypto.matic]: LogoMatic,
  [ECrypto.mco2]: LogoMco2,
  [ECrypto.mdt]: LogoMdt,
  [ECrypto.media]: LogoMedia,
  [ECrypto.metis]: LogoMetis,
  [ECrypto.mina]: LogoMina,
  [ECrypto.mir]: LogoMir,
  [ECrypto.mkr]: LogoMkr,
  [ECrypto.mln]: LogoMln,
  [ECrypto.mnde]: LogoMnde,
  [ECrypto.mobile]: LogoMobile,
  [ECrypto.mona]: LogoMona,
  [ECrypto.mpl]: LogoMpl,
  [ECrypto.msol]: LogoMsol,
  [ECrypto.mtl]: LogoMtl,
  [ECrypto.multi]: LogoMulti,
  [ECrypto.musd]: LogoMusd,
  [ECrypto.muse]: LogoMuse,
  [ECrypto.mxc]: LogoMxc,
  [ECrypto.nct]: LogoNct,
  [ECrypto.near]: LogoNear,
  [ECrypto.neon]: LogoNeon,
  [ECrypto.nest]: LogoNest,
  [ECrypto.nkn]: LogoNkn,
  [ECrypto.nmr]: LogoNmr,
  [ECrypto.nu]: LogoNu,
  [ECrypto.ocean]: LogoOcean,
  [ECrypto.ogn]: LogoOgn,
  [ECrypto.omg]: LogoOmg,
  [ECrypto.ondo]: LogoOndo,
  [ECrypto.ooki]: LogoOoki,
  [ECrypto.op]: LogoOp,
  [ECrypto.orca]: LogoOrca,
  [ECrypto.orn]: LogoOrn,
  [ECrypto.osmo]: LogoOsmo,
  [ECrypto.oxt]: LogoOxt,
  [ECrypto.pax]: LogoPax,
  [ECrypto.perp]: LogoPerp,
  [ECrypto.pla]: LogoPla,
  [ECrypto.plu]: LogoPlu,
  [ECrypto.png]: LogoPng,
  [ECrypto.pols]: LogoPols,
  [ECrypto.poly]: LogoPoly,
  [ECrypto.pond]: LogoPond,
  [ECrypto.powr]: LogoPowr,
  [ECrypto.prime]: LogoPrime,
  [ECrypto.pro]: LogoPro,
  [ECrypto.prq]: LogoPrq,
  [ECrypto.pundix]: LogoPundix,
  [ECrypto.pyr]: LogoPyr,
  [ECrypto.pyusd]: LogoPyusd,
  [ECrypto.qi]: LogoQi,
  [ECrypto.qnt]: LogoQnt,
  [ECrypto.quick]: LogoQuick,
  [ECrypto.rad]: LogoRad,
  [ECrypto.rai]: LogoRai,
  [ECrypto.rare]: LogoRare,
  [ECrypto.rari]: LogoRari,
  [ECrypto.rbn]: LogoRbn,
  [ECrypto.ren]: LogoRen,
  [ECrypto.render]: LogoRender,
  [ECrypto.rep]: LogoRep,
  [ECrypto.req]: LogoReq,
  [ECrypto.rgt]: LogoRgt,
  [ECrypto.rlc]: LogoRlc,
  [ECrypto.rly]: LogoRly,
  [ECrypto.rndr]: LogoRndr,
  [ECrypto.ronin]: LogoRonin,
  [ECrypto.rose]: LogoRose,
  [ECrypto.rpl]: LogoRpl,
  [ECrypto.safe]: LogoSafe,
  [ECrypto.sand]: LogoSand,
  [ECrypto.seam]: LogoSeam,
  [ECrypto.sei]: LogoSei,
  [ECrypto.shdw]: LogoShdw,
  [ECrypto.shib]: LogoShib,
  [ECrypto.shping]: LogoShping,
  [ECrypto.skl]: LogoSkl,
  [ECrypto.snt]: LogoSnt,
  [ECrypto.snx]: LogoSnx,
  [ECrypto.sol]: LogoSol,
  [ECrypto.spa]: LogoSpa,
  [ECrypto.spell]: LogoSpell,
  [ECrypto.stg]: LogoStg,
  [ECrypto.storj]: LogoStorj,
  [ECrypto.strk]: LogoStrk,
  [ECrypto.stx]: LogoStx,
  [ECrypto.sui]: LogoSui,
  [ECrypto.suku]: LogoSuku,
  [ECrypto.super]: LogoSuper,
  [ECrypto.sushi]: LogoSushi,
  [ECrypto.swftc]: LogoSwftc,
  [ECrypto.sylo]: LogoSylo,
  [ECrypto.syn]: LogoSyn,
  [ECrypto.t]: LogoT,
  [ECrypto.tbtc]: LogoTbtc,
  [ECrypto.tia]: LogoTia,
  [ECrypto.time]: LogoTime,
  [ECrypto.tnsr]: LogoTnsr,
  [ECrypto.tone]: LogoTone,
  [ECrypto.trac]: LogoTrac,
  [ECrypto.trb]: LogoTrb,
  [ECrypto.tribe]: LogoTribe,
  [ECrypto.tru]: LogoTru,
  [ECrypto.tvk]: LogoTvk,
  [ECrypto.uma]: LogoUma,
  [ECrypto.unfi]: LogoUnfi,
  [ECrypto.uni]: LogoUni,
  [ECrypto.upi]: LogoUpi,
  [ECrypto.usdc]: LogoUsdc,
  [ECrypto.usdt]: LogoUsdt,
  [ECrypto.ust]: LogoUst,
  [ECrypto.vara]: LogoVara,
  [ECrypto.velo]: LogoVelo,
  [ECrypto.vet]: LogoVet,
  [ECrypto.voxel]: LogoVoxel,
  [ECrypto.vgx]: LogoVgx,
  [ECrypto.vtho]: LogoVtho,
  [ECrypto.waxl]: LogoWaxl,
  [ECrypto.wampl]: LogoWampl,
  [ECrypto.wbtc]: LogoWbtc,
  [ECrypto.wcfg]: LogoWcfg,
  [ECrypto.wluna]: LogoWluna,
  [ECrypto.xcn]: LogoXcn,
  [ECrypto.xlm]: LogoXlm,
  [ECrypto.xmon]: LogoXmon,
  [ECrypto.xrp]: LogoXrp,
  [ECrypto.xtz]: LogoXtz,
  [ECrypto.xyo]: LogoXyo,
  [ECrypto.yfi]: LogoYfi,
  [ECrypto.yfii]: LogoYfii,
  [ECrypto.zec]: LogoZec,
  [ECrypto.zen]: LogoZen,
  [ECrypto.zeta]: LogoZeta,
  [ECrypto.zrx]: LogoZrx,
};

export default CryptoIcon;
