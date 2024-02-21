import { json, useParams } from "@remix-run/react";
import { LoaderFunctionArgs } from "react-router-dom";

import invariant from "tiny-invariant";

export async function loader({params}: LoaderFunctionArgs) {
  invariant(params.id, "Missing contactId param");
  const books = [
    {
      id: 1,
      title: 'ノルウェイの森',
      author: '村上春樹',
      description: '「ノルウェイの森」は、村上春樹によって書かれた小説であり、1987年の日本での出版以来、世界中で高い評価を受けています。物語は、青春期の友情、愛、喪失、そして成長に焦点を当てています。主人公のトオルは、友人の死と彼が愛する2人の女性、ノウコとマツモトレイコとの関係に取り組みながら、自らの人生の意味を模索します。彼らの間の微妙な心理的な繋がりと、彼らが直面する社会的な変化が描かれています。小説は、孤独、絶望、そして希望についての深い洞察を提供しつつ、美しい文体で読者を引き込みます。'
    },
    {
      id: 2,
      title: '永遠のゼロ',
      author: '百田尚樹',
      description: '「永遠のゼロ」は、日本の戦闘機パイロットである加納覚と、彼の祖父である加納九十九の物語です。加納覚が特攻隊員として戦い、その背景にある家族の物語が描かれます。'
    },
    {
      id: 3,
      title: 'ガリレオ',
      author: '東野圭吾',
      description: '『ガリレオ』は、物理学者と数学者が協力して科学的な謎を解決する推理小説シリーズです。湯川孝太郎と石神秀幸が主人公で、彼らの知識と推理力を駆使して様々な事件を解決していきます。科学的な謎解きと心理描写が特徴です。'
    }
  ]

  return json({ books})
}

export default function BookDetailPage() {
  const params = useParams()
  console.log(params)
  return(
    <h2>Book {params.bookId}</h2>
  )
}