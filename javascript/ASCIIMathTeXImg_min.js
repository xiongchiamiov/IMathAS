var mathcolor="";var displaystyle=true;var showasciiformulaonhover=true;var decimalsign=".";var AMdelimiter1="`",AMescape1="\\\\`";var AMusedelimiter2=false;var AMdelimiter2="$",AMescape2="\\\\\\$",AMdelimiter2regexp="\\$";var doubleblankmathdelimiter=false;var noMathRender=false;var AMcal=[61237,8492,61238,61239,8496,8497,61240,8459,8464,61241,61242,8466,8499,61243,61244,61245,61246,8475,61247,61248,61249,61250,61251,61252,61253,61254];var AMfrk=[61277,61278,8493,61279,61280,61281,61282,8460,8465,61283,61284,61285,61286,61287,61288,61289,61290,8476,61291,61292,61293,61294,61295,61296,61297,8488];var AMbbb=[61324,61325,8450,61326,61327,61328,61329,8461,61330,61331,61332,61333,61334,8469,61335,8473,8474,8477,61336,61337,61338,61339,61340,61341,61342,8484];var CONST=0,UNARY=1,BINARY=2,INFIX=3,LEFTBRACKET=4,RIGHTBRACKET=5,SPACE=6,UNDEROVER=7,DEFINITION=8,LEFTRIGHT=9,TEXT=10;var AMsqrt={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:UNARY},AMroot={input:"root",tag:"mroot",output:"root",tex:null,ttype:BINARY},AMfrac={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:BINARY},AMdiv={input:"/",tag:"mfrac",output:"/",tex:null,ttype:INFIX},AMover={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:BINARY},AMsub={input:"_",tag:"msub",output:"_",tex:null,ttype:INFIX},AMsup={input:"^",tag:"msup",output:"^",tex:null,ttype:INFIX},AMtext={input:"text",tag:"mtext",output:"text",tex:null,ttype:TEXT},AMmbox={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:TEXT},AMquote={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:TEXT};var AMsymbols=[{input:"alpha",tag:"mi",output:"\u03B1",tex:null,ttype:CONST},{input:"beta",tag:"mi",output:"\u03B2",tex:null,ttype:CONST},{input:"chi",tag:"mi",output:"\u03C7",tex:null,ttype:CONST},{input:"delta",tag:"mi",output:"\u03B4",tex:null,ttype:CONST},{input:"Delta",tag:"mo",output:"\u0394",tex:null,ttype:CONST},{input:"epsi",tag:"mi",output:"\u03B5",tex:"epsilon",ttype:CONST},{input:"varepsilon",tag:"mi",output:"\u025B",tex:null,ttype:CONST},{input:"eta",tag:"mi",output:"\u03B7",tex:null,ttype:CONST},{input:"gamma",tag:"mi",output:"\u03B3",tex:null,ttype:CONST},{input:"Gamma",tag:"mo",output:"\u0393",tex:null,ttype:CONST},{input:"iota",tag:"mi",output:"\u03B9",tex:null,ttype:CONST},{input:"kappa",tag:"mi",output:"\u03BA",tex:null,ttype:CONST},{input:"lambda",tag:"mi",output:"\u03BB",tex:null,ttype:CONST},{input:"Lambda",tag:"mo",output:"\u039B",tex:null,ttype:CONST},{input:"mu",tag:"mi",output:"\u03BC",tex:null,ttype:CONST},{input:"nu",tag:"mi",output:"\u03BD",tex:null,ttype:CONST},{input:"omega",tag:"mi",output:"\u03C9",tex:null,ttype:CONST},{input:"Omega",tag:"mo",output:"\u03A9",tex:null,ttype:CONST},{input:"phi",tag:"mi",output:"\u03C6",tex:null,ttype:CONST},{input:"varphi",tag:"mi",output:"\u03D5",tex:null,ttype:CONST},{input:"Phi",tag:"mo",output:"\u03A6",tex:null,ttype:CONST},{input:"pi",tag:"mi",output:"\u03C0",tex:null,ttype:CONST},{input:"Pi",tag:"mo",output:"\u03A0",tex:null,ttype:CONST},{input:"psi",tag:"mi",output:"\u03C8",tex:null,ttype:CONST},{input:"Psi",tag:"mi",output:"\u03A8",tex:null,ttype:CONST},{input:"rho",tag:"mi",output:"\u03C1",tex:null,ttype:CONST},{input:"sigma",tag:"mi",output:"\u03C3",tex:null,ttype:CONST},{input:"Sigma",tag:"mo",output:"\u03A3",tex:null,ttype:CONST},{input:"tau",tag:"mi",output:"\u03C4",tex:null,ttype:CONST},{input:"theta",tag:"mi",output:"\u03B8",tex:null,ttype:CONST},{input:"vartheta",tag:"mi",output:"\u03D1",tex:null,ttype:CONST},{input:"Theta",tag:"mo",output:"\u0398",tex:null,ttype:CONST},{input:"upsilon",tag:"mi",output:"\u03C5",tex:null,ttype:CONST},{input:"xi",tag:"mi",output:"\u03BE",tex:null,ttype:CONST},{input:"Xi",tag:"mo",output:"\u039E",tex:null,ttype:CONST},{input:"zeta",tag:"mi",output:"\u03B6",tex:null,ttype:CONST},{input:"*",tag:"mo",output:"\u22C5",tex:"cdot",ttype:CONST},{input:"**",tag:"mo",output:"\u22C6",tex:"star",ttype:CONST},{input:"//",tag:"mo",output:"/",tex:null,ttype:CONST},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:CONST},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:CONST},{input:"xx",tag:"mo",output:"\u00D7",tex:"times",ttype:CONST},{input:"-:",tag:"mo",output:"\u00F7",tex:"div",ttype:CONST},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:DEFINITION},{input:"@",tag:"mo",output:"\u2218",tex:"circ",ttype:CONST},{input:"o+",tag:"mo",output:"\u2295",tex:"oplus",ttype:CONST},{input:"ox",tag:"mo",output:"\u2297",tex:"otimes",ttype:CONST},{input:"o.",tag:"mo",output:"\u2299",tex:"odot",ttype:CONST},{input:"sum",tag:"mo",output:"\u2211",tex:null,ttype:UNDEROVER},{input:"prod",tag:"mo",output:"\u220F",tex:null,ttype:UNDEROVER},{input:"^^",tag:"mo",output:"\u2227",tex:"wedge",ttype:CONST},{input:"^^^",tag:"mo",output:"\u22C0",tex:"bigwedge",ttype:UNDEROVER},{input:"vv",tag:"mo",output:"\u2228",tex:"vee",ttype:CONST},{input:"vvv",tag:"mo",output:"\u22C1",tex:"bigvee",ttype:UNDEROVER},{input:"nn",tag:"mo",output:"\u2229",tex:"cap",ttype:CONST},{input:"nnn",tag:"mo",output:"\u22C2",tex:"bigcap",ttype:UNDEROVER},{input:"uu",tag:"mo",output:"\u222A",tex:"cup",ttype:CONST},{input:"uuu",tag:"mo",output:"\u22C3",tex:"bigcup",ttype:UNDEROVER},{input:"!=",tag:"mo",output:"\u2260",tex:"ne",ttype:CONST},{input:":=",tag:"mo",output:":=",tex:null,ttype:CONST},{input:"lt",tag:"mo",output:"<",tex:null,ttype:CONST},{input:"gt",tag:"mo",output:">",tex:null,ttype:CONST},{input:"<=",tag:"mo",output:"\u2264",tex:"le",ttype:CONST},{input:"lt=",tag:"mo",output:"\u2264",tex:"leq",ttype:CONST},{input:"gt=",tag:"mo",output:"\u2265",tex:"geq",ttype:CONST},{input:">=",tag:"mo",output:"\u2265",tex:"ge",ttype:CONST},{input:"geq",tag:"mo",output:"\u2265",tex:null,ttype:CONST},{input:"-<",tag:"mo",output:"\u227A",tex:"prec",ttype:CONST},{input:"-lt",tag:"mo",output:"\u227A",tex:null,ttype:CONST},{input:">-",tag:"mo",output:"\u227B",tex:"succ",ttype:CONST},{input:"-<=",tag:"mo",output:"\u2AAF",tex:"preceq",ttype:CONST},{input:">-=",tag:"mo",output:"\u2AB0",tex:"succeq",ttype:CONST},{input:"in",tag:"mo",output:"\u2208",tex:null,ttype:CONST},{input:"!in",tag:"mo",output:"\u2209",tex:"notin",ttype:CONST},{input:"sub",tag:"mo",output:"\u2282",tex:"subset",ttype:CONST},{input:"sup",tag:"mo",output:"\u2283",tex:"supset",ttype:CONST},{input:"sube",tag:"mo",output:"\u2286",tex:"subseteq",ttype:CONST},{input:"supe",tag:"mo",output:"\u2287",tex:"supseteq",ttype:CONST},{input:"-=",tag:"mo",output:"\u2261",tex:"equiv",ttype:CONST},{input:"~=",tag:"mo",output:"\u2245",tex:"stackrel{\\sim}{=}",ttype:CONST},{input:"cong",tag:"mo",output:"~=",tex:null,ttype:DEFINITION},{input:"~~",tag:"mo",output:"\u2248",tex:"approx",ttype:CONST},{input:"prop",tag:"mo",output:"\u221D",tex:"propto",ttype:CONST},{input:"and",tag:"mtext",output:"and",tex:null,ttype:SPACE},{input:"or",tag:"mtext",output:"or",tex:null,ttype:SPACE},{input:"not",tag:"mo",output:"\u00AC",tex:"neg",ttype:CONST},{input:"=>",tag:"mo",output:"\u21D2",tex:"Rightarrow",ttype:CONST},{input:"implies",tag:"mo",output:"=>",tex:null,ttype:DEFINITION},{input:"if",tag:"mo",output:"if",tex:null,ttype:SPACE},{input:"<=>",tag:"mo",output:"\u21D4",tex:"Leftrightarrow",ttype:CONST},{input:"iff",tag:"mo",output:"<=>",tex:null,ttype:DEFINITION},{input:"AA",tag:"mo",output:"\u2200",tex:"forall",ttype:CONST},{input:"EE",tag:"mo",output:"\u2203",tex:"exists",ttype:CONST},{input:"_|_",tag:"mo",output:"\u22A5",tex:"bot",ttype:CONST},{input:"TT",tag:"mo",output:"\u22A4",tex:"top",ttype:CONST},{input:"|--",tag:"mo",output:"\u22A2",tex:"vdash",ttype:CONST},{input:"|==",tag:"mo",output:"\u22A8",tex:"models",ttype:CONST},{input:"(",tag:"mo",output:"(",tex:null,ttype:LEFTBRACKET},{input:")",tag:"mo",output:")",tex:null,ttype:RIGHTBRACKET},{input:"[",tag:"mo",output:"[",tex:null,ttype:LEFTBRACKET},{input:"]",tag:"mo",output:"]",tex:null,ttype:RIGHTBRACKET},{input:"{",tag:"mo",output:"{",tex:"lbrace",ttype:LEFTBRACKET},{input:"}",tag:"mo",output:"}",tex:"rbrace",ttype:RIGHTBRACKET},{input:"|",tag:"mo",output:"|",tex:null,ttype:LEFTRIGHT},{input:"(:",tag:"mo",output:"\u2329",tex:"langle",ttype:LEFTBRACKET},{input:":)",tag:"mo",output:"\u232A",tex:"rangle",ttype:RIGHTBRACKET},{input:"<<",tag:"mo",output:"\u2329",tex:"langle",ttype:LEFTBRACKET},{input:">>",tag:"mo",output:"\u232A",tex:"rangle",ttype:RIGHTBRACKET},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:LEFTBRACKET,invisible:true},{input:":}",tag:"mo",output:":}",tex:null,ttype:RIGHTBRACKET,invisible:true},{input:"int",tag:"mo",output:"\u222B",tex:null,ttype:CONST},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:DEFINITION},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:DEFINITION},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:DEFINITION},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:DEFINITION},{input:"oint",tag:"mo",output:"\u222E",tex:null,ttype:CONST},{input:"del",tag:"mo",output:"\u2202",tex:"partial",ttype:CONST},{input:"grad",tag:"mo",output:"\u2207",tex:"nabla",ttype:CONST},{input:"+-",tag:"mo",output:"\u00B1",tex:"pm",ttype:CONST},{input:"O/",tag:"mo",output:"\u2205",tex:"emptyset",ttype:CONST},{input:"oo",tag:"mo",output:"\u221E",tex:"infty",ttype:CONST},{input:"aleph",tag:"mo",output:"\u2135",tex:null,ttype:CONST},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:CONST},{input:":.",tag:"mo",output:"\u2234",tex:"therefore",ttype:CONST},{input:"/_",tag:"mo",output:"\u2220",tex:"angle",ttype:CONST},{input:"\\ ",tag:"mo",output:"\u00A0",tex:null,ttype:CONST,val:true},{input:"quad",tag:"mo",output:"\u00A0\u00A0",tex:null,ttype:CONST},{input:"qquad",tag:"mo",output:"\u00A0\u00A0\u00A0\u00A0",tex:null,ttype:CONST},{input:"cdots",tag:"mo",output:"\u22EF",tex:null,ttype:CONST},{input:"vdots",tag:"mo",output:"\u22EE",tex:null,ttype:CONST},{input:"ddots",tag:"mo",output:"\u22F1",tex:null,ttype:CONST},{input:"diamond",tag:"mo",output:"\u22C4",tex:null,ttype:CONST},{input:"square",tag:"mo",output:"\u25A1",tex:"boxempty",ttype:CONST},{input:"|__",tag:"mo",output:"\u230A",tex:"lfloor",ttype:CONST},{input:"__|",tag:"mo",output:"\u230B",tex:"rfloor",ttype:CONST},{input:"|~",tag:"mo",output:"\u2308",tex:"lceil",ttype:CONST},{input:"lceiling",tag:"mo",output:"|~",tex:null,ttype:DEFINITION},{input:"~|",tag:"mo",output:"\u2309",tex:"rceil",ttype:CONST},{input:"rceiling",tag:"mo",output:"~|",tex:null,ttype:DEFINITION},{input:"CC",tag:"mo",output:"\u2102",tex:"mathbb{C}",ttype:CONST,notexcopy:true},{input:"NN",tag:"mo",output:"\u2115",tex:"mathbb{N}",ttype:CONST,notexcopy:true},{input:"QQ",tag:"mo",output:"\u211A",tex:"mathbb{Q}",ttype:CONST,notexcopy:true},{input:"RR",tag:"mo",output:"\u211D",tex:"mathbb{R}",ttype:CONST,notexcopy:true},{input:"ZZ",tag:"mo",output:"\u2124",tex:"mathbb{Z}",ttype:CONST,notexcopy:true},{input:"f",tag:"mi",output:"f",tex:null,ttype:UNARY,func:true,val:true},{input:"g",tag:"mi",output:"g",tex:null,ttype:UNARY,func:true,val:true},{input:"''",tag:"mo",output:"''",tex:null,val:true},{input:"'''",tag:"mo",output:"'''",tex:null,val:true},{input:"''''",tag:"mo",output:"''''",tex:null,val:true},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:UNDEROVER},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:UNDEROVER},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:UNARY,func:true},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:UNARY,func:true},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:UNARY,func:true},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:UNARY,func:true},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:UNARY,func:true},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:UNARY,func:true},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:UNARY,func:true},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:UNARY,func:true},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:UNARY,func:true},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:UNARY,func:true},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:UNARY,func:true},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:UNARY,func:true},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:UNARY,func:true},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:UNARY,func:true},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:UNARY,func:true},{input:"log",tag:"mo",output:"log",tex:null,ttype:UNARY,func:true},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:UNARY,func:true},{input:"abs",tag:"mo",output:"abs",tex:"text{abs}",ttype:UNARY,func:true,notexcopy:true},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:UNARY,func:true},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:UNARY,func:true},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:UNARY,func:true},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:UNARY,func:true},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:UNARY,func:true},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:UNARY,func:true},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:UNARY,func:true},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:UNARY,func:true},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:UNARY,func:true},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:UNARY,func:true},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:UNARY,func:true},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:UNARY,func:true},{input:"Log",tag:"mo",output:"log",tex:null,ttype:UNARY,func:true},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:UNARY,func:true},{input:"Abs",tag:"mo",output:"abs",tex:"text{abs}",ttype:UNARY,func:true,notexcopy:true},{input:"det",tag:"mo",output:"det",tex:null,ttype:UNARY,func:true},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:UNARY,func:true},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:CONST},{input:"mod",tag:"mo",output:"mod",tex:"text{mod}",ttype:CONST,notexcopy:true},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:UNARY,func:true},{input:"lcm",tag:"mo",output:"lcm",tex:"text{lcm}",ttype:UNARY,func:true,notexcopy:true},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:CONST},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:CONST},{input:"min",tag:"mo",output:"min",tex:null,ttype:UNDEROVER},{input:"max",tag:"mo",output:"max",tex:null,ttype:UNDEROVER},{input:"uarr",tag:"mo",output:"\u2191",tex:"uparrow",ttype:CONST},{input:"darr",tag:"mo",output:"\u2193",tex:"downarrow",ttype:CONST},{input:"rarr",tag:"mo",output:"\u2192",tex:"rightarrow",ttype:CONST},{input:"->",tag:"mo",output:"\u2192",tex:"to",ttype:CONST},{input:"|->",tag:"mo",output:"\u21A6",tex:"mapsto",ttype:CONST},{input:"larr",tag:"mo",output:"\u2190",tex:"leftarrow",ttype:CONST},{input:"harr",tag:"mo",output:"\u2194",tex:"leftrightarrow",ttype:CONST},{input:"rArr",tag:"mo",output:"\u21D2",tex:"Rightarrow",ttype:CONST},{input:"lArr",tag:"mo",output:"\u21D0",tex:"Leftarrow",ttype:CONST},{input:"hArr",tag:"mo",output:"\u21D4",tex:"Leftrightarrow",ttype:CONST},AMsqrt,AMroot,AMfrac,AMdiv,AMover,AMsub,AMsup,{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:UNARY},{input:"hat",tag:"mover",output:"\u005E",tex:null,ttype:UNARY,acc:true},{input:"bar",tag:"mover",output:"\u00AF",tex:"overline",ttype:UNARY,acc:true},{input:"vec",tag:"mover",output:"\u2192",tex:null,ttype:UNARY,acc:true},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:UNARY,acc:true},{input:"dot",tag:"mover",output:".",tex:null,ttype:UNARY,acc:true},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:UNARY,acc:true},{input:"ul",tag:"munder",output:"\u0332",tex:"underline",ttype:UNARY,acc:true},AMtext,AMmbox,AMquote,{input:"color",tag:"mstyle",ttype:BINARY},{input:"bb",tag:"mstyle",atname:"fontweight",atval:"bold",output:"bb",tex:"mathbf",ttype:UNARY,notexcopy:true},{input:"mathbf",tag:"mstyle",atname:"fontweight",atval:"bold",output:"mathbf",tex:null,ttype:UNARY},{input:"sf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"sf",tex:"mathsf",ttype:UNARY,notexcopy:true},{input:"mathsf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"mathsf",tex:null,ttype:UNARY},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:"mathbb",ttype:UNARY,codes:AMbbb,notexcopy:true},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:UNARY,codes:AMbbb},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:"mathcal",ttype:UNARY,codes:AMcal,notexcopy:true},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:UNARY,codes:AMcal},{input:"tt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"tt",tex:"mathtt",ttype:UNARY,notexcopy:true},{input:"mathtt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"mathtt",tex:null,ttype:UNARY},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:"mathfrak",ttype:UNARY,codes:AMfrk,notexcopy:true},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:UNARY,codes:AMfrk}];function compareNames(b,a){if(b.input>a.input){return 1}else{return -1}}var AMnames=[];function AMinitSymbols(){var b=[],a;for(a=0;a<AMsymbols.length;a++){if(AMsymbols[a].tex&&!(typeof AMsymbols[a].notexcopy=="boolean"&&AMsymbols[a].notexcopy)){b[b.length]={input:AMsymbols[a].tex,tag:AMsymbols[a].tag,output:AMsymbols[a].output,ttype:AMsymbols[a].ttype}}}AMsymbols=AMsymbols.concat(b);AMsymbols.sort(compareNames);for(a=0;a<AMsymbols.length;a++){AMnames[a]=AMsymbols[a].input}}function newcommand(a,b){AMsymbols=AMsymbols.concat([{input:a,tag:"mo",output:b,tex:null,ttype:DEFINITION}])}function AMremoveCharsAndBlanks(c,d){var a;if(c.charAt(d)=="\\"&&c.charAt(d+1)!="\\"&&c.charAt(d+1)!=" "){a=c.slice(d+1)}else{a=c.slice(d)}for(var b=0;b<a.length&&a.charCodeAt(b)<=32;b=b+1){}return a.slice(b)}function AMposition(b,e,f){if(f==0){var d,a;f=-1;d=b.length;while(f+1<d){a=(f+d)>>1;if(b[a]<e){f=a}else{d=a}}return d}else{for(var c=f;c<b.length&&b[c]<e;c++){}}return c}function AMgetSymbol(g){var a=0;var b=0;var d;var m;var l;var e="";var f=true;for(var c=1;c<=g.length&&f;c++){m=g.slice(0,c);b=a;a=AMposition(AMnames,m,b);if(a<AMnames.length&&g.slice(0,AMnames[a].length)==AMnames[a]){e=AMnames[a];d=a;c=e.length}f=a<AMnames.length&&g.slice(0,AMnames[a].length)>=AMnames[a]}AMpreviousSymbol=AMcurrentSymbol;if(e!=""){AMcurrentSymbol=AMsymbols[d].ttype;return AMsymbols[d]}AMcurrentSymbol=CONST;a=1;m=g.slice(0,1);var h=true;while("0"<=m&&m<="9"&&a<=g.length){m=g.slice(a,a+1);a++}if(m==decimalsign){m=g.slice(a,a+1);if("0"<=m&&m<="9"){h=false;a++;while("0"<=m&&m<="9"&&a<=g.length){m=g.slice(a,a+1);a++}}}if((h&&a>1)||a>2){m=g.slice(0,a-1);l="mn"}else{a=2;m=g.slice(0,1);l=(("A">m||m>"Z")&&("a">m||m>"z")?"mo":"mi")}if(m=="-"&&AMpreviousSymbol==INFIX){AMcurrentSymbol=INFIX;return{input:m,tag:l,output:m,ttype:UNARY,func:true,val:true}}return{input:m,tag:l,output:m,ttype:CONST,val:true}}function AMTremoveBrackets(b){var a;if(b.charAt(0)=="{"&&b.charAt(b.length-1)=="}"){a=b.charAt(1);if(a=="("||a=="["){b="{"+b.substr(2)}a=b.substr(1,6);if(a=="\\left("||a=="\\left["||a=="\\left{"){b="{"+b.substr(7)}a=b.substr(1,12);if(a=="\\left\\lbrace"||a=="\\left\\langle"){b="{"+b.substr(13)}a=b.charAt(b.length-2);if(a==")"||a=="]"||a=="."){b=b.substr(0,b.length-8)+"}"}a=b.substr(b.length-8,7);if(a=="\\rbrace"||a=="\\rangle"){b=b.substr(0,b.length-14)+"}"}}return b}var AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol;function AMTgetTeXsymbol(a){if(typeof a.val=="boolean"&&a.val){pre=""}else{pre="\\"}if(a.tex==null){return(pre+a.input)}else{return(pre+a.tex)}}function AMTgetTeXbracket(a){if(a.tex==null){return(a.input)}else{return("\\"+a.tex)}}function AMTparseSexpr(g){var c,b,j,d,h,f="";g=AMremoveCharsAndBlanks(g,0);c=AMgetSymbol(g);if(c==null||c.ttype==RIGHTBRACKET&&AMnestingDepth>0){return[null,g]}if(c.ttype==DEFINITION){g=c.output+AMremoveCharsAndBlanks(g,c.input.length);c=AMgetSymbol(g)}switch(c.ttype){case UNDEROVER:case CONST:g=AMremoveCharsAndBlanks(g,c.input.length);var e=AMTgetTeXsymbol(c);if(e.charAt(0)=="\\"||c.tag=="mo"){return[e,g]}else{return["{"+e+"}",g]}case LEFTBRACKET:AMnestingDepth++;g=AMremoveCharsAndBlanks(g,c.input.length);j=AMTparseExpr(g,true);AMnestingDepth--;if(j[0].substr(0,6)=="\\right"){if(j[0].substr(0,7)=="\\right."){j[0]=j[0].substr(7)}else{j[0]=j[0].substr(6)}if(typeof c.invisible=="boolean"&&c.invisible){b="{"+j[0]+"}"}else{b="{"+AMTgetTeXbracket(c)+j[0]+"}"}}else{if(typeof c.invisible=="boolean"&&c.invisible){b="{\\left."+j[0]+"}"}else{b="{\\left"+AMTgetTeXbracket(c)+j[0]+"}"}}return[b,j[1]];case TEXT:if(c!=AMquote){g=AMremoveCharsAndBlanks(g,c.input.length)}if(g.charAt(0)=="{"){d=g.indexOf("}")}else{if(g.charAt(0)=="("){d=g.indexOf(")")}else{if(g.charAt(0)=="["){d=g.indexOf("]")}else{if(c==AMquote){d=g.slice(1).indexOf('"')+1}else{d=0}}}}if(d==-1){d=g.length}h=g.slice(1,d);if(h.charAt(0)==" "){f="\\ "}f+="\\text{"+h+"}";if(h.charAt(h.length-1)==" "){f+="\\ "}g=AMremoveCharsAndBlanks(g,d+1);return[f,g];case UNARY:g=AMremoveCharsAndBlanks(g,c.input.length);j=AMTparseSexpr(g);if(j[0]==null){return["{"+AMTgetTeXsymbol(c)+"}",g]}if(typeof c.func=="boolean"&&c.func){h=g.charAt(0);if(h=="^"||h=="_"||h=="/"||h=="|"||h==","){return["{"+AMTgetTeXsymbol(c)+"}",g]}else{b="{"+AMTgetTeXsymbol(c)+"{"+j[0]+"}}";return[b,j[1]]}}j[0]=AMTremoveBrackets(j[0]);if(c.input=="sqrt"){return["\\sqrt{"+j[0]+"}",j[1]]}else{if(typeof c.acc=="boolean"&&c.acc){return["{"+AMTgetTeXsymbol(c)+"{"+j[0]+"}}",j[1]]}else{return["{"+AMTgetTeXsymbol(c)+"{"+j[0]+"}}",j[1]]}}case BINARY:g=AMremoveCharsAndBlanks(g,c.input.length);j=AMTparseSexpr(g);if(j[0]==null){return["{"+AMTgetTeXsymbol(c)+"}",g]}j[0]=AMTremoveBrackets(j[0]);var a=AMTparseSexpr(j[1]);if(a[0]==null){return["{"+AMTgetTeXsymbol(c)+"}",g]}a[0]=AMTremoveBrackets(a[0]);if(c.input=="color"){f="{\\color{"+j[0].replace(/[\{\}]/g,"")+"}"+a[0]+"}}"}if(c.input=="root"||c.input=="stackrel"){if(c.input=="root"){f="{\\sqrt["+j[0]+"]{"+a[0]+"}}"}else{f="{"+AMTgetTeXsymbol(c)+"{"+j[0]+"}{"+a[0]+"}}"}}if(c.input=="frac"){f="{\\frac{"+j[0]+"}{"+a[0]+"}}"}return[f,a[1]];case INFIX:g=AMremoveCharsAndBlanks(g,c.input.length);return[c.output,g];case SPACE:g=AMremoveCharsAndBlanks(g,c.input.length);return["{\\quad\\text{"+c.input+"}\\quad}",g];case LEFTRIGHT:AMnestingDepth++;g=AMremoveCharsAndBlanks(g,c.input.length);j=AMTparseExpr(g,false);AMnestingDepth--;var h="";h=j[0].charAt(j[0].length-1);if(h=="|"){b="{\\left|"+j[0]+"}";return[b,j[1]]}else{b="{\\mid}";return[b,g]}default:g=AMremoveCharsAndBlanks(g,c.input.length);return["{"+AMTgetTeXsymbol(c)+"}",g]}}function AMTparseIexpr(g){var e,h,f,d,a,c;g=AMremoveCharsAndBlanks(g,0);h=AMgetSymbol(g);a=AMTparseSexpr(g);d=a[0];g=a[1];e=AMgetSymbol(g);if(e.ttype==INFIX&&e.input!="/"){g=AMremoveCharsAndBlanks(g,e.input.length);a=AMTparseSexpr(g);if(a[0]==null){a[0]="{}"}else{a[0]=AMTremoveBrackets(a[0])}g=a[1];if(e.input=="_"){f=AMgetSymbol(g);c=(h.ttype==UNDEROVER);if(f.input=="^"){g=AMremoveCharsAndBlanks(g,f.input.length);var b=AMTparseSexpr(g);b[0]=AMTremoveBrackets(b[0]);g=b[1];d="{"+d;d+="_{"+a[0]+"}";d+="^{"+b[0]+"}";d+="}"}else{d+="_{"+a[0]+"}"}}else{d="{"+d+"}^{"+a[0]+"}"}}return[d,g]}function AMTparseExpr(h,g){var k,j,d,m,r=[],f="";var c=false;do{h=AMremoveCharsAndBlanks(h,0);d=AMTparseIexpr(h);j=d[0];h=d[1];k=AMgetSymbol(h);if(k.ttype==INFIX&&k.input=="/"){h=AMremoveCharsAndBlanks(h,k.input.length);d=AMTparseIexpr(h);if(d[0]==null){d[0]="{}"}else{d[0]=AMTremoveBrackets(d[0])}h=d[1];j=AMTremoveBrackets(j);j="\\frac{"+j+"}";j+="{"+d[0]+"}";f+=j;k=AMgetSymbol(h)}else{if(j!=undefined){f+=j}}}while((k.ttype!=RIGHTBRACKET&&(k.ttype!=LEFTRIGHT||g)||AMnestingDepth==0)&&k!=null&&k.output!="");if(k.ttype==RIGHTBRACKET||k.ttype==LEFTRIGHT){var n=f.length;if(n>2&&f.charAt(0)=="{"&&f.indexOf(",")>0){var p=f.charAt(n-2);if(p==")"||p=="]"){var a=f.charAt(6);if((a=="("&&p==")"&&k.output!="}")||(a=="["&&p=="]")){var q="\\matrix{";var b=new Array();b.push(0);var l=true;var o=0;for(m=1;m<n-1;m++){if(f.charAt(m)==a){o++}if(f.charAt(m)==p){o--;if(o==0&&f.charAt(m+2)==","&&f.charAt(m+3)=="{"){b.push(m+2)}}}b.push(n);var e=-1;if(o==0&&b.length>0){for(m=0;m<b.length-1;m++){if(m>0){q+="\\\\"}if(m==0){var s=f.substr(b[m]+7,b[m+1]-b[m]-15).split(",")}else{var s=f.substr(b[m]+8,b[m+1]-b[m]-16).split(",")}if(e>0&&s.length!=e){l=false}else{if(e==-1){e=s.length}}q+=s.join("&")}}q+="}";if(l){f=q}}}}h=AMremoveCharsAndBlanks(h,k.input.length);if(typeof k.invisible!="boolean"||!k.invisible){j="\\right"+AMTgetTeXbracket(k);f+=j;c=true}else{f+="\\right.";c=true}}if(AMnestingDepth>0&&!c){f+="\\right."}return[f,h]}function AMTparseAMtoTeX(a){AMnestingDepth=0;a=a.replace(/(&nbsp;|\u00a0|&#160;)/g,"");a=a.replace(/&gt;/g,">");a=a.replace(/&lt;/g,"<");if(a.match(/\S/)==null){return""}return AMTparseExpr(a.replace(/^\s+/g,""),false)[0]}function AMparseMath(d){d=d.replace(/(&nbsp;|\u00a0|&#160;)/g,"");d=d.replace(/&gt;/g,">");d=d.replace(/&lt;/g,"<");if(d.match(/\S/)==null){return document.createTextNode(" ")}var b=AMTparseAMtoTeX(d);if(typeof mathbg!="undefined"&&mathbg=="dark"){b="\\reverse "+b}if(mathcolor!=""){b="\\"+mathcolor+b}if(displaystyle){b="\\displaystyle"+b}else{b="\\textstyle"+b}b=b.replace("$","\\$");var c=document.createElement("img");if(typeof encodeURIComponent=="function"){b=encodeURIComponent(b)}else{b=escape(b)}c.src=AMTcgiloc+"?"+b;c.style.verticalAlign="middle";if(showasciiformulaonhover){c.setAttribute("title",d.replace(/\s+/g," "))}var a=document.createElement("span");a.appendChild(c);return a}function AMTparseMath(a){return AMparseMath(a)}function AMstrarr2docFrag(a,d){var g=document.createDocumentFragment();var f=false;for(var e=0;e<a.length;e++){if(f){g.appendChild(AMparseMath(a[e]))}else{var b=(d?a[e].split("\n\n"):[a[e]]);g.appendChild(document.createElement("span").appendChild(document.createTextNode(b[0])));for(var c=1;c<b.length;c++){g.appendChild(document.createElement("p"));g.appendChild(document.createElement("span").appendChild(document.createTextNode(b[c])))}}f=!f}return g}function AMprocessNodeR(h,d){var f,g,b,c,e;if(h.childNodes.length==0){if((h.nodeType!=8||d)&&h.parentNode.nodeName!="form"&&h.parentNode.nodeName!="FORM"&&h.parentNode.nodeName!="textarea"&&h.parentNode.nodeName!="TEXTAREA"&&h.parentNode.nodeName!="pre"&&h.parentNode.nodeName!="PRE"){g=h.nodeValue;if(!(g==null)){g=g.replace(/\r\n\r\n/g,"\n\n");if(doubleblankmathdelimiter){g=g.replace(/\x20\x20\./g," "+AMdelimiter1+".");g=g.replace(/\x20\x20,/g," "+AMdelimiter1+",");g=g.replace(/\x20\x20/g," "+AMdelimiter1+" ")}g=g.replace(/\x20+/g," ");g=g.replace(/\s*\r\n/g," ");f=false;if(AMusedelimiter2){g=g.replace(new RegExp(AMescape2,"g"),function(i){f=true;return"AMescape2"})}g=g.replace(new RegExp(AMescape1,"g"),function(i){f=true;return"AMescape1"});if(AMusedelimiter2){g=g.replace(new RegExp(AMdelimiter2regexp,"g"),AMdelimiter1)}b=g.split(AMdelimiter1);for(e=0;e<b.length;e++){if(AMusedelimiter2){b[e]=b[e].replace(/AMescape2/g,AMdelimiter2).replace(/AMescape1/g,AMdelimiter1)}else{b[e]=b[e].replace(/AMescape1/g,AMdelimiter1)}}if(b.length>1||f){c=AMstrarr2docFrag(b,h.nodeType==8);var a=c.childNodes.length;h.parentNode.replaceChild(c,h);return a-1}}}else{return 0}}else{if(h.nodeName!="math"){for(e=0;e<h.childNodes.length;e++){e+=AMprocessNodeR(h.childNodes[e],d)}}}return 0}function AMprocessNode(g,b,e){var f,a;if(e!=null){f=document.getElementsByTagName("span");for(var c=0;c<f.length;c++){if(f[c].className=="AM"){AMprocessNodeR(f[c],b)}}}else{try{a=g.innerHTML}catch(d){}if(a==null||a.indexOf(AMdelimiter1)!=-1){AMprocessNodeR(g,b)}}}var AMbody;var AMtranslated=false;var AMnoMathML=true;AMinitSymbols();