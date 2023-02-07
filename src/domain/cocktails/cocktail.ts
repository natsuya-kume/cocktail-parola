import { CocktaiType, HowToMakeType } from './types/cocktail'

const HOW_TO_MAKE_BUILD_MESSAGE =
  'ビルドとはグラスにそのまま注いでカクテルを作ることです。一般的にお酒＋多量のジュースで割るロングカクテルに使われます。お酒の強さをダイレクトに感じるのでショートカクテルにはほぼ使われないです。'
const HOW_TO_MAKE_SHAKE_MESSAGE =
  'シェーカーに材料を入れ、氷を入れて蓋をして、しっかり振ることで材料をよく混ぜ、よく冷やします。シェーカーの中に入っている空気によって素材の角が取れて強いお酒などは飲みやすくなる効果があります。'
const COCKTAIL_TYPE_SHORT_MESSAGE =
  '小さなカクテルグラスに氷を入れずに作るカクテルです。氷が入っていないのが特徴で、冷たく飲める時間が短いことから、正式名称は「ショートドリンク」と言います。氷が入っていないので、どんどんぬるくなってしまい、美味しさが半減していってしまうので、ショートカクテルは提供されてから15分ほど飲みきるのがマナーと言われています。また、手の体温でぬるくならないように、足のついたグラスに入っています。ウォッカやテキーラをベースにしている物が多く、アルコール度数が高いのも大きな特徴のひとつです。'
const COCKTAIL_TYPE_LONG_MESSAGE =
  'タンブラーなどの大きめなグラスで時間をかけて飲むタイプのカクテルです。ロングカクテルは、大きいグラスに氷が入っていて、氷が冷たさをキープしてくれるので、美味しく飲める時間が長い事から名付けられました。氷が入っているのが大きな特徴でジンやカシスリキュールなどのお酒をソーダやジュースで割るレシピが多く、アルコール度数があまり高くない物が多いのも特徴の1つです。'

const getCocktailShortDescription = (value: HowToMakeType | CocktaiType) => {
  switch (value) {
    case 'ビルド':
      return HOW_TO_MAKE_BUILD_MESSAGE
    case 'シェイク':
      return HOW_TO_MAKE_SHAKE_MESSAGE
    case 'ショート':
      return COCKTAIL_TYPE_SHORT_MESSAGE
    case 'ロング':
      return COCKTAIL_TYPE_LONG_MESSAGE
    default:
      return undefined
  }
}
export const Cocktail = {
  getCocktailShortDescription,
} as const
