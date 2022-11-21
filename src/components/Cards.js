import uniqid from "uniqid";
import '../Styles/Cards.css'

import albedo from '../images/albedo.webp';
import aloy from '../images/aloy.webp';
import amber from '../images/amber.png';
import itto from '../images/arataki_itto.webp';
import barbara from '../images/barbara.png';
import beidou from '../images/beidou.png';
import bennett from '../images/bennett.png';
import candace from '../images/candace.webp';
import chongyun from '../images/chongyun.webp';
import collei from '../images/collei.webp';
import cyno from '../images/cyno.webp';
import diluc from '../images/diluc.png';
import diona from '../images/diona.webp';
import dori from '../images/dori.webp';
import eula from '../images/eula.webp';
import fischl from '../images/fischl.png';
import ganyu from '../images/ganyu.webp';
import gorou from '../images/gorou.webp';
import hutao from '../images/hu_tao.webp';
import jean from '../images/jean.webp';
import kazuha from '../images/kaedehara_kazuha.webp';
import kaeya from '../images/kaeya.webp';
import ayaka from '../images/kamisato_ayaka.webp';
import ayato from '../images/kamisato_ayato.webp';
import keqing from '../images/keqing.png';
import klee from '../images/klee.webp';
import sara from '../images/kujou_sara.webp';
import shinobu from '../images/kuki_shinobu.webp';
import layla from '../images/layla.webp';
import lisa from '../images/lisa.png';
import mona from '../images/mona.webp';
import nahida from '../images/nahida.webp';
import nilou from '../images/nilou.webp';
import ningguang from '../images/ningguang.webp';
import noelle from '../images/noelle.png';
import qiqi from '../images/qiqi.webp';
import raiden from '../images/raiden_shogun.webp';
import razor from '../images/razor.png';
import rosaria from '../images/rosaria.webp';
import kokomi from '../images/sangonomiya_kokomi.webp';
import sayu from '../images/sayu.webp';
import shenhe from '../images/shenhe.webp';
import heizou from '../images/shikanoin_heizou.webp';
import sucrose from '../images/sucrose.webp';
import tartaglia from '../images/tartaglia.webp';
import thoma from '../images/thoma.webp';
import tighnari from '../images/tighnari.png';
import venti from '../images/venti.png';
import xiangling from '../images/xiangling.webp';
import xiao from '../images/xiao.webp';
import xingqiu from '../images/xingqiu.png';
import xinyan from '../images/xinyan.png';
import yaemiko from '../images/yae_miko.webp';
import yanfei from '../images/yanfei.webp';
import yelan from '../images/yelan.webp';
import yoimiya from '../images/yoimiya.webp';
import yunjin from '../images/yun_jin.webp';
import zhongli from '../images/zhongli.png';

const charecters = [
    {name: "Albedo", image: albedo},
    {name: "Aloy", image: aloy},
    {name: "Amber", image: amber},
    {name: "Arataki Itto", image: itto},
    {name: "Barbara", image: barbara},
    {name: "Beidou", image: beidou},
    {name: "Bennett", image: bennett},
    {name: "Candace", image: candace},
    {name: "Chongyun", image: chongyun},
    {name: "Collei", image: collei},
    {name: "Cyno", image: cyno},
    {name: "Diluc", image: diluc},
    {name: "Diona", image: diona},
    {name: "Dori", image: dori},
    {name: "Eula", image: eula},
    {name: "Fischl", image: fischl},
    {name: "Ganyu", image: ganyu},
    {name: "Gorou", image: gorou},
    {name: "Hu Tao", image: hutao},
    {name: "Jean", image: jean},
    {name: "Kazuha", image: kazuha},
    {name: "Kaeya", image: kaeya},
    {name: "Kamisato Ayaka", image: ayaka},
    {name: "Kamisato Ayato", image: ayato},
    {name: "Kujou Sara", image: sara},
    {name: "Kuki Shinobu", image: shinobu},
    {name: "Klee", image: klee},
    {name: "Keqing", image: keqing},
    {name: "Lisa", image: lisa},
    {name: "Mona", image: mona},
    {name: "Nahida", image: nahida},
    {name: "Nilou", image: nilou},
    {name: "Ningguang", image: ningguang},
    {name: "Noelle", image: noelle},
    {name: "Qiqi", image: qiqi},
    {name: "Raiden Shogun", image: raiden},
    {name: "Razor", image: razor},
    {name: "Rosaria", image: rosaria},
    {name: "Kokomi", image: kokomi},
    {name: "Sayu", image: sayu},
    {name: "Shenhe", image: shenhe},
    {name: "Heizou", image: heizou},
    {name: "Sucrose", image: sucrose},
    {name: "Tartaglia", image: tartaglia},
    {name: "Thoma", image: thoma},
    {name: "Tighnari", image: tighnari},
    {name: "Venti", image: venti},
    {name: "Xiangling", image: xiangling},
    {name: "Xiao", image: xiao},
    {name: "Xingqiu", image: xingqiu},
    {name: "Xinyan", image: xinyan},
    {name: "Yae Miko", image: yaemiko},
    {name: "Yanfei", image: yanfei},
    {name: "Yelan", image: yelan},
    {name: "Yoimiya", image: yoimiya},
    {name: "Yun Jin", image: yunjin},
    {name: "Zhongli", image: zhongli},
    {name: "Layla", image: layla},
];

export default function Cards (props) {
    
    const chars = []

    props.randNums.forEach(num => chars.push(charecters[num]))

    return(
        <div id='display-cards'>
            {
                chars.map(item => {
                    return(
                        <div key={uniqid()} className="card" data-name={item.name} onClick={props.handleCardClick}>
                            <img src={item.image} alt={item.name}/>
                            <span>{item.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}