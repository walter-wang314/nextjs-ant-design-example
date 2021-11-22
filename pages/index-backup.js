import Link from "next/link";

export default () => {
  return (
    <>
      <Link href="/with-antd">
        <a> Go to page with antd </a>
      </Link>
      <br />
      <Link href="/without-antd">
        <a> Go to page without antd </a>
      </Link>
    </>
  );
};
