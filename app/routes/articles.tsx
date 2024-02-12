import { Outlet } from "@remix-run/react";

export default function Articles() {
  return (
    <>
      <h2>記事一覧ページ</h2>
      <Outlet />
    </>
  )
}
