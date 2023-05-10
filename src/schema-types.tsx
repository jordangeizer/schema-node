type schemaTypes = {
	title: string;
	label: string;
	icon: string;
}

const schemaTypes =
	[
		{
			value: 'STRING',
			label: 'String',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m14.6667 7.85714h-3.3334v1.42857h3.3334v1.42859h-2.6667c-.3536 0-.6928.1505-.9428.4184-.2501.2679-.3905.6313-.3905 1.0102v1.4285c0 .3789.1404.7423.3905 1.0102.25.2679.5892.4184.9428.4184h4v-5.71429c0-.37888-.1405-.74224-.3905-1.01015-.2501-.26791-.5892-.41842-.9428-.41842zm0 5.71426h-2.6667v-1.4285h2.6667zm-6.6667-8.5714h-2.66667c-.35362 0-.69276.15051-.94281.41842-.25004.26791-.39052.63127-.39052 1.01015v8.57143h1.33333v-3.5714h2.66667v3.5714h1.33333v-8.57143c0-.37888-.14047-.74224-.39052-1.01015s-.58919-.41842-.94281-.41842zm-2.66667 5v-3.57143h2.66667v3.57143z"/></svg>`
		},
		{
			value: 'INT',
			label: 'Integer',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m0 5h3.57143v8.5714h2.14286v1.4286h-5.71429v-1.4286h2.14286v-7.14283h-2.14286z"/><path d="m14.2857 5h4.2857c.3788.00038.7419.15101 1.0098.41884.2678.26782.4184.63097.4188 1.00973v7.14283c-.0006.3787-.1513.7418-.419 1.0096-.2678.2677-.6309.4184-1.0096.419h-4.2857v-1.4286h4.2857v-2.8571h-2.8571v-1.42859h2.8571v-2.85714h-4.2857z"/><path d="m7.14286 15h5.71424v-1.4286h-4.28567v-2.8571h2.85717c.3787-.0004.7419-.151 1.0097-.4189.2678-.2678.4185-.63092.4188-1.00969v-2.85714c-.0003-.37876-.151-.74191-.4188-1.00973-.2678-.26783-.631-.41846-1.0097-.41884h-4.28574v1.42857h4.28574v2.85714h-2.85717c-.37877.00038-.74191.15101-1.00974.41884-.26782.26783-.41845.63095-.41883 1.00975z"/></g></svg>`
		},
		{
			value: 'FLOAT',
			label: 'Float',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m6.77273 9.28571h1.36363v1.42859h-1.36363z"/><path clip-rule="evenodd" d="m6.09091 15h2.72727c.36149-.0006.70803-.1513.96364-.419.25558-.2678.39948-.6309.39998-1.0096v-7.14283c-.0003-.37876-.1441-.74191-.39978-1.00973-.25565-.26783-.60229-.41846-.96384-.41884h-2.72727c-.36155.00038-.70819.15101-.96384.41884-.25565.26782-.39944.63097-.3998 1.00973v7.14283c.00036.3788.14415.7419.3998 1.0098.25565.2678.60229.4184.96384.4188zm0-1.4286v-7.14283h2.72727v7.14283z" fill-rule="evenodd"/><path d="m3.36364 13.5714h-1.36364v1.4286h1.36364z"/><path d="m13.5909 9.28571h1.3636v1.42859h-1.3636z"/><path clip-rule="evenodd" d="m15.6364 15h-2.7273c-.3616-.0004-.7082-.151-.9638-.4188-.2557-.2679-.3995-.631-.3998-1.0098v-7.14283c.0003-.37876.1441-.74191.3998-1.00973.2556-.26783.6022-.41846.9638-.41884h2.7273c.3615.00038.7081.15101.9638.41884.2557.26782.3994.63097.3998 1.00973v7.14283c-.0005.3787-.1444.7418-.4 1.0096-.2556.2677-.6021.4184-.9636.419zm-2.7273-8.57143v7.14283h2.7273v-7.14283z" fill-rule="evenodd"/></g></svg>`
		},
		{
			value: 'BOOLEAN',
			label: 'Boolean',
			icon: `<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><g><path d="m14.375 14.375c-.8653 0-1.7112-.2566-2.4306-.7373-.7195-.4807-1.2802-1.164-1.6114-1.9635-.3311-.7994-.41774-1.67905-.2489-2.52772.1688-.84867.5855-1.62822 1.1973-2.24007.6119-.61185 1.3914-1.02853 2.2401-1.19734.8486-.16881 1.7283-.08217 2.5277.24896.7995.33113 1.4828.89189 1.9635 1.61135.4807.71947.7373 1.56533.7373 2.43062-.0013 1.1599-.4627 2.2719-1.2829 3.0921s-1.9322 1.2816-3.0921 1.2829zm0-7.5c-.6181 0-1.2223.18328-1.7362.52666s-.9144.83144-1.1509 1.40246-.2984 1.19938-.1779 1.80558c.1206.6062.4183 1.163.8553 1.6s.9939.7347 1.6.8553c.6062.1205 1.2346.0586 1.8056-.1779s1.0591-.637 1.4024-1.1509c.3434-.5139.5267-1.1181.5267-1.7362-.0008-.82855-.3303-1.62292-.9162-2.20879-.5859-.58588-1.3803-.91538-2.2088-.91621z"/><path d="m5.625 14.375c2.41625 0 4.375-1.9588 4.375-4.375 0-2.41625-1.95875-4.375-4.375-4.375s-4.375 1.95875-4.375 4.375c0 2.4162 1.95875 4.375 4.375 4.375z"/></g></svg>`
		},
		{
			value: 'ID',
			label: 'ID',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6.71701 3.94999c1.537-.741 4.81699-1.437 8.50999.969.055.03585.1166.06051.1811.07258.0646.01206.1309.01129.1952-.00226.0642-.01356.1252-.03964.1793-.07676.0542-.03711.1006-.08454.1364-.13956.0359-.05503.0605-.11657.0726-.18113.0121-.06455.0113-.13085-.0023-.19511-.0135-.06426-.0396-.12522-.0767-.17939-.0371-.05418-.0846-.10052-.1396-.13637-4.037-2.63-7.69699-1.897-9.48999-1.031-.06181.02678-.11758.06577-.16395.11464-.04638.04887-.08239.1066-.10589.16974-.02351.06313-.03401.13036-.03088.19766.00313.06729.01983.13326.04909.19394s.07049.11483.12119.15918c.05071.04435.10986.078.1739.09892.06403.02092.13164.02869.19875.02283.06711-.00585.13235-.02521.19179-.05691zm-1.808.641c.03616.05488.06115.11635.07353.18089s.01192.13089-.00136.19525c-.01328.06437-.03912.12548-.07604.17985s-.0842.10093-.13913.13701c-.523.344-1.11 1.085-1.335 1.469-.06917.11005-.17847.18883-.30475.21966-.12627.03082-.25959.01126-.37169-.05454-.11209-.0658-.19416-.17267-.2288-.29795s-.01913-.25913.04324-.37317c.27-.46.95-1.34 1.648-1.799.11076-.07271.24584-.09849.37559-.07168s.24355.10402.31641.21468zm5.59099-.05c-.1326 0-.2598.05268-.3535.14645-.0938.09376-.1465.22094-.1465.35355s.0527.25978.1465.35355c.0937.09377.2209.14645.3535.14645 1.656 0 5.514 1.376 6.51 6.55301.0302.1249.1073.2333.2153.3028.108.0696.2386.0949.3648.0707s.2382-.096.3128-.2005c.0747-.1046.1062-.2338.0881-.361-1.098-5.71201-5.423-7.36501-7.49-7.36501zm-1.15499 6.26101c-.87.706-1.527 2.685.558 6.456.06419.1162.07959.2531.04284.3806-.03676.1275-.12267.2352-.23884.2994-.11616.0642-.25306.0796-.38059.0428-.12752-.0367-.23522-.1226-.29941-.2388-2.148-3.886-1.778-6.526-.313-7.716 1.42399-1.15701 3.66999-.65501 4.28299 1.324.081.263.146.578.21.893l.033.157c.08.38.168.776.298 1.175.259.793.676 1.572 1.481 2.166.1068.0788.1779.1967.1976.3279.0198.1312-.0133.2648-.0921.3716-.0788.1067-.1967.1778-.3279.1976s-.2648-.0133-.3716-.0921c-1.027-.758-1.539-1.746-1.838-2.66-.1324-.421-.2412-.849-.326-1.282l-.034-.167c-.05-.2667-.1121-.531-.186-.792-.389-1.257-1.786-1.583-2.69599-.843zm6.15399 1.17c-.0016-.067-.0166-.1329-.0442-.1939-.0276-.0611-.0671-.1159-.1163-.1614-.0492-.0454-.107-.0806-.17-.1032-.0631-.0227-.13-.0325-.1969-.0288-.0668.0037-.1323.0208-.1924.0502-.0602.0295-.1138.0707-.1577.1213s-.0772.1095-.0979.1732-.0284.1309-.0226.1976c.098 1.808 1.216 2.746 1.846 2.949.1259.0394.2623.0274.3795-.0333.1171-.0607.2055-.1653.2458-.2909.0404-.1256.0295-.2621-.0303-.3797s-.1637-.2068-.289-.2481c-.227-.073-1.077-.649-1.154-2.052zm-4.499.528c0-.1326-.0527-.2598-.1464-.3536-.0938-.0937-.221-.1464-.3536-.1464s-.2598.0527-.3535.1464c-.0938.0938-.1465.221-.1465.3536 0 1.045.129 1.851.437 2.638.304.774.772 1.504 1.405 2.4.037.0556.0848.1033.1405.1401.0557.0369.1183.0622.1839.0744.0657.0123.1331.0113.1984-.0029s.127-.0414.1816-.0799.101-.0875.1363-.1442.0589-.1199.0694-.1859.0077-.1334-.0083-.1982c-.016-.0649-.0448-.1259-.0848-.1794-.628-.89-1.035-1.535-1.291-2.19-.252-.641-.368-1.317-.368-2.272zm-3.02999-3.71001c-1.716 1.32801-2.702 4.14201-1.022 7.48501.05968.1185.06981.2559.02818.382-.04163.126-.13162.2303-.25018.29-.11855.0597-.25595.0698-.38197.0282-.12603-.0417-.23035-.1317-.29003-.2502-1.87-3.722-.832-7.07201 1.303-8.72601 1.061-.821 2.39-1.216 3.72699-1 1.342.218 2.637 1.044 3.643 2.557.0364.05469.0616.11602.0743.18047s.0125.13077-.0004.19517c-.013.0644-.0385.12557-.0751.18017-.0366.0545-.0836.1013-.1383.1377s-.116.0616-.1805.0743c-.0644.0127-.1307.0125-.1951-.0004-.0644-.013-.1256-.0385-.1802-.0751-.0545-.0366-.1013-.0836-.1377-.1383-.875-1.31701-1.941-1.95601-2.97-2.12301-1.03499-.168-2.08999.133-2.95399.803zm.487-2.996c.06172-.02246.11842-.05685.16685-.10122.04843-.04436.08765-.09783.11541-.15736.02776-.05952.04353-.12393.04641-.18954.00287-.06562-.00721-.13116-.02967-.19288-.02245-.06172-.05685-.11842-.10121-.16685-.04437-.04842-.09784-.08764-.15736-.11541-.05952-.02776-.12393-.04353-.18955-.0464-.06562-.00288-.13116.0072-.19288.02966-4.68 1.7-5.79 6.18601-5.358 9.21701.01883.1313.08905.2497.19519.3292.10615.0795.23953.1136.37081.0948.13129-.0188.24971-.0891.32923-.1952.07951-.1061.1136-.2395.09477-.3708-.391-2.739.622-6.65001 4.71-8.13501z"/></svg>`
		},
		{
			value: 'UNION',
			label: 'Union',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16.8571 5.42857h-2.2857v-2.28571c-.0003-.30301-.1208-.59353-.335-.80779-.2143-.21426-.5048-.33477-.8078-.33507h-10.28574c-.30301.0003-.59353.12081-.80779.33507s-.33477.50478-.33507.80779v10.28574c.0003.303.12081.5935.33507.8078.21426.2142.50478.3347.80779.335h2.28571v2.2857c.0003.3031.12081.5936.33507.8078.21426.2143.50478.3348.80779.3351h10.28567c.3031-.0003.5936-.1208.8078-.3351.2143-.2142.3348-.5047.3351-.8078v-10.28567c-.0003-.30301-.1208-.59353-.3351-.80779-.2142-.21426-.5047-.33477-.8078-.33507zm-13.71424 8.00003v-10.28574h10.28574v2.28571h-6.85717c-.30301.0003-.59353.12081-.80779.33507s-.33477.50478-.33507.80779v6.85717zm10.28574 0h-1.4777l-5.37947-5.37946v-1.47771h1.47771l5.37946 5.38057zm-6.85717-3.76346 3.76347 3.76346h-3.76347zm6.85767.67026-3.76396-3.76397h3.76346zm-6.85767 6.5217v-2.2857h6.85717c.303-.0003.5935-.1208.8078-.335.2142-.2143.3347-.5048.335-.8078v-6.85717h2.2857v10.28567z"/></svg>`
		},
		{
			value: 'ENUM',
			label: 'Enum',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m13.0604 3.65714-2.5788-1.54285c-.172-.05715-.2866-.11429-.4585-.11429-.17192 0-.28654.05714-.40115.11429l-2.57886 1.54285c-.28654.17143-.45846.45715-.45846.74286v3.2c0 .28571.17192.57143.40115.74286l2.57886 1.54285c.11461.05715.28654.11429.40115.11429s.28651-.05714.40111-.11429l2.5789-1.54285c.2292-.17143.4012-.4.4012-.74286v-3.2c.1146-.28571-.0574-.57143-.2866-.74286zm-.745 3.77143-2.2923 1.37143-2.29231-1.37143v-2.85714l2.29231-1.37143 2.2923 1.37143zm5.3296 4.22853-2.5788-1.5428c-.1719-.0572-.2865-.1143-.4585-.1143-.1719 0-.2865.0571-.4011.1143l-2.5789 1.5428c-.2292.1715-.4011.4-.4011.7429v3.2c0 .2857.1719.5714.4011.7429l2.5789 1.5428c.1146.0572.2865.1143.4011.1143s.2866-.0571.4012-.1143l2.5788-1.5428c.2293-.1715.4012-.4.4012-.7429v-3.2c.0573-.2857-.1146-.5714-.3439-.7429zm-.745 3.7715-2.2923 1.3714-2.2923-1.3714v-2.8572l2.2923-1.3714 2.2923 1.3714zm-8.42421-3.7715-2.57886-1.5428c-.17192-.0572-.28653-.1143-.45846-.1143-.17192 0-.28654.0571-.40115.1143l-2.57886 1.5428c-.28654.1715-.45846.4572-.45846.7429v3.2c0 .2857.17192.5714.40116.7429l2.57885 1.5428c.17192.0572.28654.1143.45846.1143.17193 0 .28654-.0571.40116-.1143l2.57885-1.5428c.22923-.1715.40116-.4.40116-.7429v-3.2c.0573-.2857-.11462-.5714-.34385-.7429zm-.745 3.7715-2.29232 1.3714-2.29231-1.3714v-2.8572l2.29231-1.3714 2.29232 1.3714z"/></svg>`
		},
		{
			value: 'SCALAR',
			label: 'Scalar',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m5.33333 12.6857 4.66667 2.6857 4.6667-2.6857v-5.37141l-4.6667-2.68572-4.66667 2.68572zm4.66667 1.3714-3.5-2v-4.0571l3.5-2 3.5 2v4.0571z"/><path d="m10.5833 2.17143 5.8334 3.37143c.35.17143.5833.57143.5833.97143v6.97141c0 .4-.2333.7429-.5833.9714l-5.8334 3.3715c-.175.1143-.4083.1714-.5833.1714s-.40833-.0571-.58333-.1714l-5.83334-3.3715c-.35-.1714-.58333-.5714-.58333-.9714v-6.97141c0-.4.23333-.74286.58333-.97143l5.83334-3.37143c.175-.11429.35-.17143.58333-.17143.2333 0 .4083.05714.5833.17143zm-.5833 14.68567 5.8333-3.3714v-6.97141l-5.8333-3.37143-5.83333 3.37143v6.97141z"/></g></svg>`
		},
		{
			value: 'INTERFACE',
			label: 'Interface',
			icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m5.58883 4.36857 1.75759-1.01714.59383.98343-1.75758 1.01714zm-1.42216 3.34572h-1.16667v-1.2c0-.4.23333-.8.58333-.97143l.875-.51429.58334.97143-.875.51429zm-1.16667 1.14285h1.16667v2.28576h-1.16667zm1.45833 6.11426-.875-.5143c-.35-.2285-.58333-.5714-.58333-.9714v-1.2h1.16667v1.2l.875.5143zm1.127.6446.59325-.984 1.75759 1.0171-.59325.9846zm5.28967.7269-.875.5142-.875-.5142-.58333.9714.875.5143c.175.1143.40833.1714.58333.1714.2333 0 .4083-.0571.5833-.1714l.875-.5143zm1.1795-.6818 1.7576-1.0177.5938.984-1.7582 1.0172zm3.3122-.5754-.5834-.9714 1.05-.5714v-1.2572h1.1667v1.2c0 .4-.2333.8-.5833.9714zm.4666-6.22856h1.1667v2.28576h-1.1667zm1.1667-1.14285h-1.1667v-1.2l-1.05-.57143.5834-.97143 1.05.57143c.35.22857.5833.57143.5833.97143zm-4.9863-3.40572.5932-.98343 1.7576 1.01715-.5933.984zm-1.1387-.65143-.875-.51428-.875.51428-.58333-.97143.875-.51428c.175-.11429.35-.17143.58333-.17143.2333 0 .4083.05714.5833.17143l.875.51428z"/></svg>`
		}
	]

export default schemaTypes