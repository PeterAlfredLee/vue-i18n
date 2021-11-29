(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{464:function(a,t,s){"use strict";s.r(t);var n=s(44),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"fallback-localization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-localization"}},[a._v("#")]),a._v(" Fallback localization")]),a._v(" "),s("p",[s("em",[a._v("Summary: Use "),s("code",[a._v("fallbackLocale: '<lang>'")]),a._v(" to choose which language to use when your preferred language lacks a translation.")])]),a._v(" "),s("h2",{attrs:{id:"implicit-fallback-using-locales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implicit-fallback-using-locales"}},[a._v("#")]),a._v(" Implicit fallback using locales")]),a._v(" "),s("p",[a._v("If a "),s("code",[a._v("locale")]),a._v(" is given containing a territory and an optional dialect, the implicit fallback is activated automatically.")]),a._v(" "),s("p",[a._v("For example "),s("code",[a._v("de-DE-bavarian")]),a._v(" would fallback")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("de-DE-bavarian")])]),a._v(" "),s("li",[s("code",[a._v("de-DE")])]),a._v(" "),s("li",[s("code",[a._v("de")])])]),a._v(" "),s("p",[a._v("To suppress the automatic fallback, add the postfix exclamation mark "),s("code",[a._v("!")]),a._v(", for example "),s("code",[a._v("de-DE!")])]),a._v(" "),s("h2",{attrs:{id:"explicit-fallback-with-one-locale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explicit-fallback-with-one-locale"}},[a._v("#")]),a._v(" Explicit fallback with one locale")]),a._v(" "),s("p",[a._v("Sometimes some items will not be translated into some languages. In this example, the item "),s("code",[a._v("hello")]),a._v(" is available in English but not Japanese:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  en"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    hello"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello, world!'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  ja"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Localization without translation to `hello`")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("If you want to use (say) "),s("code",[a._v("en")]),a._v(" items when an item is not available in your desired locale, set the "),s("code",[a._v("fallbackLocale")]),a._v(" option in the VueI18n constructor:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" i18n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("VueI18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  locale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ja'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fallbackLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  messages\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Template:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('hello') }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, world!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("By default, falling back to "),s("code",[a._v("fallbackLocale")]),a._v(" generates two console warnings:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[vue-i18n] Value of key 'hello' is not a string!\n[vue-i18n] Fall back to translate the keypath 'hello' with 'en' locale.\n")])])]),s("p",[a._v("To suppress these warnings (while keeping those which warn of the total absence of translation for the given key) set "),s("code",[a._v("silentFallbackWarn: true")]),a._v(" when initializing the "),s("code",[a._v("VueI18n")]),a._v(" instance.")]),a._v(" "),s("h2",{attrs:{id:"explicit-fallback-with-an-array-of-locales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explicit-fallback-with-an-array-of-locales"}},[a._v("#")]),a._v(" Explicit fallback with an array of locales")]),a._v(" "),s("p",[a._v("It is possible to set more than one fallback locale by using an array of locales. For example")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("fallbackLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h2",{attrs:{id:"explicit-fallback-with-decision-maps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explicit-fallback-with-decision-maps"}},[a._v("#")]),a._v(" Explicit fallback with decision maps")]),a._v(" "),s("p",[a._v("If more complex decision maps for fallback locales are required, it is possible to define decision maps with according fallback locales.\nUsing the following decision map")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("fallbackLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 1 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'de-CH'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'it'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 2 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh-Hant'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh-Hans'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 3 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-CL'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-AR'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 4 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en-GB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 5 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pt'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-AR'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 6 */")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'default'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'da'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("will result in the following fallback chains")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("locale")]),a._v(" "),s("th",[a._v("fallback chains")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("'de-CH'")])]),a._v(" "),s("td",[a._v("de-CH > fr > it > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'de'")])]),a._v(" "),s("td",[a._v("de > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'zh-Hant'")])]),a._v(" "),s("td",[a._v("zh-Hant > zh-Hans > zh > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'es-SP'")])]),a._v(" "),s("td",[a._v("es-SP > es > en-GB > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'es-SP!'")])]),a._v(" "),s("td",[a._v("es-SP > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'fr'")])]),a._v(" "),s("td",[a._v("fr > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'pt-BR'")])]),a._v(" "),s("td",[a._v("pt-BR > pt > es-AR > es > en-GB > en > da")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("'es-CL'")])]),a._v(" "),s("td",[a._v("es-CL > es-AR > es > en-GB > en > da")])])])]),a._v(" "),s("h2",{attrs:{id:"fallback-interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-interpolation"}},[a._v("#")]),a._v(" Fallback interpolation")]),a._v(" "),s("p",[s("em",[a._v("Summary: Set "),s("code",[a._v("formatFallbackMessages: true")]),a._v(" to do template interpolation on translation keys when your language lacks a translation for a key.")])]),a._v(" "),s("p",[a._v("Since the keys to the translations are strings, you can use a user-readable message (for a particular language) as a key.\nE.g.")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ja"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello, world!'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'こんにちは、世界!'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v('This is useful because you don\'t have to specify a translation for the string "Hello, world!" into English.')]),a._v(" "),s("p",[a._v("In fact, you can even include template parameters in a key. Together with "),s("code",[a._v("formatFallbackMessages: true")]),a._v(', this lets you skip writing templates for your "base" language; the keys '),s("em",[a._v("are")]),a._v(" your templates.")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ru"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello {name}'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Здравствуйте {name}'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" i18n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("VueI18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  locale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ru'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fallbackLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  formatFallbackMessages"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  messages\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("When the template is as below:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('Hello {name}', { name: 'John' }}) }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('The weather today is {condition}!', { condition: 'sunny' }) }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("The following will be output:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Здравствуйте, John"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("The weather today is sunny!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);