const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

app.post('/ifxquerytrn',(req, res) => {
    var usersList = req.body;
    console.log(usersList);
    res.send({
            "MWHEADER": {
              "MSGID": "IFX-B-IFXRTDCRAMT",
              "SOURCECHANNEL": "EXT-CE-IFX-91",
              "CHANNEL": "GMB_API_Group",
              "CODEKIND": "B1",
              "TXNKEY": "EXT-CE-IFX-91_20241121_100",
              "TIMESTAMP": "20241114180001000",
              "RETURNCODE": "0000",
              "RETURNDESC": "交易成功",
              "O360SEQ": "32004082851161930776"
            },
            "TRANRS": "66696c4d4376772f377261626f72645775722b512b53572f62785a47317665443836346a7763736a5a314c47337a544b4a67377032552f336a6d626f774662655730456c7170766431484755447965626573492b79507968315a686e7a33376d6e302b7a766e6874322f334d633470584648784f69363452642b43584738524535503630644f66594e6a57656c746b5674713476394b30684755366e6a384f643445544e436c2b3754716e4369307672717a43425070764a5369542b354d3654326b705a5a5254415547324f615368776a577331666c523841434d78485976716a7569327a6c65306f613967456e456b5353432b762b617637515649446648795a524557585861516577437441504f7a2f305438504939546a756a4f586b5a634c433469386b446d484c384f6966734e4f43335a4a537a644349644e3453763067454c7758623454476c41764643704a434138434263556977564e475a455175624145336838513151694f72464d306c3838367a367a4c7636396642444b313062535362372b4c336f512f4462444d7147737868374a492f4137566e434c786252644e63673434306c2b72373177635939535159637677784936755a4d6f2b634634666a3436335239796b794b5a4e666750434a6b7663426d6c4352515441737a69507341723775534f76636e37684e4f5a4752336d4a30684e4577796143695371724f6359557a465969594f4e314f6969536972416e30304b306d37334b505a31766d645733686a7174477779486332414e6e426c7567305043313872484562672b61472b2b2f4230637355383867337166392f6865326943753872532b742b487937536b674a6f45717544673150473238346e6e56784d642b4633485a4d662f31624f434d477875466b5765695958666941546776685054586c595575694f4d476e4553666d764a64727a472b6c395455636a7568443771484a476b64763952735a48444e743069664472673574774b695448336a68784d37786b6f456861364352464f636f67486d493430507241396d4e70776244486f6578397065714662422b4b6566476856565a6372584b39566f38684d756634304c39487a6e396841587143496e52494148554b4178386a736e7465696e6f30743470573539686e677379575171473464526b4c7a6454504a634a562b4f6b6550366c4a79535074514c4757534d36796d5677652f766337367a3953457467427a37676a6d3341474d486e626b336462734e6a4c55544a646d543053796543382b4b4336786562416657785964447a557a3767724d493542684a4569613547656f333744476f386a3674764865676d5a476e735a4356566f4d4258384b682b75305748553342457445733752487157737974335a46427447596c6b4a5573764c7333773543637a44382f4d675a653456695a625538584579734e6b7279773449527474735a6c496a564c38562f6564426b73676b3563784f412f575661782f6b7665383947536d457444376c51506c4f6a3872664a714b742f3751722f4c7442513046726167767841476d774d51313966786441666b444571716f7276465456717a6a4c2b724f6d66704e383031497a4f6263436d4b6c6473444246652b52687961615338424b437735416c766739332f4a423678747738576a3265664c4a63435470684f2b4950546a7748377849554d6e52476d725075326b6d632b58543468347333754f77434334565547595035766d42324639355170707252386749436b42475739556b67376d364b44763456714e384d4533745836715652343045676a704a43356f472b5677555778793739372f576e4f687551725344476437326a74634b75684368346c417a304d4b77594635346b4c4a3642752f546d78676d556336466b2b5659765062522b617a566d374e335a46427447596c6b4a5573764c7333773543637a4c556f7a6c636446456f4164326f30356941727178477141496d46696b69736237397851487779784931344479762f586e6b5377754e6b69583664364a673348586353752f696a32454341705732734e6b4c365649686e5454487431557a2f674f572b4b44687967537650573273577137596e364671364a3369532b6967484f426f5a6d78524339577634544c7658306c633369356b564e504c47395a387844494a676f584d43475674766e78695237746e6d632b6d7469634932426657726f5857316c333955324e79507577466d4254536c70475757586842706f4c31467a726f6a6c2f686b42676931335a46427447596c6b4a5573764c7333773543637a3661324857707174646d4f3743494c444772526e534e6b7536322b2b4c6766584548336f4b2b7553432f32775456396d557942594348675968667866646264712f495a7964365442387238734a39367473526d7037513d3d"
          }
    );
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });