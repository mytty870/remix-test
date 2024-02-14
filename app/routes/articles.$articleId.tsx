import { useParams } from "@remix-run/react"

export default function ArticleDetailPage() {

  const params = useParams()
  console.log(params)

  return (
    <h3>{params.articleId}記事の詳細ページ</h3>
  )
}