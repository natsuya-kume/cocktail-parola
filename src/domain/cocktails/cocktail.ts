import {
  CocktailBaseType,
  CocktailsType,
  CocktailType,
  COCKTAIL_BASE_TYPE,
  HowToMakeType,
} from 'src/domain/cocktails/types/cocktail'

const HOW_TO_MAKE_BUILD_MESSAGE =
  'ビルドとはグラスにそのまま注いでカクテルを作ることです。一般的にお酒＋多量のジュースで割るロングカクテルに使われます。お酒の強さをダイレクトに感じるのでショートカクテルにはほぼ使われないです。'
const HOW_TO_MAKE_SHAKE_MESSAGE =
  'シェーカーに材料を入れ、氷を入れて蓋をして、しっかり振ることで材料をよく混ぜ、よく冷やします。シェーカーの中に入っている空気によって素材の角が取れて強いお酒などは飲みやすくなる効果があります。'
const HOW_TO_MAKE_STEER =
  'ステアとはバースプーンやマドラーなどでかき混ぜることを言います。素材となるお酒と氷を専用のミキシンググラスに入れ、バー・スプーンで手早くかき混ぜる技法で、この技法を使うカクテルは、混ぜ合わせるお酒の比重があまり違わないときや、カクテルの色を濁らせたくないとき、ドライに仕上げたい場合などに主に用いられ、代表的なカクテルでいうと、ショートグラスを使うマティーニなどが、このステアという技法を使って作られます。ステアを使ったカクテル作りの一番のポイントは、お酒やジュースなどの素材だけでなく、グラスもしっかりと冷やしておくことです。また、ミキシンググラスに入れたお酒と氷は、氷溶けてみずっぽくならないように、手早く混ぜることも大事なポイントです。'
const COCKTAIL_TYPE_SHORT_MESSAGE =
  '小さなカクテルグラスに氷を入れずに作るカクテルです。氷が入っていないのが特徴で、冷たく飲める時間が短いことから、正式名称は「ショートドリンク」と言います。氷が入っていないので、どんどんぬるくなってしまい、美味しさが半減していってしまうので、ショートカクテルは提供されてから15分ほど飲みきるのがマナーと言われています。また、手の体温でぬるくならないように、足のついたグラスに入っています。ウォッカやテキーラをベースにしている物が多く、アルコール度数が高いのも大きな特徴のひとつです。'
const COCKTAIL_TYPE_LONG_MESSAGE =
  'タンブラーなどの大きめなグラスで時間をかけて飲むタイプのカクテルです。ロングカクテルは、大きいグラスに氷が入っていて、氷が冷たさをキープしてくれるので、美味しく飲める時間が長い事から名付けられました。氷が入っているのが大きな特徴でジンやカシスリキュールなどのお酒をソーダやジュースで割るレシピが多く、アルコール度数があまり高くない物が多いのも特徴の1つです。'

const getCocktailShortDescription = (value: HowToMakeType | CocktailType) => {
  switch (value) {
    case 'ビルド':
      return HOW_TO_MAKE_BUILD_MESSAGE
    case 'シェイク':
      return HOW_TO_MAKE_SHAKE_MESSAGE
    case 'ショート':
      return COCKTAIL_TYPE_SHORT_MESSAGE
    case 'ステア':
      return HOW_TO_MAKE_STEER
    case 'ロング':
      return COCKTAIL_TYPE_LONG_MESSAGE
    default:
      return undefined
  }
}

const getCocktailBaseName = (value: CocktailBaseType) => {
  switch (value) {
    case COCKTAIL_BASE_TYPE.GIN:
      return 'ジンベース'
    case COCKTAIL_BASE_TYPE.LIQUEUR:
      return 'リキュールベース'
    case COCKTAIL_BASE_TYPE.BEER:
      return 'ビールベース'
    case COCKTAIL_BASE_TYPE.TEQUILA:
      return 'テキーラベース'
    case COCKTAIL_BASE_TYPE.BRANDY:
      return 'ブランデーベース'
    case COCKTAIL_BASE_TYPE.VODKA:
      return 'ウォッカベース'
    case COCKTAIL_BASE_TYPE.RUM:
      return 'ラムベース'
    case COCKTAIL_BASE_TYPE.WHISKY:
      return 'ウイスキーベース'
    case COCKTAIL_BASE_TYPE.WINE:
      return 'ワインベース'
    default:
      return 'その他'
  }
}

const getCocktailBaseList = (cocktails: CocktailsType[]) => {
  const cocktailBaseList: { cocktails: CocktailsType[]; base: string }[] = []
  cocktails.forEach(function (cocktail) {
    const key1 = cocktail['base']
    if (cocktailBaseList[key1] === undefined) {
      cocktailBaseList[key1] = { cocktails: [], base: getCocktailBaseName(key1) }
    }
    if (getCocktailBaseName(cocktail.base) === cocktailBaseList[key1].base) {
      cocktailBaseList[key1].cocktails.push(cocktail)
    }
  })

  return cocktailBaseList
}

export const Cocktail = {
  getCocktailShortDescription,
  getCocktailBaseList,
} as const
